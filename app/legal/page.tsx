export const metadata = { title: '特定商取引法に基づく表記 | 境内' }

const HERO = 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1920&q=80&auto=format&fit=crop'

const rows = [
  { label: '販売業者',         value: '株式会社〇〇' },
  { label: '代表者名',         value: '山田 太郎' },
  { label: '所在地',           value: '〒000-0000 〇〇県〇〇市境内町1-1' },
  { label: '電話番号',         value: '000-000-0000（受付：9:00〜17:00 平日）' },
  { label: 'メールアドレス',   value: 'info@keidai.example.jp' },
  { label: 'サイトURL',        value: 'https://keidai.example.jp' },
  { label: '販売価格',         value: '各商品・サービスのページに記載' },
  { label: '支払方法',         value: 'クレジットカード・銀行振込・現地払い' },
  { label: '支払時期',         value: 'ご注文確定時' },
  { label: '引渡し時期',       value: 'ご入金確認後、3営業日以内' },
  { label: '返品・キャンセル', value: '商品到着後7日以内。詳細は別途規約をご確認ください。' },
]

export default function LegalPage() {
  return (
    <div className="static-page-v2">
      <div className="page-hero page-hero--photo page-hero--compact">
        <img src={HERO} alt="特定商取引法" className="page-hero__photo" />
        <div className="page-hero__photo-overlay" />
        <div className="page-hero__line" />
        <div className="container page-hero__content">
          <p className="page-hero__eyebrow anim-fadeup anim-d1">Legal Notice</p>
          <h1 className="page-hero__title anim-fadeup anim-d2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.8rem)' }}>
            特定商取引法に基づく表記
          </h1>
          <p className="page-hero__sub anim-fadeup anim-d3">Specified Commercial Transactions Act</p>
        </div>
      </div>

      <div className="static-page-v2__body">
        <div className="container">
          <div className="static-page-v2__grid">
            <aside className="static-page-v2__toc anim-fadein anim-d2">
              <p className="static-page-v2__toc-title">項目</p>
              <ul className="static-page-v2__toc-list">
                {rows.slice(0, 6).map((r) => (
                  <li key={r.label}>
                    <span className="static-page-v2__toc-link" style={{ cursor: 'default' }}>{r.label}</span>
                  </li>
                ))}
                <li><span style={{ fontSize: '0.78rem', color: 'hsl(353,15%,35%)' }}>…他 {rows.length - 6} 項目</span></li>
              </ul>
            </aside>
            <div>
              <div className="static-page-v2__section anim-fadeup anim-d2" style={{ paddingTop: 0 }}>
                <table className="legal-table-v2">
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.label}>
                        <th scope="row">{row.label}</th>
                        <td>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{
                  marginTop: '2rem',
                  padding: '1.25rem 1.5rem',
                  background: 'hsla(353,50%,10%,0.5)',
                  borderRadius: '0.75rem',
                  border: '1px solid hsla(353,50%,20%,0.25)',
                }}>
                  <p style={{ fontSize: '0.85rem', color: 'hsl(353,20%,55%)', lineHeight: 1.8 }}>
                    ご不明な点がございましたら、上記メールアドレスまたは電話番号にてお問い合わせください。担当者より速やかにご対応いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
