import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Customers from "./components/Customers.jsx";
import Manage from "./components/Manage.jsx";
import {
    apple,
    atlassian,
    audi,
    bitbucket,
    facebook,
    facebook1,
    medium,
    telegram,
    twitter
} from "./assets/js/importIcons.js";


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
        {img: bitbucket, alt: "bitbucket"},
        {img: apple, alt: "apple"},
        {img: facebook1, alt: "facebook"},
        {img: atlassian, alt: "atlassian"},
        {img: audi, alt: "audi"},
    ];

    return (
        <>
            <Header menu={menu} social={social}/>
            <main className="с-main">
                <Hero/>
                <Customers company={company}/>
                <Manage/>
            </main>
        </>)
}

export default App
