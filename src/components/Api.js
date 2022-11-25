const baseURL = "https://xi-lab.codeleap.net"



export async function GetContent(_url) {
    // Default options are marked with *
    let url = baseURL+_url
    
    const response = await fetch(url, {
      headers: {
        'Access-Control-Allow-Origin' : "*",
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJrdXMuZmxlaXNjaGVyQGNvZHVjdC5jb20iLCJpYXQiOjE2Njg2MjE0OTMsImZpcnN0TmFtZSI6Ik1hcmt1cyIsImxhc3ROYW1lIjoiRmxlaXNjaGVyIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVudiI6ImRldiIsInVzZXJJZCI6MjMwLCJlbWFpbCI6Im1hcmt1cy5mbGVpc2NoZXJAY29kdWN0LmNvbSIsInVzZXJuYW1lIjoibWFya3VzLmZsZWlzY2hlckBjb2R1Y3QuY29tIiwiZXhwIjoxNjcwMDg4NDI2fQ.k4aRwtklyjnpMDEj_9QpbFir6nTz0ueEndhBGD2V0etqwdXDIUWLPsFvWqUttJadmSc48q9KMIeGnt5Cxekovw'      
    },
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }



  export async function PostMethod(_url, data={}) {
    // Default options are marked with *
    let url = baseURL+_url
    
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin' : "*",
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJrdXMuZmxlaXNjaGVyQGNvZHVjdC5jb20iLCJpYXQiOjE2Njg2MjE0OTMsImZpcnN0TmFtZSI6Ik1hcmt1cyIsImxhc3ROYW1lIjoiRmxlaXNjaGVyIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVudiI6ImRldiIsInVzZXJJZCI6MjMwLCJlbWFpbCI6Im1hcmt1cy5mbGVpc2NoZXJAY29kdWN0LmNvbSIsInVzZXJuYW1lIjoibWFya3VzLmZsZWlzY2hlckBjb2R1Y3QuY29tIiwiZXhwIjoxNjcwMDg4NDI2fQ.k4aRwtklyjnpMDEj_9QpbFir6nTz0ueEndhBGD2V0etqwdXDIUWLPsFvWqUttJadmSc48q9KMIeGnt5Cxekovw'      
    },
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }