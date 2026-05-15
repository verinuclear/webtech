const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, Images, Client-side JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the Landing Page
app.get('/', (req, res) => {
    // Renders views/index.ejs and passes a dynamic title to it
    res.render('index', { 
        title: "CHEIN | Women's Clothing, Women's Fashion" 
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});