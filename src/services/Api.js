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

      export async function GetUserDetails(user = ""){
        let url = baseURL+"/api/user/details"
        const token = getCurrentUser()
        const response = await fetch(url+"?"+ new URLSearchParams({userName: user}),{
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
          
