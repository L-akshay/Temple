export const metadata = { title: '行事・季節 | 境内' }

const HERO_IMG = 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=1920&q=80&auto=format&fit=crop'

const events = [
  {
    season: '春',
    badge: '春の行事',
    date: '3月下旬 〜 4月中旬',
    title: '桜まつり',
    desc: '参道沿いの桜が満開を迎えます。夜桜ライトアップや奉納演奏など、春ならではの催しをお楽しみください。境内全体が桜色に染まる、一年で最も華やかな季節です。',
    icon: 'ri-flower-line',
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=80&auto=format&fit=crop',
  },
  {
    season: '夏',
    badge: '夏の行事',
    date: '7月第3土曜日',
    title: '夏祭り',
    desc: '盆踊り、出店、奉納花火と賑わいに満ちた夜を過ごせます。境内が光と音に包まれる一夜。地域の人々が一堂に会し、伝統の夏祭りを盛大に祝います。',
    icon: 'ri-fire-line',
    img: 'https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=900&q=80&auto=format&fit=crop',
  },
  {
    season: '秋',
    badge: '秋の行事',
    date: '11月上旬 〜 中旬',
    title: '紅葉ライトアップ',
    desc: 'もみじと銀杏が黄金色に輝く境内を、幻想的な照明が彩ります。秋の深まりを肌で感じる特別な時間。夜の帳が下りた後の光と影が織りなす景色は格別です。',
    icon: 'ri-leaf-line',
    img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=900&q=80&auto=format&fit=crop',
  },
  {
    season: '冬',
    badge: '冬の行事',
    date: '1月1日 〜 3日',
    title: '初詣',
    desc: '新年の祈りを捧げに多くの参拝者が訪れます。破魔矢・おみくじ・お守りなど縁起物も豊富に揃えております。新しい年の始まりを、神聖な境内でお迎えください。',
    icon: 'ri-star-line',
    img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=80&auto=format&fit=crop',
  },
]

const seasonAccent: Record<string, string> = {
  '春': 'hsl(350,80%,65%)',
  '夏': 'hsl(160,60%,45%)',
  '秋': 'hsl(25,80%,55%)',
  '冬': 'hsl(210,60%,65%)',
}

const timeline = [
  { m: '1月', ev: '初詣' }, { m: '3月', ev: '春彼岸' }, { m: '4月', ev: '桜まつり' },
  { m: '7月', ev: '夏祭り' }, { m: '9月', ev: '秋彼岸' }, { m: '11月', ev: '紅葉' }, { m: '12月', ev: '大晦日' },
]

export default function EventsPage() {
  return (
    <div style={{ background: 'hsl(353,90%,6%)' }}>

      {/* ── Hero ── */}
      <div className="page-hero page-hero--photo">
        <img src={HERO_IMG} alt="夏祭り" className="page-hero__photo" />
        <div className="page-hero__photo-overlay" />
        <div className="page-hero__line" />
        <div className="container page-hero__content">
          <p className="page-hero__eyebrow anim-fadeup anim-d1">年中行事</p>
          <h1 className="page-hero__title anim-fadeup anim-d2">行事・季節</h1>
          <p className="page-hero__sub anim-fadeup anim-d3">境内の四季を彩る伝統行事</p>
        </div>
      </div>

      {/* ── Timeline bar ── */}
      <div className="stats-bar">
        <div className="container">
          <div className="events__timeline-bar">
            {timeline.map((t, i) => (
              <div key={i} className="events__timeline-item">
                <div className="events__timeline-dot" />
                <p className="events__timeline-month">{t.m}</p>
                <p className="events__timeline-ev">{t.ev}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Event cards with photos ── */}
      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="container">
          <div className="events__grid--photo">
            {events.map((ev, i) => (
              <div
                key={i}
                className={`events__card--photo anim-fadeup anim-d${i + 1}`}
                data-season={ev.season}
              >
                {/* Photo half */}
                <div className="events__card-photo-wrap">
                  <img src={ev.img} alt={ev.title} className="events__card-photo" loading="lazy" />
                  <div className="events__card-photo-overlay" style={{ background: `linear-gradient(to right, hsla(353,90%,5%,0.85) 0%, transparent 100%)` }} />
                  <span
                    className="events__card-season-mark"
                    style={{ color: seasonAccent[ev.season] }}
                  >
                    {ev.season}
                  </span>
                </div>

                {/* Text half */}
                <div className="events__card-body">
                  <span className="events__card-badge" style={{ borderColor: `${seasonAccent[ev.season]}44`, color: seasonAccent[ev.season] }}>
                    <i className={ev.icon} />
                    {ev.badge}
                  </span>
                  <p className="events__card-date">{ev.date}</p>
                  <h3 className="events__card-title">{ev.title}</h3>
                  <p className="events__card-desc">{ev.desc}</p>
                  <p className="events__card-arrow">
                    詳細を見る <i className="ri-arrow-right-line" />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '2.5rem', fontSize: '0.75rem', color: 'hsl(353,15%,38%)' }}>
            Photos via <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--first-color-alt)' }}>Unsplash</a>
          </p>
        </div>
      </section>
    </div>
  )
}
