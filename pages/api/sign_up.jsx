import { parseBody } from "../../lib/parseBody"
import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'

export default async function SignupRoute(req,res) {
    const salt = 9;
    const {email,fname,lname,password} = parseBody(req.body)
    const passw = await bcrypt.hash(password,salt)
    const prisma1 = new PrismaClient()
    const user = await prisma1.users.create({
        data: {
            'email':email,
            'fname':fname,
            'lname':lname,
            'password':passw
        }
    })

    return res.send({
        status:'success',
        data:user,
        message:'Created User Successfully'
    });
}