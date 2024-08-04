import ShowAllMaps from '../../hooks/maps/ShowAllMaps';
import ShowMapChoosed from '../../hooks/maps/ShowMapChoosed';
import styles from './Maps.module.css';
import Form from '../../components/Form';
import { useContext } from 'react';
import { MapsContext } from '../../contexts/maps/mapsContext';

export default function Maps(): JSX.Element {
    const {toSetMapName} = useContext(MapsContext);

    return (
        <>
        <section className={styles.mapsSection}>
            <h1>Bem-Vindo(a) à área de mapas!</h1>
            <h2>Procurando um mapa específico? Digite abaixo</h2>
            {Form('Exemplo: Lotus, Ascent, Haven e etc..', toSetMapName)}
            <h2>Não encontrou o mapa que desejava? Procure-a abaixo na lista completa de mapas!</h2>
            <hr />
        </section>
        {ShowMapChoosed && <ShowMapChoosed/>}
        <ShowAllMaps/>
        </>
    )
}