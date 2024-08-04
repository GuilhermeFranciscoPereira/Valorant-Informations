import { createContext, useState } from "react";

type agentContextProps = {
    agentName: string;
    toSetAgentName: (name: string) => void;
}

const AgentContext = createContext<agentContextProps>( {} as agentContextProps );

const AgentProvider = ({ children }: { children: React.ReactNode}): JSX.Element => {
    const [agentName, setAgentName] = useState<string>('');

    function toSetAgentName(name: string) {
        setAgentName(name);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const inputAgentName: HTMLInputElement = document.querySelector('#FormNameInput') as HTMLInputElement
        inputAgentName.value = ''
    }
    
    return (
        <AgentContext.Provider value={{ agentName, toSetAgentName }}>
            {children}
        </AgentContext.Provider>
    )
}

export {AgentProvider, AgentContext}