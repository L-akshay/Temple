export const metadata = { title: 'プライバシーポリシー | 境内' }

const HERO = 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=1920&q=80&auto=format&fit=crop'

const sections = [
  {
    title: '個人情報の収集',
    items: [
      'お問い合わせフォームのご利用時に、氏名・メールアドレスなどの個人情報をご提供いただく場合があります。',
      '収集した個人情報は適切に管理し、法令に基づく場合を除き、第三者への開示・提供は行いません。',
    ],
  },
  {
    title: '利用目的',
    isList: true,
    items: [
      'お問い合わせへの回答および連絡',
      'サービスの提供・品質改善',
      'イベント・行事に関するご案内',
      '法令等の遵守に必要な対応',
    ],
  },
  {
    title: '第三者提供',
    items: [
      '法令上の義務がある場合を除き、ご本人の同意なく第三者に個人情報を提供することはありません。',
      '業務委託先に提供する場合は、適切な監督を行います。',
    ],
  },
  {
    title: 'Cookieの使用',
    items: [
      '当サイトはCookieを使用することがあります。Cookieはサイトの利便性向上を目的とし、個人を特定する情報は含みません。',
      'ブラウザの設定によりCookieを無効化することができますが、一部機能が制限される場合があります。',
    ],
  },
  {
    title: 'お問い合わせ',
    items: [
      '個人情報の開示・訂正・削除のご要望は info@keidai.example.jp までご連絡ください。',
      '受付時間：平日 9:00 〜 17:00',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="static-page-v2">
      <div className="page-hero page-hero--photo page-hero--compact">
        <img src={HERO} alt="プライバシーポリシー" className="page-hero__photo" />
        <div className="page-hero__photo-overlay" />
        <div className="page-hero__line" />
        <div className="container page-hero__content">
          <p className="page-hero__eyebrow anim-fadeup anim-d1">Privacy</p>
          <h1 className="page-hero__title anim-fadeup anim-d2">プライバシーポリシー</h1>
          <p className="page-hero__sub anim-fadeup anim-d3">個人情報の取り扱いについて</p>
        </div>
      </div>

      <div className="static-page-v2__body">
        <div className="container">
          <div className="static-page-v2__grid">
            <aside className="static-page-v2__toc anim-fadein anim-d2">
              <p className="static-page-v2__toc-title">目次</p>
              <ul className="static-page-v2__toc-list">
                {sections.map((s, i) => (
                  <li key={i}>
                    <a href={`#priv-${i}`} className="static-page-v2__toc-link">{s.title}</a>
                  </li>
                ))}
              </ul>
            </aside>
            <div>
              {sections.map((sec, i) => (
                <div key={i} id={`priv-${i}`} className={`static-page-v2__section anim-fadeup anim-d${i + 2}`}>
                  <div className="static-page-v2__section-header">
                    <span className="static-page-v2__section-num">{i + 1}</span>
                    <h2 className="static-page-v2__section-title">{sec.title}</h2>
                  </div>
                  {sec.isList ? (
                    <ul className="static-page-v2__list">
                      {sec.items.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  ) : (
                    sec.items.map((item, j) => <p key={j} className="static-page-v2__text">{item}</p>)
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
