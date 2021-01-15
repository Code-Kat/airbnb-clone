import Card from './Card';
import React from 'react';
import Banner from './Banner';
import './css/Home.css';


function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                />

                <Card 
                    src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=320"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                />

                <Card 
                    src="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=320"
                    title="Animals welcome"
                    description="Stays where pets are welcome."
                />

            </div>
            
            <div className="home__section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/9c0309cc-7b0e-41cd-9c98-6a6d8a7ecf2b.jpg?im_w=960"
                    title="For【Weekly / Telework】2nd floor/2Sta. to Namba, Tokyo"
                    description="Perfect for working from home."
                />

                <Card 
                    src="https://a0.muscache.com/im/pictures/9ead74dd-57d0-404c-abf1-02b4f20b6bb0.jpg?im_w=960"
                    title="160㎡★Grand Piano♪ nr JR Shinjuku stn./Studio House"
                    description="House 4 bedrooms that can accommodate a maximum of 11 guests."
                />

                <Card 
                    src="https://a0.muscache.com/im/pictures/06754920-ee43-4d4f-bee4-0e0a65b624b1.jpg?im_w=960"
                    title="Karuizawa Architect's Tiny House"
                    description="Modernist tiny house built in 1968 in the forests of Kitakaruizawa’s Mount Asama."
                />

            </div>
        
        </div>
    )
}

export default Home
