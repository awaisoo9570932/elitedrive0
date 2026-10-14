@echo off
title ELITE DRIVE - Dev Server
where node >nul 2>nul
if %errorlevel% neq 0 (
  echo Node.js is not installed. Download it from https://nodejs.org (LTS) and run this file again.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installing dependencies...
  call npm install
)
echo Starting ELITE DRIVE at http://localhost:8080
call npm run dev
pause
