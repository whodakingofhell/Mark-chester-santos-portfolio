@echo off
echo =====================================================================
echo  Mark Chester Santos Portfolio — 1-Click Direct Vercel Deploy
echo =====================================================================
echo.
cd /d "%~dp0"

echo [1/2] Connecting to Vercel...
echo If this is your first time, a browser window will open asking you to
echo click "Authorize" or log in with GitHub/Email.
echo.

call npx --yes vercel --prod

echo.
echo =====================================================================
echo Deployment process complete! Check the URL printed above.
echo =====================================================================
pause
