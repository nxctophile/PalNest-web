import './nav-bar.css';
import { Josefin_Sans } from 'next/font/google';
import bird from '@/public/bird.png';
import Image from 'next/image';
import Link from 'next/link';
import user from '@/public/user.png';

const josefin_sans = Josefin_Sans({
    weight: '600',
    subsets: ['latin']
});

export default function Navbar() {
    return(
        <main className='navContainer'>
            <nav className='navComponent'>
                <div className={josefin_sans.className}>
                    <Image className='navIcon' src={bird} alt='' />
                    <Link className="link" href="/">
                        PalNest
                    </Link>
                </div>
                <div className='navItems'>
                    <Link className={`navItem ${josefin_sans.className}`} href="#">
                        About
                    </Link>
                    <Link className={`navItem ${josefin_sans.className}`} href="#">
                        Contribute
                    </Link>
                    <Link href="/login">
                        <Image className='account' src={user} alt='' />
                    </Link>
                </div>
            </nav>
        </main>
    );
}

