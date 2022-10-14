import mongoose from "mongoose";

mongoose.connect("")//?retryWrites=true&w=majority


let db = mongoose.connection;

export default db;
