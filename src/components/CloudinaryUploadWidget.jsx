import { useEffect, useRef } from "react";

export default function CloudinaryUploadWidget( {setPublicIds, setLoading, publicIds}) {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
            uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
        }, (error, result) => {
            if (result.event === "uploading") {
                setLoading(true);
            }
            if (result.event === "success") {
                setPublicIds(prevPublicIds => {
                   const newPublicIds = [...prevPublicIds, result.info.public_id];
                   return newPublicIds;
                });
                setLoading(false);
            }
            else {
                console.log(error);
            }
        });
    }, []);
    return (
        <button onClick={(e) => {
            e.preventDefault();
            widgetRef.current.open()
        }}>
            Upload
        </button>
    )
}
