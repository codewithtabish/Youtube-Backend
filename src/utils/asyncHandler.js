const asyncHandler=(apiMethod)=>{
    (req,res,next)=>{
        Promise.resolve(apiMethod(req,res,next)).catch((err)=>next(err))
    }
}


const asyncHandlerOne=(apiMethod)=>async(req,res,next)=>{
    try {
        await apiMethod(req,res,next)
        
    } catch (error) {
        return res.status(error.code||500)
        .json({
            success:false,
            message:error.message
        
        })
        
    }
}