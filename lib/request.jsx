export async function postData(url, data){
    var response = await fetch(url, {
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    });
    return response;
}

export const sessionCookie = ()=> {
    return({
        cookieName:"auth",
        password:process.env.SESSION_KEY,
        //secure: true should be used in production(HTTPS) but can't be used in developement(HTTP)
        cookieOptions:{
            secure:process.env.NODE_ENV === 'production',
        },
    })
}
