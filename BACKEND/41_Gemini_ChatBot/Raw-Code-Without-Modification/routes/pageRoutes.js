const express = require('express');
const path = require('path');

const router = express.Router();

// Serve static files or redirect to correct pages
router.get('*', (req, res) => {
    let filePath;
    const pathname = req.path;

    if (pathname === '/') {
        filePath = path.join(__dirname, '../public', 'index.html');
    } else if (pathname === '/home') {
        filePath = path.join(__dirname, '../public', 'home.html');
    } else if (pathname === '/login') {
        filePath = path.join(__dirname, '../public', 'login.html');
    } else if (pathname === '/register') {
        filePath = path.join(__dirname, '../public', 'signup.html');
    } else if (pathname === '/home/gmch') {
        filePath = path.join(__dirname, '../public', '/hospital/gmch.html');
    } else if (pathname === '/home/pgimer') {
        filePath = path.join(__dirname, '../public', '/hospital/pgimer.html');
    } else if (pathname === '/home/max') {
        filePath = path.join(__dirname, '../public', '/hospital/max.html');
    } else if (pathname === '/home/contact') {
        filePath = path.join(__dirname, '../public', 'contact.html');
    } else if (pathname === '/home/about') {
        filePath = path.join(__dirname, '../public', 'about.html');
    } else {
        filePath = path.join(__dirname, '../public', pathname);
    }

    res.sendFile(filePath);
});

module.exports = router; 