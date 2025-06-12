import bcrypt from "bcryptjs";

export async function hashPassword(plainPassword) {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(plainPassword, salt);
  return hashed;
}

export async function verifyPassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}
