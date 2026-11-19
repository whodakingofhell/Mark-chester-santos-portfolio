@echo off
echo =====================================================================
echo  Mark Chester Santos Portfolio - Safe 1-Click GitHub ^& Vercel Update
echo =====================================================================
echo.
cd /d "%~dp0"

echo [1/3] Staging updated files...
git add index.html styles.css app.js api/ vercel.json .agents/ README.md sitemap.xml robots.txt

echo [2/3] Creating commit...
git commit -m "feat(portfolio): Antigravity rework with Jobs Near You ATS studio, Mae AI assistant, and no-ai-slop skills"

echo [3/3] Pushing to GitHub (Vercel will auto-deploy from main)...
git push origin main

echo.
echo =====================================================================
echo  SUCCESS! Your updates have been pushed to GitHub and Vercel!
echo =====================================================================
pause
