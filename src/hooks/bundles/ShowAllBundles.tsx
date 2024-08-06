import { useQuery } from 'react-query';
import axios from 'axios';
import '../../styles/globalStyles.css'

type allBundlesProps = {
    status: number;
    data: Array<allDataProps>;
}

type allDataProps = {
    uuid: string
    displayName: string;
    displayIcon: string;
}

export default function ShowAllBundles(): JSX.Element {
    const {data, isFetching} = useQuery<allBundlesProps>('bundlesFetch', async () => {
        const response = await axios.get('https://valorant-api.com/v1/bundles?language=pt-BR');
        return response.data;
    }, {refetchOnWindowFocus: false});

    return (
        <>
        {isFetching && <h1 className='loading'>Carregando...</h1>}
        <section className='showAllCards'>
            {data?.data.map(bundle => (
                <div key={bundle.displayName + bundle.uuid}>
                    <img src={bundle.displayIcon} alt={`Foto do bundle ${bundle.displayName}`}/>
                    <p>{bundle.displayName}</p>
                </div>
            ))}
        </section>
        </>
    );
}