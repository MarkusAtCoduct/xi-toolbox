import { useAtom } from "jotai"
import { queryAtom } from "../atoms/queryAtom"
import { methodAtom } from "../atoms/methodAtom"
import { useState } from "react"
import { useEffect } from "react"
import { getCurrentUser } from "../services/authApi"

const useGetMethods = () => {

	const [query] = useAtom(queryAtom)
	const [data, setData] = useState([])
	const [methods, setMethods] = useAtom(methodAtom)
	const [loading, setLoading] = useState(true)

	const baseURL = "https://xi-lab.codeleap.net"
	const _url = `/api/method/search?label=${query.label}&pageIndex=0&pageSize=6&sortBy=${query.sortBy}&sortDirection=${query.sortDirection}&includeMethods=${query.includeMethods}&includeMethodSets=${query.includeMethodSets}`
	const url = baseURL + _url
	
	const token = getCurrentUser()

	const response = fetch(url, {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
	})
	
	useEffect(() => {
		if(response){
			const Methods = response.json()
			setMethods(Methods.data)
			setLoading(false)}
		},[response]) 	

	//console.log(data)
	return { data, loading }
}

export default useGetMethods
