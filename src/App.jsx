import facebook from "./assets/img/social/facebook.svg";
import telegram from "./assets/img/social/telegramm.svg";
import twitter from "./assets/img/social/twitter.svg";
import medium from "./assets/img/social/medium.svg";
import bitbucket from "./assets/img/icon/bitbucket.svg";
import apple from "./assets/img/icon/apple-watch.svg";
import facebook1 from "./assets/img/icon/facebook.svg";
import atlassian from "./assets/img/icon/atlassian.svg";
import audi from "./assets/img/icon/audi.svg";


import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Customers from "./components/Customers.jsx";

function App() {

    const menu = [
        {id: 1, name: 'Home', link: "#"},
        {id: 2, name: 'Blog', link: "#"},
        {id: 3, name: 'Features', link: "#"},
        {id: 4, name: 'Pricing', link: "#"},
        {id: 5, name: 'Documentation', link: "#"},

    ];
    const social = [
        {id: 1, alt: 'facebook', src: facebook, link: "#"},
        {id: 2, alt: 'telegram', src: telegram, link: "#"},
        {id: 3, alt: 'twitter', src: twitter, link: "#"},
        {id: 4, alt: 'medium', src: medium, link: "#"},
    ]

    const company = [
        { img: bitbucket, alt: "bitbucket" },
        { img: apple, alt: "apple" },
        { img: facebook1, alt: "facebook" },
        { img: atlassian, alt: "atlassian" },
        { img: audi, alt: "audi" },
    ];

    return (
        <>
            <Header menu={menu} social={social}/>
            <main className="с-main">
                <Content/>
                <Customers company={company}/>
            </main>
        </>)
}

export default App
