// ============================================================================
// Pure-JS Vector ATS PDF 1.4 Generator (Zero window.print(), Zero 13-Page Bug)
// Produces clean, selectable-text, ATS-parseable US Letter PDFs (1-2 pages).
// ============================================================================

(function (globalScope) {
  "use strict";

  const PAGE_W = 612; // 8.5 in * 72 pt
  const PAGE_H = 792; // 11 in * 72 pt
  const MARGIN_X = 46;
  const MARGIN_TOP = 46;
  const MARGIN_BOTTOM = 46;
  const CONTENT_W = PAGE_W - MARGIN_X * 2;

  function toWinAnsi(str) {
    return String(str ?? "")
      .replace(/\r\n/g, "\n")
      .replace(/[\u2014\u2013]/g, "-")
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
      .replace(/\u2022/g, "-")
      .replace(/\u2026/g, "...")
      .replace(/\u20B1/g, "PHP ")
      .replace(/\u2192/g, "->")
      .replace(/\u2713/g, "*")
      .replace(/[^\x20-\x7E\n]/g, " ");
  }

  function escapePdfText(str) {
    return toWinAnsi(str)
      .replace(/\\/g, "\\\\")
      .replace(/\(/g, "\\(")
      .replace(/\)/g, "\\)");
  }

  // Approximate Helvetica proportional width factor per character
  function estimateTextWidth(text, fontSize, isBold) {
    const clean = toWinAnsi(text);
    let units = 0;
    for (let i = 0; i < clean.length; i++) {
      const ch = clean[i];
      if ("ilI1!|.,;:'` ".includes(ch)) units += 0.29;
      else if ("fjt()[]/\\-".includes(ch)) units += 0.36;
      else if ("MWm@%&".includes(ch)) units += 0.84;
      else if (ch >= "A" && ch <= "Z") units += 0.67;
      else units += 0.53;
    }
    return units * fontSize * (isBold ? 1.05 : 1.0);
  }

  function wrapLines(text, maxWidth, fontSize, isBold) {
    const paragraphs = toWinAnsi(text).split("\n");
    const result = [];
    for (const para of paragraphs) {
      const trimmed = para.trim();
      if (!trimmed) {
        result.push("");
        continue;
      }
      const words = trimmed.split(/\s+/);
      let line = "";
      for (const word of words) {
        const candidate = line ? `${line} ${word}` : word;
        if (estimateTextWidth(candidate, fontSize, isBold) <= maxWidth) {
          line = candidate;
        } else {
          if (line) result.push(line);
          line = word;
        }
      }
      if (line) result.push(line);
    }
    return result;
  }

  function createPdfDoc() {
    const pages = [[]];
    let y = PAGE_H - MARGIN_TOP;

    function currentOps() {
      return pages[pages.length - 1];
    }

    function newPage() {
      pages.push([]);
      y = PAGE_H - MARGIN_TOP;
    }

    function ensureSpace(heightNeeded) {
      if (y - heightNeeded < MARGIN_BOTTOM) {
        newPage();
      }
    }

    function drawText(text, x, yPos, fontKey, size, rgb = [0.07, 0.07, 0.08]) {
      const safe = escapePdfText(text);
      currentOps().push(
        `BT /${fontKey} ${size} Tf ${rgb[0].toFixed(3)} ${rgb[1].toFixed(3)} ${rgb[2].toFixed(3)} rg 1 0 0 1 ${x.toFixed(2)} ${yPos.toFixed(2)} Tm (${safe}) Tj ET`
      );
    }

    function drawCentered(text, fontKey, size, rgb, gapAfter = 4) {
      const isBold = fontKey === "F2";
      const lines = wrapLines(text, CONTENT_W, size, isBold);
      const lh = size * 1.32;
      ensureSpace(lines.length * lh + gapAfter);
      for (const line of lines) {
        const w = estimateTextWidth(line, size, isBold);
        const x = Math.max(MARGIN_X, (PAGE_W - w) / 2);
        drawText(line, x, y - size, fontKey, size, rgb);
        y -= lh;
      }
      y -= gapAfter;
    }

    function drawRule(rgb = [0.80, 0.82, 0.86], thickness = 0.75, gapBefore = 3, gapAfter = 8) {
      y -= gapBefore;
      ensureSpace(gapAfter + 4);
      currentOps().push(
        `${rgb[0].toFixed(3)} ${rgb[1].toFixed(3)} ${rgb[2].toFixed(3)} RG ${thickness} w ${MARGIN_X} ${y.toFixed(2)} m ${PAGE_W - MARGIN_X} ${y.toFixed(2)} l S`
      );
      y -= gapAfter;
    }

    function drawSectionHeader(title) {
      ensureSpace(34);
      y -= 5;
      drawText(title.toUpperCase(), MARGIN_X, y - 9.5, "F2", 9.5, [0.07, 0.07, 0.08]);
      y -= 13;
      drawRule([0.78, 0.80, 0.85], 0.7, 0, 7);
    }

    function drawParagraph(text, size = 9.4, rgb = [0.16, 0.18, 0.21], gapAfter = 5) {
      const lines = wrapLines(text, CONTENT_W, size, false);
      const lh = size * 1.38;
      for (const line of lines) {
        if (!line) {
          y -= lh * 0.55;
          continue;
        }
        ensureSpace(lh + 2);
        drawText(line, MARGIN_X, y - size, "F1", size, rgb);
        y -= lh;
      }
      y -= gapAfter;
    }

    function drawSkillRow(label, value) {
      const full = `${label}: ${value}`;
      const size = 9.1;
      const lh = size * 1.35;
      const labelW = estimateTextWidth(`${label}: `, size, true);
      const firstMax = Math.max(120, CONTENT_W - labelW);
      const valWords = toWinAnsi(value).split(/\s+/).filter(Boolean);
      let firstLine = "";
      let idx = 0;
      while (idx < valWords.length) {
        const cand = firstLine ? `${firstLine} ${valWords[idx]}` : valWords[idx];
        if (estimateTextWidth(cand, size, false) <= firstMax || !firstLine) {
          firstLine = cand;
          idx++;
        } else {
          break;
        }
      }
      const restText = valWords.slice(idx).join(" ");
      const restLines = restText ? wrapLines(restText, CONTENT_W - 10, size, false) : [];
      ensureSpace((1 + restLines.length) * lh + 2);

      drawText(`${label}:`, MARGIN_X, y - size, "F2", size, [0.07, 0.07, 0.08]);
      drawText(firstLine, MARGIN_X + labelW, y - size, "F1", size, [0.18, 0.20, 0.24]);
      y -= lh;

      for (const rl of restLines) {
        ensureSpace(lh + 2);
        drawText(rl, MARGIN_X + 10, y - size, "F1", size, [0.18, 0.20, 0.24]);
        y -= lh;
      }
      y -= 2;
      void full;
    }

    function drawItemHeader(leftText, rightText) {
      const size = 9.8;
      const lh = size * 1.35;
      ensureSpace(lh + 14);
      drawText(leftText, MARGIN_X, y - size, "F2", size, [0.07, 0.07, 0.08]);
      if (rightText) {
        const rw = estimateTextWidth(rightText, 8.6, false);
        const rx = Math.max(MARGIN_X + 200, PAGE_W - MARGIN_X - rw);
        drawText(rightText, rx, y - size, "F1", 8.6, [0.36, 0.39, 0.44]);
      }
      y -= lh;
    }

    function drawBullet(text) {
      const size = 9.1;
      const lh = size * 1.36;
      const indent = 12;
      const lines = wrapLines(text, CONTENT_W - indent, size, false);
      ensureSpace(lines.length * lh + 2);
      lines.forEach((line, i) => {
        if (i === 0) {
          drawText("-", MARGIN_X + 3, y - size, "F2", size, [0.12, 0.14, 0.18]);
        }
        drawText(line, MARGIN_X + indent, y - size, "F1", size, [0.18, 0.20, 0.24]);
        y -= lh;
      });
      y -= 1.5;
    }

    function drawGap(pts) {
      y -= pts;
    }

    function toUint8Array() {
      const objects = [];
      const addObj = (body) => {
        objects.push(body);
        return objects.length;
      };

      const fontRegularId = addObj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>");
      const fontBoldId = addObj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>");
      const pagesIdPlaceholder = addObj(""); // replaced after page objects created

      const pageIds = [];
      for (const ops of pages) {
        const stream = ops.join("\n");
        const contentId = addObj(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
        const pageId = addObj(
          `<< /Type /Page /Parent ${pagesIdPlaceholder} 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] ` +
          `/Resources << /Font << /F1 ${fontRegularId} 0 R /F2 ${fontBoldId} 0 R >> >> /Contents ${contentId} 0 R >>`
        );
        pageIds.push(pageId);
      }

      objects[pagesIdPlaceholder - 1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;
      const catalogId = addObj(`<< /Type /Catalog /Pages ${pagesIdPlaceholder} 0 R >>`);

      let pdf = "%PDF-1.4\n";
      const offsets = [0];
      for (let i = 0; i < objects.length; i++) {
        offsets.push(pdf.length);
        pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
      }
      const xrefStart = pdf.length;
      pdf += `xref\n0 ${objects.length + 1}\n`;
      pdf += "0000000000 65535 f \n";
      for (let i = 1; i < offsets.length; i++) {
        pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
      }
      pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

      const bytes = new Uint8Array(pdf.length);
      for (let i = 0; i < pdf.length; i++) {
        bytes[i] = pdf.charCodeAt(i) & 0xff;
      }
      return { bytes, pageCount: pages.length };
    }

    return {
      newPage,
      drawCentered,
      drawRule,
      drawSectionHeader,
      drawParagraph,
      drawSkillRow,
      drawItemHeader,
      drawBullet,
      drawGap,
      toUint8Array
    };
  }

  function renderResumeIntoDoc(doc, model) {
    doc.drawCentered(model.fullName, "F2", 16.5, [0.06, 0.07, 0.09], 2);
    doc.drawCentered(model.contactLine, "F1", 8.8, [0.32, 0.35, 0.40], 2);
    doc.drawCentered(model.targetLine, "F2", 10.2, [0.10, 0.36, 0.78], 2);
    doc.drawRule([0.75, 0.78, 0.84], 0.85, 2, 6);

    doc.drawSectionHeader("Professional Summary");
    doc.drawParagraph(model.summary, 9.3, [0.15, 0.17, 0.21], 4);

    doc.drawSectionHeader("Core Skills & Tools");
    for (const [label, value] of model.skills) {
      doc.drawSkillRow(label, value);
    }

    const renderExperience = () => {
      doc.drawSectionHeader("Professional Experience");
      for (const exp of model.experience) {
        doc.drawItemHeader(`${exp.role} - ${exp.company}`, exp.dates);
        for (const b of exp.bullets) doc.drawBullet(b);
        doc.drawGap(3);
      }
    };

    const renderProjects = () => {
      doc.drawSectionHeader(model.projectsHeading || "Key Projects");
      for (const proj of model.projects) {
        doc.drawItemHeader(proj.name, proj.meta);
        for (const b of proj.bullets) doc.drawBullet(b);
        doc.drawGap(3);
      }
    };

    if (model.experienceFirst) {
      renderExperience();
      renderProjects();
    } else {
      renderProjects();
      renderExperience();
    }

    doc.drawSectionHeader("Education & Certifications");
    doc.drawItemHeader(`${model.education.degree} - ${model.education.school}`, model.education.dates);
    for (const cert of model.certifications) {
      doc.drawBullet(cert);
    }
  }

  function renderCoverLetterIntoDoc(doc, model, coverText) {
    doc.drawCentered(model.fullName, "F2", 15.5, [0.06, 0.07, 0.09], 2);
    doc.drawCentered(model.contactLine, "F1", 8.8, [0.32, 0.35, 0.40], 2);
    doc.drawCentered(`Cover Letter - ${model.jobTitle} (${model.company})`, "F2", 10.0, [0.10, 0.36, 0.78], 3);
    doc.drawRule([0.75, 0.78, 0.84], 0.85, 2, 12);

    const paragraphs = toWinAnsi(coverText).split(/\n\s*\n/);
    for (const para of paragraphs) {
      const clean = para.trim();
      if (!clean) continue;
      if (clean.includes("\n")) {
        const lines = clean.split("\n");
        for (const l of lines) {
          const lt = l.trim();
          if (!lt) continue;
          if (lt.startsWith("-") || lt.startsWith("*")) {
            doc.drawBullet(lt.replace(/^[-*]\s*/, ""));
          } else {
            doc.drawParagraph(lt, 10.0, [0.14, 0.16, 0.20], 2);
          }
        }
        doc.drawGap(5);
      } else {
        doc.drawParagraph(clean, 10.0, [0.14, 0.16, 0.20], 8);
      }
    }
  }

  function buildResumePdf(model) {
    const doc = createPdfDoc();
    renderResumeIntoDoc(doc, model);
    return doc.toUint8Array();
  }

  function buildCoverLetterPdf(model, coverText) {
    const doc = createPdfDoc();
    renderCoverLetterIntoDoc(doc, model, coverText);
    return doc.toUint8Array();
  }

  function buildFullApplicationKitPdf(model, coverText) {
    const doc = createPdfDoc();
    renderResumeIntoDoc(doc, model);
    doc.newPage();
    renderCoverLetterIntoDoc(doc, model, coverText);
    return doc.toUint8Array();
  }

  const api = { buildResumePdf, buildCoverLetterPdf, buildFullApplicationKitPdf };
  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    globalScope.AtsPdfExporter = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
