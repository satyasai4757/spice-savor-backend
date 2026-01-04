require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const recipeRoutes = require('./routes/recipe.routes'); // 👈 ADD

const app = express();
app.use(express.json());

app.use('/api/recipes', recipeRoutes); // 👈 ADD

app.get('/', (req, res) => {
    res.send('Backend + MongoDB connected 🚀');
});
const PORT = process.env.PORT || 3000;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected successfully');
        // app.listen(process.env.PORT || 3000, () => {
        //     console.log(`Server running on http://localhost:${process.env.PORT || 3000}`);
        // });
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => console.error(err.message));
