import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, Divider, TextField } from '@mui/material';
import { FormProvider, useForm, useFieldArray, Controller } from 'react-hook-form';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useEffect } from 'react'
import { getMethodDetails } from '../services/Api';
import CircularProgress from '@mui/material/CircularProgress';
import SubComment from './SubComment';
import Rate from "./Rate";
import Comment from './Comment';


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
   

console.log(ratings)
  return (
    <>
    <Box sx={{maxHeight: "200px", overflowY: "scroll", overflowX: "hidden"}}>
      Reviews 
      {loading ? <Box><CircularProgress/></Box> : 
    <ol style={{listStyleType: "none", padding: "0 0 0 8px"}}>
      {ratings?.map((rating) => (
        <li key={rating.id}>
          <Stack spacing={1}  direction="row" alignItems="center">
          <Avatar sx={{ width: "28px", height: "28px" }} alt="Remy Sharp" src={"/broken-image.jpg"} />
          <Typography variant="body2" color="text.secondary">
            {rating.ratedBy}
          </Typography>
          </Stack>
          <Stack spacing={1} mb={1} direction="row" alignItems="center">
          <Rating name="read-only" precision={0.1} sx={{ color: "#757875", fontSize: "0.85rem"}} value={rating.score} readOnly />
          <h4> {rating.headline} </h4>
          </Stack>
          <Typography gutterBottom variant="body2" color="text">
            {rating.message}
          </Typography>

          <Divider variant="middle" sx={{marginBottom: "8px"}}/>
          <Comment id={props.id} parentCommentId={rating.id}/>
          <ol>
          {rating.subRatings?.map((sub) => () => (
            <li key={sub.id}>
              <SubComment data={sub}/>
              </li>
          ))}
          </ol>
        </li>
      ))}
    

    </ol>
    }
    </Box>
    <Rate  id={props.id}/>
</>
  );
}