// lib/cloudinary.js
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: "dovbnobrd", // Set in your environment variables
  api_key: "817538118316658", // Set in your environment variables
  api_secret: "SiDnW0vp0kQ1zuroCw07Q3REiM8", // Set in your environment variables
});

export default cloudinary;
