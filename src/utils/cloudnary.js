import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'

cloudinary.config({ 
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY, 
  api_secret:process.env.CLOUDNARY_API_SECRET 
});


// Example: Upload an image
async function uploadToCloudnary(fileToUpload) {
  try {
    if(!fileToUpload) return null
    const result = await cloudinary.uploader.upload(fileToUpload,{resource_type:"auto"});
    return result

  } catch (error) {
    fs.unlinkSync(fileToUpload)
    return null
  }
}


export {uploadToCloudnary}