import Image from "next/image";
import styles from "./page.module.css";
import Info from "@/components/common-ui/info/Info";

export default function Home() {
  return (
    <main className={styles.main}>
      <Info/>
    </main>
  );
}
