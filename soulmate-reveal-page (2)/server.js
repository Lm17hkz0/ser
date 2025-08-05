// server.js
const { exec } = require("child_process")

// Este script simplesmente executa o comando 'npm run start'
// que por sua vez inicia o servidor Next.js em produção.
exec("npm run start", (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao iniciar Next.js: ${error}`)
    return
  }
  console.log(`Next.js stdout: ${stdout}`)
  console.error(`Next.js stderr: ${stderr}`)
})

// O Next.js gerencia a porta internamente.
// Se a Squarecloud exigir que este arquivo 'server.js' escute uma porta específica,
// você precisaria de uma configuração de servidor customizada mais complexa no Next.js,
// o que geralmente não é necessário com o App Router.
// Para a maioria dos casos, este wrapper simples é suficiente.
