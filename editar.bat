@echo off
REM Abre o site localmente e o editor de conteudo (/admin).
cd /d "%~dp0"
start "MzRCode - CMS" cmd /k npm run cms
start "MzRCode - Site" cmd /k npm run dev
timeout /t 6 >nul
start http://localhost:4321/admin/index.html
