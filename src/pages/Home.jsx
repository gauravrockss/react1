import React from 'react';

import Hero from '../Component/Hero';

const Home = () => {
    return (
        <>
            <Hero
                title='Grow your business with'
                button='Get Started'
                link='/services'
                img='home.svg'
            />
        </>
    );
};

export default Home;
