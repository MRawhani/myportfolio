

import { useQuill } from "react-quilljs";
// or const { useQuill } = require('react-quilljs');

 const theme = "snow";

 const modules = {
   toolbar: [
     ["bold", "italic", "underline", "strike"],
     [{ align: [] }],
     ["blockquote", "code-block"],
     [{ list: "ordered" }, { list: "bullet" }],
     [{ indent: "-1" }, { indent: "+1" }],

     [{ size: ["small", false, "large", "huge"] }],
     [{ header: [1, 2, 3, 4, 5, 6, false] }],
     ["link", "image", "video"],
     [{ color: [] }, { background: [] }],
     [{ 'direction': 'rtl' }],

     ["clean"]
   ],
   clipboard: {
     matchVisual: false
   }
 };

 const placeholder = "Compose an epic...";

 const formats = [
   "bold",
   "italic",
   "underline",
   "strike",
   "align",
   "list",
   "indent",
   "size",
   "header",
   "link",
   "image",
   "video",
   "color",
   'direction',
   "background",
   "clean",
   "blockquote",
   "code-block",
   'clean'
 ];
 export  { 
   theme,
   modules,
   formats,
   placeholder
 }