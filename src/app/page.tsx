import Image from "next/image";
import styles from "./page.module.css";
import Info from "@/components/common-ui/info/Info";
import BlogActual from "@/components/common-ui/blogs-info/BlogActual";

export default function Home() {
  return (
    <main className={styles.main}>
      <Info/>
      <BlogActual/>
    </main>
  );
}
