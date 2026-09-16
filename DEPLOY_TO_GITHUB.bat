@echo off
echo ===================================================
echo  Mark Chester Santos Portfolio - GitHub / Vercel Deploy
echo ===================================================
echo.
set /p REPO_NAME="Enter your new GitHub repo name (e.g. mark-chester-santos-portfolio): "
if "%REPO_NAME%"=="" (
    echo Repo name cannot be empty.
    pause
    exit /b
)

echo Adding remote origin for https://github.com/whodakingofhell/%REPO_NAME%.git ...
git remote remove origin 2>nul
git remote add origin https://github.com/whodakingofhell/%REPO_NAME%.git
git branch -M main
echo Pushing to GitHub...
git push -u origin main

echo.
echo ===================================================
echo Code pushed to GitHub!
echo Now go to: https://vercel.com/new
echo Click "Import" on %REPO_NAME% and click "Deploy".
echo ===================================================
pause
