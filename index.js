import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';

import imageRoutes from './api/routes/imageRoutes.js';
import videoRoutes from './api/routes/videoRoutes.js';
import webRoutes from './api/routes/webRoutes.js';
import categoryInfoRoutes from "./api/routes/categoryInfoRoutes.js";


const app = express();
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());


// Static files served after build
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/portfolio/categoryInfo', categoryInfoRoutes);
app.use('/portfolio/images', imageRoutes);
app.use('/portfolio/videos', videoRoutes);
app.use('/portfolio/web', webRoutes);


// Serve HTML files from build (dist) folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

/* 
In vite.config.js, the entry points for each page are already defined by Vite's rollup build. For example, visiting (website-link)/projects.html will load the projects.html file.
The routes defined here using Express will add an additional way to access the html file. Therefore, visiting (website-link)/projects will load the same projects.html file.
*/
app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'projects.html'));
});

app.get('/credits', (req, res) => {
  res.sendFile(path.join(__dirname, 'credits.html'));
});

// Fallback route for any other pages
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


// Initialize MongoDB connection
if (!process.env.MONGO_URI) {
  console.error('MONGO_URI is not defined in environment variables');
  process.exit(1);
}

mongoose.connect(process.env.MONGO_URI, {
  maxPoolSize: 5, // Max number of connections opened concurrently
  maxIdleTimeMS: 60000, // Max time a connection can be idle before closing
  socketTimeoutMS: 60000, // Max time a connection can be open before closing
})
  .then(() => {
    console.log('Connected to MongoDB successfully');
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));

export default app;