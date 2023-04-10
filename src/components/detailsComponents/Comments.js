import { Avatar, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { getMethodDetails } from '../../services/Api';
import Rate from "../Rate";


export default function Comments(props) {
  const [loading, setLoading] = useState(false);

  const [ratings, setRatings ] = useState(null);
  const [comments, setComments ] = useState(null);
 

	useEffect(() => {
    setLoading(true);
		getMethodDetails(`/api/method/${props.id}/ratings`).then((data) => {
		 setRatings(data.data);}).then(() => setLoading(false));
     getMethodDetails(`/api/method/${props.id}/comments`).then((data) => {
      console.log(props.id)})
	  }, []);
   

    const fetchComments = (rates) => {
      setLoading(true);
        setRatings([rates,...ratings])
        setLoading(false);
    }

  return (
    <>
    <Typography gutterBottom sx={{ fontSize:"20px",  fontWeight: "600", textAlign:"left"}}>
					Reviews
				</Typography>
    <Box sx={{maxHeight: "200px", overflowY: "auto", alignSelf: "stretch"}}>
                
      {loading ? <Box><CircularProgress/></Box> : 
    <ol style={{listStyleType: "none", padding: "0 0 0 8px"}}>
      {ratings?.length === 0 ? <Typography variant="body2" color="text.secondary">No reviews yet</Typography> :
      <>
      {ratings?.map((rating) => (
        <li key={rating?.id}>
          <Stack spacing={1}  direction="row" alignItems="center">
          <Avatar sx={{ width: "28px", height: "28px" }} alt="Remy Sharp" src={rating?.raterAvatarUrl ||"/broken-image.jpg"} />
          <Typography variant="body2" color="text.secondary">
            {rating?.ratedBy}
          </Typography>
          </Stack>
          <Stack spacing={1} mb={1} direction="row" alignItems="center">
          <Rating name="read-only" precision={0.1} sx={{ color: "#757875", fontSize: "0.85rem"}} value={rating?.score} readOnly />
          <h4> {rating?.headline} </h4>
          </Stack>
          <Typography gutterBottom variant="body2" color="text">
            {rating?.message}
          </Typography>

          <Divider variant="middle" sx={{marginBottom: "8px"}}/>
        </li>
      ))}
    </>
}
    </ol>
    }
    </Box>
    <Rate update={fetchComments} id={props.id}/>
</>
  );
}