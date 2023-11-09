// getting-started.js
// const mongoose = require('mongoose');
import mongoose from "mongoose";
import app from "./app";
import config from "./config";
async function dbConnect() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Database connected")
        app.listen(config.port, () => {
            console.log(`Application is listening on port ${config.port}`)
          })
    } catch (error) {
        console.log("Failed to connect database", error)
    }
}

dbConnect()