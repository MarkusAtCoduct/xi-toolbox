import { useQuery, useMutation, useQueryClient } from 'react-query'



function Methods() {
   const queryClient = useQueryClient()
 
   // Queries
   const query = useQuery('methods', )
 
   // Mutations
   const mutation = useMutation(postTodo, {
     onSuccess: () => {
       // Invalidate and refetch
       queryClient.invalidateQueries('todos')
     },
   })

  }
  
   export default Methods