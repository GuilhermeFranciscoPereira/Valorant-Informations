import OmenCat from "../../assets/omenCat";
import styles from './Index.module.css'

export default function Index(): JSX.Element {
    return (
        <section className={styles.indexSection}>
            <h1>Seja muito Bem-Vindo(a) gamer!</h1>
            <h2>Aqui você encontra todas as informações que precisa sobre o Valorant, o nosso querido <span>Vava s2</span></h2>
            <p>Saiba que você pode encontrar as informações do que quiser apenas clicando nas opções no topo do site</p>
            <div className={styles.informationsAboutTheCreator}>
            <OmenCat/>
                <div className={styles.textsDiv}>
                    <h3>Site criado por Guilherme Pereira, main Omen e estagnado no bronze kkkkkk</h3>
                    <p>Caso tenha alguma coisa que você ache legal para adicionarmos ao site entre em contato comigo através do LinkedIn: Guilherme Francisco Pereira</p>
                    <hr />
                    <p>Me adiciona lá no jogo!</p>
                    <p>yLottus #777</p>
                </div>
            </div>
        </section>
    )
}