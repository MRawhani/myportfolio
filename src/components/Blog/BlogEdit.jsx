import React, { Component } from 'react'
//import Editor from './slate-editor/Editor'
import EditorQuill from './slate-editor/EditorQuill'

export default class BlogEdit extends Component {
    render() {
        return (
            <div className=' blogEditor'>
               <div className="container">
               <h1>Write something...</h1>
               <EditorQuill />
               </div>
               
            </div>
        )
    }
}
