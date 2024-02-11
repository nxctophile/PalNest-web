import './nav-drawer.css';
import Image from 'next/image';
import bird from '@/public/bird.png';
import chat from '@/public/chat.png';
import Link from 'next/link';

import { Josefin_Sans, Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

const josefin_sans = Josefin_Sans({
    weight: '500',
    subsets: ['latin']
});

export default function NavDrawer() {
	return(
			<nav className={nunito_sans.className}>
				<div className='branding'>
					<div className='logo'>
						<Image src={bird} alt='' />
					</div>
					<Link href='/' className={josefin_sans.className}>
						PalNest
					</Link>
				</div>
				<div>
					<div className='navButtonContainer'>
						<button className='navButton'>
						<Image className='navIcon' src={chat} alt='' />
						<div className='navText'>Chats</div>
						</button>
					</div>
				</div>
			</nav>
	);
}