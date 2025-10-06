import Image from "next/image";
import styles from "./page.module.css";
import MapImg from "./assets/Map.jpeg";

export default function Home() {
  return (
    <div>
      <main>
        <div className="map-container">
          <Image src={MapImg} alt="Map" width={1200} height={800} priority />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
