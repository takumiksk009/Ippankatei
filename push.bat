@echo off
setlocal enabledelayedexpansion
REM push_generalhouse_overwrite.bat
REM Run INSIDE "一般家庭版計算アプリ" folder. ASCII/CRLF only.

echo ===== PUSH START (一般家庭版) =====

git --version >nul 2>&1 || (
  echo [ERROR] Git not found in PATH
  goto END
)

REM 1) mark safe directory
git config --global --add safe.directory "%CD%" >nul 2>&1

REM 2) init & branch
git init
git checkout -B main

REM 3) remote設定（必要に応じて修正）
git remote remove origin 2>nul
git remote add origin https://github.com/takumiksk009/calculation01.git
git remote -v

REM 4) add & commit
git add -A
git commit -m "overwrite: push general household version" || echo (No changes to commit)

REM 5) fetch & force push
git fetch origin --prune
git push -u --force origin main
set "RC=%ERRORLEVEL%"

echo.
if "%RC%"=="0" (
  echo [OK] Push completed.
) else (
  echo [WARN] Push failed. ErrorLevel=%RC%
)

:END
echo.
echo ===== END =====
pause
