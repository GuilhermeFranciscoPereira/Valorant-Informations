import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import styles from './RootLayout.module.css'

export default function RootLayout() {
    return (
        <>
        <Header/>
        <main className={styles.main}>
            <Outlet/>
        </main>
        </>
    )
}