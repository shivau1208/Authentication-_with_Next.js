import { parseBody } from "../../lib/parseBody"
import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'


export default async function loginRoute(req,res)  {
    const {email,password} = parseBody(req.body)
    const prisma1 = new PrismaClient()
    const user = await prisma1.users.findUnique({
        where:{
            email
        },
    })
    const compare = await bcrypt.compare(password,user.password)
    if(compare) {
        // user.password= undefined
        const token = jwt.sign(
            {
                user:req.body.email,
            },
            process.env.JWT_KEY,
        );
        const resData = {
            userRole:user.role,
            token:token
        }
        return res.send({status:200,resData:resData,message:'User logged In'});
    };
    return res.send({status:401,message:'"Invalid Request"'});
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
