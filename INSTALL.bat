@echo off
echo ======================================
echo  CipherStudio - Installation Script
echo ======================================
echo.
echo This will install all dependencies...
echo Please wait, this may take a few minutes.
echo.

echo [1/2] Installing Backend Dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Backend installation failed!
    pause
    exit /b 1
)
echo ✓ Backend dependencies installed successfully!
echo.

echo [2/2] Installing Frontend Dependencies...
cd ..\frontend
call npm install
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Frontend installation failed!
    pause
    exit /b 1
)
echo ✓ Frontend dependencies installed successfully!
echo.

cd ..

echo ======================================
echo  Installation Complete! ✓
echo ======================================
echo.
echo You can now start CipherStudio by running:
echo   START.bat
echo.
echo Or manually:
echo   1. cd backend && npm run dev
echo   2. cd frontend && npm run dev (in new terminal)
echo.
echo Read QUICKSTART.md for more information.
echo.
pause
