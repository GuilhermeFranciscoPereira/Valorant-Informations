import axios from "axios";
import { useQuery } from "react-query";
import styles from "../../pages/Maps/Maps.module.css"
import { useContext } from "react";
import { MapsContext } from "../../contexts/maps/mapsContext";

type allMapsProps = {
    status: number;
    data: Array<allDataProps>;
}

type allDataProps = {
    uuid: string
    displayName: string;
    splash: string;
}

export default function ShowAllMaps(): JSX.Element {
    const {data, isFetching} = useQuery<allMapsProps>('mapsFetch', async () => {
        const response = await axios.get('https://valorant-api.com/v1/maps?language=pt-BR');
        return response.data;
    }, {refetchOnWindowFocus: false});

    const {toSetMapName} = useContext(MapsContext)

    return (
        <>
        {isFetching && <h1 className={styles.loading}>Carregando...</h1>}
        <h2 className={styles.howToUse}>Clique no mapa que deseja saber sobre!</h2>
        <section className={styles.showAllMaps}>
            {data?.data.map(map => {
                if (map.displayName != 'Treinamento Básico' && map.uuid != 'ee613ee9-28b7-4beb-9666-08db13bb2244') {
                    return (
                        <div key={map.displayName} onClick={() => (toSetMapName(map.displayName.toLowerCase()))}>
                        <img src={map.splash} alt={"Foto do mapa " + map.displayName}/>
                        <p>{map.displayName}</p>
                    </div>
                    )
                }
            })}
        </section>
        </>
    );
}