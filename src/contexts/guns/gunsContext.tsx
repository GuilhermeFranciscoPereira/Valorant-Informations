import { createContext, useState } from "react";

type gunContextProps = {
    gunName: string;
    toSetGunName: (name: string) => void;
}

const GunContext = createContext<gunContextProps>({} as gunContextProps);

const GunProvider = ( {children}: {children: React.ReactNode} ) => {
    const [gunName, setGunName] = useState<string>('');

    function toSetGunName(name: string) {
        setGunName(name);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const inputGunName: HTMLInputElement = document.querySelector('#FormNameInput') as HTMLInputElement
        inputGunName.value = ''
    }

    return (
        <GunContext.Provider value={{gunName, toSetGunName}}>
            {children}
        </GunContext.Provider>
    )
}

export {GunProvider, GunContext}