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

export default function SubComment(props) {
  const [loading, setLoading] = useState(false);

  const [ratings, setRatings ] = useState(null);

  return (
<>
    <Stack spacing={1}  direction="row" alignItems="center">
    <Avatar sx={{ width: "28px", height: "28px" }} alt="Remy Sharp" src={"/broken-image.jpg"} />
    <Typography variant="body2" color="text.secondary">
      {props.data.ratedBy}
    </Typography>
    </Stack>
    <Stack spacing={1} mb={1} direction="row" alignItems="center">
    <h4> {props.data.headline} </h4>
    </Stack>
    <Typography gutterBottom variant="body2" color="text">
      {props.data.message}
    </Typography>

    <Divider variant="middle" sx={{marginBottom: "8px"}}/>
    </>
      );
}