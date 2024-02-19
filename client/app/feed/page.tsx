import styles from "./page.module.css";
import { Josefin_Sans, Nunito_Sans } from "next/font/google";
import Image from "next/image";

import settings from "@/public/settings.svg";
import story from "@/public/story.png";
import addstory from "@/public/add-story.png";
import add from "@/public/plus.png";
import send from "@/public/send.png";
import emoji from "@/public/emoji.png";
import despacito from "@/public/despacito.gif";
import babyshark from "@/public/babyshark.gif";
import cat from "@/public/cat.jpg";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

const josefin_sans = Josefin_Sans({
  weight: "300",
  subsets: ["latin"],
});

export default function Feed() {
  return (
    <section className={styles.main}>
      <div className={styles.senderContainer}>
        <div className={styles.senderSectionTitle}>
          <span className={josefin_sans.className}>Stories</span>
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
            <Image src={addstory} alt="" />
          </div>
          <div>
            <div className={styles.senderName}>
              <span className={nunito_sans.className}>Your Story</span>
            </div>
            <div className={styles.senderMessage}>
              <span className={nunito_sans.className}>4 hours ago</span>
            </div>
          </div>
        </div>
        <div className={styles.sender}>
          <div className={styles.senderIcon}>
            <Image src={story} alt="" />
          </div>
          <div>
            <div className={styles.senderName}>
              <span className={nunito_sans.className}>Sam Altman</span>
            </div>
            <div className={styles.senderMessage}>
              <span className={nunito_sans.className}>20 minutes ago</span>
            </div>
          </div>
        </div>
        <div className={styles.sender}>
          <div className={styles.senderIcon}>
            <Image src={story} alt="" />
          </div>
          <div>
            <div className={styles.senderName}>
              <span className={nunito_sans.className}>Elon Musk</span>
            </div>
            <div className={styles.senderMessage}>
              <span className={nunito_sans.className}>43 minutes ago</span>
            </div>
          </div>
        </div>
        <div className={styles.sender}>
          <div className={styles.senderIcon}>
            <Image src={story} alt="" />
          </div>
          <div>
            <div className={styles.senderName}>
              <span className={nunito_sans.className}>Mark Zuckerburger</span>
            </div>
            <div className={styles.senderMessage}>
              <span className={nunito_sans.className}>an hour ago</span>
            </div>
          </div>
        </div>
        <div className={styles.sender}>
          <div className={styles.senderIcon}>
            <Image src={story} alt="" />
          </div>
          <div>
            <div className={styles.senderName}>
              <span className={nunito_sans.className}>Hoe Biden</span>
            </div>
            <div className={styles.senderMessage}>
              <span className={nunito_sans.className}>2 hours ago</span>
            </div>
          </div>
        </div>
        <div className={styles.sender}>
          <div className={styles.senderIcon}>
            <Image src={story} alt="" />
          </div>
          <div>
            <div className={styles.senderName}>
              <span className={nunito_sans.className}>Roronoa Zoro</span>
            </div>
            <div className={styles.senderMessage}>
              <span className={nunito_sans.className}>5 hours ago</span>
            </div>
          </div>
        </div>
        <div className={styles.sender}>
          <div className={styles.senderIcon}>
            <Image src={story} alt="" />
          </div>
          <div>
            <div className={styles.senderName}>
              <span className={nunito_sans.className}>Gojo Satoru</span>
            </div>
            <div className={styles.senderMessage}>
              <span className={nunito_sans.className}>16 hours ago</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chatContainer}>
        <div className={styles.feed}>
          <div className={styles.post}>
            <div className={styles.accountInfo}>
              <div className={styles.accountPicture}></div>
              <div>
                <div className={styles.accountName}></div>
                <div className={styles.accountLocation}></div>
              </div>
            </div>
            <div className={styles.thePost}>
              <Image src={cat} alt="" />
            </div>
            <div className={styles.postDescription}>
              <div className={styles.postIconContainer}></div>
              <div className={nunito_sans.className}>
                Meow.. meow.. meow.. meow.. meow.. meow.. meow.. meow.. Meow..
                meow.. meow.. meow.. meow.. meow.. meow.. meow.. Meow.. meow..
                meow.. meow.. meow.. meow.. meow.. meow.. Meow.. meow.. meow..
              </div>
            </div>
          </div>
        </div>

        <div className={styles.chatBox}>
          <Image className={styles.emojiButton} src={emoji} alt="" />
          <input
            className={nunito_sans.className}
            type="text"
            placeholder="Post an update..."
          />
          <Image className={styles.sendButton} src={send} alt="" />
          <Image className={styles.addButton} src={add} alt="" />
        </div>
      </div>
    </section>
  );
}
