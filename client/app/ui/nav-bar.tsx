import './nav-bar.css';
import { Josefin_Sans } from 'next/font/google';
import bird from '@/public/bird.png';
import Image from 'next/image';

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
                    PalNest
                </div>
            </nav>
        </main>
    );
}