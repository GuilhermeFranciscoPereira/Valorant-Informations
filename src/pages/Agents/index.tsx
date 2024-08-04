import ShowAgentChoosed from '../../hooks/agents/ShowAgentChoosed';
import ShowAllAgents from '../../hooks/agents/ShowAllAgents';
import styles from "./Agents.module.css";
import Form from '../../components/Form';
import { useContext } from 'react';
import { AgentContext } from '../../contexts/agents/agentContext';

export default function Agents(): JSX.Element {
    const {toSetAgentName} = useContext(AgentContext);

    return (
    <>
    <section className={styles.agentsSection}>
        <h1>Bem-Vindo(a) à área de agentes!</h1>
        <h2>Procurando um agente específico? Digite abaixo</h2>
        {Form('Exemplo: Brimstone, Phoenix, Harbor e etc..', toSetAgentName)}
        <h2>Não encontrou o agente que desejava? Procure-o abaixo na lista completa de agentes!</h2>
        <hr />
    </section>
    {ShowAgentChoosed && <ShowAgentChoosed/>}
    <ShowAllAgents/>
    </>
    )
}