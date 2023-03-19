import React from 'react';

import Hero from '../Component/Hero';

const About = () => {
    return (
        <>
            <Hero
                title='Welcome to About Page'
                button='Conatct Now'
                link='/contact'
                img='about.png'
            />
        </>
    );
};

export default About;
