import React from "react";

import { useQuill } from "react-quilljs";
// or const { useQuill } = require('react-quilljs');
import {theme,
  modules,
  formats,
  placeholder} from './QuillRes'
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import "quill/dist/quill.bubble.css"; // Add css for bubble theme
import MyButton from "../../shared/MyButton";
export default () => {
  const [imageBase64, setImageBase64] = React.useState(null);
  const [renderHtml, setRenderHtml] = React.useState(false);
 
  const { quill, quillRef } = useQuill({
    theme,
    modules,
    formats,
    placeholder
  });

  const setupReader = file => {
    //this is just for displaying on editors, it done by default the same. 
    //just delete this custom method and everythig will remain the same
    const reader = new FileReader();
    reader.addEventListener("load", e => {
      
      setImageBase64(e.target.result);
      insertToEditor(e.target.result);
    });
    reader.readAsDataURL(file);
  };

  const insertToEditor = url => {
    //the url parameter can accept 64data or web address, so can copress it or just get address
    
    const range = quill.getSelection();
    quill.insertEmbed(range.index, "image", url);
  };

  // Upload Image to Image Server such as AWS S3, Cloudinary, Cloud Storage, etc..
  const saveToServer = async file => {
    const body = new FormData();
    body.append("file", file);

    const res = await fetch("Your Image Server URL", { method: "POST", body });
    // insertToEditor(res.uploadedImageUrl);
  };

  // Open Dialog to select Image File
  const selectLocalImage = () => {
    const result =  window.confirm("Do you want to insert url?");
 
if(result) {
  const value = prompt('What is the image URL');
    
  insertToEditor(value);
} else {
     // 
     const input = document.createElement("input");
     input.setAttribute("type", "file");
     input.setAttribute("accept", "image/*");
     input.click();

   input.onchange = () => {
     
       const file = input.files[0];
      console.log("file: " + file);
      setupReader(file);
    //   // insertToEditor(file);
    //   // saveToServer(file);
     };
}
   
    // 
    // const input = document.createElement("input");
    // input.setAttribute("type", "file");
    // input.setAttribute("accept", "image/*");
    // input.click();

    // input.onchange = () => {
    //   
    //   const file = input.files[0];
    //   console.log("file: " + file);
    //   setupReader(file);
    //   // insertToEditor(file);
    //   // saveToServer(file);
    // };
  };

  React.useEffect(() => {
    
    if (quill) {
      // Add custom handler for Image Upload
      quill.getModule("toolbar").addHandler("image", selectLocalImage);
    }
  }, [quill]);
  if (quill) {
    // Add custom handler for Image Upload

    quill.on("text-change", function(delta, oldDelta, source) {
      
      
      if (source === "api") {
        console.log("An API call triggered this change.");
      } else if (source === "user") {
        console.log("A user action triggered this change.");
       console.log( quill.getContents());
       console.log(quill.root.innerHTML);
      }
      setRenderHtml(false)
    });
  }
   const onClick = ()=>{
      setRenderHtml(true)
   }
  return (
   <React.Fragment>
      <div className='editorWrapper' style={{  }}>
      <div ref={quillRef} />
      {quill&& <div style={{height:'500px',background:'#ddd'}} dangerouslySetInnerHTML={{ __html: quill.root.innerHTML }} />}
    </div>
    <MyButton buttonType='green' value='save' onClick={onClick}/>
   </React.Fragment>
  );
};
