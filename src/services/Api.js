import { getCurrentUser } from "./authApi";


const baseURL = "https://xi-lab.codeleap.net"



export async function GetContent(_url) {
    // Default options are marked with *
    let url = baseURL+_url
    const token = getCurrentUser()
    const response = await fetch(url, {
      headers: {
        'Access-Control-Allow-Origin' : "*",
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+ token      
    },
    }).then((response) => {
        return response.json()
        }).catch((error) => {
            console.log(error)
            });
    return response
    //return response.json(); // parses JSON response into native JavaScript objects
  }



export async function PostMethod(_url, data={}) {
  // Default options are marked with *
  let url = baseURL+_url
  const token = getCurrentUser()
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    
    headers: {
      'Access-Control-Allow-Origin' : "*",
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer '+ token      
  },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function UpdateMethod(_url, data={}) {
  // Default options are marked with *
  let url = baseURL+_url
  const token = getCurrentUser()
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    
    headers: {
      'Access-Control-Allow-Origin' : "*",
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer '+ token      
    },
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

export async function DeleteMethod(_url) {
let url = baseURL+_url
const token = getCurrentUser()
const response = await fetch(url, {
  method: "DELETE",
  headers: {
    'Access-Control-Allow-Origin' : "*",
    'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+ token
  },
  });
  return response.json();
}

export async function GetUserDetails(user){
  let url = baseURL+"/api/user/details"
  if (!user) {
    user = ""
  }
  const token = getCurrentUser()
  const response = await fetch(url+"?userId="+user|| "",{
    method: "GET",
    headers: {
      'Access-Control-Allow-Origin' : "*",
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer '+ token
    },
    });
    return response.json();
}

export async function GetSpecificUserDetails(userId){
  let url = baseURL+`/api/user/${userId}/details`

  const token = getCurrentUser()
  const response = await fetch(url, {
    method: "GET",
    headers: {
      'Access-Control-Allow-Origin' : "*",
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer '+ token
    },
    });
    return response.json();
}


//function to upload image
export async function UploadImage(_url, data) {
let url = baseURL+_url
const token = getCurrentUser()
const response = await fetch(url, {
  method: "POST",
  body: data,
  headers: {
    'Access-Control-Allow-Origin' : "*",
    'Authorization': 'Bearer '+ token
  } ,
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function updateUserDetails(_url, data={}) {
  // Default options are marked with *
  let url = baseURL+_url
  const token = getCurrentUser()
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    
    headers: {
      'Access-Control-Allow-Origin' : "*",
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer '+ token
    },
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
          
export async function rateMethod(_url, data={}) {
  let url = baseURL+_url
  const token = getCurrentUser()
  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Access-Control-Allow-Origin' : "*",
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer '+ token
    },
    body: JSON.stringify(data),
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

export async function getMethodDetails(_url){
  let url = baseURL+_url
  const token = getCurrentUser()
  const response = await fetch(url, {
    method: "GET",
    headers: {
      'Access-Control-Allow-Origin' : "*",
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer '+ token
    },
    });
    return response.json(); // parses JSON response into native JavaScript objects
}


export async function userForgotPassword(_url, data={}) {
  let url = baseURL+_url
  data.resetPasswordUrl = "localhost:3000/reset-password"
  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Access-Control-Allow-Origin' : "*",
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(data),
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


export async function userResetPassword(_url, data={}) {
  let url = baseURL + _url
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      newPassword: data.password,
      resetToken: data.resetToken,
    }),
  })
  return response // parses JSON response into native JavaScript objects
}

export async function checkResetToken(_url, data={}) {
  let url = baseURL+_url
  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Access-Control-Allow-Origin' : "*",
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(data),
    });
    return response
  }