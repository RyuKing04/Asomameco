import { useParams } from "react-router-dom";

const Home = () => {
  const { correo } = useParams();

  return (
    <div>
      <h2>Bienvenido a la página de inicio</h2>
      <p>Correo: {correo}</p>
    </div>
  );
};

export default Home;
