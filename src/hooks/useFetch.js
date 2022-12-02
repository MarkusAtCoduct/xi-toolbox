import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import { methodAtom } from "../atoms/methodAtom";

const useFetch = (url) => {
  const [methods, setMethods] = useAtom(methodAtom);

  useEffect(() => { 
	GetContent("/api/method/search?label&pageIndex=0&pageSize=50&sortBy=cost&sortDirection=desc&includeMethods=true&includeMethodSets=true")
	.then((response) => {
		response.data.forEach(element => {
			element.container = "recommendedMethodContainer"
			element.type = "method"
		});
		setMethods(response.data)
		console.log(response.data)
	});	
   }, [user]);
};

export default useFetch;
