import ShowAllGuns from '../../hooks/guns/ShowAllGuns';
import ShowGunChoosed from '../../hooks/guns/ShowGunChoosed';
import Form from '../../components/Form';
import { useContext } from 'react';
import { GunContext } from '../../contexts/guns/gunsContext';
import '../../styles/globalStyles.css'

export default function Guns(): JSX.Element {
    const {toSetGunName} = useContext(GunContext);

    return (
        <>
        <section className='mainSection'>
            <h1>Bem-Vindo(a) à área de armas!</h1>
            <h2>Procurando uma arma específica? Digite abaixo</h2>
            {Form('Exemplo: Vandal, Operator, Ghost e etc..', toSetGunName)}
            <h2>Não encontrou a arma que desejava? Procure-a abaixo na lista completa de armas!</h2>
            <hr />
        </section>
        {ShowGunChoosed && <ShowGunChoosed/>}
        <ShowAllGuns/>
        </>
    )
}