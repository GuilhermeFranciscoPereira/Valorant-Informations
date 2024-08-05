import { useContext } from 'react';
import { useQuery } from 'react-query';
import { AgentContext } from '../../contexts/agents/agentContext';
import axios from 'axios';
import '../../styles/globalStyles.css'

type allAgentsProps = {
    status: number;
    data: Array<allDataProps>;
}

type allDataProps = {
    displayName: string;
    fullPortrait: string;
}

export default function ShowAllAgents(): JSX.Element {
    const {data, isFetching} = useQuery<allAgentsProps>('agentsFetch', async () => {
        const response = await axios.get('https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true');
        return response.data;
    }, {refetchOnWindowFocus: false});

    const {toSetAgentName} = useContext(AgentContext);

    return (
        <>
        {isFetching && <h1 className='loading'>Carregando...</h1>}
        <h2 className='howToUse'>Clique no agente que deseja saber sobre!</h2>
        <section className='showAllCards'>
            {data?.data.map(agent => (
                <div key={agent.displayName} className='cardAgents' onClick={() => toSetAgentName(agent.displayName.toLowerCase())}>
                    <img src={agent.fullPortrait} alt={"Foto do agente" + agent.displayName}/>
                    <p>{agent.displayName}</p>
                </div>
            ))}
        </section>
        </>
    );
}