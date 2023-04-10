import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { userAtom } from "../../atoms/userAtom";
import { GetUserDetails, UploadImage } from "../../services/Api";




export default function AvatarUpload() {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [error, setError] = useState(null);
    const [user, setUser] = useAtom(userAtom);
    const types = ['image/png', 'image/jpeg'];

    let formData = new FormData();

useEffect(() => {
    if (!file) {
        setPreview(null);
        return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
        setPreview(reader.result);
            }
           
            reader.readAsDataURL(file);
    
}, [file])


    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected)
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError("");
        } else {
            setFile(null);
            setError("Please select an image file (png or jpeg)");
        }
    }

     const handleUpload = (e) => {
    e.preventDefault();
    formData.append("image", file);
    console.log(file);
    UploadImage("/api/user/avatar-update", formData).then((res) => {
        console.log(res);
        GetUserDetails("/api/user").then((res) => {
            setUser(res);
        })
    })    
}


    return (  
        <>
                            <Stack
                            mt={4}
							direction="column"
							justifyContent="center"
							alignItems="center"
							spacing={2}>
							<Avatar
								src={!preview ?  user?.data?.mainAvatarUrl || "/broken-image.jpg" : preview}
								sx={{ width: "120px", height: "120px" }}
							/>
							<Stack direction="row" spacing={2}>

                                        <Button mb={2} variant="contained" component="label" >
                                        Select Photo
                                        <input hidden  type="file" onChange={changeHandler} />
                                        </Button>

                                        <Button mb={2} onClick={handleUpload} disabled={preview ? false: true}  variant="contained" component="label" >
                                        Upload Photo
                                        </Button>
								<Typography
                                gutterBottom
									sx={{
										fontSize: 14,
										fontWeight: "400",
										float: "left",
										color: "#5C5F5D",
									}}>
								</Typography>
							</Stack>
                            </Stack>




{/* 
        <IconButton color="primary" aria-label="upload picture" component="label" onClick={handleUpload}>
            <PhotoCamera />
        </IconButton> */}
        </>
    );
}