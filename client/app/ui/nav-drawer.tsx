import './nav-drawer.css';
import Image from 'next/image';
import bird from '@/public/bird.png';
import chats from '@/public/chats.svg';
import chatsActive from '@/public/chats-active.svg';
import posts from '@/public/posts.svg';
import account from '@/public/account.svg';
import settings from '@/public/settings.svg';
import user from '@/public/user.png'

import Link from 'next/link';

import { Josefin_Sans, Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

const josefin_sans = Josefin_Sans({
    weight: '500',
    subsets: ['latin']
});

export default function NavDrawer() {
    return(
        <div className='navContainer'>
            <nav className='navComponent'>
                <div className={josefin_sans.className}>
                    <Image className='navIcon' src={bird} alt='' />
                    <Link className="link" href="/">
                        PalNest
                    </Link>
                </div>
                <div className='navItems'>
                    <Link className={`active navItem ${josefin_sans.className}`} href="/chats">
                        Chats
                    </Link>
                    <Link className={`navItem ${josefin_sans.className}`} href="/feed">
                        Feed
                    </Link>
                </div>
                <div className='accountButtonContainer'>
	                <Link href="/login">
	                    <Image className='account' src={user} alt='' />
	                </Link>
                </div>
            </nav>
        </div>
    );
}