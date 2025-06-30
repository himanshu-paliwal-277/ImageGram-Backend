import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinary } from "./cloudinaryConfig.js";

// Configure Cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    // Check if file is present
    if (!file) {
      console.log(file);
      throw new Error("File not found");
    }
    // Validate mimetype before uploading to Cloudinary
    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      throw new Error(
        "File type not supported. Only JPEG and PNG are allowed."
      );
    }
    return {
      folder: "imageGram_Uploads", // Name of the folder in your Cloudinary account
      format: file.mimetype.split("/")[1], // Use the original format
      public_id: file.fieldname + "-" + Date.now(), // Unique name
    };
  },
});

// Create multer instance using this storage
export const cloudinaryUploader = multer({
  storage: storage,
  // Optionally, you can add limits here:
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB max
});
