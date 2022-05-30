import React from 'react';
import '../Styles/Nav.css';

function Nav() {
  return(
    <nav className="nav-container">
      <ol>
        <li className="btn">Informações Pessoais</li>
        <li className="btn">Minhas Habilidades</li>
        <li className="btn">Musicas para Estudar</li>
        <li className="btn">Projetos da Trybe</li>
      </ol>
    </nav>
  );
}

export default Nav;