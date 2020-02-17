import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class Editor extends Component {
    constructor (){
        super();
        this.state={editorData:'Write some Blog'}
    }
    onChange =(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
        this.setState({
            editorData:data
        })
      }
  render() {
    return (
      <div className="Editor">
      
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          config={{
            disableNativeSpellChecker:false,
            image: {
                // You need to configure the image toolbar, too, so it uses the new style buttons.
                toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight' ],
    
                styles: [
                    // This option is equal to a situation where no style is applied.
                    'full',
    
                    // This represents an image aligned to the left.
                    'alignLeft',
    
                    // This represents an image aligned to the right.
                    'alignRight'
                ]
            },
            heading: {
              options: [
                {
                  model: "paragraph",
                  title: "Paragraph",
                  class: "ck-heading_paragraph"
                },
                {
                  model: "heading1",
                  view: "h1",
                  title: "Heading 1",
                  class: "ck-heading_heading1"
                },
                {
                  model: "heading2",
                  view: "h2",
                  title: "Heading 2",
                  class: "ck-heading_heading2"
                }
              ]
            }
          }}
          
          onInit={editor => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={this.onChange}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
          onError={(err) => {
            alert(err)
          }}
        />

      {/* <div dangerouslySetInnerHTML={{ __html: this.state.editorData }} /> */}
      </div>
    );
  }
}

export default Editor;
