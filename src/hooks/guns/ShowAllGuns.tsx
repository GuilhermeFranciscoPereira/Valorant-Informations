import { useQuery } from 'react-query';
import axios from 'axios';
import { useContext } from 'react';
import { GunContext } from '../../contexts/guns/gunsContext';
import '../../styles/globalStyles.css'

type allGunsProps = {
    status: number;
    data: Array<allDataProps>;
}

type allDataProps = {
    displayName: string;
    displayIcon: string;
}

export default function ShowAllGuns(): JSX.Element {
    const {data, isFetching} = useQuery<allGunsProps>('gunsFetch', async () => {
        const response = await axios.get('https://valorant-api.com/v1/weapons?language=pt-BR');
        return response.data;
    }, {refetchOnWindowFocus: false});

    const {toSetGunName} = useContext(GunContext);

    return (
        <>
        {isFetching && <h1 className='loading'>Carregando...</h1>}
        {!isFetching && <h2 className='howToUse'>Clique na arma que deseje saber sobre!</h2>}
        <section className='showAllCards'>
            {data?.data.map(gun => {
                if (gun.displayName != "Confronto") {
                return (
                    <div key={gun.displayName} onClick={() => (toSetGunName(gun.displayName.toLowerCase()))}>
                    <img src={gun.displayIcon} alt={`Foto da arma ${gun.displayName}`}/>
                    <p>{gun.displayName}</p>
                </div>
                )
                }
            })}
        </section>
        </>
    );
}