import { asyncHandler } from "../utils/AsyncHandeller.js";

const registerUser = asyncHandler( async (req,res)=>{
    res.status(200).json({
        message:"ok"
    })

})

export {registerUser}