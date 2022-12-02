import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { UploadImage } from "../services/Api";
import { useAtom } from "jotai";
import { userAtom } from "../atoms/userAtom";
import { GetUserDetails } from "../services/Api";

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
    formData.append('image', file);
}, [file])


    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError("");
        } else {
            setFile(null);
            setError("Please select an image file (png or jpeg)");
        }
    }

     const handleUpload = async () => {
    //e.preventDefault();
    console.log(file);
    

    await UploadImage("/api/user/avatar-update", formData)
    
}


    return (  
        //input that will be used to upload image
        <>
        <input type="file" onChange={changeHandler} />
        <div className="output">
            {error && <div className="error">{error}</div>}
            {preview && <img src={preview} alt="preview" />}
        </div>
        <IconButton color="primary" aria-label="upload picture" component="label" onClick={handleUpload}>
            <PhotoCamera />
        </IconButton>
        </>
    );
}