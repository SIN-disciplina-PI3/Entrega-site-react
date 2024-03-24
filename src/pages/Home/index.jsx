import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './Home.module.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.apresentacao}>
          <p>
            <span> Olá, conheça a ODS sobre 
              <br /> mudança do clima </span> <br />
        
            Ação contra a mudança global do clima
          </p>
          <Link to="/ods">
            <button className={styles.btn}>
              Faça parte disso
            </button>
          </Link>
        </div>
      </section>
      <Footer />

    </>
  );
}

export default Home
