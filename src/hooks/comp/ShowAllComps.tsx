import { useQuery } from 'react-query';
import axios from 'axios';
import '../../styles/globalStyles.css'

type allCompsProps = {
    status: number;
    data: Array<allDataProps>;
}

type allDataProps = {
    tiers: [
        {
            tierName: string,
            color: string,
            backgroundColor: string,
            largeIcon: string,
        }
    ]
}

export default function ShowAllComps(): JSX.Element {
    const {data, isFetching} = useQuery<allCompsProps>('compFetch', async () => {
        const response = await axios.get('https://valorant-api.com/v1/competitivetiers?language=pt-BR');
        return response.data;
    }, {refetchOnWindowFocus: false});

    return (
        <>
        {isFetching && <h1 className='loading'>Carregando...</h1>}
        <section className='showAllCards'>
            {data?.data[0].tiers.map((comp, index) => { 
                if(comp.tierName != 'Unused1' && comp.tierName !== 'Unused2') {
                return (
                <div key={index}>
                    <img src={comp.largeIcon} alt={"Foto do rank" + comp.largeIcon}/>
                    <p>{comp.tierName}</p>
                </div>
                )}
            })}
        </section>
        </>
    );
}