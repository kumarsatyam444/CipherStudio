@echo off
echo ======================================
echo  CipherStudio - React IDE Platform
echo ======================================
echo.
echo Starting backend and frontend servers...
echo.
echo Backend will run on: http://localhost:5000
echo Frontend will run on: http://localhost:3000
echo.
echo Press Ctrl+C to stop both servers
echo ======================================
echo.

cd backend
start cmd /k "npm run dev"

timeout /t 3 /nobreak > nul

cd ..\frontend
start cmd /k "npm run dev"

echo.
echo Both servers are starting...
echo Check the opened terminal windows for status
echo.
pause
