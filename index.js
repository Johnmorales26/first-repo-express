// Importing HTTP module
// import http from "http";

// Importing ExpressJS
import express from "express";

// Creating an Express instance
const app = express(); // (req, res) => { CODE }

//  Middleware de parseo de datos del cliente
app.use(express.urlencoded({ extended: true }));

// Middleware de proposito específico
app.use("/about", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          font-family: "Josefin Sans", sans-serif;
        }

        body {
          background-color: #333;
        }

        h1, p {
          color: #FFFF;
        }
      </style>
      <title>About</title>
    </head>
    <body>
      <h1>This proyect was coded by: Bit.exe </h1>
      <p>This is a page created to learn Fullstack web development with JS</p>
      <p>Morales Tavera Jonatan Arturo | 191130300</p>
    </body>
  </html>
  `);
});

//  GET /add-product
app.use('/add-product', (req, res, next) => {
  if (req.method === "POST") return next();
  //  Sirviendo el formulario
  res.send(`
  <form action="/add-product" method="POST">
  <input type="text" name="title">
  <input type="text" name="description">
  <button type="submit">Add Product</button>
  </form>
  `);
});

//  POST /add-product
app.use('/add-product', (req, res) => {
  //  Realizando extracción de los datos de la petición
  for (const prop in req.body) {
    console.log(`${prop}: ${req.body[prop]}`);
  }
  //  Redireccionamiento
  res.redirect('/');
});

// Registering our first middleware
app.use((req, res, next) => {
  console.log("⚙️  Executing Middleware #1");
  // Ivoking the next middleware
  next();
});

app.use((req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
});

app.use((req, res) => {
  console.log("🔊 Answering to the client");
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          font-family: "Josefin Sans", sans-serif;
        }

        body {
          background-color: #333;
        }

        h1, p {
          color: #FFFF;
        }
      </style>
      <title>ExpressJS app</title>
    </head>
    <body>
      <h1><b>Welcome to ExpressJS</b></h1>
      <p>This is my awesome app</p>
    </body>
  </html>
  `);
});

// Creating server
// const server = http.createServer(app);

// Defining ports
const port = 3000;
const ip = "0.0.0.0";

// Running server
app.listen(port, ip, (err) => {
  console.log("🟢 Server listening in http://localhost:3000");
});