import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({
    cloud_name:'process.env.CLOUDINARY_CLOUD_NAME',
    api_key:'process.env.CLOUDINARY_API_KEY',
    api_secret:'process.env.CLOUDINARY_API_SECRET'
})


const uploadonCloudinary=async (localFilePath)=>{
    try{
        if(!localFilePath)
        {
            return null
        }
        cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log("file is uploaded successfully",Response.url);
        return Response;

    }catch{

        fs.unlinkSync(localFilePath) //reomove the loacally saved temprory file


    }

}

export {uploadonCloudinary}