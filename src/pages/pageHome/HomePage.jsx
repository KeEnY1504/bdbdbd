import React from 'react';
import styles from './HomePage.module.scss';
import factOne from '../../assets/imges/box1.svg';
import factTwo from '../../assets/imges/box2.svg';
import factThree from '../../assets/imges/box3.svg';
import { Link } from 'react-router-dom'; // Импортируем Link
import AttractionsPage from '../AttractionsPage/AttractionsPage';


export default function HomePage() {
    return (
        <section className={styles.bloks} id="blocks">
            <div className={styles.bloks__block1}>
                <p className={styles.intro}>КАК ПОЯВИЛСЯ?</p>
                <div className={styles.bloks__block1_intro}>
                    <p>
                        Город <span>Дербент</span> основан в 438 году персидской династией <span>Сасанидов</span>, превративших в V-VI веках Дербент в настоящую <span>каменную крепость</span>. <span>Шах Кавад</span> (486-531 гг.) закладывает здесь каменную крепость, а его сын <span>Хосров I Ануширван</span> (531-579 гг.) в 562-571 гг. перегораживает проход между морем и горами 40-километровой <span>крепостной стеной</span>, возводит мощную цитадель <span>Нарын-Кала</span> и сооружает порт.
                    </p>
                </div>
            </div>
            <div className={styles.bloks__block2}>
                <p className={styles.intro}>ИНТЕРЕСНЫЕ ФАКТЫ</p>
                <div className={styles.bloks__block2_boxs}>
                    <div className={styles.box}>
                        <img src={factOne} alt="Факт 1" width="238" height="150" /> 
                        <p className={styles.box_intro}>
                            Древнейший город - <span style={{ color: '#BF9424' }}>Дербент</span> считается одним из самых древних городов России и мира. Его история насчитывает более 5000 лет, и он был важным <span style={{ color: '#D92525' }}>торговым</span> и <span style={{ color: '#D92525' }}>культурным центром</span> на протяжении веков.
                        </p>
                    </div>
                    <div className={styles.box}>
                        <img src={factTwo} alt="Факт 2" width="238" height="150" /> 
                        <p className={styles.box_intro}>
                            <span style={{ color: '#BF9424' }}>Крепость Нарын-Кала</span> - Одна из старейших крепостей в мире — <span style={{ color: '#D92525' }}>Нарын-Кала</span>, которая была построена в V веке н.э. Эта крепость является наследием <span style={{ color: '#D92525' }}>ЮНЕСКО</span> и служила стратегическим оборонительным сооружением.
                        </p>
                    </div>
                    <div className={styles.box}>
                        <img src={factThree} alt="Факт 3" width="238" height="150" /> 
                        <p className={styles.box_intro}>
                            Город <span style={{ color: '#BF9424' }}>Дербент</span> - располагается ниже Мирового океана на 19 метров. <span style={{ color: '#D92525' }}>Географический факт</span>: для сравнения — самый низко расположенный город в мире <span style={{ color: '#D92525' }}>Эйн-Бокек</span> на 404 метра ниже уровня Мирового океана.
                        </p>
                    </div>
                </div>
            </div>
            <Link to={AttractionsPage}>dddd</Link>
        </section>
    );
}