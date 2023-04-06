import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Manage from "./components/Manage.jsx";
import About from "./components/About.jsx";
import Stats from "./components/Stats.jsx";
import Blog from "./components/Blog.jsx";
import Customers from "./components/Customers.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Documents from "./components/Documents.jsx";

import {
    apple,
    atlassian,
    audi,
    bitbucket,
    facebook,
    facebook1,
    medium,
    telegram,
    twitter,
} from "./assets/js/importIcons.js";


function App() {

    const menu = [
        {id: 1, name: 'Home', link: "home"},
        {id: 2, name: 'Blog', link: "blog"},
        {id: 3, name: 'Features', link: "about"},
        {id: 4, name: 'Pricing', link: "pricing"},
        {id: 5, name: 'Documentation', link: "documentation"},

    ];

    const social = [
        {id: 1, alt: 'facebook', src: facebook, link: "#"},
        {id: 2, alt: 'telegram', src: telegram, link: "#"},
        {id: 3, alt: 'twitter', src: twitter, link: "#"},
        {id: 4, alt: 'medium', src: medium, link: "#"},
    ]

    const company = [
        {id: 1, img: bitbucket, alt: "bitbucket"},
        {id: 2, img: apple, alt: "apple"},
        {id: 3, img: facebook1, alt: "facebook"},
        {id: 4, img: atlassian, alt: "atlassian"},
        {id: 5, img: audi, alt: "audi"},
    ];

    const items = [
        {
            title: "Reque insolens in vel?",
            content: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.\n"
        },
        {
            title: "Vis rebum error graecis ea, id sit postea accusamus?",
            content: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.\n"
        },
        {
            title: "Lorem repudiandae ne nec?",
            content: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.\n"
        },
        {
            title: "Ad dicit numquam vel. Et eos iudico feugait percipitur?",
            content: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.\n"
        },
        {
            title: "Sea no dico percipitur. Fierent constituam definitiones id eum?",
            content: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.\n"
        }
    ];

    return (
        <>
            <Header menu={menu} social={social}/>
            <main className="с-main" id="home">
                <Hero/>
                <Customers company={company}/>
                <Manage/>
                <About/>
                <Stats/>
                <Blog/>
                <Testimonials/>
                {/*<Documents items={items}/>*/}
            </main>
        </>)
}

export default App
