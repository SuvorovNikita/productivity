import Header from "./components/Header.jsx";
import facebook from "./assets/img/social/facebook.svg";
import telegram from "./assets/img/social/telegramm.svg";
import twitter from "./assets/img/social/twitter.svg";
import medium from "./assets/img/social/medium.svg";
import Content from "./components/Content.jsx";

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

    return (
        <>
            <Header menu={menu} social={social}/>
            <main className="с-main">
                <Content/>
            </main>
        </>)
}

export default App
