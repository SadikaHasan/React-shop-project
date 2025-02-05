import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import axios from 'axios'

const AppDownload = () => {

  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState( { started: false, pc: 0});
  const [msg, setMsg] = useState(null);

  function handleUpload() {
    if (!file) {
      setMsg("No file selected");
      return;
    }

    const fd= new FormData();
    fd.append('file', file);

    setMsg("Uploading...");
    setProgress(prevState => {
      return {...prevState, started: true}
    })
    axios.post('http://httpbin.org/post', fd, {
      onUploadProgress: (progressEvent) => { setProgress(prevState => {
        return { ...prevState, pc: progressEvent.progress*100}
      })},
      headers: {
        "Custom-Header": "value",
      }
    })
    .then(res => {
      setMsg("Upload successful");
      console.log(res.data);
    })
    .catch(err => {
      setMsg("Upload failed");
      console.log(err);
    });
  }

  return (
    <div className="app-download" id='app-download'>
       <p>For Better Experience <br /> <br /> Download <br /> <br />Food Delivery App</p>
      <div className="app-download-platforms">
        <a href='https://play.google.com/store/apps?pli=1'><img src={assets.play_store} alt="" /></a>
        <a href='https://www.apple.com/app-store/'><img src={assets.app_store} alt="" /></a>
      </div>
        <p>Upload File</p>

      <input onChange={ (e) => {setFile(e.target.files[0])} } type="file" />

      <button onClick={ handleUpload }>Upload</button>

      { progress.started && <progress max="100" value={progress.pc}></progress>}
      { msg && <span>{msg}</span>}
     
    </div>
  )
}

export default AppDownload

