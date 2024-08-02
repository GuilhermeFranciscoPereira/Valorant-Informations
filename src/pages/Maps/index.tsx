import FormMaps from '../../hooks/maps/FormMaps'
import ShowAllMaps from '../../hooks/maps/ShowAllMaps'
import ShowMapChoosed from '../../hooks/maps/ShowMapChoosed'
import styles from './Maps.module.css'

export default function Maps(): JSX.Element {
    return (
        <>
        <section className={styles.mapsSection}>
            <h1>Bem-Vindo(a) à área de mapas!</h1>
            <h2>Procurando um mapa específico? Digite abaixo</h2>
            <FormMaps/>
            <h2>Não encontrou o mapa que desejava? Procure-a abaixo na lista completa de mapas!</h2>
            <hr />
        </section>
        {ShowMapChoosed && <ShowMapChoosed/>}
        <ShowAllMaps/>
        </>
    )
}