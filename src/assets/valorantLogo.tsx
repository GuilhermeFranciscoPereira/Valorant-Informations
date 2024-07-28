import { Link } from "react-router-dom";
import styles from '../components/Header/Header.module.css'

export default function ValorantLogo(): JSX.Element {
    return (
        <Link className={styles.linkToIndex} to='/'>
            <img src="https://freight.cargo.site/w/3840/q/75/i/a17dfc0b27e50cb1c75dcd8fcd13a2d11783729f60265d9a00d184bc5a8d9296/VALORANT_1.png" alt="Logo do jogo Valorant com fundo preto e detalhes em vermelho" />
        </Link>
    )
}