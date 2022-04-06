import styles from '../styles/Home.module.css'
import getISSLocation from './api/location'
import MapChart from "./MapChart";

export default function Home() {
  return (
  <>
    <h1 style={{margin:'20px', textAlign: "center"}}>Where is the International Space Station</h1>
    <div style={{marginLeft:'20px',marginRight:'20px', borderStyle: 'solid'}}>
          <MapChart />
        </div>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/arthurmois/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Arthur Mois
        </a>
      </footer>
  </>
  )
}
