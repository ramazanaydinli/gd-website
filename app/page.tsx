"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";

// ─────────────────────────────────────────────────────────────────────
// IMAGE BINDINGS — slot id → /public/images/*
// ─────────────────────────────────────────────────────────────────────
const HERO_IMAGES = [
  "/images/solid_waste.jpeg",
  "/images/waste_water.jpeg",
  "/images/drinking_water.jpeg",
  "/images/super_infra_structure.jpeg",
];
const ABOUT_STRIP_IMAGE = "/images/dam.jpeg";
const REACH_MAP_IMAGE = "/images/map.jpeg";

// ─────────────────────────────────────────────────────────────────────
// CONTENT — TR + EN
// ─────────────────────────────────────────────────────────────────────
type Slide = {
  num: string;
  label: string;
  headline: ReactNode[];
  sub: string;
};

type Metric = { num: string; sup?: string; label: string };

type ServiceCard = {
  num: string;
  tag: string;
  title: string;
  desc: string;
  items: string[];
  icon: "recycle" | "water" | "pipe" | "beam";
};

type ContactCol = { h: string; body: ReactNode };

type LeadForm = {
  eyebrow: string;
  title: string;
  desc: string;
  fields: { name: string; company: string; email: string };
  submit: string;
  sending: string;
  success: string;
  error: string;
  privacy: string;
};

type Locale = {
  nav: string[];
  heroSlides: Slide[];
  side: string;
  scroll: string;
  about: {
    eyebrow: string;
    title: ReactNode[];
    copy: string[];
    metrics: Metric[];
    stripCaption: string;
  };
  services: {
    eyebrow: string;
    title: ReactNode[];
    sub: string;
    cards: ServiceCard[];
  };
  reach: { eyebrow: string; title: ReactNode[]; body: string };
  contact: { title: ReactNode[]; cols: ContactCol[]; ctaLabel: string };
  form: LeadForm;
  marquee: string[];
  footerLinks: string[];
  footerCopy: string;
};

