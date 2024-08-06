import axios from "axios";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { MapsContext } from "../../contexts/maps/mapsContext";
import styles from '../../pages/Maps/Maps.module.css'

type mapClickedProps = {
    status: number;
    data: Array<clickedDataProps>;
}

type clickedDataProps = {
    uuid: string;
    displayName: string;
    displayIcon: string;
    splash: string;
    tacticalDescription: string;
    coordinates: string;
    callouts?: [
        {
            regionName: string,
            superRegionName: string
        }
    ]
}

export default function ShowMapChoosed(): JSX.Element | undefined {
    const[mapsRegions, setMapsRegions] = useState<boolean>(false)

    const {data} = useQuery<mapClickedProps>('mapsFetch', async () => {
        const response = await axios.get('https://valorant-api.com/v1/maps?language=pt-BR');
        return response.data;
    }, {refetchOnWindowFocus: false});

    const {mapName} = useContext(MapsContext);
    const mapClicked: Array<clickedDataProps> | undefined = data?.data.filter(map => map.displayName.toLowerCase() === mapName);

    if (mapClicked && mapName.length > 2) {
        try {
            let withoutSide: string = ''
            if (mapClicked[0].tacticalDescription) { 
                const bombSite: Array<string> = mapClicked[0].tacticalDescription.split(' ')
                bombSite.pop();
                withoutSide = bombSite.join(' ')
            }
            return (
                <>
                    <section className={styles.mapClicked}>
                    <div className={styles.superiorDiv}>
                        <img src={mapClicked[0].splash} alt={`Foto do mapa ${mapClicked[0].displayName}`} />
                        <div className={styles.informationsAboutMapClicked}>
                            <h1>{mapClicked[0].displayName}</h1>
                            <p>Bombs: {mapClicked[0].tacticalDescription ? withoutSide : <span>Este mapa não possui Bombs</span>}</p>
                            <p>Coordenadas: {mapClicked[0].coordinates ? mapClicked[0].coordinates : <span>Este mapa não possui Coordenadas</span>}</p>
                            {mapClicked[0].displayIcon && <img src={mapClicked[0].displayIcon} alt={`Foto do minimapa de ${mapClicked[0].displayName}`} />}
                        </div>
                    </div>
                    <div className={styles.inferiorDiv}>
                        <section className={styles.informationsSection}>
                            {mapClicked[0].callouts &&
                            <>
                            <button
                            type="button" 
                            onClick={() => setMapsRegions(mapsRegions ? false : true)}>Clique para mostrar/esconder as regiões do mapa {mapClicked[0].displayName}
                            </button>
                            {mapsRegions && <div className={styles.regionsDiv}>
                                {mapClicked[0].callouts.map((region, index) => (
                                    <span key={index}>
                                        <h2>Bomb {region.superRegionName}</h2>
                                        <h3>Nome: {region.regionName}</h3>
                                    </span>
                                ))}
                            </div>}
                            </>
                            }
                        </section>
                    </div>
                    </section>
                </>
            )
        } catch (err) {
            alert(`Mapa não encontrado, tente novamente! \nEscreveu o nome do mapa de forma correta? Se não consegue achar por aqui você pode encontra-lo na lista completa de mapas abaixo!`);
        }
    }
}