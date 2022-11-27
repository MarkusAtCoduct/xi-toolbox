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
    });
    return response.json(); // parses JSON response into native JavaScript objects
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