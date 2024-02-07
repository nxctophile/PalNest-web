import styles from "./page.module.css";
import Image from "next/image";
import nest from '@/public/nest.gif';

import { Lora, Josefin_Sans } from "next/font/google";
import Link from "next/link";

const lora = Lora({
  weight: '500',
  subsets: ['latin']
});

const josefin_sans = Josefin_Sans({
    weight: '600',
    subsets: ['latin']
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroContainer}>
        <div className={styles.heroElement}>
          <div className={styles.heroText}>
            <div className={lora.className}>
              Where pals meet.
            </div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptatum nobis ipsa voluptates adipisci. Voluptatem explicabo ipsa ullam vel iste perspiciatis. Cum odio labore nam ullam et pariatur, illo explicabo distinctio atque voluptates accusamus maiores, quod voluptatem porro sint fugit rerum voluptate numquam, nostrum consectetur tempore veniam nobis ducimus! Minus porro at aspernatur nulla provident optio nesciunt unde sit laboriosam exercitationem quis doloribus, recusandae libero qui vitae molestiae eius ullam facere sequi totam voluptate quasi quas dolor! Quas iusto minima ad quod? Vel beatae amet excepturi, voluptates similique sapiente accusantium facilis nostrum quasi tempore? Itaque repellendus ut quaerat modi iste.
            </span>
          </div>
        <div className={styles.buttonContainer}>
          <Link className={styles.button} href="/signup">
            <button className={`${styles.signupButton} ${josefin_sans.className}`}> Get Started </button>          
          </Link>
          <Link className={styles.button} href='/login'>
            <button className={`${styles.loginButton} ${josefin_sans.className}`}> Already in? log in </button>
          </Link>
        </div>
        </div>
        <div className={styles.nestContainer}>
          <Image className={styles.nest} src={nest} alt='' />
        </div>
      </div>
    </main>
  );
}