const CONTENT: Record<"tr" | "en", Locale> = {
  tr: {
    nav: ["ANA SAYFA", "KURUMSAL", "FAALİYET ALANLARI", "İLETİŞİM"],
    heroSlides: [
      {
        num: "01",
        label: "KATI ATIK BERTARAF",
        headline: [
          "ATIKTAN",
          "DEĞER ÜRETEN",
          <em key="a" className="accent">
            ALTYAPI.
          </em>,
        ],
        sub: "Modern evsel atık yönetim tesislerinin tasarımı ve inşası. Sürdürülebilir, ölçeklenebilir ve yönetmeliklere tam uyumlu çözümler sunuyoruz.",
      },
      {
        num: "02",
        label: "İÇME SUYU & ATIKSU ARITMA",
        headline: [
          "ENDÜSTRİYEL",
          "VE EVSEL SUYA",
          <em key="b" className="accent">
            İKİNCİ HAYAT.
          </em>,
        ],
        sub: "Mekanik, biyolojik ve ileri arıtma proseslerinin entegre tasarımı. Küçük ölçekli paket tesisten metropol kapasitesine kadar çözüm üretiyoruz.",
      },
      {
        num: "03",
        label: "İÇME SUYU & KANALİZASYON",
        headline: [
          "ŞEHRİN",
          "HAYAT",
          <em key="c" className="accent">
            DAMARLARI.
          </em>,
        ],
        sub: "İçme suyu şebekeleri, terfi istasyonları, kanalizasyon hattı ve kolektör imalatı. Hassas mühendislikle dayanıklı yapılar kuruyoruz.",
      },
      {
        num: "04",
        label: "ALTYAPI & ÜST YAPI",
        headline: [
          "TEMELDEN",
          "ÇATIYA,",
          <em key="d" className="accent">
            EKSİKSİZ İNŞAA.
          </em>,
        ],
        sub: "Yol, sanat yapısı, betonarme ve çelik üst yapı işleri. Anahtar teslim mühendislik çözümleri sunuyoruz.",
      },
    ],
    side: "BÖLÜM · 01 / 04",
    scroll: "KAYDIR",
    about: {
      eyebrow: "KURUMSAL · GÜNDOĞU İNŞAAT",
      title: [
        "ALTYAPIDAN ÜST YAPIYA,",
        <br key="1" />,
        "ZAMANI AŞAN ",
        <em key="2">MÜHENDİSLİK.</em>,
      ],
      copy: [
        "Gündoğu İnşaat; katı atık bertaraf, atıksu ve içme suyu arıtma, içme suyu isale, şebeke ve atık su kanalizasyon sistemleriyle altyapı ve üstyapı projeleri başta olmak üzere geniş bir faaliyet yelpazesinde, hem yurt içinde hem de yurt dışında çalışmalarını sürdürmektedir.",
        "Her proje, sahaya özgü mühendislik çözümleriyle planlanır; tasarımdan teslim sonrası işletmeye kadar tek elden, kontrollü ve şeffaf süreçlerle hayata geçirilir.",
      ],
      metrics: [
        { num: "4", sup: "ana", label: "FAALİYET ALANI" },
        { num: "2", sup: "kıta", label: "YURT İÇİ + YURTDIŞI" },
        { num: "∞", label: "M³ SU İŞLEME KAPASİTESİ" },
        { num: "1", sup: "#", label: "ANAHTAR TESLİM ORTAK" },
      ],
      stripCaption: "SAHADAN · TESİS GÖRÜNTÜSÜ",
    },
    services: {
      eyebrow: "02 — FAALİYET ALANLARI",
      title: [
        "DÖRT ALAN.",
        <br key="x" />,
        "TEK ",
        <em key="y">MÜHENDİSLİK DİSİPLİNİ.</em>,
      ],
      sub: "Anahtar teslim altyapı ve üst yapı projelerini, yurt içi ve yurt dışı sahalarında, sözleşmeden işletmeye dek tek bir mühendislik diliyle yürütüyoruz.",
      cards: [
        {
          num: "01",
          tag: "ÇEVRE · ATIK",
          title: "Katı Atık Bertaraf",
          desc: "Toplama, ayrıştırma, geri kazanım ve bertaraf altyapısının tasarım ve inşası.",
          items: [
            "Düzenli depolama sahaları",
            "Mekanik ayrıştırma",
            "Kompost ve geri kazanım",
            "Sızıntı suyu yönetimi",
          ],
          icon: "recycle",
        },
        {
          num: "02",
          tag: "SU · ARITMA",
          title: "İçme Suyu ve Atıksu Arıtma Tesisleri",
          desc: "İçme suyu arıtımının yanı sıra evsel ve endüstriyel atık su için mekanik, biyolojik ve ileri arıtma sistemleri.",
          items: [
            "Paket arıtma tesisleri",
            "Biyolojik reaktörler (MBR/SBR)",
            "Çamur susuzlaştırma",
            "İleri arıtma & deşarj",
          ],
          icon: "water",
        },
        {
          num: "03",
          tag: "ŞEBEKE · ŞEHİR",
          title: "İçme Suyu & Kanalizasyon Projeleri",
          desc: "Şehir ölçeğinde içme suyu ve kanalizasyon şebekelerinin imalatı ve revizyonu.",
          items: [
            "İçme suyu hat & şebeke",
            "Terfi istasyonları",
            "Kanalizasyon kolektörleri",
            "SCADA & izleme entegrasyonu",
          ],
          icon: "pipe",
        },
        {
          num: "04",
          tag: "YAPI · İNŞAAT",
          title: "Altyapı, Üstyapı & Endüstriyel Tesisler",
          desc: "Yol, sanat yapıları, betonarme ve çelik üst yapı imalatı — anahtar teslim.",
          items: [
            "Yol & sanat yapıları",
            "Betonarme & çelik yapı",
            "Endüstriyel yapılar",
            "Kazı, dolgu, yol üst yapısı",
          ],
          icon: "beam",
        },
      ],
    },
    reach: {
      eyebrow: "03 — COĞRAFYA",
      title: ["YURT İÇİ.", <br key="x" />, "YURT ", <em key="y">DIŞI.</em>],
      body: "Gündoğu İnşaat; Türkiye genelinde aktif olarak yürüttüğü altyapı ve üst yapı projelerinin yanı sıra, başta Atina (Yunanistan) ve Kuzey Makedonya olmak üzere yurt dışı sahalarda da mühendislik ve yapım hizmetleri sunmaktadır. Lokasyondan bağımsız aynı disiplin: doğru planlama, denetimli inşa, şeffaf raporlama.",
    },
    contact: {
      title: [
        "PROJELERİNİZ İÇİN",
        <br key="x" />,
        <em key="y">GÜNDOĞU&apos;YU</em>,
        " TANIYIN.",
      ],
      cols: [
        {
          h: "MERKEZ OFİS · DİYARBAKIR",
          body: (
            <>
              Peyas Mah. Selahaddin Eyyubi Bul.
              <br />
              No: 35/1 İç Kapı No: 1
              <br />
              Kayapınar · Diyarbakır · Türkiye
              <br />
              <span style={{ opacity: 0.6, fontSize: "0.85em" }}>
                Adres Kodu: 2423270434
              </span>
              <br />
              <br />
              Tel: +90 412 251 67 66
              <br />
              Faks: +90 412 251 67 66
            </>
          ),
        },
        {
          h: "ANKARA OFİS",
          body: (
            <>
              Kızılırmak Mah. 1446. Cadde
              <br />
              Alternatif Plaza Kat 10 No: 39
              <br />
              Çankaya · Ankara · Türkiye
            </>
          ),
        },
        {
          h: "İLETİŞİM",
          body: (
            <>
              <a href="mailto:info@gundoguinsaat.com">info@gundoguinsaat.com</a>
              <br />
              <br />
              <span style={{ opacity: 0.6, fontSize: "0.85em" }}>
                Pzt – Cum · 08:30 – 18:00
              </span>
            </>
          ),
        },
      ],
      ctaLabel: "İLETİŞİME GEÇİN →",
    },
    form: {
      eyebrow: "SUNUM TALEBİ",
      title: "Proje sunumumuzu isteyin",
      desc: "Bilgilerinizi bırakın; projelerimizi ve referanslarımızı içeren sunumu en kısa sürede sizinle paylaşalım.",
      fields: { name: "Ad Soyad", company: "Firma", email: "E-posta" },
      submit: "Gönder",
      sending: "Gönderiliyor…",
      success: "Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.",
      error: "Bir sorun oluştu. Lütfen tekrar deneyin ya da info@gundoguinsaat.com adresine yazın.",
      privacy: "Bilgileriniz yalnızca sizinle iletişim kurmak için kullanılır.",
    },
    marquee: [
      "Katı Atık Bertaraf",
      "Atık Su Arıtma",
      "İçme Suyu",
      "Kanalizasyon",
      "Altyapı",
      "Üst Yapı",
      "Yurt İçi",
      "Yurt Dışı",
    ],
    footerLinks: ["KVKK", "GİZLİLİK", "KULLANIM"],
    footerCopy: "© 2026 GÜNDOĞU İNŞAAT · TÜM HAKLARI SAKLIDIR",
  },
  en: {
    nav: ["HOME", "COMPANY", "EXPERTISE", "CONTACT"],
    heroSlides: [
      {
        num: "01",
        label: "SOLID WASTE DISPOSAL",
        headline: [
          "INFRASTRUCTURE",
          "THAT TURNS WASTE",
          <em key="a" className="accent">
            INTO VALUE.
          </em>,
        ],
        sub: "Design and construction of modern municipal waste management facilities. We deliver sustainable, scalable and fully regulation-compliant solutions.",
      },
      {
        num: "02",
        label: "WATER & WASTEWATER TREATMENT",
        headline: [
          "A SECOND LIFE",
          "FOR INDUSTRIAL",
          <em key="b" className="accent">
            AND URBAN WATER.
          </em>,
        ],
        sub: "Integrated mechanical, biological and advanced treatment design. We build solutions from small package plants to metropolitan capacity.",
      },
      {
        num: "03",
        label: "WATER & SEWERAGE",
        headline: [
          "THE CITY’S",
          "LIFE",
          <em key="c" className="accent">
            LINES.
          </em>,
        ],
        sub: "Drinking-water networks, pumping stations, sewerage lines and collectors. We build durable structures with precise engineering.",
      },
      {
        num: "04",
        label: "INFRASTRUCTURE & BUILDING",
        headline: [
          "FROM FOUNDATION",
          "TO ROOF —",
          <em key="d" className="accent">
            END-TO-END.
          </em>,
        ],
        sub: "Roads, art structures, reinforced concrete and steel superstructures. We deliver turnkey engineering solutions.",
      },
    ],
    side: "SECTION · 01 / 04",
    scroll: "SCROLL",
    about: {
      eyebrow: "COMPANY · GÜNDOĞU İNŞAAT",
      title: [
        "FROM INFRASTRUCTURE TO BUILDING,",
        <br key="1" />,
        "ENGINEERING THAT ",
        <em key="2">OUTLASTS.</em>,
      ],
      copy: [
        "Gündoğu İnşaat operates across a broad range of fields — solid-waste disposal, wastewater and drinking-water treatment, drinking-water transmission, distribution and sewerage networks, and infrastructure and superstructure projects — both inside Türkiye and abroad.",
        "Every project is planned with site-specific engineering, delivered as a single-source, controlled and transparent process from design to commissioning.",
      ],
      metrics: [
        { num: "4", sup: "core", label: "FIELDS OF EXPERTISE" },
        { num: "2", sup: "cont.", label: "DOMESTIC + INTERNATIONAL" },
        { num: "∞", label: "M³ WATER CAPACITY" },
        { num: "1", sup: "#", label: "TURNKEY PARTNER" },
      ],
      stripCaption: "ON SITE · FACILITY",
    },
    services: {
      eyebrow: "02 — EXPERTISE",
      title: [
        "FOUR FIELDS.",
        <br key="x" />,
        "ONE ",
        <em key="y">ENGINEERING DISCIPLINE.</em>,
      ],
      sub: "We deliver turnkey infrastructure and building projects in Türkiye and abroad under a single engineering language — from contract to commissioning.",
      cards: [
        {
          num: "01",
          tag: "ENV · WASTE",
          title: "Solid Waste Disposal",
          desc: "Design and construction of collection, sorting, recovery and disposal infrastructure.",
          items: [
            "Sanitary landfills",
            "Mechanical sorting",
            "Composting & recovery",
            "Leachate management",
          ],
          icon: "recycle",
        },
        {
          num: "02",
          tag: "WATER · TREATMENT",
          title: "Drinking Water & Wastewater Treatment",
          desc: "Drinking-water treatment plus mechanical, biological and advanced systems for domestic and industrial wastewater.",
          items: [
            "Package treatment plants",
            "Biological reactors (MBR/SBR)",
            "Sludge dewatering",
            "Tertiary treatment",
          ],
          icon: "water",
        },
        {
          num: "03",
          tag: "NETWORK · CITY",
          title: "Water & Sewerage Projects",
          desc: "City-scale drinking water and sewerage networks — installation and rehabilitation.",
          items: [
            "Distribution networks",
            "Pumping stations",
            "Sewer collectors",
            "SCADA integration",
          ],
          icon: "pipe",
        },
        {
          num: "04",
          tag: "STRUCTURE · BUILD",
          title: "Infrastructure, Superstructure & Industrial Facilities",
          desc: "Roads, art structures, reinforced concrete and steel superstructures — turnkey.",
          items: [
            "Roads & art structures",
            "RC & steel structures",
            "Industrial buildings",
            "Earthworks & pavement",
          ],
          icon: "beam",
        },
      ],
    },
    reach: {
      eyebrow: "03 — REACH",
      title: ["DOMESTIC.", <br key="x" />, <em key="y">INTERNATIONAL.</em>],
      body: "Beyond active operations across Türkiye, Gündoğu İnşaat delivers engineering and construction services on international sites — notably Athens (Greece) and North Macedonia. Same discipline regardless of geography: rigorous planning, controlled execution, transparent reporting.",
    },
    contact: {
      title: [
        "MEET ",
        <em key="y">GÜNDOĞU</em>,
        <br key="x" />,
        "FOR YOUR PROJECTS.",
      ],
      cols: [
        {
          h: "HEAD OFFICE · DİYARBAKIR",
          body: (
            <>
              Peyas Mah. Selahaddin Eyyubi Blv.
              <br />
              No: 35/1 Door No: 1
              <br />
              Kayapınar · Diyarbakır · Türkiye
              <br />
              <span style={{ opacity: 0.6, fontSize: "0.85em" }}>
                Address code: 2423270434
              </span>
              <br />
              <br />
              Tel: +90 412 251 67 66
              <br />
              Fax: +90 412 251 67 66
            </>
          ),
        },
        {
          h: "ANKARA OFFICE",
          body: (
            <>
              Kızılırmak Mah. 1446. Cadde
              <br />
              Alternatif Plaza Floor 10 No: 39
              <br />
              Çankaya · Ankara · Türkiye
            </>
          ),
        },
        {
          h: "CONTACT",
          body: (
            <>
              <a href="mailto:info@gundoguinsaat.com">info@gundoguinsaat.com</a>
              <br />
              <br />
              <span style={{ opacity: 0.6, fontSize: "0.85em" }}>
                Mon – Fri · 08:30 – 18:00
              </span>
            </>
          ),
        },
      ],
      ctaLabel: "GET IN TOUCH →",
    },
    form: {
      eyebrow: "REQUEST DECK",
      title: "Request our project deck",
      desc: "Leave your details and we'll share the deck covering our projects and references shortly.",
      fields: { name: "Full name", company: "Company", email: "Email" },
      submit: "Send",
      sending: "Sending…",
      success: "Thanks — we've received your request and will get back to you shortly.",
      error: "Something went wrong. Please try again or email info@gundoguinsaat.com.",
      privacy: "Your details are used only to get in touch with you.",
    },
    marquee: [
      "Solid Waste Disposal",
      "Wastewater",
      "Drinking Water",
      "Sewerage",
      "Infrastructure",
      "Building Works",
      "Domestic",
      "International",
    ],
    footerLinks: ["PRIVACY", "TERMS", "GDPR"],
    footerCopy: "© 2026 GÜNDOĞU İNŞAAT · ALL RIGHTS RESERVED",
  },
};

