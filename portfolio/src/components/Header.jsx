import React from 'react';
import "../components/css/Header.css";
import logo from "../img/logo.png";

export default function Header() {
    
  return (
    
    <div>
        <div className="headerMenu">
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="namePerson">Ekaterina Plesser</div>
            <div className="navbar">
                <a href="#magic">ВОЛШЕБСТВО</a>
                <a href="#">СЛОВО</a>
                <a href="#">СЛОВО</a>
                <a href="#">СЛОВО</a>
            </div>
        </div>

    </div>
  )
}
