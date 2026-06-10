import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import 'remixicon/fonts/remixicon.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '境内 – 背景アニメーション',
  description: '境内は自然と調和した観光地です。静けさと平和を体験できます。',
  icons: { icon: '/assets/img/favicon.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="main">{children}</main>
        <Footer />

        {/* Sakura petals — fixed layer, pointer-events: none so it never blocks clicks */}
        <div className="sakura-petals" />

        {/* Load original scripts from public/js — same as the vanilla HTML */}
        <Script src="/js/gsap.min.js"   strategy="afterInteractive" />
        <Script src="/js/sakura.min.js" strategy="afterInteractive" />

        <Script id="temple-init" strategy="afterInteractive">{`
          (function waitForLibs() {
            if (typeof gsap === 'undefined' || typeof Sakura === 'undefined') {
              setTimeout(waitForLibs, 50);
              return;
            }

            /* ===== SAKURA — runs on all pages ===== */
            new Sakura('.sakura-petals');

            /* ===== BLUR HEADER — runs on all pages ===== */
            window.addEventListener('scroll', function () {
              var header = document.getElementById('header');
              if (!header) return;
              window.scrollY >= 50
                ? header.classList.add('blur-header')
                : header.classList.remove('blur-header');
            });

            /* ===== GSAP — only runs if home elements exist ===== */
            if (document.querySelector('.home__img-1')) {
              gsap.from('.home__img-1',    5,   { opacity: 0, x: 400 });
              gsap.from('.home__img-6',    1.5, { opacity: 0, y: 200,  delay: 0.1, ease: 'back.out(1.5)' });
              gsap.from('.home__img-3',    1.5, { opacity: 0, y: 400,  delay: 0.3, ease: 'back.out(1.5)' });
              gsap.from('.home__img-5',    1.5, { opacity: 0, y: 400,  delay: 0.5, ease: 'back.out(1.5)' });
              gsap.from('.home__img-2',    1.5, { opacity: 0, y: 400,  delay: 0.8, ease: 'back.out(1.5)' });
              gsap.from('.home__img-4',    1.5, { opacity: 0, y: 200,  delay: 1.8, ease: 'back.out(1.5)' });
              gsap.from('.home__data',     1.5, { opacity: 0, y: -100, delay: 2.5, ease: 'back.out(1.5)' });
              gsap.from('.home__lantern-1',1.5, { opacity: 0, x: 70,   delay: 3,   ease: 'back.out(1.5)' });
              gsap.from('.home__lantern-2',1.5, { opacity: 0, x: -70,  delay: 3.5, ease: 'back.out(1.5)' });
            }
          })();
        `}</Script>
      </body>
    </html>
  )
}
