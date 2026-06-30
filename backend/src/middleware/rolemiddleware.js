const jwt = require("jsonwebtoken");

const roleMiddleware = (roles) => {
   return (req,res,next)=>{
     try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
         if(!roles.includes(req.user.role)){
            return res.json("User Unauthorized")
        }

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
   }
};

module.exports = roleMiddleware;