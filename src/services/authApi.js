import { userAtom } from "../atoms/userAtom";
import { useAtom } from "jotai";



  export const login = (email, password) => {

  	return fetch("https://xi-lab.codeleap.net/api/user/log-in", {
  		method: "POST",
  		headers: {

  			"Content-Type": "application/json",
 		},
  		body: JSON.stringify({
  			"username": email,
  			"password": password,
  		}),
  	})
  		.then((response) => response.json())
  		.then((data) => {
  			localStorage.setItem("token", data.token);
			localStorage.setItem("refreshToken", data.refreshToken);
  			return data;
  		});
  };

  export const logout = () => {
  	return localStorage.removeItem("token");
  };

  export const getCurrentUser = () => {
  	return localStorage.getItem("token");
  };

  export const isLoggedIn = () => {
  	const user = getCurrentUser();
  	return user ? true : false;
  };


  export const refreshToken = () => {
  	return fetch("https://xi-lab.codeleap.net/api/user/refresh-token", {
  		method: "POST",
  		headers: {
  			"Content-Type": "application/json",
  		},
  		body: JSON.stringify({
  			refreshToken: localStorage.getItem("refreshToken"),
  		}),
  	})
  		.then((response) => response.json())
  		.then((data) => {
  			localStorage.setItem("token", data.token);
  			return data;
  		});
  }
