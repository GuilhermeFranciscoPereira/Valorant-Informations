import { AgentProvider } from "./agents/agentContext"
import { GunProvider } from "./guns/gunsContext";

const AppProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    return (
        <>
            <AgentProvider>
                <GunProvider>
                    {children}
                </GunProvider>
            </AgentProvider>
        </>
    )
}

export default AppProvider;