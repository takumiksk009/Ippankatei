@echo off
setlocal enabledelayedexpansion
REM push_to_ippankatei_overwrite_stayopen.bat (ASCII/CRLF)
REM Run INSIDE the target folder. Push to takumiksk009/ippankatei (overwrite).
REM Window stays open for logs.

echo ===== PUSH ippankatei (overwrite) =====
echo Folder: %CD%
echo Time  : %DATE% %TIME%
echo.

git --version >nul 2>&1 || (echo [ERROR] Git not found in PATH & goto END)

REM Mark directory safe (ownership mismatch workaround)
git config --global --add safe.directory "%CD%" >nul 2>&1

REM Init & main
git init
git checkout -B main

REM Remote -> takumiksk009/ippankatei
git remote remove origin 2>nul
git remote add origin https://github.com/takumiksk009/ippankatei.git
git remote -v

REM Stage & commit
git add -A
git commit -m "overwrite: ippankatei push" || echo (No changes to commit)

REM Refresh & force push
git fetch origin --prune
git push -u --force origin main
set "RC=%ERRORLEVEL%"

echo.
if "%RC%"=="0" (
  echo [OK] Push completed: takumiksk009/ippankatei (main)
) else (
  echo [WARN] Push failed. ErrorLevel=%RC%
  echo   - Ensure you are logged in as takumiksk009
  echo   - If no login window appeared: git config --global credential.helper manager
)

:END
echo.
echo ===== END ===== (this window stays open)
echo Press any key to close...
pause >nul
