import ShowAgentChoosed from '../../hooks/agents/ShowAgentChoosed';
import ShowAllAgents from '../../hooks/agents/ShowAllAgents';
import FormAgents from '../../hooks/agents/FormAgents';
import styles from "./Agents.module.css"

export default function Agents(): JSX.Element {
    return (
    <>
    <section className={styles.agentsSection}>
        <h1>Bem-Vindo(a) à área de agentes!</h1>
        <h2>Procurando um agente específico? Digite abaixo</h2>
        <FormAgents/>
        <h2>Não encontrou o agente que desejava? Procure-o abaixo na lista completa de agentes!</h2>
        <hr />
    </section>
    {ShowAgentChoosed && <ShowAgentChoosed/>}
    <ShowAllAgents/>
    </>
    )
}