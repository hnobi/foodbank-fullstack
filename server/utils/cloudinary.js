import cloudinary from "cloudinary";
import dotenv from 'dotenv'
dotenv.config();

cloudinary.config({
  cloud_name: process.env.Cloud_name,
  api_key: process.env.API_Key,
  api_secret: process.env.API_Secret,
});


exports.uploads = (file, folder) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(file, (result) => {
        resolve({
          url: result.url,
          id: result.public_id,
        });
      },
      {
        resource_type: "auto",
        folder: folder,
      }
    );
  });
};
