import jwt from "jsonwebtoken"

const authMiddlewre = (req, res, next) => {
    const{token} = req.headers;
    if(!token){
        return res.json({success:false, message: "Not Authorzed Login Again"})

    }
    try {
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decoded.id;
        next()
    }catch (error) {
        return res.json({success:false, message: "Not Authorzed Login Again"})
    }
}

export default authMiddlewre;