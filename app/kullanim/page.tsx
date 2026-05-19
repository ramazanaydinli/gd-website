import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Şartları — Gündoğu İnşaat",
  description:
    "Gündoğu İnşaat web sitesi kullanım şartları ve koşulları.",
};

export default function KullanimPage() {
  return (
    <main className="gd-legal">
      <div className="gd-legal__inner">
        <a className="gd-legal__back" href="/">
          ← Ana Sayfa
        </a>
        <div className="gd-legal__eyebrow">03 — YASAL</div>
        <h1 className="gd-legal__title">Kullanım Şartları</h1>
        <div className="gd-legal__meta">Son güncelleme · 19.05.2026</div>

        <div className="gd-legal__content">
          <h2>1. Kabul</h2>
          <p>
            <a href="https://gundoguinsaat.com">gundoguinsaat.com</a> adresine
            erişerek ve siteyi kullanarak, bu Kullanım Şartlarını okuduğunuzu,
            anladığınızı ve kabul ettiğinizi beyan etmiş olursunuz. Şartları
            kabul etmiyorsanız siteyi kullanmamanızı rica ederiz.
          </p>

          <h2>2. Site Sahipliği</h2>
          <p>
            Bu web sitesi <strong>Gündoğu İnşaat &amp; Taahhüt Grubu</strong>{" "}
            tarafından işletilmektedir. Site içeriği, tasarımı, logosu ve
            sunulan tüm materyaller şirketimize ait olup; ilgili mevzuat
            çerçevesinde fikri ve sınai mülkiyet hakları korunmaktadır.
          </p>

          <h2>3. Kullanım Koşulları</h2>
          <p>Siteyi kullanırken aşağıdaki koşullara uymayı kabul edersiniz:</p>
          <ul>
            <li>Yasalara, ahlaka ve kamu düzenine aykırı şekilde kullanmamak</li>
            <li>Sitenin güvenliğini tehdit edecek faaliyetlerde bulunmamak</li>
            <li>Otomatik araçlarla (bot, scraper) toplu veri çekmemek</li>
            <li>Site içeriğini izinsiz kopyalayıp ticari amaçla kullanmamak</li>
            <li>Üçüncü kişilerin haklarını ihlal eden içerik iletmemek</li>
          </ul>

          <h2>4. Fikri Mülkiyet</h2>
          <p>
            Sitede yer alan logo, marka, metin, görsel, tasarım ve yazılım
            unsurları; <strong>Gündoğu İnşaat</strong>&apos;ın fikri mülkiyetidir.
            Yazılı izin alınmaksızın kopyalanması, çoğaltılması, dağıtılması veya
            ticari amaçla kullanılması yasaktır. İhlal durumunda 5846 sayılı
            Fikir ve Sanat Eserleri Kanunu ve ilgili mevzuat uyarınca yasal yola
            başvurulacaktır.
          </p>

          <h2>5. Sorumluluk Reddi</h2>
          <p>
            Site içeriği bilgilendirme amaçlıdır. Bilgilerin doğruluğu ve
            güncelliği için makul özen gösterilmekle birlikte; eksik, hatalı
            veya güncelliğini yitirmiş bilgilerden doğabilecek doğrudan veya
            dolaylı zararlardan <strong>Gündoğu İnşaat</strong> sorumlu
            tutulamaz.
          </p>
          <p>
            Site üzerinden alınan teklif, proje açıklaması ve fiyatlandırma
            bilgileri ön bilgi niteliğindedir; bağlayıcı teklif niteliği
            taşımaz. Bağlayıcı teklifler yalnızca yazılı sözleşme ile geçerli
            olur.
          </p>

          <h2>6. Üçüncü Taraf Bağlantılar</h2>
          <p>
            Site içerisinde üçüncü taraf sitelere bağlantılar bulunabilir. Bu
            sitelerin içeriği, gizlilik uygulamaları veya hizmetleri konusunda
            herhangi bir sorumluluk kabul edilmez. Bu sitelere erişim
            kullanıcının kendi sorumluluğundadır.
          </p>

          <h2>7. Hizmet Sürekliliği</h2>
          <p>
            Sitenin kesintisiz çalışacağı garanti edilmez. Bakım, güncelleme
            veya teknik nedenlerle siteye erişim geçici olarak askıya
            alınabilir.
          </p>

          <h2>8. Değişiklikler</h2>
          <p>
            Bu Kullanım Şartları herhangi bir bildirimde bulunulmaksızın
            değiştirilebilir. Değişiklikler bu sayfada yayınlandığı anda
            yürürlüğe girer. Şartların güncel sürümünü periyodik olarak gözden
            geçirmeniz tavsiye edilir.
          </p>

          <h2>9. Uyuşmazlık Çözümü ve Yetkili Mahkeme</h2>
          <p>
            Bu Kullanım Şartlarından doğabilecek her türlü uyuşmazlığın
            çözümünde <strong>Diyarbakır Mahkemeleri ve İcra
            Müdürlükleri</strong> yetkilidir. Türk Hukuku uygulanır.
          </p>

          <h2>10. İletişim</h2>
          <p>
            Bu şartlarla ilgili sorularınız için:{" "}
            <a href="mailto:info@gundoguinsaat.com">info@gundoguinsaat.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}
