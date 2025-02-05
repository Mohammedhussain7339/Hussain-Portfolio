// dbConnect.js
import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        console.log("%cAlready connected to the database", "color: blue; font-weight: bold;");
        return;
    }
    try {
        console.log("Attempting to connect to the database...");
        const db = await mongoose.connect("mongodb+srv://mohammed:mohammed@cluster0.jkkpaov.mongodb.net/MohammedPortfolio", {
        });

        connection.isConnected = db.connection.readyState;

        // Log success message for VS Code console
        console.log("%cDatabase connected successfully", "color: green; font-weight: bold;");
    } catch (error) {
        console.error("%cDatabase connection failed:", "color: red; font-weight: bold;", error.message);
    }
}

export default dbConnect;
