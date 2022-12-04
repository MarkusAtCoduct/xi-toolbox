import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { UploadImage } from "../services/Api";
import { useAtom } from "jotai";
import { userAtom } from "../atoms/userAtom";
import { GetUserDetails } from "../services/Api";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';




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
    UploadImage("/api/user/avatar-update", formData)
    
}


    return (  
        //input that will be used to upload image
        <>
                            <Stack
                            mt={4}
							direction="column"
							justifyContent="center"
							alignItems="center"
							spacing={2}>
							<Avatar
								src={preview || "/broken-image.jpg" }
								sx={{ width: "120px", height: "120px" }}
							/>
							<Stack direction="column">

                                        <Button mb={2} variant="contained" component="label" >
                                        Upload Photo
                                        <input hidden  type="file" onChange={changeHandler} />
                                        </Button>
								<Typography
                                gutterBottom
									sx={{
										fontSize: 14,
										fontWeight: "400",
										float: "left",
										color: "#5C5F5D",
									}}>
                                        (optional)
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