import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — Gündoğu İnşaat",
  description:
    "Gündoğu İnşaat web sitesi gizlilik politikası ve çerez kullanımı bilgilendirme.",
};

export default function GizlilikPage() {
  return (
    <main className="gd-legal">
      <div className="gd-legal__inner">
        <a className="gd-legal__back" href="/">
          ← Ana Sayfa
        </a>
        <div className="gd-legal__eyebrow">02 — YASAL</div>
        <h1 className="gd-legal__title">Gizlilik Politikası</h1>
        <div className="gd-legal__meta">Son güncelleme · 19.05.2026</div>

        <div className="gd-legal__content">
          <h2>1. Giriş</h2>
          <p>
            Bu Gizlilik Politikası, <strong>Gündoğu İnşaat &amp; Taahhüt
            Grubu</strong> (&quot;biz&quot;, &quot;şirketimiz&quot;) tarafından
            işletilen <a href="https://gundoguinsaat.com">gundoguinsaat.com</a>{" "}
            adresindeki web sitesini ziyaret eden kullanıcılarımızın
            gizliliğine verdiğimiz önemi açıklamak amacıyla hazırlanmıştır.
          </p>

          <h2>2. Topladığımız Bilgiler</h2>
          <p>
            Web sitemizi ziyaret ettiğinizde aşağıdaki bilgileri otomatik olarak
            toplayabiliriz:
          </p>
          <ul>
            <li>IP adresi ve genel coğrafi konum</li>
            <li>Tarayıcı türü ve sürümü</li>
            <li>Ziyaret edilen sayfalar ve süreleri</li>
            <li>Yönlendirici siteler (referrer)</li>
          </ul>
          <p>
            İletişim formu üzerinden ad, e-posta ve mesajınızı bize gönülllü
            olarak ilettiğinizde bu bilgiler de tarafımızca işlenir.
          </p>

          <h2>3. Çerezler (Cookies)</h2>
          <p>
            Web sitemiz, kullanıcı deneyimini iyileştirmek için çerez
            kullanmaktadır. Çerezler; tarayıcınızda saklanan, sitenin sizi
            tanımasına yarayan küçük metin dosyalarıdır. Kullandığımız çerezler
            başlıca şunlardır:
          </p>
          <ul>
            <li>
              <strong>Zorunlu çerezler:</strong> Sitenin temel işlevleri için
              gereklidir.
            </li>
            <li>
              <strong>Performans çerezleri:</strong> Ziyaretçi davranışını
              anonim olarak analiz eder.
            </li>
            <li>
              <strong>İşlevsellik çerezleri:</strong> Tercihlerinizi (dil, çerez
              onayı) hatırlar.
            </li>
          </ul>
          <p>
            Tarayıcı ayarlarınızdan çerezleri kabul etmeyebilir veya
            silebilirsiniz; ancak bu durumda sitenin bazı özellikleri düzgün
            çalışmayabilir.
          </p>

          <h2>4. Bilgilerin Kullanım Amacı</h2>
          <ul>
            <li>İletişim taleplerinizi yanıtlamak</li>
            <li>Site kullanım istatistiklerini analiz etmek</li>
            <li>Hizmet kalitemizi iyileştirmek</li>
            <li>Yasal yükümlülükleri yerine getirmek</li>
          </ul>

          <h2>5. Üçüncü Taraf Hizmetler</h2>
          <p>
            Web sitemizde Google Fonts gibi üçüncü taraf hizmetler
            kullanılmaktadır. Bu hizmetler kendi gizlilik politikalarına tabidir
            ve sitenin işlevselliği için gerekli minimum verileri toplayabilir.
          </p>

          <h2>6. Veri Güvenliği</h2>
          <p>
            Kişisel verilerinizin yetkisiz erişim, ifşa, değiştirme veya imhaya
            karşı korunması için makul teknik ve idari önlemler alınmaktadır.
            Verileriniz HTTPS üzerinden şifreli olarak iletilir.
          </p>

          <h2>7. Çocukların Gizliliği</h2>
          <p>
            Sitemiz 18 yaşından küçük kullanıcılara yönelik değildir ve bilerek
            18 yaş altı bireylerden kişisel veri toplamayız.
          </p>

          <h2>8. Politika Değişiklikleri</h2>
          <p>
            Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli
            değişikliklerde sayfanın üst kısmındaki son güncelleme tarihi
            değiştirilecektir. Politikayı periyodik olarak gözden geçirmenizi
            öneririz.
          </p>

          <h2>9. İletişim</h2>
          <p>
            Bu politika hakkında sorularınız veya kişisel verilerinize ilişkin
            talepleriniz için:{" "}
            <a href="mailto:info@gundoguinsaat.com">info@gundoguinsaat.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}
