import { useState } from "react";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import "./ImageUploader.css";


export default function ImageUploader({ setPublicIds, setLoading, publicIds, propertyId}) {
    const [cloudName] = useState(import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
    const [uploadPreset] = useState(import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

    const [uwConfig] = useState({
        cloudName,
        uploadPreset,
        sources: ["local", "url"], // restrict the upload sources to URL and local files
        clientAllowedFormats: ["images"], //only allow image uploads
        maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        // folder: "user_images", //upload files to the specified folder
    });

    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
        cloud: {
            cloudName
        }
    });

    ImageUploader.defaultProps = {
        publicIds: [],
    };

    const handleDelete = async (id) => {
        // Call your server-side code to delete the image from Cloudinary
        console.log('Deleting image with ID:', id); // Log the ID

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/delete-image/${id}`, { method: 'DELETE' });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Fetch response:', data); // Log the fetch response

            if (data.result === 'ok') {
                setPublicIds((prevIds) => {
                    const updatedIds = prevIds.filter((prevId) => prevId !== id);
                    console.log('updatedIds', updatedIds); // Log the updated state

                    // Call your server-side code to update the MongoDB document
                    fetch(`${import.meta.env.VITE_BASE_URL}/property/${propertyId}/images`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ images: updatedIds }),
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                console.log('MongoDB document updated successfully');
                            } else {
                                console.error('Failed to update MongoDB document:', data);
                            }
                        })
                        .catch(error => console.error('Fetch error:', error));

                    return updatedIds;
                });
            } else {
                console.error(data);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const handleClick = (event, id) => {
        event.preventDefault();
        handleDelete(id);
    };

    return (
        <div className="image-uploader">
            {console.log('rerender')}
            <h3>Add Property Images</h3>
            <CloudinaryUploadWidget
                uwConfig={uwConfig}
                setPublicIds={setPublicIds}
                setLoading={setLoading}
                publicIds={publicIds}
            />
            <p>{publicIds.length} Images Uploaded</p>
            {publicIds.map(publicId => {
                const img = cld.image(publicId);
                return (
                    <div key={publicId} style={{ display: 'inline-block' }}>
                        <AdvancedImage
                            style={{
                                maxWidth: "120px",
                                maxHeight: "70px",
                                margin: "5px",
                                border: "2px solid black",
                                borderRadius: "5px"
                            }}
                            cldImg={img}
                            plugins={[responsive(), placeholder()]}
                        />
                        <button onClick={(event) => handleClick(event, publicId)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}
