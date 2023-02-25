import React, { useState } from "react"
import styles from './style.module.scss'
import options from './options.json'
import classNames from "classnames"
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
interface props {
    computer: string;
    setComputer: React.Dispatch<React.SetStateAction<string>>
}
export  function Computer({computer, setComputer}: props){
    const [aberto, setAberto] = useState(false)
    const computerName = computer && options.find(option => option.value === computer)?.nome
    return (
        <button className={classNames({
            [styles.ordenador]:true,
            [styles["ordenador--ativo"]]: !!computer ,
        })} onClick={() => setAberto(!aberto)} onBlur={() => setAberto(false)}>
            <span>{computerName || "Ordenar por"}</span>
            {aberto ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/> }
            <div className={classNames({
                [styles.ordenador__options]:true,
                [styles['ordenador__options--ativo']]:aberto
            })}>
                {options.map((option) => (
                    <div className={styles.ordenador__option} key={option.value} onClick={() => setComputer(option.value)}>
                        {option.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}