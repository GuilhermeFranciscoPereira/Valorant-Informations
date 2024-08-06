import axios from "axios";
import { useQuery } from "react-query";
import { useContext } from "react";
import { MapsContext } from "../../contexts/maps/mapsContext";
import '../../styles/globalStyles.css'

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
        {isFetching && <h1 className='loading'>Carregando...</h1>}
        {!isFetching && <h2 className='howToUse'>Clique no mapa que deseja saber sobre!</h2>}
        <section className='showAllCards'>
            {data?.data.map(map => {
                if (map.displayName != 'Treinamento Básico' && map.uuid != 'ee613ee9-28b7-4beb-9666-08db13bb2244') {
                    return (
                        <div key={map.displayName} onClick={() => (toSetMapName(map.displayName.toLowerCase()))}>
                        <img src={map.splash} alt={`Foto do mapa ${map.displayName}`}/>
                        <p>{map.displayName}</p>
                    </div>
                    )
                }
            })}
        </section>
        </>
    );
}