import { Button } from '@material-ui/core';
import React from 'react';
import "./css/SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>10 stays, 26 august to 30 august, 2 guests</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">
                   Cancellation flexibility
                </Button>
                <Button variant="outlined">
                   Type of place 
                </Button>
                <Button variant="outlined">
                   Price 
                </Button>
                <Button variant="outlined">
                   Rooms and beds
                </Button>
                <Button variant="outlined">
                   More filters
                </Button>
            </div>

            <SearchResult 
               img="https://a0.muscache.com/im/pictures/miso/Hosting-45470584/original/e6b03c08-6274-4568-af7d-763157444a13.jpeg?im_w=960"
               location="Spacious Apartment in Osaka"
               title="Over 120㎡★Osaka Castle 5min.★sub. station 1min."
               description="9 guests · 3 rooms · 3 beds · 1.5 bathrooms"
               star={4.73}
               price="$68/night"
               total="$272"
            />

            <SearchResult 
               img="https://a0.muscache.com/im/pictures/0ea61b63-8d77-421c-a678-14783d20eeb8.jpg?im_w=960"
               location="Fukushima-ku, Ōsaka-shi, Ōsaka-fu, Japan"
               title="Newly built house, 2min from sta w/ great access"
               description="11 guests · 3 rooms · 6 beds · 1.5 bathrooms"
               star={4.83}
               price="$88/night"
               total="$352"
            /> 

            <SearchResult 
               img="https://a0.muscache.com/im/pictures/5ec53b99-0b8d-45f7-ad83-bf749993eb28.jpg?im_w=960"
               location="Naniwa Ward, Osaka, Japan"
               title="屋上露天風呂★無料駐車場★JR難波駅徒歩7分★道頓堀★心斎橋 ★Free WIFI"
               description=""
               star={5}
               price="$120/night"
               total="$480"
            /> 

            <SearchResult 
               img="https://a0.muscache.com/im/pictures/679b941f-6020-4a0f-af4b-615e25084ff5.jpg?im_w=960"
               location="Osaka, Japan"
               title="#「泉-SEN」 PET可/USJ近/一軒家/プロジェクター/難波10分/5ベッド/近隣有料駐車場"
               description="10 guests · 4 rooms · 6 beds · 1.5 bathrooms"
               star={4.13}
               price="$45/night"
               total="$180"
            /> 

            <SearchResult 
               img="https://a0.muscache.com/im/pictures/miso/Hosting-15028068/original/8d5f5e37-0dd1-438a-98f2-17a52bae5339.jpeg?im_w=960"
               location="Osaka, Japan"
               title="KU1 3 Stories Big House in Umeda 11pax 100㎡"
               description="8 guests · 2 rooms · 3 beds · 1 bathroom"
               star={4.60}
               price="$125/night"
               total="$500"
            /> 

            <SearchResult 
               img="https://a0.muscache.com/im/pictures/7ded7926-9d27-4b6b-b0f0-85256c30b670.jpg?im_w=960"
               location="Nagoya City, Aichi-ken, Japan"
               title="6-min to Nagoya Sta★Near Sakae/Max 6ppl☆wi-fi#32"
               description="6 guests · 2 rooms · 3 beds · 1 bathroom"
               star={4.68}
               price="$67/night"
               total="$268"
            /> 

            <SearchResult 
               img="https://a0.muscache.com/im/pictures/26b92f91-27b3-405c-83d3-5a9189b38563.jpg?im_w=960"
               location="Shizuoka, Japan"
               title="Let's enjoy BBQ at Tiny Base The River HOUSE!!"
               description="12 guests · 3 rooms · 6 beds · 1.5 bathrooms"
               star={4.96}
               price="$78/night"
               total="$312"
            /> 

            <SearchResult 
               img="https://a0.muscache.com/im/pictures/bad5a770-b742-48d6-9349-b6925a7b6ee6.jpg?im_w=960"
               location="Kawazu, Kamo District, Shizuoka, Japan"
               title="Stuninng tiny house at THE ROCK" 
               description="5 guests · 2 rooms · 2 beds · 1 bathroom"
               star={4.90}
               price="$60/night"
               total="$240"
            /> 

            <SearchResult 
               img="https://a0.muscache.com/im/pictures/07eda303-0a89-419e-a7b8-1b788ef4e6f0.jpg?im_w=960"
               location="Nagano, Japan"
               title="Elegant, secluded cabin for couples and families"
               description="11 guests · 2 rooms · 6 beds · 1.5 bathrooms"
               star={4.99}
               price="$150/night"
               total="$600"
            /> 

            <SearchResult 
               img="https://a0.muscache.com/im/pictures/decd08d1-ef51-4497-a9f5-7962334e391c.jpg?im_w=960"
               location="Hakone-machi, Ashigarashimo-gun, Kanagawa-ken, Japan"
               title="Peaceful private villa w/ 100% natural hot spa."
               description="8 guests · 3 rooms · 6 beds · 1.5 bathrooms"
               star={4.88}
               price="$145/night"
               total="$580"
            /> 
        </div>
    )
}

export default SearchPage
