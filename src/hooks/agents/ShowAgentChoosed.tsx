import { useContext } from 'react';
import { useQuery } from 'react-query';
import { AgentContext } from '../../contexts/agents/agentContext';
import axios from 'axios';
import styles from '../../pages/Agents/Agents.module.css'

type agentClickedProps = {
    status: number;
    data: Array<clickedDataProps>;
}

type clickedDataProps = {
    uuid: string;
    displayName: string;
    description: string;
    fullPortrait: string;
    role: {
        displayName: string;
        description: string;
        displayIcon: string;
    }
    abilities: [
        {
        displayName: string;
        description: string;
        displayIcon: string;
        },
        {
            displayName: string;
            description: string;
            displayIcon: string;
        },
        {
            displayName: string;
            description: string;
            displayIcon: string;
        },
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
                        <img src={agentClicked[0].fullPortrait} alt={"Foto do agente" + agentClicked[0].displayName} />
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
                        <div className={styles.abilitiesDiv}>
                            <h2>{agentClicked[0].abilities[0].displayName}</h2>
                            <p>{agentClicked[0].abilities[0].description}</p>
                            <img src={agentClicked[0].abilities[0].displayIcon} alt={`Icone da Habilidade: ${agentClicked[0].abilities[0].displayName}`} />
                        </div>
                        <div className={styles.abilitiesDiv}>
                            <h2>{agentClicked[0].abilities[1].displayName}</h2>
                            <p>{agentClicked[0].abilities[1].description}</p>
                            <img src={agentClicked[0].abilities[1].displayIcon} alt={`Icone da Habilidade: ${agentClicked[0].abilities[1].displayName}`} />
                        </div>
                        <div className={styles.abilitiesDiv}>
                            <h2>{agentClicked[0].abilities[2].displayName}</h2>
                            <p>{agentClicked[0].abilities[2].description}</p>
                            <img src={agentClicked[0].abilities[2].displayIcon} alt={`Icone da Habilidade: ${agentClicked[0].abilities[2].displayName}`} />
                        </div>
                        <div className={styles.abilitiesDiv}>
                            <h2>{agentClicked[0].abilities[3].displayName}</h2>
                            <p>{agentClicked[0].abilities[3].description}</p>
                            <img src={agentClicked[0].abilities[3].displayIcon} alt={`Icone da Habilidade: ${agentClicked[0].abilities[3].displayName}`} />
                        </div>
                        </section>
                        <hr/>
                        
                    </div>
                    </section>
                    }
                </>
            )
        } catch (err) {
            alert(`Agente não encontrado, tente novamente! \nEscreveu o nome do agente de forma correta? Se não consegue achar por aqui você pode encontra-lo na lista completa de agentes abaixo!`);
        } finally {
            const inputAgentName: HTMLInputElement = document.querySelector('#agentNameInput') as HTMLInputElement
            inputAgentName.value = ''
        }
    }
}