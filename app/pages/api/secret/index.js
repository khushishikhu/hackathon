import { getSession } from "next-auth/react";

export default async(req,res)=>{
    const session = await getSession({req});
    if(session){
        res.send({
            content:"Welcome to your page"
        })
    }
    else{
        res.send({
            content:"you need to be signed in"
        })
    }
}