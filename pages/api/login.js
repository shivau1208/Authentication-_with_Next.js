import { parseBody } from "../../lib/parseBody"
import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { serialize } from "cookie";


export default async function loginRoute(req,res)  {
    const {email,password} = parseBody(req.body)
    const prisma1 = new PrismaClient()
    const user = await prisma1.users.findUnique({
        where:{
            email
        },
    })
    if(user){
        const compare = await bcrypt.compare(password,user?.password)
        console.log(compare)
        if(compare) {
            // user.password= undefined
            const token = jwt.sign({user:req?.body?.email},process.env.JWT_KEY,{expiresIn:'1h'});
            const resData = {
                userRole:user.role,
                token:token
            }
            res.setHeader('Set-Cookie',serialize('cid',token,{
                httpOnly:true,
                secure:process.env.NODE_ENV === 'production',
                maxAge:'3600',
                path:'/',
                sameSite:'strict'
            }))
            return res.status(200).json({message:'User logged In successfully!'});
        };
        return res.status(403).json({message:'Invalid credentials'});
    }
    return res.status(401).json({message:'User does not exist'});
}
// export default withIronSessionApiRoute(
//     async function loginRoute(req,res)  {
//         const {email,password} = parseBody(req.body)

//         const prisma = new PrismaClient()
//         const user = await prisma.users.findUnique({
//             where:{
//                 email
//             },
//         })
//         if(user.password === password) {
//             user.password= undefined
//             req.session.user = user
//             await req.session.save();

//             return res.send({status:'success',data:user});
//         };
//         res.send({status:'error',message:'incorrect email or password'});
//     },
//     sessionCookie(),
// );
