import ShowAllComps from '../../hooks/comp/ShowAllComps'
import '../../styles/globalStyles.css'

export default function Comp() {
    return (
    <>
    <section className='mainSection'>
        <h1>Bem-Vindo(a) à área de competitivo!</h1>
        <h2>Nesta seção, o banco de dados que utilizamos para pegar as informações não nos entrega informações completas, então aqui você pode encontrar todos os ranks que existem no competitivo do jogo mas infelizmente não podemos adicionar a opção para pesquisar ou clicar para entregamos informações à mais como as outras seções</h2>
        <hr />
    </section>
    <ShowAllComps/>
    </>
    )
}