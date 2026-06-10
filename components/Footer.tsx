import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div>
          <Link href="/" className="footer__logo">
            <i className="ri-ancient-gate-line" />
            <span>境内</span>
          </Link>
          <p className="footer__tagline">
            自然と調和した静けさの中で、<br />
            心の安らぎを見つけてください。
          </p>
        </div>

        <div>
          <p className="footer__heading">ページ</p>
          <ul className="footer__nav-list">
            {[
              { label: 'ホーム',       href: '/' },
              { label: '寺について',   href: '/about' },
              { label: 'ギャラリー',   href: '/gallery' },
              { label: '行事',         href: '/events' },
              { label: 'お問い合わせ', href: '/contact' },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer__nav-link">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer__heading">法的情報</p>
          <ul className="footer__pages-list">
            {[
              { label: '利用規約',               href: '/terms' },
              { label: 'プライバシーポリシー',   href: '/privacy' },
              { label: '特定商取引法に基づく表記', href: '/legal' },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer__page-link">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer__heading">フォロー</p>
          <div className="footer__social">
            {[
              { icon: 'ri-instagram-line',  label: 'Instagram' },
              { icon: 'ri-twitter-x-line',  label: 'X' },
              { icon: 'ri-youtube-line',    label: 'YouTube' },
            ].map((s) => (
              <a key={s.label} href="#" className="footer__social-link" aria-label={s.label}>
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© 2025 境内. All rights reserved.</p>
      </div>
    </footer>
  )
}
