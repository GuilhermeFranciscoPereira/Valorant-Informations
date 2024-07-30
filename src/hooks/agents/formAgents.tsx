import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { AgentContext } from '../../contexts/agents/agentContext';
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';

export default function FormAgents(): JSX.Element {
    // Create the Form in the hooks 'cause we not want render all times the user write (using the useState). With useForm just send the datas when the user click in the submit button or press the enter

    const agentNameSchema = z.object({
        agentName: z.string().toLowerCase()
    });

    type agentNameSchemaProps = z.infer<typeof agentNameSchema>

    const { register, handleSubmit } = useForm<agentNameSchemaProps>({
        resolver: zodResolver(agentNameSchema),
    });

    const {toSetAgentName} = useContext(AgentContext);

    function sendTheAgentName(data: agentNameSchemaProps): void {
        toSetAgentName(data.agentName)
    }

    return (
        <form onSubmit={handleSubmit(sendTheAgentName)}>
            <input 
            type="text" 
            placeholder="Exemplo: Brimstone, Phoenix, Harbor e etc.."
            id='agentNameInput'
            {...register('agentName')}
            />
            <button type="submit">🔍</button>
        </form>
    )
}