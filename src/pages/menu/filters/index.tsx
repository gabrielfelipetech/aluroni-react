import filters from "./filters.json";
import styles from './style.module.scss';

type IOpcion = typeof filters[0];
interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export  function Filters({ filter, setFilter }: Props) {
  function selectFilter(opcion: IOpcion) {
    if (filter === opcion.id) return setFilter(null);
    return setFilter(opcion.id);
  }
  return (
    <div className={styles.filtros}>
      {filters.map(opcion => (
        <button className={styles.filtros__filtro} key={opcion.id} onClick={() => selectFilter(opcion)}>
          {opcion.label}
        </button>
      ))}
    </div>
  )
}