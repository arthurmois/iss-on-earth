import styles from "../styles/Home.module.css";
import getISSLocation from "./api/location";
import MapChart from "./MapChart";

export default function Home() {
  return (
    <>
      <h1 style={{ margin: "20px", textAlign: "center" }}>
        Where is the International Space Station
      </h1>
      <h3 style={{ margin: "20px", textAlign: "center" }}>
        You may need to scroll around to find it ;)
      </h3>
      <div
        style={{
          marginLeft: "40px",
          marginRight: "40px"
        }}
      >
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1000px",
            borderStyle: "solid",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MapChart />
        </div>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/arthurmois/"
          target="_blank"
          rel="noopener noreferrer"
          style={{textDecoration: 'underline'}}
        >
          Created by Arthur Mois
        </a>
      </footer>
    </>
  );
}
