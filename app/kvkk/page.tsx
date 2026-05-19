import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni — Gündoğu İnşaat",
  description:
    "Gündoğu İnşaat KVKK 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.",
};

export default function KvkkPage() {
  return (
    <main className="gd-legal">
      <div className="gd-legal__inner">
        <a className="gd-legal__back" href="/">
          ← Ana Sayfa
        </a>
        <div className="gd-legal__eyebrow">01 — YASAL</div>
        <h1 className="gd-legal__title">KVKK Aydınlatma Metni</h1>
        <div className="gd-legal__meta">Son güncelleme · 19.05.2026</div>

        <div className="gd-legal__content">
          <h2>1. Veri Sorumlusu</h2>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
            uyarınca, kişisel verileriniz; <strong>Gündoğu İnşaat &amp; Taahhüt
            Grubu</strong> (&quot;Şirket&quot; veya &quot;Veri Sorumlusu&quot;)
            tarafından aşağıda açıklanan kapsamda işlenebilecektir.
          </p>
          <p>
            <strong>Merkez Adres:</strong> Peyas Mah. Selahaddin Eyyubi Bulvarı
            No: 35/1 İç Kapı No: 1, Kayapınar / Diyarbakır
            <br />
            <strong>E-posta:</strong>{" "}
            <a href="mailto:info@gundoguinsaat.com">info@gundoguinsaat.com</a>
          </p>

          <h2>2. Kişisel Verilerin İşlenme Amaçları</h2>
          <p>
            Şirketimiz tarafından elde edilen her türlü kişisel veriniz aşağıdaki
            amaçlar dahilinde işlenebilecektir:
          </p>
          <ul>
            <li>İletişim taleplerinizin değerlendirilmesi ve yanıtlanması</li>
            <li>Proje teklif süreçlerinin yönetilmesi</li>
            <li>Sözleşme öncesi ve sonrası iş ilişkilerinin sürdürülmesi</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            <li>Hizmet kalitesinin iyileştirilmesi</li>
          </ul>

          <h2>3. İşlenen Kişisel Veri Kategorileri</h2>
          <ul>
            <li>
              <strong>Kimlik bilgileri:</strong> ad-soyad, unvan
            </li>
            <li>
              <strong>İletişim bilgileri:</strong> e-posta, telefon, adres
            </li>
            <li>
              <strong>İşlem güvenliği:</strong> IP adresi, log kayıtları
              (sitemizi ziyaret ettiğinizde)
            </li>
          </ul>

          <h2>4. Kişisel Verilerin Aktarılması</h2>
          <p>
            Kişisel verileriniz; yasal zorunluluklar haricinde üçüncü kişilerle
            paylaşılmaz. Yasal mercilerin talebi halinde mevzuat hükümlerine
            uygun olarak yetkili kişi, kurum ve kuruluşlarla paylaşılabilir.
          </p>

          <h2>5. Kişisel Veri Toplama Yöntemi ve Hukuki Sebebi</h2>
          <p>
            Kişisel verileriniz; web sitemiz üzerindeki iletişim formları,
            e-posta yazışmaları, telefon görüşmeleri ve fiziki yollarla
            toplanmaktadır. Hukuki sebep olarak KVKK madde 5/2 (sözleşmenin
            kurulması veya ifası için gereklilik, hukuki yükümlülük, meşru
            menfaat) hükümleri esas alınmaktadır.
          </p>

          <h2>6. KVKK Madde 11 Kapsamındaki Haklarınız</h2>
          <p>İlgili kişi olarak aşağıdaki haklara sahipsiniz:</p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
            <li>Kişisel verilerinizin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
            <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
            <li>Silinmesini veya yok edilmesini isteme</li>
            <li>Aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
            <li>Zarara uğramanız halinde zararın giderilmesini talep etme</li>
          </ul>

          <h2>7. İletişim</h2>
          <p>
            Haklarınızı kullanmak için taleplerinizi yazılı olarak veya{" "}
            <a href="mailto:info@gundoguinsaat.com">info@gundoguinsaat.com</a>{" "}
            adresine iletebilirsiniz. Başvurunuz en geç 30 gün içerisinde
            yanıtlanacaktır.
          </p>
        </div>
      </div>
    </main>
  );
}
