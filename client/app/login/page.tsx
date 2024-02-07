import styles from './page.module.css';
import Image from 'next/image';

import google from '@/public/google.png';
import facebook from '@/public/facebook.png';
import github from '@/public/github.png';

import { Josefin_Sans, Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

const josefin_sans = Josefin_Sans({
    weight: '300',
    subsets: ['latin']
});

export default function Login() {
    return (
        <main className={styles.mainContainer}>
            <div className={styles.loginContainer}>
                <div className={josefin_sans.className}>
                    <div className={styles.loginTitle}>Hello again!</div>
                    <div className={styles.loginSubtitle}>Let{`'`}s get you back into your account</div>
                </div>
                <input className={nunito_sans.className} type="email" placeholder="Username or e-mail" />
                <input className={nunito_sans.className} type="password" placeholder="Password" />
                <button className={nunito_sans.className} type="submit">Sign In</button>
                <div className={styles.forgotContainer}>
                    <div>
                        Forgot password?
                        <a href="#" target='_blank'>Reset it here</a>
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
        </main>
    );
}