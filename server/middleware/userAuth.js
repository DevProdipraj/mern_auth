import jwt from "jsonwebtoken";
 

export const userAuth = async (req, res, next) => {
  try {
    let token = req.cookies.token; 

    // Fallback: check Authorization header
    if (!token && req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ success: false, message: "Not Authorized. Login Again." });
    }

    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (!tokenDecode || !tokenDecode.id) {
      return res.status(401).json({ success: false, message: "Not Authorized. Login Again." });
    }

    req.body.userId = tokenDecode.id;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Not Authorized. Token Expired or Invalid." });  
  }
};
