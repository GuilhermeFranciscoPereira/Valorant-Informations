import { Link } from "react-router-dom";
import ValorantLogo from "../../assets/valorantLogo";
import styles from './Header.module.css'

export default function Header(): JSX.Element {
    return (
        <header>
            <ValorantLogo/>
            <nav>
                <Link className={styles.LinksTo} to='Agents'>Agentes</Link>
                <Link className={styles.LinksTo} to='Guns'>Armas</Link>
                <Link className={styles.LinksTo} to='Maps'>Mapas</Link>
                <Link className={styles.LinksTo} to='Bundles'>Bundles</Link>
                <Link className={styles.LinksTo} to='Comp'>Competitivo</Link>
            </nav>
        </header>
    )
}