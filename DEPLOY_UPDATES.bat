@echo off
echo =====================================================================
echo  Mark Chester Santos Portfolio - Safe 1-Click GitHub ^& Vercel Update
echo =====================================================================
echo.
cd /d "%~dp0"

echo [1/3] Staging updated files...
git add index.html styles.css app.js README.md VIDEO_INTRO_SCRIPT.md REMOTE_JOB_PLAYBOOK_AGENT_REACH.md Mark_Chester_Portfolio.code-workspace sitemap.xml robots.txt

echo [2/3] Creating commit...
git commit -m "feat(portfolio): remove AI slop and sensitive info, add video intro pitch, role lens switcher, and Agent-Reach workflows"

echo [3/3] Pushing to GitHub (Vercel will auto-deploy from main)...
git push origin main

echo.
echo =====================================================================
echo  SUCCESS! Your updates have been pushed to GitHub and Vercel!
echo =====================================================================
pause
