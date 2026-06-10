export const metadata = { title: '利用規約 | 境内' }

const HERO = 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1920&q=80&auto=format&fit=crop'

const sections = [
  {
    title: 'サービスの利用',
    items: [
      '本サイトをご利用いただくにあたり、以下の利用規約をお読みいただき、同意のうえご利用ください。',
      '当サイトへのアクセスをもって、本規約に同意したものとみなします。',
      '当サイトに掲載されているすべてのコンテンツの著作権は、運営者または正当な権利者に帰属します。無断での複製・転載・配布を禁じます。',
    ],
  },
  {
    title: '禁止事項',
    isList: true,
    items: [
      '法令または公序良俗に反する行為',
      '当サイトのサーバーやネットワークに過度な負荷をかける行為',
      '他のユーザーまたは第三者の権利を侵害する行為',
      '当サイトの運営を妨害するおそれのある行為',
      '不正アクセスまたはそれに類する行為',
    ],
  },
  {
    title: '免責事項',
    items: [
      '当サイトの情報は正確な情報の提供に努めておりますが、その完全性を保証するものではありません。',
      '当サイトの利用によって生じたいかなる損害についても、運営者は一切の責任を負いかねます。',
    ],
  },
  {
    title: '準拠法',
    items: [
      '本規約は日本法を準拠法とします。当サイトに関する一切の紛争は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。',
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="static-page-v2">
      <div className="page-hero page-hero--photo page-hero--compact">
        <img src={HERO} alt="利用規約" className="page-hero__photo" />
        <div className="page-hero__photo-overlay" />
        <div className="page-hero__line" />
        <div className="container page-hero__content">
          <p className="page-hero__eyebrow anim-fadeup anim-d1">Legal</p>
          <h1 className="page-hero__title anim-fadeup anim-d2">利用規約</h1>
          <p className="page-hero__sub anim-fadeup anim-d3">Terms of Service</p>
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
                    <a href={`#terms-${i}`} className="static-page-v2__toc-link">{s.title}</a>
                  </li>
                ))}
              </ul>
            </aside>
            <div>
              {sections.map((sec, i) => (
                <div key={i} id={`terms-${i}`} className={`static-page-v2__section anim-fadeup anim-d${i + 2}`}>
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
