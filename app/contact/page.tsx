'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent]       = useState(false)

  const handleSend = () => {
    if (!name.trim() || !email.trim() || !message.trim()) return
    setSent(true)
  }

  return (
    <div style={{ background: 'hsl(353, 90%, 6%)' }}>
      {/* ── Hero ── */}
      <div className="page-hero page-hero--photo">
        <img src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&q=80&auto=format&fit=crop" alt="境内" className="page-hero__photo" />
        <div className="page-hero__photo-overlay" />
        <div className="page-hero__line" />
        <div className="container page-hero__content">
          <p className="page-hero__eyebrow anim-fadeup anim-d1">ご連絡はこちら</p>
          <h1 className="page-hero__title anim-fadeup anim-d2">お問い合わせ</h1>
          <p className="page-hero__sub anim-fadeup anim-d3">ご不明な点はお気軽にどうぞ</p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="contact__page-body">
        <div className="container">
          <div className="contact__wrapper">

            {/* Form card */}
            <div className={`contact__card anim-fadeup anim-d2`}>
              {sent ? (
                <div className="contact__success">
                  <i className="ri-checkbox-circle-line contact__success-icon" />
                  <p className="contact__success-title">送信が完了しました</p>
                  <p className="contact__success-text">
                    お問い合わせありがとうございます。<br />
                    内容を確認のうえ、担当者より3〜5営業日以内にご連絡いたします。
                  </p>
                </div>
              ) : (
                <>
                  <p className="contact__card-title">
                    <i className="ri-edit-line" />
                    メッセージを送る
                  </p>
                  <div className="contact__form-group">
                    <div>
                      <label className="contact__label" htmlFor="c-name">
                        お名前 <span style={{ color: 'var(--first-color)', fontSize: '0.7rem' }}>必須</span>
                      </label>
                      <input id="c-name" type="text" className="contact__input"
                        placeholder="山田 太郎" value={name}
                        onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                      <label className="contact__label" htmlFor="c-email">
                        メールアドレス <span style={{ color: 'var(--first-color)', fontSize: '0.7rem' }}>必須</span>
                      </label>
                      <input id="c-email" type="email" className="contact__input"
                        placeholder="example@mail.jp" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                      <label className="contact__label" htmlFor="c-msg">
                        お問い合わせ内容 <span style={{ color: 'var(--first-color)', fontSize: '0.7rem' }}>必須</span>
                      </label>
                      <textarea id="c-msg" className="contact__textarea"
                        placeholder="ご質問・ご要望をご記入ください" value={message}
                        onChange={(e) => setMessage(e.target.value)} />
                    </div>
                  </div>
                  <button
                    className="contact__submit-btn"
                    onClick={handleSend}
                    type="button"
                  >
                    <i className="ri-send-plane-line" />
                    送信する
                  </button>
                </>
              )}
            </div>

            {/* Address card */}
            <div className="contact__address-v2 anim-slideleft anim-d3">
              <p className="contact__address-v2-title">
                <i className="ri-map-pin-2-line" />
                所在地・連絡先
              </p>

              {[
                { icon: 'ri-map-pin-line',  key: '住所',       val: '〒000-0000\n〇〇県〇〇市境内町1-1' },
                { icon: 'ri-phone-line',    key: '電話番号',   val: '000-000-0000' },
                { icon: 'ri-mail-line',     key: 'メール',     val: 'info@keidai.example.jp' },
                { icon: 'ri-time-line',     key: '参拝時間',   val: '6:00 〜 17:00\n（年中無休）' },
                { icon: 'ri-train-line',    key: 'アクセス',   val: '最寄り駅より徒歩15分' },
              ].map((item) => (
                <div key={item.key} className="contact__address-v2-item">
                  <div className="contact__address-v2-icon">
                    <i className={item.icon} />
                  </div>
                  <div className="contact__address-v2-text">
                    <span className="contact__address-v2-key">{item.key}</span>
                    <span className="contact__address-v2-val" style={{ whiteSpace: 'pre-line' }}>
                      {item.val}
                    </span>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div style={{
                marginTop: '1.75rem',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                height: '160px',
                background: 'linear-gradient(135deg, hsl(353,50%,10%), hsl(353,40%,7%))',
                border: '1px solid hsla(353,50%,20%,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '0.5rem',
                color: 'hsl(353,20%,50%)',
                fontSize: '0.85rem',
              }}>
                <i className="ri-map-2-line" style={{ fontSize: '2rem', color: 'var(--first-color-alt)' }} />
                <span>地図・アクセス情報</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
