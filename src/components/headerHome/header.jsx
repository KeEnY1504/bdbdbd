import React from 'react';
import styles from './header.module.scss';
import logo from '../../assets/imges/maps_2953336.png';
import burger from '../../assets/imges/Icon.svg';
import Arrow from '../../assets/imges/Arrow left.svg';

import { Link } from 'react-router-dom'; // Импортируем Link
import Routes from '../../Routes';

export default function HeaderTop() {
    return (
        <header className={styles.header} id='header'>
            <div className={styles.header__container}>
                <div className={styles.header__container_logo}>
                    <img src={logo} alt="" width='65px' height='65px'/>
                    <Link to={'/'}>Jokis</Link>
                </div>
                <div className={styles.header__container_navbar}>
                    <div className={styles.hamburger_menu}>
                        <div className={styles.hamburger} id="burgerOpen" ><img src={burger} alt="burgerOpen" /></div>
                        <div className={styles.hamburger__modal} id="menuItems">
                                <div className={styles.close} id="burgerClose" width='48px' height='48px'><img src="./assets/img/close.svg" alt="" /></div>
                                <ul className={styles.hamburger__nav_links}>
                                    <Link to={'/'} className={styles.button}>Главная</Link>
                                    <Link to={'/attractions'} className={styles.button}>Достопримечательности</Link>
                                    <Link to={'/contacts'} className={styles.button_contact}>Контакты</Link>
                                </ul>
                        </div>
                    </div>
                    <ul className={styles.nav_links}>
                        <li><Link to={'/'}>Главная</Link></li>
                        <li><Link to={'/attractions'}>Достопримечательности</Link></li>
                        <li><Link to={'/contacts'}>Контакты</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.header__intro}>
                <p className={styles.intro}>Дербент</p>
                <p className={styles.pov_intro}>что и где?</p>
                <a href="#blocks" ><img src={Arrow} alt="" /></a>
            </div>
        </header>
    );
}