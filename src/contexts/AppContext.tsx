import { AgentProvider } from "./agents/agentContext"

const AppProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    return (
        <>
            <AgentProvider>
                {children}
            </AgentProvider>
        </>
    )
}

export default AppProvider;