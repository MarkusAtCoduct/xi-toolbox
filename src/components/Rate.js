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

import { rateMethod } from '../services/Api';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  bgcolor: 'background.paper',
  borderRadius: '16px',
  boxShadow: 24,
  p: 4,
};

export default function Rate(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { control, register, handleSubmit, formState: { errors } } = useForm();
  const [value, setValue] = useState(2);


  const onSubmit = (data) => {	
    console.log(data);
        rateMethod(`/api/method/${props.id}/rate`, data)
        //navigate("/home");
    }


  return (
    <div>
      <Button onClick={handleOpen}>Rate</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography variant="h4"> Write A Comment</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography component="legend">Add a Rating</Typography>

 <>
                <input
                  name="stars"
                  type="number"
                  value={value}
                  
                  hidden
                  readOnly
                  {...register("stars", {valueAsNumber: true,})}
                />
                <Rating
                  name="stars"
                  value={value}
                  precision={0.5}
                  onChange={(_, value) => {
                    setValue(value);
                    console.log(value);
                  }}
                />
              </>
          <div style={{ width: "100%" }}>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: "400",
                float: "left",
              }}
            >
              Add a Headline
            </Typography>
            <TextField
              fullWidth
              label="First Name"
              variant="filled"
              {...register("headline", { required: true })}
            />
          </div>
          <div style={{ width: "100%" }}>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: "400",
                float: "left",
              }}
            >
              Add a Review
            </Typography>
            <TextField
              fullWidth
              multiline
              minRows={4}
              label="First Name"
              variant="filled"
              {...register("message", { required: true })}
            />
          </div>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-around"
            mt={4}
          >
            <Button
              size="large"
              variant="outlined"
              sx={{ borderRadius: "100px" }}
              onClick={() => handleClose()}
              disableElevation
            >
               Discard Review
            </Button>
            <Button
              size="large"
              variant="contained"
              sx={{ borderRadius: "100px" }}
              type="submit"
              disableElevation
            >
              Submit Review
            </Button>
          </Stack>
            </form>
        </Box>
      </Modal>
    </div>
  );
}