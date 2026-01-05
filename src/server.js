require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const recipeRoutes = require('./routes/recipe.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

/* ✅ CORS MUST COME FIRST */
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

/* ✅ ROUTES */
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);

/* ✅ TEST ROUTE */
app.get('/', (req, res) => {
    res.send('Backend + MongoDB connected 🚀');
});

/* ✅ DB + SERVER */
const PORT = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected successfully');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => console.error(err.message));
