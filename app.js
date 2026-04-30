const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="font-family: Arial; text-align: center; margin-top: 50px;">
        <h1 style="color: Black;">Hi, I'm Prachi </h1>
        <p>Welcome to My DevOps/Cloud Journey 🚀</p>
        <p>Learning CI/CD, Docker, Kubernetes,Terraoform,AWS,Azure,Python</p>
      </body>
    </html>
  `);
});

module.exports = app;