// ─────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────
function ServiceIcon({ kind }: { kind: ServiceCard["icon"] }) {
  if (kind === "recycle")
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M7 4l-3 5 3 0M4 9l3-5 5 9M17 20l3-5-3 0M20 15l-3 5-5-9M11 14l3 5-9 0" strokeLinejoin="round" />
      </svg>
    );
  if (kind === "water")
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 3c0 0 6 7 6 11a6 6 0 01-12 0c0-4 6-11 6-11z" />
        <path d="M9 14a3 3 0 003 3" strokeLinecap="round" />
      </svg>
    );
  if (kind === "pipe")
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 8h12a3 3 0 010 6H9a3 3 0 000 6h12" />
        <circle cx="15" cy="8" r="2" fill="currentColor" />
        <circle cx="9" cy="20" r="2" fill="currentColor" />
      </svg>
    );
  if (kind === "beam")
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="4" y="4" width="16" height="3" />
        <rect x="4" y="17" width="16" height="3" />
        <rect x="10.5" y="7" width="3" height="10" />
      </svg>
    );
  return null;
}

// Brand mark — real PNG of the logo. CSS filter makes it a white silhouette
// on dark chrome (nav, footer). Original colors stay intact wherever else.
function BrandMark({ size = 40 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/symbol.png"
      alt="Gündoğu İnşaat"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────────────────────
function Nav({
  lang,
  setLang,
  t,
}: {
  lang: "tr" | "en";
  setLang: (l: "tr" | "en") => void;
  t: Locale;
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`gd-nav${scrolled ? " scrolled" : ""}`}>
      <a className="gd-nav__brand" href="#top">
        <BrandMark size={40} />
        <div className="gd-nav__brand-text">
          <strong>GÜNDOĞU</strong>
          <span>İNŞAAT</span>
        </div>
      </a>
      <ul className="gd-nav__list">
        {t.nav.map((item, i) => (
          <li key={i}>
            <a href={["#top", "#about", "#services", "#contact"][i]}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="gd-nav__right">
        <div className="gd-nav__lang">
          <button className={lang === "tr" ? "active" : ""} onClick={() => setLang("tr")}>
            TR
          </button>
          <span>·</span>
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>
            EN
          </button>
        </div>
        <a className="gd-nav__phone" href="tel:+904122516766">
          <span className="gd-nav__phone-dot"></span>
          +90 412 251 67 66
        </a>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────
function Hero({ t }: { t: Locale }) {
  const [idx, setIdx] = useState(0);
  const slides = t.heroSlides;
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  const next = () => setIdx((i) => (i + 1) % slides.length);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);

  const slide = slides[idx];

  return (
    <section
      id="top"
      className="gd-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="gd-hero__bg"></div>
      <div className="gd-hero__photo" key={`photo-${idx}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={HERO_IMAGES[idx]} alt={slide.label} />
      </div>
      <div className="gd-hero__veil"></div>

      <aside className="gd-hero__side">
        <span className="gd-hero__side-text">
          GÜNDOĞU · {String(idx + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </aside>

      <div className="gd-hero__content">
        <div className="gd-hero__copy" key={idx}>
          <div className="gd-hero__eyebrow">
            <span className="gd-hero__eyebrow-num">{slide.num}</span>
            <span className="gd-hero__eyebrow-line"></span>
            <span className="gd-hero__eyebrow-label">{slide.label}</span>
          </div>
          <h1 className="gd-hero__headline">
            {slide.headline.map((line, i) =>
              i < slide.headline.length - 1 ? (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ) : (
                <span key={i}>{line}</span>
              )
            )}
          </h1>
          <p className="gd-hero__sub">{slide.sub}</p>
        </div>

        <div className="gd-hero__bottom">
          <div className="gd-hero__dots">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`gd-hero__dot${i === idx ? " active" : ""}`}
                onClick={() => setIdx(i)}
              ></span>
            ))}
          </div>
          <div className="gd-hero__scroll">
            <span>{t.scroll}</span>
            <span className="gd-hero__scroll-line"></span>
          </div>
          <div className="gd-hero__arrows">
            <button className="gd-hero__arrow" onClick={prev} aria-label="prev">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="gd-hero__arrow" onClick={next} aria-label="next">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────────────
function About({ t }: { t: Locale }) {
  const a = t.about;
  return (
    <section id="about" className="gd-about">
      <div className="gd-about__inner">
        <div className="gd-about__head">
          <div>
            <div className="gd-about__eyebrow">{a.eyebrow}</div>
            <h2 className="gd-about__title">{a.title}</h2>
          </div>
          <div className="gd-about__copy">
            {a.copy.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="gd-about__metrics">
          {a.metrics.map((m, i) => (
            <div className="gd-about__metric" key={i}>
              <div className="gd-about__metric-num">
                {m.num}
                {m.sup && <sup>{m.sup}</sup>}
              </div>
              <div className="gd-about__metric-label">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="gd-about__strip">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ABOUT_STRIP_IMAGE} alt={a.stripCaption} />
          <div className="gd-about__strip-caption">
            <span className="gd-about__strip-caption-dot"></span>
            {a.stripCaption}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────────────
function Services({ t }: { t: Locale }) {
  const s = t.services;
  return (
    <section id="services" className="gd-services">
      <div className="gd-services__inner">
        <div className="gd-services__head">
          <div>
            <div className="gd-services__eyebrow">{s.eyebrow}</div>
            <h2 className="gd-services__title">{s.title}</h2>
          </div>
          <p className="gd-services__sub">{s.sub}</p>
        </div>

        <div className="gd-services__grid">
          {s.cards.map((c, i) => (
            <article className="gd-card" key={i}>
              <div className="gd-card__top">
                <span className="gd-card__num">{c.num}</span>
                <span className="gd-card__icon">
                  <ServiceIcon kind={c.icon} />
                </span>
              </div>
              <h3 className="gd-card__title">{c.title}</h3>
              <p className="gd-card__desc">{c.desc}</p>
              <ul className="gd-card__list">
                {c.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
              <div className="gd-card__bottom">
                <span className="gd-card__tag">{c.tag}</span>
                <button className="gd-card__arrow" aria-label="more">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// MARQUEE
// ─────────────────────────────────────────────────────────────────────
function Strip({ items }: { items: string[] }) {
  const list = (
    <span>
      {items.map((it, i) => (
        <span key={i}>
          <span className="gd-strip__item">{it}</span>
          <span className="gd-strip__sep"></span>
        </span>
      ))}
    </span>
  );
  return (
    <div className="gd-strip">
      <div className="gd-strip__track">
        {list}
        {list}
        {list}
        {list}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// REACH
// ─────────────────────────────────────────────────────────────────────
function Reach({ t }: { t: Locale }) {
  const r = t.reach;
  return (
    <section className="gd-reach">
      <div className="gd-reach__inner">
        <div className="gd-reach__copy">
          <div className="gd-reach__eyebrow">{r.eyebrow}</div>
          <h2 className="gd-reach__title">{r.title}</h2>
          <p className="gd-reach__body">{r.body}</p>
        </div>
        <div className="gd-reach__map">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={REACH_MAP_IMAGE} alt="Reach map" />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// LEAD FORM — posts to /api/contact (Worker → Resend)
// ─────────────────────────────────────────────────────────────────────
function ContactForm({ f }: { f: LeadForm }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot — insanlar görmez
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!name.trim() || !company.trim() || !emailOk) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, website }),
      });
      const data = (await res.json().catch(() => ({ ok: false }))) as { ok?: boolean };
      if (res.ok && data.ok) {
        setStatus("success");
        setName("");
        setCompany("");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="gd-lead">
      <div className="gd-lead__intro">
        <div className="gd-lead__eyebrow">{f.eyebrow}</div>
        <h3 className="gd-lead__title">{f.title}</h3>
        <p className="gd-lead__desc">{f.desc}</p>
      </div>
      <form className="gd-lead__form" onSubmit={onSubmit} noValidate>
        <div className="gd-lead__row">
          <label className="gd-field">
            <span>{f.fields.name}</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="gd-field">
            <span>{f.fields.company}</span>
            <input
              type="text"
              name="company"
              autoComplete="organization"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </label>
        </div>
        <label className="gd-field">
          <span>{f.fields.email}</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {/* honeypot: ekran dışında; botlar doldurur, gönderim sessizce iptal olur */}
        <input
          className="gd-lead__hp"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <button type="submit" className="gd-lead__submit" disabled={status === "sending"}>
          {status === "sending" ? f.sending : f.submit}
          <span aria-hidden="true">→</span>
        </button>
        {status === "success" && (
          <p className="gd-lead__msg gd-lead__msg--ok">{f.success}</p>
        )}
        {status === "error" && (
          <p className="gd-lead__msg gd-lead__msg--err">{f.error}</p>
        )}
        <p className="gd-lead__privacy">{f.privacy}</p>
      </form>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// CONTACT + FOOTER
// ─────────────────────────────────────────────────────────────────────
function Contact({ t }: { t: Locale }) {
  const c = t.contact;
  return (
    <section id="contact" className="gd-contact">
      <div className="gd-contact__inner">
        <h2 className="gd-contact__title">{c.title}</h2>
        <ContactForm f={t.form} />
        <div className="gd-contact__cols">
          <div className="gd-contact__col">
            <h4>{c.cols[0].h}</h4>
            <p>{c.cols[0].body}</p>
            <a
              className="gd-contact__cta"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                "info@gundoguinsaat.com"
              )}&su=${encodeURIComponent(
                "İletişim Talebi — Gündoğu İnşaat"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.ctaLabel.replace("→", "")}
              <span className="gd-contact__cta-arrow">→</span>
            </a>
          </div>
          <div className="gd-contact__col">
            <h4>{c.cols[1].h}</h4>
            <p>{c.cols[1].body}</p>
          </div>
          <div className="gd-contact__col">
            <h4>{c.cols[2].h}</h4>
            <p>{c.cols[2].body}</p>
          </div>
        </div>

        <footer className="gd-footer">
          <div className="gd-footer__brand">
            <BrandMark size={24} />
            <span>GÜNDOĞU İNŞAAT</span>
          </div>
          <div className="gd-footer__links">
            {t.footerLinks.map((l, i) => (
              <a key={i} href={["/kvkk/", "/gizlilik/", "/kullanim/"][i]}>
                {l}
              </a>
            ))}
          </div>
          <div className="gd-footer__copy">{t.footerCopy}</div>
        </footer>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// COOKIE BANNER — first-visit consent, persisted in localStorage
// ─────────────────────────────────────────────────────────────────────
const COOKIE_KEY = "gd-cookie-consent";

function CookieBanner({ lang }: { lang: "tr" | "en" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(COOKIE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage blocked (private mode / CSP) — show the banner anyway
      setVisible(true);
    }
  }, []);

  const choose = (value: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(COOKIE_KEY, value);
    } catch {
      // ignore — user just won't see the choice persist
    }
    setVisible(false);
  };

  if (!visible) return null;

  const copy =
    lang === "tr"
      ? {
          text: (
            <>
              Bu site, kullanıcı deneyimini iyileştirmek için <strong>çerez</strong>{" "}
              kullanır. Devam ederek kullanımı kabul etmiş olursunuz. Detaylar için{" "}
              <a href="/gizlilik/">Gizlilik Politikamızı</a> inceleyin.
            </>
          ),
          accept: "Kabul Et",
          reject: "Reddet",
        }
      : {
          text: (
            <>
              This site uses <strong>cookies</strong> to improve your experience. By
              continuing you accept their use. See our{" "}
              <a href="/gizlilik/">Privacy Policy</a> for details.
            </>
          ),
          accept: "Accept",
          reject: "Reject",
        };

  return (
    <div className="gd-cookie" role="dialog" aria-label="Cookie consent">
      <div className="gd-cookie__text">{copy.text}</div>
      <div className="gd-cookie__actions">
        <button className="gd-cookie__btn" onClick={() => choose("rejected")}>
          {copy.reject}
        </button>
        <button
          className="gd-cookie__btn gd-cookie__btn--primary"
          onClick={() => choose("accepted")}
        >
          {copy.accept}
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [lang, setLang] = useState<"tr" | "en">("tr");
  const t = CONTENT[lang];
  // <html lang>'i seçili dile göre güncelle — yoksa CSS text-transform:uppercase
  // İngilizce metni Türkçe kurallarıyla büyütür ("DRINKING" → "DRİNKİNG").
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <>
      <Nav lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <About t={t} />
      <Services t={t} />
      <Strip items={t.marquee} />
      <Reach t={t} />
      <Contact t={t} />
      <CookieBanner lang={lang} />
    </>
  );
}
