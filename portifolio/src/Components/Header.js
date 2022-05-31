import React from 'react';
import Nav from './Nav';
import '../Styles/Header.css';

function Header() {
  return(
    <>
      <header className="topo">
        <span className="header-title">O</span>
        <span className="header-title">i</span>
        <span className="header-title">,</span>
        <span className="header-title space">-</span>
        <span className="header-title">e</span>
        <span className="header-title">u</span>
        <span className="header-title space">-</span>
        <span className="header-title">s</span>
        <span className="header-title">o</span>
        <span className="header-title">u</span>
        <span className="header-title space">-</span>
        <span className="header-title">I</span>
        <span className="header-title">s</span>
        <span className="header-title">a</span>
        <span className="header-title">a</span>
        <span className="header-title">c</span>
        <span className="header-title space">-</span>
        <span className="header-title">O</span>
        <span className="header-title">l</span>
        <span className="header-title">i</span>
        <span className="header-title">v</span>
        <span className="header-title">e</span>
        <span className="header-title">i</span>
        <span className="header-title">r</span>
        <span className="header-title">a</span>
      </header>
      <Nav />
    </>
  );
}

export default Header;