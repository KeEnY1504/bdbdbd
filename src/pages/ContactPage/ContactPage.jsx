import React from "react";
import styles from "./contactpage.module.scss"


//fotes
import IconTele from '../../assets/imges/free-icon-telegram-2111646.png';
import IconVK from '../../assets/imges/free-icon-vk-3670055.png';
import IconGmail from '../../assets/imges/gmail.svg';
import IconHelp from '../../assets/imges/help.svg';



export default function ContactPage() {
    return (
        <section className={styles.helping}>
            <div className={styles.helping__container}>
                <h1 className={styles.helping__container_title}>Контакты</h1>
                <p>Мы рады ответить на ваши вопросы ежедневно с 9:00 до 21:00 по Москве. </p>
            </div>
            <div className={styles.helping__boxs_1}>
                <div className={styles.box}>
                    <img src={IconTele} alt="" width="40px" height="40px" />
                    <a href="#" className={styles.box__title}>
                        <p>Telegram</p>
                        <p style={{ fontSize: '18px' }}>@Jokis_city</p>
                    </a>
                </div>

                <button id="open-modal-btn" className={styles.box}>
                    <img src={IconHelp} alt="" width="40px" height="40px" />
                    <p style={{ textAlign: 'center', width: '277px', height:' 30px', fontSize: '26px'}}>Связаться с нами</p>
                </button>

                <div className={styles.box}>
                    <img src={IconVK} alt="" width="40px" height="40px" />
                    <a href="#" className={styles.box__title} style={{alignItems: 'start'}}>
                        <p>Вконтакте</p>
                        <p style={{ fontSize: '18px' }}>@Jokis_city</p>
                    </a>
                </div>
            </div>
            <div className={styles.helping__boxs_2}>
                <div className={styles.box}>
                    <img src={IconGmail} alt="" width="40px" height="40px" />
                    <a href="#" className={styles.box__title}>
                        <p>Общие вопросы</p>
                        <p style={{ fontSize: '18px' }}>hi_jokis@gmail.com</p>
                    </a>
                </div>
                <div className={styles.box}>
                    <img src={IconGmail} alt="" width="40px" height="40px" />
                    <a href="#" className={styles.box__title}>
                        <p>Юр. вопросы</p>
                        <p style={{ fontSize: '18px' }}>legal_jokis@gmail.com</p>
                    </a>
                </div>
            </div>
        </section>
    );
};
