import React, { Component } from 'react'
import Editor from './slate-editor/Editor'
import Editor_Hover from './slate-editor/Editor_Hover'

export default class BlogEdit extends Component {
    render() {
        return (
            <div className=' blogEditor'>
               <div className="container">
               <h1>Write something...</h1>
               <Editor_Hover />
               </div>
               
            </div>
        )
    }
}
