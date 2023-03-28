import 'swiper/swiper-bundle.min.css';
import Slider from "./slider/Slider.jsx";

const Blog = () => {
    return (
        <section className="c-section c-section--base c-section--bg-light c-section--slider" id="blog">
            <div className="c-section__hero-3">
                <div className="container">
                    <div className="c-section__header">
                        <div className="c-section__text-3">OUR RESOURCES</div>
                        <h2 className="c-section__title-2">Start reading our blog</h2>
                    </div>
                    <Slider/>
                </div>
            </div>
        </section>
    )
}

export default Blog;