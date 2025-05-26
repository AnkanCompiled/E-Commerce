import jwt from "jsonwebtoken";

export function createToken(payload, options = {}) {
  const token = jwt.sign(payload, process.env.NEXT_PUBLIC_JWT_SECRET, options);
  return token;
}

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
    return decoded;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}
