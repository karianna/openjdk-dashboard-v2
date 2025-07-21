// const { createProxyMiddleware } = require('http-proxy-middleware')
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

let app = express()

// For development, serve static files from current directory
// In production, this would serve from the dist folder
app.use(express.static('.'))

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(require('path').join(__dirname, 'index.html'))
})

app.listen(Number(process.env.PORT || 3000), () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 3000}`)
})