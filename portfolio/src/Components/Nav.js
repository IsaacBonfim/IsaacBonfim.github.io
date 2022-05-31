import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Nav.css';

function Nav() {
  return(
    <nav className="nav-container">
      <ol>
        <li><Link className="link" to="/portfolio/">Início</ Link></li>
        <li><Link className="link" to="/portfolio/Sobre">Sobre mim</ Link></li>
        <li><Link className="link" to="/portfolio/Contato">Contato</ Link></li>
        <li><Link className="link" to="/portfolio/Projetos">Projetos</ Link></li>
      </ol>
    </nav>
  );
}

export default Nav;