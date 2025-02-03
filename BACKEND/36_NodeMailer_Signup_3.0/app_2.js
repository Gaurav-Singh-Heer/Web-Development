const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes_2');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// MongoDB Connection (Updated: Removed Deprecated Options)
const MONGO_URI = 'mongodb://127.0.0.1:27017/otpAuthDB';

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected ✅'))
    .catch(err => {
        console.error('MongoDB Connection Error ❌:', err);
        process.exit(1);
    });

app.use('/', authRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
