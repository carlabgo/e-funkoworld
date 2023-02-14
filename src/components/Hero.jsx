import { Link } from 'react-router-dom';
import './styles/Hero.css';

const Hero = ({ title }) => {
    return (
        <section className="hero hero-slide">
            <div className="hero-container">
                <article className="hero-container__text-box">
                    <h1>
                        {title}
                    </h1>
                        <p>La tienda donde encontraras todos tus productos favoritos de Funko®!</p>
                    <Link to="/products"><button className="button-primary">Comprar</button></Link>
                </article>
            </div>
        </section>
    )
}

export default Hero