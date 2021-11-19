import jwt from 'jsonwebtoken'

export const tokenGen = payload => {
    return jwt.sign({payload}, process.env.SECRET, {algorithm: "HS256"})
}