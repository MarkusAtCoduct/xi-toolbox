import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import EditIcon from '@mui/icons-material/Edit';
import { rateMethod } from '../../services/Api';

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

export default function Comment(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit } = useForm();


  const onSubmit = (data) => {	
    	console.log(data);
		data.parentCommentId = props.parentCommentId;
        rateMethod(`/api/method/${props.id}/comment`, data).then(() => handleClose())
    }


  return (
		<div>
			<Button onClick={handleOpen} endIcon={<EditIcon />}>
				Write a Comment
			</Button>
			<Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<Typography variant='h4'> Write A Comment</Typography>

					<form onSubmit={handleSubmit(onSubmit)}>
						<div style={{ width: "100%" }}>
							<Typography
								sx={{
									fontSize: 18,
									fontWeight: "400",
									float: "left",
								}}
							>
								Add a Comment
							</Typography>
							<TextField fullWidth multiline minRows={4} label='First Name' variant='filled' {...register("message", { required: true })} />
						</div>
						<Stack direction='row' alignItems='center' justifyContent='space-around' mt={4}>
							<Button size='large' variant='outlined' sx={{ borderRadius: "100px" }} onClick={() => handleClose()} disableElevation>
								Discard Review
							</Button>
							<Button size='large' variant='contained' sx={{ borderRadius: "100px" }} type='submit' disableElevation>
								Submit Review
							</Button>
						</Stack>
					</form>
				</Box>
			</Modal>
		</div>
	)
}