import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Nav.css';

function Nav() {
  return(
    <nav className="nav-container">
      <ol>
        <li><Link className="link" to="/portifolio/">Início</ Link></li>
        <li><Link className="link" to="/portifolio/Sobre">Sobre mim</ Link></li>
        <li><Link className="link" to="/portifolio/Contato">Contato</ Link></li>
        <li><Link className="link" to="/portifolio/Projetos">Projetos</ Link></li>
      </ol>
    </nav>
  );
}

export default Nav;