import React from 'react';
import Hero from '../../Components/Hero'
import PopularPlaces from '../../Components/PopularPlaces'
import PopularTrips from '../../Components/PopularTrips'
import BestTravelers from '../../Components/BestTravelers'
import EmailSave from '../../Components/EmailSave'

function Home() {
    return (
        <>  
            <Hero />
            <PopularPlaces />
            <PopularTrips />
            <BestTravelers />
            <EmailSave />
        </>
    )
}

export default Home;
