import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { FormProvider, useForm, useFieldArray, Controller } from 'react-hook-form';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useEffect } from 'react';
import { getMethodDetails } from '../services/Api';


export default function Cimments(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [ratings, setRatings ] = useState(null);

  useEffect(() => {
     getMethodDetails(`/api/method/${props.id}/ratings`).then((data) => {
      setRatings(data);
    });
   }, []);



console.log(ratings?.data)
  return (
    <div>
    <ol>
    
      {ratings?.data?.map((detail) => (
        <li key={detail.id}>
          <p> {detail.headline} </p>
          <div> {detail.message} </div>
        </li>
      ))}
    

    </ol>
    </div>
  );
}