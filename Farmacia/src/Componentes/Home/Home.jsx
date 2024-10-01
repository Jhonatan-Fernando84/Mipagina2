import AsideComponente from '../Aside/AsideComponente';
import './Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <AsideComponente />

      <section className="intro-section">
        <h1>Bienvenidos a nuestra farmacia</h1>
        <p>Salud y bienestar para ti y tu familia</p>
        <img
          src="/public/Img/Home/La buena salud.jpg"
          alt="Logo de la Farmacia"
          className="home-logo"
        />
      </section>

      <section className="about-section">
        <h2>¿Quiénes somos?</h2>
        <p>Somos una farmacia creada en el año de 1984 en el centro de Medellín, capital de Antioquia,</p>
        <p>con gran vocación de servicio y amor por lo que hacemos.</p>
      </section>
    </div>
  );
}

export default Home;


