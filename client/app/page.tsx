import styles from "./page.module.css";

import { Lora } from "next/font/google";

const lora = Lora({
  weight: '500',
  subsets: ['latin']
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <div className={lora.className}>
            Where pals meet.
          </div>
        </div>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, culpa dignissimos. Rem, magnam vel molestiae officiis quisquam dignissimos unde voluptates eveniet inventore, ad dicta doloribus tempora quod quibusdam repudiandae, suscipit blanditiis. Aliquam perferendis architecto adipisci molestias, quibusdam eum fugit sint quisquam quis ratione quam ipsum? A fugiat inventore cumque ratione itaque ipsum illo dolores, repellat cum quae nostrum iusto voluptatem explicabo rem. Unde quibusdam atque molestiae quod, animi quis. Reiciendis vitae culpa atque nobis sit eum repellendus odit accusamus delectus ut saepe quae, iste fugiat, possimus modi distinctio adipisci placeat, porro doloribus error eius libero quas laboriosam doloremque! Dignissimos, voluptate!
        </span>
        <div className={styles.buttonContainer}>
          <button className={styles.signupButton}> Get Started </button>
          <button className={styles.loginButton}> Already in? log in </button>
        </div>
      </div>
    </main>
  );
}
