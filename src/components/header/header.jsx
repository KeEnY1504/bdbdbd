import React from 'react';
import styles from './header.module.scss';
import logo from '../../assets/imges/maps_2953336.png';
import burger from '../../assets/imges/Icon.svg';

import { Link } from 'react-router-dom'; // Импортируем Link
import Routes from '../../Routes';

export default function HeaderTop() {
    return (
        <header className={styles.header} id='header'>
            <div className={styles.header__container}>
                <div className={styles.header__container_logo}>
                    <img src={logo} alt="" width='65px' height='65px'/>
                    <a href="">Jokis</a>
                </div>
                <div className={styles.header__container_navbar}>
                    <div className={styles.hamburger_menu}>
                        <div className={styles.hamburger} id="burgerOpen" ><img src={burger} alt="burgerOpen" /></div>
                        <div className={styles.hamburger__modal} id="menuItems">
                                <div className={styles.close} id="burgerClose" width='48px' height='48px'><img src="./assets/img/close.svg" alt="" /></div>
                                <ul className={styles.hamburger__nav_links}>
                                    <a href='' className={styles.button}>Главная</a>
                                    <a href="" className={styles.button}>Достопримечательности</a>
                                    <a href="" className={styles.button_contact}>Контакты</a>
                                </ul>
                        </div>
                    </div>
                    <ul className={styles.nav_links}>
                        <li><a href="">Главная</a></li>
                        <li><a href="">Достопримечательности</a></li>
                        <li><a href="">Контакты</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}