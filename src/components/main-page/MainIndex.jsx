import React from 'react'
import Hero from './Hero'
import About from './About'
import  BlogLimit  from './BlogLimit'
import FormContact from './FormContact'


export default function MainIndex() {
    return (
        <React.Fragment>
            <Hero />
            <About />
            <BlogLimit />
            <FormContact />
        </React.Fragment>
    )
}
