import React from 'react'
import Hero from './Hero'
import About from './About'
import  BlogLimit  from './BlogLimit'

export default function MainIndex() {
    return (
        <React.Fragment>
            <Hero />
            <About />
            <BlogLimit />
        </React.Fragment>
    )
}
