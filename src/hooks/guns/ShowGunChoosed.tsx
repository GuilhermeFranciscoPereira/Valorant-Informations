import { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import styles from '../../pages/Guns/Guns.module.css'
import { GunContext } from '../../contexts/guns/gunsContext';

type gunClickedProps = {
    status: number;
    data: Array<clickedDataProps>;
}

type clickedDataProps = {
    uuid: string;
    displayName: string;
    displayIcon: string;
    weaponStats: {
        magazineSize: number;
        runSpeedMultiplier: number;
        equipTimeSeconds: number;
        reloadTimeSeconds: number;
        damageRanges: [
          {
            rangeStartMeters: number;
            rangeEndMeters: number;
            headDamage: number;
            bodyDamage: number;
            legDamage: number
          },
          {
            rangeStartMeters: number;
            rangeEndMeters: number;
            headDamage: number;
            bodyDamage: number;
            legDamage: number;
          }
        ]
    }
    shopData: {
        cost: number,
        categoryText: string,
    }
    skins: [
        {
            displayName: string;
            displayIcon: string;
        }
    ]
}

export default function ShowGunChoosed(): JSX.Element | undefined {
    const[skinsButton, setSkinsButton] = useState<boolean>(false)

    const {data} = useQuery<gunClickedProps>('gunsFetch', async () => {
        const response = await axios.get('https://valorant-api.com/v1/weapons?language=pt-BR');
        return response.data;
    }, {refetchOnWindowFocus: false});

    const {gunName} = useContext(GunContext);
    const gunClicked: Array<clickedDataProps> | undefined = data?.data.filter(gun => gun.displayName.toLowerCase() === gunName);

    if (gunClicked && gunName.length > 2) {
        try {
            return (
                <>
                {<section className={styles.gunClicked}>
                    <div className={styles.superiorDiv}>
                        <img src={gunClicked[0].displayIcon} alt={"Foto da arma" + gunClicked[0].displayName} />
                        <div className={styles.informationsAboutGunClicked}>
                            <h1>{gunClicked[0].displayName}</h1>
                            <p>{gunClicked[0].shopData.categoryText}</p>
                            <h2>Custa na loja: {gunClicked[0].shopData.cost} créditos</h2>
                        </div>
                    </div>
                    <div className={styles.inferiorDiv}>
                        <hr />
                        <section className={styles.informationsSection}>

                            <div id='firstDiv' className={styles.twoDivs}>
                                <h2>Dano:</h2>
                                {gunClicked[0].weaponStats.damageRanges.length > 1 
                                ? <>
                                <div className={styles.damageDiv}>
                                    <h2>Da distancia {gunClicked[0].weaponStats.damageRanges[0].rangeStartMeters} metros até {gunClicked[0].weaponStats.damageRanges[0].rangeEndMeters} metros:</h2>
                                    <h3>Na cabeça: {gunClicked[0].weaponStats.damageRanges[0].headDamage}</h3>
                                    <h3>No corpo: {gunClicked[0].weaponStats.damageRanges[0].bodyDamage}</h3>
                                    <h3>Na perna: {gunClicked[0].weaponStats.damageRanges[0].legDamage}</h3>
                                </div>
                                <div className={styles.damageDiv}>
                                    <h2>Da distancia {gunClicked[0].weaponStats.damageRanges[1].rangeStartMeters} metros até {gunClicked[0].weaponStats.damageRanges[1].rangeEndMeters} metros:</h2>
                                    <h3>Na cabeça: {gunClicked[0].weaponStats.damageRanges[1].headDamage}</h3>
                                    <h3>No corpo: {gunClicked[0].weaponStats.damageRanges[1].bodyDamage}</h3>
                                    <h3>Na perna: {gunClicked[0].weaponStats.damageRanges[1].legDamage}</h3>
                                </div>
                                </>
                                : <>
                                <div className={styles.damageDiv}>
                                <h2>Da distancia {gunClicked[0].weaponStats.damageRanges[0].rangeStartMeters} metros até {gunClicked[0].weaponStats.damageRanges[0].rangeEndMeters} metros:</h2>
                                <h3>Na cabeça: {gunClicked[0].weaponStats.damageRanges[0].headDamage}</h3>
                                <h3>No corpo: {gunClicked[0].weaponStats.damageRanges[0].bodyDamage}</h3>
                                <h3>Na perna: {gunClicked[0].weaponStats.damageRanges[0].legDamage}</h3>
                                </div>
                                </>
                                }   
                            </div>

                            <div id="secondDiv" className={styles.twoDivs}>
                                <h2>Estatisticas da arma:</h2>
                                <h3>Tamanho do pente: {gunClicked[0].weaponStats.magazineSize}</h3>
                                <h3>Multiplicador de corrida com a arma: {gunClicked[0].weaponStats.runSpeedMultiplier}</h3>
                                <h3>Tempo para puxar a arma: {gunClicked[0].weaponStats.equipTimeSeconds} segundo</h3>
                                <h3>Tempo para recarregar: {gunClicked[0].weaponStats.reloadTimeSeconds} segundos</h3>
                            </div>
                            
                        </section>
                        <hr/>
                        <section className={styles.skinsSection}>
                            <button 
                            type='button'
                            onClick={() => setSkinsButton(skinsButton ? false : true)}>Clique para mostrar/esconder as skins da arma {gunClicked[0].displayName}
                            </button>
                            <div className={styles.cardsContainer}>
                                {gunClicked[0].skins.map(skinGun => {
                                if (skinGun.displayName !== `${gunClicked[0].displayName} Padrão` && skinsButton) {
                                    return (
                                        <div className={styles.cardsSkins} key={skinGun.displayName}>
                                            <img src={skinGun.displayIcon} alt={`Erro ao mostrar a foto da skin ${skinGun.displayName} da arma ${gunClicked[0].displayName}`} />
                                            <h3>{skinGun.displayName}</h3>
                                        </div>
                                    )
                                }})}
                            </div>
                        </section>
                    </div>
                </section>  
                }
                </>
            )
        } catch (err) {
            alert(`Arma não encontrada, tente novamente! \nEscreveu o nome da arma de forma correta? Se não consegue achar por aqui você pode encontra-la na lista completa de armas abaixo! \n\nErro: ${err}`);
        }
    }
}