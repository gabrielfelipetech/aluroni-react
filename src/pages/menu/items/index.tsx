import { useEffect, useState } from 'react';
import { Item } from './item'
import menu from './items.json'
import styles from './style.module.scss'
interface props {
    busca: string;
    filter: number | null;
    computer: string
}
export function Items(props: props) {
    const { busca, computer, filter } = props
    const [list, setList] = useState(menu)
    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i');
        return regex.test(title)
    }
    function testaFiltro(id: number) {
        if (!!filter) return filter === id
        return true
    }
    function order(newList: typeof menu) {
        switch (computer) {
            case 'porcao':
                return newList.sort((a, b) => a.size > b.size ? 1 : -1)
            case 'qtd_pessoas':
                return newList.sort((a, b) => a.serving > b.serving ? 1 : -1)
            case 'preco':
                return newList.sort((a, b) => a.price > b.price ? 1 : -1)
                default: 
                return newList
        }
    }
    useEffect(() => {
        const newList = menu.filter((item) => testaBusca(item.title) && testaFiltro(item.category.id))
        setList(order(newList))
    }, [busca, filter, computer])

    return (
        <div className={styles.itens}>
            {list.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    )
}