import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;
export const DB_URL = process.env.DB_URL;

export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
export const JWT_SECRET = process.env.JWT_SECRET;
