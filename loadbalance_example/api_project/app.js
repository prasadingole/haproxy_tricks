const express = require("express");

// Function to create and start an Express application on a given port
const startApp = (port) => {
  const app = express();

  // Define routes for the application
  app.get("/", (req, res) => {
    res.send(`Hello from app on port ${port}!`);
  });

  // Start the application on the specified port
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
};

// Retrieve the port numbers from command-line arguments
const ports = process.argv.slice(2).map(Number);

// Start an app instance for each port
ports.forEach((port) => {
  if (!isNaN(port) && port > 0) {
    startApp(port);
  } else {
    console.error(`Invalid port number: ${port}`);
  }
});
