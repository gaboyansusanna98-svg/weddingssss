"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2026-12-31T12:00:00+04:00");

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, weddingDate.getTime() - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-shade" />
        <nav className="nav"><a href="#top">Ю & П</a><a href="#details">ДЕТАЛИ ДНЯ</a><a href="#rsvp">ОТВЕТИТЬ</a></nav>
        <div className="hero-content">
          <p className="eyebrow">С РАДОСТЬЮ ПРИГЛАШАЕМ ВАС</p>
          <h1>Юлия <span>&</span> Пётр</h1>
          <div className="ornament">✳</div>
          <p className="hero-date">31 ДЕКАБРЯ 2026 <i>·</i> 12:00</p>
          <a className="outline-button" href="#invitation">НАШЕ ПРИГЛАШЕНИЕ</a>
        </div>
        <div className="vertical-note">A DAY TO REMEMBER · 31.12.2026</div>
        <a className="scroll" href="#invitation">ЛИСТАЙТЕ ВНИЗ <span>↓</span></a>
      </section>

      <section className="intro section" id="invitation">
        <p className="eyebrow gold">ДОРОГИЕ НАШИ РОДНЫЕ И ДРУЗЬЯ</p>
        <div className="small-flower">✳</div>
        <h2>В этот особенный день<br />мы хотим быть <em>рядом с вами</em></h2>
        <p className="intro-copy">В канун Нового года начинается наша новая история — история семьи. Будем счастливы разделить этот тёплый и волшебный момент с вами!</p>
        <div className="signature">С любовью, Юлия и Пётр</div>
      </section>

      <section className="countdown-section section">
        <p className="eyebrow">ДО НАШЕЙ ВСТРЕЧИ ОСТАЛОСЬ</p>
        <div className="countdown">
          {Object.entries(timeLeft).map(([label, value]) => <div className="count-item" key={label}><strong>{String(value).padStart(2, "0")}</strong><span>{{days:"дней",hours:"часов",minutes:"минут",seconds:"секунд"}[label]}</span></div>)}
        </div>
        <p className="count-note">Считаем мгновения до самого счастливого дня</p>
      </section>

      <section className="details section" id="details">
        <p className="eyebrow gold">СОХРАНИТЕ ДАТУ</p>
        <h2>Наш <em>праздничный</em> день</h2>
        <div className="detail-grid">
          <article className="detail-card"><span className="detail-icon">✧</span><p className="detail-label">КОГДА</p><h3>31 декабря 2026</h3><p>Начало праздника — 12:00</p></article>
          <article className="detail-card"><span className="detail-icon">⌖</span><p className="detail-label">ГДЕ</p><h3>Ресторан «Парус»</h3><p>Будем ждать вас в праздничной атмосфере</p></article>
          <article className="detail-card"><span className="detail-icon">◇</span><p className="detail-label">ДРЕСС-КОД</p><h3>Белый</h3><p>Будем рады белым и молочным оттенкам в ваших образах</p></article>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-mark">“</div>
        <p>Самые прекрасные моменты<br />становятся ещё прекраснее,<br />когда рядом любимые люди.</p>
        <span>ЮЛИЯ & ПЁТР</span>
      </section>

      <section className="rsvp section" id="rsvp">
        <p className="eyebrow gold">БУДЕМ ЖДАТЬ ВАШ ОТВЕТ</p>
        <h2>Вы с нами?</h2>
        <p className="rsvp-copy">Пожалуйста, подтвердите своё присутствие. Нам будет очень приятно разделить этот день вместе с вами.</p>
        {sent ? <div className="thanks">Спасибо! Мы будем рады вас видеть ♡</div> : <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <label>Ваше имя<input required name="name" placeholder="Как к вам обращаться?" /></label>
          <label>Сможете ли вы прийти?<select name="attendance" defaultValue="yes"><option value="yes">С радостью буду!</option><option value="no">К сожалению, не получится</option></select></label>
          <label>Пожелания или комментарий<textarea name="message" rows={3} placeholder="Напишите нам пару слов (необязательно)" /></label>
          <button className="submit-button" type="submit">ОТПРАВИТЬ ОТВЕТ <span>↗</span></button>
        </form>}
        <p className="form-note">* Пока это демонстрационная форма: ответы не отправляются организаторам.</p>
      </section>

      <footer><div className="footer-monogram">Ю <span>&</span> П</div><p>С нетерпением ждём встречи с вами</p><small>31 · 12 · 2026</small></footer>
    </main>
  );
}
