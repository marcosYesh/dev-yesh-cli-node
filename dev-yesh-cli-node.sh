@echo off
setlocal

:: Verifica se o sistema operacional é Windows
:: O comando 'ver' no Windows retorna a versão do Windows
:: Se retornar algo, sabemos que é Windows
ver >nul 2>&1
if %errorlevel% equ 0 (
    node .\node_modules\dev-yesh-cli-node\src\index.js %*
) else (
    #!/bin/bash
    node ./node_modules/dev-yesh-cli-node/src/index.js "$@"
)
