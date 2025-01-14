import React from 'react';
import styles from './Attractions.module.scss'


function AttractionsPage() {
    return (
      <section className={styles.dep} id="dep">
        <div className={styles.dep__box}>
            <div className={styles.top}>
                <div className={styles.top_bottoms}>
                    <label>
                        Сортировка
                            <select id="sort">
                                <option value="none">Без сортировки</option>
                                <option value="popularity">По популярности (высокая)</option>
                                <option value="-popularity">По популярности (низкая)</option>
                            </select>
                    </label>
                    <label>
                        Фильтрация
                            <select id="filtrs">
                                <option value="">Без фильтра</option>
                                <option value="district">По району</option>
                                <option value="type">По типу</option>
                            </select>
                    </label>
                </div>
                <input id='search_input' type="search" />
            </div>
            <div id="result">
                {/* <!-- буги буги))) --> */}
            </div>
            <div className={styles.dep__cards} id="dep__cards">
                <div className={styles.loader_display}>
                    <span className={styles.loader}></span>
                </div>
                {/* <!-- прогрузка карточек --> */}
            </div>
            <div id="pagination">
                
            </div>
        </div>
      </section>
    );
  }

export default AttractionsPage