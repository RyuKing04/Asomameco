import React from 'react';

const IndexPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-20 px-4">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a la Página Principal</h1>
      <p className="text-lg mb-2">Esta es una página básica para usuarios logueados.</p>
      <p className="text-lg mb-2">Aquí podrías mostrar información relevante para el usuario.</p>
      <p className="text-lg mb-2">Por ejemplo:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Enlaces a otras secciones de la aplicación.</li>
        <li>Información sobre el usuario logueado.</li>
        <li>Noticias, actualizaciones o mensajes importantes.</li>
      </ul>
      <p className="text-lg">¡Explora y disfruta!</p>
    </div>
  );
};

export default IndexPage;
