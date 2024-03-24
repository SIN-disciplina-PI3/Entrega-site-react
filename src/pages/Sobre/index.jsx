
import styles from './Sobre.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import perfilImg from '../../assets/perfil.jpeg';

function Avatar({
  nome,
  sobre
}) {
  return (
    <>

      <div className={styles.perfil}>
      <figure>
          
          <img className={styles.img_perfil} src={perfilImg} alt="Imagem de Perfil" />
        </figure>
        <div className={styles.info_perfil}>
          <h1>{nome}</h1>
          <p>{sobre}</p>
          <div className={styles.redes}>
            <figure>
              <a href='https://www.linkedin.com/in/marianadosanjos04/'>
                <img className={styles.img_redes} src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png" alt="Logo LinkedIn" />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </>

  );
}


function Sobre() {
  return (
    <>
      <Header />
      <Avatar
        nome="Mariana dos Anjos"
        sobre="Olá, sou Mariana dos Anjos, tenho 18 anos e estou no 3° período de Sistemas para Internet
        na Universidade Católica de Pernambuco e no 2° período de Licenciatura em Matemática
        na Universidade Federal Rural de Pernambuco, conheça um pouco mais sobre mim no meu LinkedIn clicando na logo!"
        
      />
      <Footer />
    </>
  )
}

export default Sobre
