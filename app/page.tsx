export default function HomePage() {
  return (
    <section className="home" id="home">
      <img src="/assets/img/img-bg.svg" alt="background" className="home__bg" />

      <div className="home__container container">
        <div className="home__data">
          <h1 className="home__title">
            境内へ<br />ようこそ
          </h1>

          <p className="home__description">
            境内は自然と調和した観光地です。静けさと平和を体験できます。
          </p>

          <a href="#explore" className="home__button">境内を探索する</a>

          <img src="/assets/img/lantern-1.svg" alt="提灯" className="home__lantern-1" />
          <img src="/assets/img/lantern-2.svg" alt="提灯" className="home__lantern-2" />
        </div>

        <div className="home__images">
          <img src="/assets/img/img-1.svg" alt="装飾 1" className="home__img-1" />
          <img src="/assets/img/img-2.svg" alt="装飾 2" className="home__img-2" />
          <img src="/assets/img/img-3.svg" alt="装飾 3" className="home__img-3" />
          <img src="/assets/img/img-4.svg" alt="装飾 4" className="home__img-4" />
          <img src="/assets/img/img-5.svg" alt="装飾 5" className="home__img-5" />
          <img src="/assets/img/img-6.svg" alt="装飾 6" className="home__img-6" />
        </div>
      </div>
    </section>
  )
}
