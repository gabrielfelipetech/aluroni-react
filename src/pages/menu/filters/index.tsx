import filters from "./filters.json";
import styles from './style.module.scss';

type IOpcion = typeof filters[0];

export default function Filters() {

  function selectFilter(opcion: IOpcion) {

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