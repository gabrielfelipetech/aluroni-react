import React, { Component, useState } from 'react'
import styles from './style.module.scss'
import Logo from "../../assets/logo.svg";
import {SearchEngine} from './searchEngine';
import {Filters} from './filters';
import {Computer} from './computer';
import { Items } from './items';
export function Menu() {
    const [busca, setBusca] = useState("");
    const [filter, setFilter] = useState<number | null>(null)
    const [computer, setComputer] = useState('')
    return (
        <main>
        <nav className={styles.menu}>
        <img src={Logo} alt="" />
        </nav>
        <header className={styles.header}>
          <div className={styles.header__text}>
            A casa do código e da massa
          </div>
        </header>
        <section className={styles.cardapio}>
          <h3 className={styles.cardapio__titulo}>Cardápio</h3>
          <SearchEngine busca={busca} setBusca={setBusca} />
          <div className={styles.cardapio__filtros}>
            <Filters filter={filter} setFilter={setFilter}/>
            <Computer computer={computer} setComputer={setComputer}/>
          </div>
          <Items busca={busca} filter={filter} computer={computer}/>
        </section>
      </main>
    )
}