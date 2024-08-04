import { createContext, useState } from "react";

type mapsContextProps = {
    mapName: string,
    toSetMapName: (map: string) => void;
}

const MapsContext = createContext<mapsContextProps>({} as mapsContextProps)

const MapsProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    const [mapName, setMapname] = useState<string>('');

    function toSetMapName(map: string): void {
        setMapname(map);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const inputMapName: HTMLInputElement = document.querySelector('#FormNameInput') as HTMLInputElement
        inputMapName.value = ''
    }
    
    return (
        <MapsContext.Provider value={{mapName, toSetMapName}}>
            {children}
        </MapsContext.Provider>
    )
}

export {MapsProvider, MapsContext}