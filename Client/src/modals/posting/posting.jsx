import React, { useState } from 'react'
import { addDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import { storage } from '../../config/firebase';
import { userPostCollection } from '../../db_entities';
import "./posting.css"

function Posting(props) {
    const [about, setAbout] = useState("");
    const [file, setFile] = useState(null);

    // storing the file to be posted first into firbase storage
    async function uploadFile(uploadfile){
        try {
            // the image reference
            const imgRef = ref(storage, `${props.type}/${uploadfile.name}`)
    
            // uploading the image using the uploadByte function
            const fileRef = await uploadBytes(imgRef, uploadfile);  
            // getting the url of the image using the file reference
            const fileUrl = await getDownloadURL(fileRef.ref);
            return fileUrl;
        } catch (error) {
            console.error(error)
        }

    }
    
    // submiting post data to the database
    const createPost = async()=>{
        try {
            // getting the img url from firebase storage
            const imgUrl = await uploadFile(file);
            
            //object that contains the data to be posted
            const postInfo = {
                userId:"00466120",
                img: imgUrl, 
                imgAbout:about,
                created_at: "1min ago",
                userName: "David Jackson",
                userProfile: imgUrl,
                comments: {},
                likes:{}
            }
            await addDoc(userPostCollection, postInfo);
            props.close();
        } catch (error) {
            console.error(error)
        }
    }
  
  return (
    <div id="port_contain">
        <div className="add">
            <button className="close" onClick={props.close}>x</button>
            <h3>Happy Posting</h3>
            <textarea
                name="video-text"
                id="aboutVideo"
                cols="13"
                rows="4"
                placeholder={`write about your ${props.type}`}
                onChange={(e) => {
                setAbout(e.target.value);
                }}
            ></textarea>
            <div className="file-taker">
                <input
                name="vid"
                type="file"
                className="vidupload"
                onChange={(e) => {
                    setFile(e.target.files[0]);
                }}
                />
                <button
                onClick={createPost}
                >
                {`upload ${props.type}`}
                </button>
            </div>
        </div>
  </div>
  )
}

export default Posting