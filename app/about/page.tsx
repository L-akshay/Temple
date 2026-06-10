export const metadata = { title: '寺について | 境内' }

// Unsplash photo IDs — Japanese temples, shrines, nature
const HERO_IMG   = 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&q=80&auto=format&fit=crop'
const ABOUT_MAIN = 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=80&auto=format&fit=crop'
const ABOUT_SM1  = 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=600&q=80&auto=format&fit=crop'
const ABOUT_SM2  = 'https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=600&q=80&auto=format&fit=crop'

const infoRows = [
  { icon: 'ri-ancient-gate-line', key: '創建',     val: '承和元年（834年）' },
  { icon: 'ri-sparkling-line',    key: '御祭神',   val: '天照大御神' },
  { icon: 'ri-leaf-line',         key: '宗派',     val: '真言宗' },
  { icon: 'ri-time-line',         key: '参拝時間', val: '6:00 〜 17:00（年中無休）' },
  { icon: 'ri-map-pin-line',      key: '所在地',   val: '〒000-0000 〇〇県〇〇市境内町1-1' },
  { icon: 'ri-walk-line',         key: 'アクセス', val: '最寄り駅より徒歩15分' },
]

const stats = [
  { number: '834',   label: '創建年' },
  { number: '1,200', label: '年の歴史' },
  { number: '3ha',   label: '境内面積' },
  { number: '四季',  label: '見どころ' },
]

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* ── Hero with real photo ── */}
      <div className="page-hero page-hero--photo">
        <img src={HERO_IMG} alt="日本の寺院" className="page-hero__photo" />
        <div className="page-hero__photo-overlay" />
        <div className="page-hero__line" />
        <div className="container page-hero__content">
          <p className="page-hero__eyebrow anim-fadeup anim-d1">境内について</p>
          <h1 className="page-hero__title anim-fadeup anim-d2">寺について</h1>
          <p className="page-hero__sub anim-fadeup anim-d3">歴史・御祭神・参拝案内</p>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="stats-bar">
        <div className="container">
          <div className="about__stats">
            {stats.map((s, i) => (
              <div key={i} className={`about__stat anim-fadeup anim-d${i + 2}`}>
                <span className="about__stat-number">{s.number}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="container">
          <div className="about__grid">

            {/* Left — text & info */}
            <div>
              <p className="about__lead anim-fadeup anim-d1">
                この境内は、山懐に抱かれた千年以上の歴史を持つ古刹です。
                自然の恵みと神の御加護のもと、訪れる人々が心の安らぎを見つける場所として
                今もなお多くの参拝者に愛されています。
              </p>
              <p className="about__text anim-fadeup anim-d2">
                承和元年（834年）に創建されて以来、幾多の時代を経ながらも変わらぬ姿で
                人々の祈りを受け止めてきました。境内を包む木々の緑、朝霧の静寂、
                そして遠くに聞こえる鐘の音——この地に足を踏み入れた瞬間、
                日常の喧騒が遠のいていくことでしょう。
              </p>
              <p className="about__text anim-fadeup anim-d3">
                四季折々の自然美も境内の大きな魅力です。春の桜、夏の深緑、
                秋の紅葉、冬の雪化粧——訪れるたびに異なる表情で皆様をお迎えします。
              </p>

              <hr className="about__divider anim-fadeup anim-d4" />

              <div className="about__info-block-v2">
                {infoRows.map((row, i) => (
                  <div key={row.key} className={`about__info-row anim-fadeup anim-d${i + 3}`}>
                    <div className="about__info-icon"><i className={row.icon} /></div>
                    <div className="about__info-text">
                      <span className="about__info-key">{row.key}</span>
                      <span className="about__info-val">{row.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — photo collage */}
            <div className="about__photo-collage anim-slideleft anim-d2">
              <div className="about__photo-main-wrap">
                <img src={ABOUT_MAIN} alt="境内の情景" className="about__photo-main" />
              </div>
              <div className="about__photo-row">
                <div className="about__photo-sm-wrap">
                  <img src={ABOUT_SM1} alt="境内の風景" className="about__photo-sm" />
                </div>
                <div className="about__photo-sm-wrap">
                  <img src={ABOUT_SM2} alt="境内の自然" className="about__photo-sm" />
                </div>
              </div>
              <p className="about__photo-credit">
                Photo: <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
