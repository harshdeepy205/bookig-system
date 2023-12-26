import React,{useState} from 'react'
import download from './download.png'

function Profile() {
    
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    
    const [data, setData] = useState({
        file: null,
        base64URL: ""
    })

    const getBase64 = file => {
        return new Promise(resolve => {
        let fileInfo;
        let baseURL = "";
          // Make new FileReader
        let reader = new FileReader();
    
          // Convert the file to base64 text
        reader.readAsDataURL(file);
    
          // on reader load somthing...
        reader.onload = () => {
            // Make a fileInfo Object
            console.log("Called", reader);
            baseURL = reader.result;
            resolve(baseURL);
        };
        console.log(fileInfo);
        });
    };

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            
            reader.onload = e => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }

        console.log(e.target.files[0]);
        let baseFile = data['file'];
        baseFile = e.target.files[0];
        getBase64(baseFile)
            .then(result => {
                file["base64"] = result;
                // console.log("File Is", result);
                setData({ ...data, base64URL: result });
            })
            .catch(err => {
                console.log(err);
            });
        setData({ ...data, file: e.target.files[0] });
    };

    const profile = () =>{
        return(
            <div className="profile">
                <div
                    className="profileImages"
                    onClick={() => imageUploader.current.click()}> 
                    <img
                        className="profileImages"
                        src={download}
                        ref={uploadedImage}/>
                </div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    ref={imageUploader}/> 
            </div>
        )
    }

    return (
        <div>
            {profile()}
        </div>
    )
}

export default Profile