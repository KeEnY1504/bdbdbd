import React from "react";
import styles from './footer.module.scss';
import { Link } from 'react-router-dom'; // Импортируем Link

//img
import IconTele from '../../assets/imges/free-icon-telegram-2111646.png';
import IconVK from '../../assets/imges/free-icon-vk-3670055.png';
import IconInst from '../../assets/imges/free-icon-instagram-4494488.png';
import IconYou from '../../assets/imges/free-icon-youtube-4494485.png';

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container_logo}>
          <p>Jokis</p>
        </div>
        <div className={styles.footer__container_navbar}>
          <ul className={styles.nav_links}>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/attractions">Достопримечательности</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
          </ul>
        </div>
        <div className={styles.footer__container_social}>
          <a href="#" className={styles.social_link}><img src={IconTele} alt="Telegram" width="50px" height="50px" /></a>
          <a href="#" className={styles.social_link}><img src={IconVK} alt="VK" width="50px" height="50px" /></a>
          <a href="#" className={styles.social_link}><img src={IconInst} alt="Instagram" width="50px" height="50px" /></a>
          <a href="#" className={styles.social_link}><img src={IconYou} alt="YouTube" width="50px" height="50px" /></a>
        </div>
      </div>
      <div className={styles.footer__copyright}>
        <p style={{ color: 'white' }}>&copy; 2024 Путеводитель по городу. Все права защищены.</p>
      </div>
    </section>
  );
}