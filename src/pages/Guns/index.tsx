import FormGuns from '../../hooks/guns/formGuns'
import ShowAllGuns from '../../hooks/guns/ShowAllGuns'
import ShowGunChoosed from '../../hooks/guns/ShowGunChoosed'
import styles from './Guns.module.css'

export default function Guns(): JSX.Element {
    return (
        <>
        <section className={styles.gunsSection}>
            <h1>Bem-Vindo(a) à área de armas!</h1>
            <h2>Procurando uma arma específica? Digite abaixo</h2>
            <FormGuns/>
            <h2>Não encontrou a arma que desejava? Procure-a abaixo na lista completa de armas!</h2>
            <hr />
        </section>
        {ShowGunChoosed && <ShowGunChoosed/>}
        <ShowAllGuns/>
        </>
    )
}