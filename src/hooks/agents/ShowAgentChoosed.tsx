import { useContext } from 'react';
import { AgentContext } from '../../contexts/agents/agentContext';
import { useQuery } from 'react-query';
import axios from 'axios';
import styles from '../../pages/Agents/Agents.module.css'

type agentClickedProps = {
    status: number;
    data: Array<clickedDataProps>;
}

type clickedDataProps = {
    displayName: string;
    description: string;
    fullPortrait: string;
    role: {
        displayName: string;
        description: string;
    }
    abilities: [
        {
            displayName: string;
            description: string;
            displayIcon: string;
        }
    ]
}

export default function ShowAgentChoosed(): JSX.Element | undefined {
    const {data} = useQuery<agentClickedProps>('agentsFetch', async () => {
        const response = await axios.get('https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true');
        return response.data;
    }, {refetchOnWindowFocus: false});

    const {agentName} = useContext(AgentContext);
    const agentClicked: Array<clickedDataProps> | undefined = data?.data.filter(agent => agent.displayName.toLowerCase() === agentName);

    if (agentClicked && agentName.length > 2) {
        try {
            return (
            <>
                {<section className={styles.agentClicked}>
                <div className={styles.superiorDiv}>
                    <img src={agentClicked[0].fullPortrait} alt={`Foto do agente ${agentClicked[0].displayName}`} />
                    <div className={styles.informationsAboutAgentClicked}>
                        <h1>{agentClicked[0].displayName}</h1>
                        <p>{agentClicked[0].description}</p>
                        <h2>{agentClicked[0].role.displayName}</h2>
                        <p>{agentClicked[0].role.description}</p>
                    </div>
                </div>
                <div className={styles.inferiorDiv}>
    
                    <h2>Habilidades:</h2>
                    <hr />
                    <section className={styles.abilities}>
                        {agentClicked[0].abilities.map((abilitieMap, index) => (
                            <div className={styles.abilitiesDiv} key={index}>
                                <h2>{abilitieMap.displayName}</h2>
                                <p>{abilitieMap.description}</p>
                                <img src={abilitieMap.displayIcon} alt={`Icone da Habilidade: ${abilitieMap.displayName}`} />
                            </div>
                        ))}
                    </section>
                    <hr/>
                </div>
                </section>
                }
            </>
            )
        } catch (err) {
            alert(`Agente não encontrado, tente novamente! \nEscreveu o nome do agente de forma correta? Se não consegue achar por aqui você pode encontra-lo na lista completa de agentes abaixo!`);
        }
    }
}