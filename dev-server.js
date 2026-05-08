const express = require('express');
const path = require('path');
const app = express();

// Simple logger to track file requests (useful for .wasm and workers)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// These headers are mandatory for SharedArrayBuffer and WASI threads
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

// Serve static files from the current directory
app.use(express.static(__dirname));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 WASI Web Server running at http://localhost:${PORT}`);
  console.log(`👉 Open your browser and navigate to the URL above.`);
  console.log(`📂 Serving files from: ${path.resolve(__dirname)}`);
});