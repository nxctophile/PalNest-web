import styles from './page.module.css';
import { Josefin_Sans, Nunito_Sans } from "next/font/google";
import Image from 'next/image';

import settings from '@/public/settings.svg';

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

const josefin_sans = Josefin_Sans({
    weight: '300',
    subsets: ['latin']
});


export default function Chats() {
	return(
		<main className={styles.main}>
			<div className={styles.senderContainer}>
				<div className={styles.senderSectionTitle}>
					<span className={josefin_sans.className}>Chats</span>
					<div className={styles.settingsIcon}>
						<Image src={settings} alt='' />
					</div>
				</div>
			</div>
			<div className={styles.chatContainer}></div>
		</main>
	);
}