import { AgentProvider } from "./agents/agentContext"
import { GunProvider } from "./guns/gunsContext";
import { MapsProvider } from "./maps/mapsContext";

const AppProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    return (
        <>
            <AgentProvider>
                <GunProvider>
                    <MapsProvider>
                        {children}
                    </MapsProvider>
                </GunProvider>
            </AgentProvider>
        </>
    )
}

export default AppProvider;