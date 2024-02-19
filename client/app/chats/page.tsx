import styles from "./page.module.css";
import { Josefin_Sans, Nunito_Sans } from "next/font/google";
import Image from "next/image";

import settings from "@/public/settings.svg";
import user from "@/public/user.png";
import add from "@/public/plus.png";
import send from "@/public/send.png";
import emoji from "@/public/emoji.png";
import despacito from "@/public/despacito.gif";
import babyshark from "@/public/babyshark.gif";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

const josefin_sans = Josefin_Sans({
  weight: "300",
  subsets: ["latin"],
});

export default function Chats() {
  return (
    <section className={styles.main}>
      <div className={styles.senderContainer}>
        <div className={styles.senderSectionTitle}>
          <span className={josefin_sans.className}>People</span>
          <div className={styles.settingsIcon}>
            <Image src={settings} alt="" />
          </div>
        </div>

        <div className={styles.searchBox}>
          <input
            className={nunito_sans.className}
            type="text"
            placeholder="Search for a chat, text or a person"
          />
        </div>

        <div className={`${styles.sender} ${styles.currentChat}`}>
          <div className={styles.senderIcon}>
            <Image src={user} alt="" />
          </div>
          <div>
            <div className={styles.senderName}>
              <span className={nunito_sans.className}>Bill Gates</span>
            </div>
            <div className={styles.senderMessage}>
              <span className={nunito_sans.className}>
                &#39;Cause I&#39;m I&#39;m I&#39;m in the starts tonight...
              </span>
            </div>
          </div>
        </div>
        <div className={styles.sender}>
          <div className={styles.senderIcon}>
            <Image src={user} alt="" />
          </div>
          <div>
            <div className={styles.senderName}>
              <span className={nunito_sans.className}>Sam Altman</span>
            </div>
            <div className={styles.senderMessage}>
              <span className={nunito_sans.className}>
                Is it too late to say sorry?
              </span>
            </div>
          </div>
        </div>
        <div className={styles.sender}>
          <div className={styles.senderIcon}>
            <Image src={user} alt="" />
          </div>
          <div>
            <div className={styles.senderName}>
              <span className={nunito_sans.className}>Elon Musk</span>
            </div>
            <div className={styles.senderMessage}>
              <span className={nunito_sans.className}>
                Nobody told me &#39;I love you 3000&#39; I thi...
              </span>
            </div>
          </div>
        </div>
        <div className={styles.sender}>
          <div className={styles.senderIcon}>
            <Image src={user} alt="" />
          </div>
          <div>
            <div className={styles.senderName}>
              <span className={nunito_sans.className}>Mark Zuckerburger</span>
            </div>
            <div className={styles.senderMessage}>
              <span className={nunito_sans.className}>
                Today I stole data from 120 million us...
              </span>
            </div>
          </div>
        </div>
        <div className={styles.sender}>
          <div className={styles.senderIcon}>
            <Image src={user} alt="" />
          </div>
          <div>
            <div className={styles.senderName}>
              <span className={nunito_sans.className}>Hoe Biden</span>
            </div>
            <div className={styles.senderMessage}>
              <span className={nunito_sans.className}>I love anime uWu</span>
            </div>
          </div>
        </div>
        <div className={styles.sender}>
          <div className={styles.senderIcon}>
            <Image src={user} alt="" />
          </div>
          <div>
            <div className={styles.senderName}>
              <span className={nunito_sans.className}>Roronoa Zoro</span>
            </div>
            <div className={styles.senderMessage}>
              <span className={nunito_sans.className}>
                I won&#39;t admit that I&#39;m the most overra...
              </span>
            </div>
          </div>
        </div>
        <div className={styles.sender}>
          <div className={styles.senderIcon}>
            <Image src={user} alt="" />
          </div>
          <div>
            <div className={styles.senderName}>
              <span className={nunito_sans.className}>Gojo Satoru</span>
            </div>
            <div className={styles.senderMessage}>
              <span className={nunito_sans.className}>Yowai mo &#58;&#41;</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chatContainer}>
        <div className={styles.chatTopbar}>
          <div className={styles.chatIcon}>
            <Image src={user} alt="" />
          </div>
          <div className={styles.chatInfo}>
            <div className={styles.chatTitle}>
              <span className={nunito_sans.className}>Bill Gates</span>
            </div>
            <div className={styles.chatStatus}>
              <span className={nunito_sans.className}>Active now</span>
            </div>
          </div>
        </div>

        <div className={styles.texts}>
          <div className={styles.textsContainer}>
            <div className={styles.leftText}>
              <span className={nunito_sans.className}>Hello</span>
            </div>
            <div className={styles.rightText}>
              <span className={nunito_sans.className}>
                Hey&#33; What&#39;s up?
              </span>
            </div>

            <div className={styles.leftText}>
              <span className={nunito_sans.className}>
                Quiero respirar tu cuello despacito Deja que te diga cosas al
                oído Para que te acuerdes si no estás conmigo Despacito Quiero
                desnudarte a besos despacito Firmar las paredes de tu laberinto
              </span>
            </div>
            <div className={styles.rightText}>
              <span className={nunito_sans.className}>
                Baby Shark, doo-doo, doo-doo, doo-doo Baby Shark, doo-doo,
                doo-doo, doo-doo Baby Shark, doo-doo, doo-doo, doo-doo Baby
                Shark Mommy Shark, doo-doo, doo-doo, doo-doo Mommy Shark,
                doo-doo, doo-doo, doo-doo Mommy Shark, doo-doo, doo-doo, doo-doo
              </span>
            </div>

            <div className={styles.leftText}>
              <span className={nunito_sans.className}>
                <Image src={despacito} alt="" />
              </span>
            </div>
            <div className={styles.rightText}>
              <span className={nunito_sans.className}>
                <Image src={babyshark} alt="" />
              </span>
            </div>
          </div>
        </div>

        <div className={styles.chatBox}>
          <Image className={styles.emojiButton} src={emoji} alt="" />
          <input
            className={nunito_sans.className}
            type="text"
            placeholder="Type a message..."
          />
          <Image className={styles.sendButton} src={send} alt="" />
          <Image className={styles.addButton} src={add} alt="" />
        </div>
      </div>
    </section>
  );
}
