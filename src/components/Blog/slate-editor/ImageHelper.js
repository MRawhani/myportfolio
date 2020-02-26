export default class ImageHelper {
  constructor() {
   
   
    this.image64 =''
  }
  setupReader = file => {
    //this is just for displaying on editors, it done by default the same
    const reader = new FileReader();
    reader.addEventListener("load", e => {
      
      //   setImageBase64(e.target.result);
      //   insertToEditor(e.target.result);
      return  new Promise.resolve(e.target.result);
    });
    reader.readAsDataURL(file).then(res=>this.image64 =res.data);
  };

   selectLocalImage = () => {
    
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      
      const file = input.files[0];
      console.log("file: " + file);
     this.setupReader(file);
      
      // insertToEditor(file);
      // saveToServer(file);
    };
  };
  getImage64=()=>{
      this.selectLocalImage();
      return  this.image64;
    
  }
}
