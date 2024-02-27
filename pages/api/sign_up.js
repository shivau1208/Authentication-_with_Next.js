import { parseBody } from "../../lib/parseBody"
import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'

export default async function SignupRoute(req,res) {
    const salt = 9;
    const {email,fname,lname,password} = parseBody(req.body)
    const passw = await bcrypt.hash(password,salt)
    const prisma1 = new PrismaClient()
    var rows = await prisma1.users.count()
    if(rows < 2){
        await prisma1.users.create({
            data: {
                'email':email,
                'fname':fname,
                'lname':lname,
                'password':passw
            }
        })
        return res.send({
            status:'success',
            message:'User created successfully'
        });
    }else{
        return res.send({
            message:'Reached max limit to create'
        });

    }

}