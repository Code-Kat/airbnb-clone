(this["webpackJsonpairbnb-clone"]=this["webpackJsonpairbnb-clone"]||[]).push([[0],{65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){},89:function(e,t,s){},90:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(0),i=s.n(a),r=s(24),n=s.n(r);s(65),s(66),s(67);var o=function(e){var t=e.src,s=e.title,a=e.description,i=e.price;return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("img",{src:t,alt:"rental-location"}),Object(c.jsxs)("div",{className:"card__info",children:[Object(c.jsx)("h2",{children:s}),Object(c.jsx)("h4",{children:a}),Object(c.jsx)("h3",{children:i})]})]})},j=s(31),l=(s(68),s(105)),b=(s(69),s(49)),h=(s(78),s(79),s(50)),d=s.n(h),m=s(5);var u=function(){var e=Object(m.f)(),t=Object(a.useState)(new Date),s=Object(j.a)(t,2),i=s[0],r=s[1],n=Object(a.useState)(new Date),o=Object(j.a)(n,2),h=o[0],u=o[1],p={startDate:i,endDate:h,key:"selection"};return Object(c.jsxs)("div",{className:"search",children:[Object(c.jsx)(b.DateRangePicker,{ranges:[p],onChange:function(e){r(e.selection.startDate),u(e.selection.endDate)}}),Object(c.jsxs)("h2",{children:["Number of guests",Object(c.jsx)(d.a,{})]}),Object(c.jsx)("input",{min:0,placeholder:2,type:"number"}),Object(c.jsx)(l.a,{onClick:function(){return e.push("/search")},children:"Search Airbnb"})]})};s(84);var p=function(){var e=Object(m.f)();return Object(c.jsxs)("div",{className:"mobileSearch",children:[Object(c.jsxs)("div",{className:"mobileSearch__info",children:[Object(c.jsx)("h1",{children:"Find stays on Airbnb"}),Object(c.jsx)("p",{children:"Discover private roooms or entire homes parfectly adapted for all types of travel. "})]}),Object(c.jsx)("div",{className:"mobileSearch__city",children:Object(c.jsx)("input",{type:"text",placeholder:"Where are you going?"})}),Object(c.jsxs)("div",{className:"mobileSearch__dates",children:[Object(c.jsxs)("div",{className:"mobileSearch__date",children:[Object(c.jsx)("p",{children:"START"}),Object(c.jsx)("input",{type:"date"})]}),Object(c.jsxs)("div",{className:"mobileSearch__date",children:[Object(c.jsx)("p",{children:"END"}),Object(c.jsx)("input",{type:"date"})]})]}),Object(c.jsxs)("div",{className:"mobileSearch__travellers",children:[Object(c.jsxs)("div",{className:"mobileSearch__traveller",children:[Object(c.jsx)("p",{children:"ADULTS"}),Object(c.jsx)("input",{type:"number",placeholder:2})]}),Object(c.jsxs)("div",{className:"mobileSearch__traveller",children:[Object(c.jsx)("p",{children:"CHILDREN"}),Object(c.jsx)("input",{type:"number",placeholder:0})]})]}),Object(c.jsx)(l.a,{className:"mobileSearch__button",onClick:function(){return e.push("/search")},variant:"outlined",children:"Search"})]})};var O=function(){var e=Object(m.f)(),t=Object(a.useState)(!1),s=Object(j.a)(t,2),i=s[0],r=s[1];return Object(c.jsxs)("div",{className:"banner",children:[Object(c.jsxs)("div",{className:"banner__search",children:[Object(c.jsx)("div",{className:"banner__bigSearch",children:i&&Object(c.jsx)(u,{})}),Object(c.jsx)("div",{className:"banner__smallSearch",children:i&&Object(c.jsx)(p,{})}),Object(c.jsx)(l.a,{onClick:function(){return r(!i)},className:"banner__searchButton",variant:"outlined",children:i?"Hide":"Search Dates"})]}),Object(c.jsx)("div",{className:"banner__infoContainer",children:Object(c.jsxs)("div",{className:"banner__info",children:[Object(c.jsx)("h1",{children:"Get out and stretch your imagination"}),Object(c.jsx)("h5",{children:"Plan a different kind of geteway to uncover the hidden gems near you."}),Object(c.jsx)(l.a,{onClick:function(){return e.push("/search")},variant:"outlined",children:"Explore Nearby"})]})})]})};s(85);var x=function(){return Object(c.jsxs)("div",{className:"home",children:[Object(c.jsx)(O,{}),Object(c.jsxs)("div",{className:"home__section",children:[Object(c.jsx)(o,{src:"https://i.pinimg.com/originals/df/21/60/df2160a5af5c9cc2d246b8e919bb66ff.jpg",title:"Entire homes",description:"Comfortable private places, with room for friends or family."}),Object(c.jsx)(o,{src:"https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=320",title:"Unique stays",description:"Spaces that are more than just a place to sleep."}),Object(c.jsx)(o,{src:"https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=320",title:"Pets welcome",description:"Stays where pets are welcome."})]}),Object(c.jsxs)("div",{className:"home__section",children:[Object(c.jsx)(o,{src:"https://a0.muscache.com/im/pictures/9c0309cc-7b0e-41cd-9c98-6a6d8a7ecf2b.jpg?im_w=960",title:"For\u3010Weekly / Telework\u30112nd floor/2Sta. to Namba, Tokyo",description:"Perfect for working from home.",price:"$89/night"}),Object(c.jsx)(o,{src:"https://a0.muscache.com/im/pictures/9ead74dd-57d0-404c-abf1-02b4f20b6bb0.jpg?im_w=960",title:"160\u33a1\u2605Grand Piano\u266a nr JR Shinjuku stn./Studio House",description:"4 bedrooms, up to 11 guests.",price:"$120/night"}),Object(c.jsx)(o,{src:"https://a0.muscache.com/im/pictures/06754920-ee43-4d4f-bee4-0e0a65b624b1.jpg?im_w=960",title:"Architect's Tiny House",description:"Modernist house, near Mount Asama, Karuizawa",price:"$65/night"})]})]})},g=(s(86),s(54)),f=s.n(g),_=s(56),v=s.n(_),N=s(55),S=s.n(N),y=s(106),w=s(20);var k=function(){return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)(w.b,{to:"/",children:Object(c.jsx)("img",{className:"header__icon",src:"https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png",alt:"logo"})}),Object(c.jsxs)("div",{className:"header__center",children:[Object(c.jsx)("input",{type:"text"}),Object(c.jsx)(f.a,{className:"header__searchIcon"})]}),Object(c.jsxs)("div",{className:"header__right",children:[Object(c.jsx)("p",{children:"Become a host"}),Object(c.jsx)(S.a,{className:"headerRight__languageIcon"}),Object(c.jsx)(v.a,{className:"headerRight__expandMoreIcon"}),Object(c.jsx)(y.a,{})]})]})};s(87);var $=function(){return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("p",{children:"\u263a No rights reserved. This is a demo."}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Privacy"})," \xb7 ",Object(c.jsx)("span",{children:"Terms"})," \xb7 ",Object(c.jsx)("span",{children:"Sitemap"})," \xb7 ",Object(c.jsx)("span",{children:"Company Details"})]})]})},R=(s(88),s(89),s(57)),C=s.n(R),T=s(43),D=s.n(T);var J=function(e){var t=e.img,s=e.location,a=e.title,i=e.description,r=e.star,n=e.price,o=e.total;return Object(c.jsxs)("div",{className:"searchResult",children:[Object(c.jsx)("img",{src:t,alt:"search-result"}),Object(c.jsx)(C.a,{className:"searchResult__heart"}),Object(c.jsxs)("div",{className:"searchResult__info",children:[Object(c.jsxs)("div",{className:"searchResult__infoMobile",children:[Object(c.jsxs)("div",{className:"searchResult__stars",children:[Object(c.jsx)(D.a,{className:"searchResult__star"}),Object(c.jsx)("p",{children:Object(c.jsx)("strong",{children:r})})]}),Object(c.jsx)("div",{className:"searchResult__priceMobile",children:Object(c.jsx)("h2",{children:n})})]}),Object(c.jsxs)("div",{className:"searchResult__infoTop",children:[Object(c.jsx)("p",{children:s}),Object(c.jsx)("h3",{children:a}),Object(c.jsx)("p",{children:"____"}),Object(c.jsx)("p",{children:i})]}),Object(c.jsxs)("div",{className:"searchResult__infoBottom",children:[Object(c.jsxs)("div",{className:"searchResult__stars",children:[Object(c.jsx)(D.a,{className:"searchResult__star"}),Object(c.jsx)("p",{children:Object(c.jsx)("strong",{children:r})})]}),Object(c.jsxs)("div",{className:"searchResult__price",children:[Object(c.jsx)("h2",{children:n}),Object(c.jsx)("p",{children:o})]})]})]})]})};var P=function(){return Object(c.jsxs)("div",{className:"searchPage",children:[Object(c.jsxs)("div",{className:"searchPage__info",children:[Object(c.jsx)("p",{children:"10 stays, 26 august to 30 august, 2 guests"}),Object(c.jsx)("h1",{children:"Stays nearby"}),Object(c.jsx)(l.a,{variant:"outlined",children:"Cancellation flexibility"}),Object(c.jsx)(l.a,{variant:"outlined",children:"Type of place"}),Object(c.jsx)(l.a,{variant:"outlined",children:"Price"}),Object(c.jsx)(l.a,{variant:"outlined",children:"Rooms and beds"}),Object(c.jsx)(l.a,{variant:"outlined",children:"More filters"})]}),Object(c.jsx)("div",{className:"searchPage__mobileButton",children:Object(c.jsx)(l.a,{variant:"outlined",children:"Filters"})}),Object(c.jsx)(J,{img:"https://a0.muscache.com/im/pictures/miso/Hosting-45470584/original/e6b03c08-6274-4568-af7d-763157444a13.jpeg?im_w=960",location:"Spacious Apartment in Osaka",title:"Over 120\u33a1\u2605Osaka Castle 5min.\u2605sub. station 1min.",description:"9 guests \xb7 3 rooms \xb7 3 beds \xb7 1.5 bathrooms",star:4.73,price:"$68/night",total:"$272"}),Object(c.jsx)(J,{img:"https://a0.muscache.com/im/pictures/0ea61b63-8d77-421c-a678-14783d20eeb8.jpg?im_w=960",location:"Fukushima-ku, \u014csaka-shi, \u014csaka-fu, Japan",title:"Newly built house, 2min from sta w/ great access",description:"11 guests \xb7 3 rooms \xb7 6 beds \xb7 1.5 bathrooms",star:4.83,price:"$88/night",total:"$352"}),Object(c.jsx)(J,{img:"https://a0.muscache.com/im/pictures/5ec53b99-0b8d-45f7-ad83-bf749993eb28.jpg?im_w=960",location:"Naniwa Ward, Osaka, Japan",title:"\u5c4b\u4e0a\u9732\u5929\u98a8\u5442\u2605\u7121\u6599\u99d0\u8eca\u5834\u2605JR\u96e3\u6ce2\u99c5\u5f92\u6b697\u5206\u2605Free WIFI",description:"10 guests \xb7 3 rooms \xb7 5 beds \xb7 1.5 bathrooms",star:5,price:"$120/night",total:"$480"}),Object(c.jsx)(J,{img:"https://a0.muscache.com/im/pictures/679b941f-6020-4a0f-af4b-615e25084ff5.jpg?im_w=960",location:"Osaka, Japan",title:"#\u300c\u6cc9-SEN\u300d PET\u53ef/USJ\u8fd1/\u4e00\u8ed2\u5bb6/\u30d7\u30ed\u30b8\u30a7\u30af\u30bf\u30fc/\u96e3\u6ce210\u5206",description:"10 guests \xb7 4 rooms \xb7 6 beds \xb7 1.5 bathrooms",star:4.13,price:"$45/night",total:"$180"}),Object(c.jsx)(J,{img:"https://a0.muscache.com/im/pictures/miso/Hosting-15028068/original/8d5f5e37-0dd1-438a-98f2-17a52bae5339.jpeg?im_w=960",location:"Osaka, Japan",title:"KU1 3 Stories Big House in Umeda 11pax 100\u33a1",description:"8 guests \xb7 2 rooms \xb7 3 beds \xb7 1 bathroom",star:4.6,price:"$125/night",total:"$500"}),Object(c.jsx)(J,{img:"https://a0.muscache.com/im/pictures/7ded7926-9d27-4b6b-b0f0-85256c30b670.jpg?im_w=960",location:"Nagoya City, Aichi-ken, Japan",title:"6-min to Nagoya Sta\u2605Near Sakae/Max 6ppl\u2606wi-fi#32",description:"6 guests \xb7 2 rooms \xb7 3 beds \xb7 1 bathroom",star:4.68,price:"$67/night",total:"$268"}),Object(c.jsx)(J,{img:"https://a0.muscache.com/im/pictures/26b92f91-27b3-405c-83d3-5a9189b38563.jpg?im_w=960",location:"Shizuoka, Japan",title:"Let's enjoy BBQ at Tiny Base The River HOUSE!!",description:"12 guests \xb7 3 rooms \xb7 6 beds \xb7 1.5 bathrooms",star:4.96,price:"$78/night",total:"$312"}),Object(c.jsx)(J,{img:"https://a0.muscache.com/im/pictures/bad5a770-b742-48d6-9349-b6925a7b6ee6.jpg?im_w=960",location:"Kawazu, Kamo District, Shizuoka, Japan",title:"Stuninng tiny house at THE ROCK",description:"5 guests \xb7 2 rooms \xb7 2 beds \xb7 1 bathroom",star:4.9,price:"$60/night",total:"$240"}),Object(c.jsx)(J,{img:"https://a0.muscache.com/im/pictures/07eda303-0a89-419e-a7b8-1b788ef4e6f0.jpg?im_w=960",location:"Nagano, Japan",title:"Elegant, secluded cabin for couples and families",description:"11 guests \xb7 2 rooms \xb7 6 beds \xb7 1.5 bathrooms",star:4.99,price:"$150/night",total:"$600"}),Object(c.jsx)(J,{img:"https://a0.muscache.com/im/pictures/decd08d1-ef51-4497-a9f5-7962334e391c.jpg?im_w=960",location:"Hakone-machi, Ashigarashimo-gun, Kanagawa-ken, Japan",title:"Peaceful private villa w/ 100% natural hot spa.",description:"8 guests \xb7 3 rooms \xb7 6 beds \xb7 1.5 bathrooms",star:4.88,price:"$145/night",total:"$580"})]})};var B=function(){return Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)(w.a,{children:[Object(c.jsx)(k,{}),Object(c.jsxs)(m.c,{children:[Object(c.jsx)(m.a,{path:"/search",children:Object(c.jsx)(P,{})}),Object(c.jsx)(m.a,{path:"/",children:Object(c.jsx)(x,{})})]}),Object(c.jsx)($,{})]})})},E=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,107)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),i(e),r(e)}))};n.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root")),E()}},[[90,1,2]]]);
//# sourceMappingURL=main.a8c51479.chunk.js.map