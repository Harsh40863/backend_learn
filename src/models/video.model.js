import mongoose ,{Schema} from mongoose
import mongooseAgreegatePaginate from "mongoose-aggregate-paginate-v2"

 const VidesSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    videoFile:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,  
        required:true
    },description:{
        type:String,
        required:true
    },views:{
        type:Number,
        default:0   
    },ispublished:{
        type:Boolean,
        default:true
    } ,owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    } 


 },{timestamp:true})

 

 export const VideoModel= mongoose.model("Video",VidesSchema)