import React, { useState } from 'react';
import { uploadProfilePicture } from '../server/firebaseUpload';  // Updated function import

function ImageUploadComponent({ userId }) {  // Accept userId as a prop
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");
    const [uploading, setUploading] = useState(false);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (!file) {
            setError("Please select an image to upload.");
            return;
        }
        setUploading(true);
        uploadProfilePicture(file, userId, (url) => {
            setUrl(url);
            setUploading(false);
            setError("");
        }, (error) => {
            setError(error);
            setUploading(false);
        });
    };

    return (
        <div>
            <input type="file" onChange={handleChange} accept="image/*" />
            <button onClick={handleUpload} disabled={uploading}>
              {uploading ? 'Uploading...' : 'Upload Profile Picture'}
            </button>
            {url && <img src={url} alt="Profile" />}
            {error && <p>Error: {error}</p>}
        </div>
    );
}

export default ImageUploadComponent;
