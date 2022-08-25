import express from "express";
import database from "./config/database.js";
import productRoute from "./routes/index.js";
import cors from "cors";

const app = express();

// cek connection database
try {
    await database.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('connection error', error);
}

app.use(cors());
app.use(express.json());
app.use('/products',productRoute);

app.listen(5000, () => console.log('server berjalan di port 5000'));