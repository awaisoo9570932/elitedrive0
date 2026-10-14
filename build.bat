@echo off
title ELITE DRIVE - Build
where node >nul 2>nul
if %errorlevel% neq 0 (
  echo Node.js is not installed. Download it from https://nodejs.org (LTS).
  pause
  exit /b 1
)
if not exist node_modules call npm install
call npm run build
echo Build finished. Output is in the dist folder.
pause
