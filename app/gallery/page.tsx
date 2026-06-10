export const metadata = { title: 'ギャラリー | 境内' }

// Curated Unsplash photo IDs — Japan temples, shrines, seasons
const HERO_IMG = 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=1920&q=80&auto=format&fit=crop'

const items = [
  {
    season: '春', label: '桜の季節',     sub: '3月 〜 4月',
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=75&auto=format&fit=crop',
    desc: '参道を彩る満開の桜',
  },
  {
    season: '夏', label: '青葉の境内',   sub: '6月 〜 8月',
    img: 'https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=800&q=75&auto=format&fit=crop',
    desc: '深緑に包まれた静寂',
  },
  {
    season: '秋', label: '紅葉の彩り',   sub: '10月 〜 11月',
    img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=75&auto=format&fit=crop',
    desc: '燃えるような錦秋',
  },
  {
    season: '冬', label: '雪化粧の参道', sub: '12月 〜 2月',
    img: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=800&q=75&auto=format&fit=crop',
    desc: '白銀に染まる境内',
  },
  {
    season: '春', label: '夜桜ライトアップ', sub: '3月下旬',
    img: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=75&auto=format&fit=crop',
    desc: '夜桜ライトアップ',
  },
  {
    season: '夏', label: '夏祭りの夜',   sub: '7月中旬',
    img: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=75&auto=format&fit=crop',
    desc: '奉納花火と灯籠',
  },
  {
    season: '秋', label: '金色の銀杏',   sub: '11月初旬',
    img: 'https://images.unsplash.com/photo-1580714150833-9d5c0b5c8e5e?w=800&q=75&auto=format&fit=crop',
    desc: '黄金色に輝く境内',
  },
  {
    season: '冬', label: '初詣の朝',     sub: '1月1日',
    img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=75&auto=format&fit=crop',
    desc: '新年の祈りと賑わい',
  },
  {
    season: '春', label: '春雨の石畳',   sub: '4月上旬',
    img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=75&auto=format&fit=crop',
    desc: '雨に濡れた参道の美',
  },
]

const seasonColor: Record<string, string> = {
  '春': 'hsl(350,80%,65%)',
  '夏': 'hsl(160,60%,45%)',
  '秋': 'hsl(25,80%,55%)',
  '冬': 'hsl(210,60%,65%)',
}

export default function GalleryPage() {
  return (
    <div style={{ background: 'hsl(353,90%,6%)' }}>

      {/* ── Hero with real photo ── */}
      <div className="page-hero page-hero--photo">
        <img src={HERO_IMG} alt="日本の神社" className="page-hero__photo" />
        <div className="page-hero__photo-overlay" />
        <div className="page-hero__line" />
        <div className="container page-hero__content">
          <p className="page-hero__eyebrow anim-fadeup anim-d1">境内の四季</p>
          <h1 className="page-hero__title anim-fadeup anim-d2">ギャラリー</h1>
          <p className="page-hero__sub anim-fadeup anim-d3">春夏秋冬 — 移ろう境内の美</p>
        </div>
      </div>

      {/* ── Season showcase strip ── */}
      <div className="season-strip">
        <div className="container">
          <div className="season-strip__grid">
            {[
              { kanji: '春', en: 'Spring', months: '3月 — 4月', color: 'hsl(350,80%,65%)', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=75&auto=format&fit=crop' },
              { kanji: '夏', en: 'Summer', months: '6月 — 8月', color: 'hsl(160,60%,45%)', img: 'https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=600&q=75&auto=format&fit=crop' },
              { kanji: '秋', en: 'Autumn', months: '10月 — 11月', color: 'hsl(25,80%,55%)',  img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=75&auto=format&fit=crop' },
              { kanji: '冬', en: 'Winter', months: '12月 — 2月', color: 'hsl(210,60%,65%)', img: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=600&q=75&auto=format&fit=crop' },
            ].map((s) => (
              <div key={s.kanji} className="season-strip__card">
                <img src={s.img} alt={s.en} className="season-strip__img" loading="lazy" />
                <div className="season-strip__overlay" />
                <div className="season-strip__dot" style={{ background: s.color }} />
                <div className="season-strip__text">
                  <span className="season-strip__kanji">{s.kanji}</span>
                  <span className="season-strip__en">{s.en}</span>
                  <span className="season-strip__months">{s.months}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Photo grid ── */}
      <section className="section" style={{ paddingTop: '3.5rem' }}>
        <div className="container">
          <div className="gallery__grid">
            {items.map((item, i) => (
              <div
                key={i}
                className={`gallery__card gallery__card--photo anim-scalein anim-d${(i % 6) + 1}`}
                data-season={item.season}
              >
                {/* Real photo */}
                <img
                  src={item.img}
                  alt={item.label}
                  className="gallery__card-photo"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="gallery__card-overlay" />

                {/* Season badge */}
                <div className="gallery__card-season-badge" style={{ background: seasonColor[item.season] }}>
                  {item.season}
                </div>

                {/* Label */}
                <div className="gallery__card-label gallery__card-label--photo">
                  <p>{item.label}</p>
                  <p>{item.sub}</p>
                </div>

                {/* Hover desc chip */}
                <div className="gallery__card-chip">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
