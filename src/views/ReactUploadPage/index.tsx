import React, {FC, useState} from 'react';
import {Button} from "@material-ui/core";
import {uploadReact} from "../../libs/ReactAPI/reactAPI";

type Props = {};

const ReactUploadPage: FC<Props> = () => {

    const [buildFile, setBuildFile] = useState(null);

    const selectFile = (event: any) => {
        setBuildFile(event.target.files[0]);
    }

    const uploadFile = () => {
        const formData = new FormData();

        formData.append("reactFile", buildFile as any);

        uploadReact(formData).then(res => {
            if(res){
                if(res.code === "0000") {
                    window.location.reload();
                } else {
                    alert(res.message);
                }
            }
        });
    }

    return (
        <div>
            <h1>React Build Zip Upload</h1>
            <h2>Upload Test</h2>

            <input type="file" accept=".zip" onChange={selectFile}/>
            <Button onClick={uploadFile}>Upload</Button>
        </div>
    );
}

export default ReactUploadPage;