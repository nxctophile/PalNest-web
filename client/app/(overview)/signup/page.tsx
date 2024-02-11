import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

import google from '@/public/google.png';
import facebook from '@/public/facebook.png';
import github from '@/public/github.png';

import { Josefin_Sans, Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

const josefin_sans = Josefin_Sans({
    weight: '300',
    subsets: ['latin']
});

export default function Signup() {
    return (
        <main className={styles.mainContainer}>
            <div className={styles.loginContainer}>
                <div>
                    <div className={josefin_sans.className}>
                        <div className={styles.loginTitle}>Let{`'`}s get started!</div>
                        <div className={styles.loginSubtitle}>Enter your details to register</div>
                    </div>
                    <input className={nunito_sans.className} type="text" placeholder="Enter your full name" />
                    <input className={nunito_sans.className} type="text" placeholder="Enter a username" />
                    <input className={nunito_sans.className} type="email" placeholder="Enter your e-mail" />
                </div>
                <div>
                    <input className={nunito_sans.className} type="password" placeholder="Password" />
                    <input className={nunito_sans.className} type="password" placeholder="Confirm password" />
                    <button className={nunito_sans.className} type="submit">Register</button>
                    <div className={styles.forgotContainer}>
                        <div>
                            Already in?
                            <Link href="/login">Sign in here</Link>
                        </div>
                    </div>
                    <div className={styles.socialMethods}>
                        <button className={styles.googleSignin}>
                            <Image src={google} alt='' />
                        </button>
                        <button className={styles.googleSignin}>
                            <Image src={github} alt='' />
                        </button>
                        <button className={styles.googleSignin}>
                            <Image src={facebook} alt='' />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}