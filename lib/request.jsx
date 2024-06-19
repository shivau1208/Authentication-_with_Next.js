export async function postData(url='', data=''){
  const response = await fetch(url, {
      method:'POST',
      credentials:'same-origin',
      body:JSON.stringify(data)
  });
  return response.json();
}

export const sessionCookie = ()=> {
  return({
      cookieName:"auth",
      password:process.env.SESSION_PASSWORD,
      //secure: true should be used in production(HTTPS) but can't be used in developement(HTTP)
      cookieOptions:{
          secure:process.env.NODE_ENV === 'production',
      },
  })
}