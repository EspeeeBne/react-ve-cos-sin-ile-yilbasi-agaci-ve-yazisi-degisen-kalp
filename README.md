# Yeni Yıl (Noel Değil) 🎄

**Yeni Yıl (Noel Değil)**, React ile oluşturulmuş bir uygulamadır. Uygulama, yılbaşı ruhunu yansıtan 3D bir yılbaşı ağacı, özelleştirilebilir bir kalp tasarımı ve çoklu dil desteği gibi özellikler sunar. Tema ve dil değiştirilebilir; kullanıcılar arasında kişiselleştirilmiş bir deneyim sağlar.

---

## 🎉 Projenin Özellikleri

- **Yılbaşı Ağacı**: 3D yılbaşı ağacı React Three Fiber ile oluşturulmuştur. Renkli ve dinamik süslemeleri ile yılbaşı atmosferini yaşatır.
- **Kalp Mesajı**: Canvas API kullanılarak oluşturulmuş bir kalp tasarımı. Kalbin üstündeki mesaj, `.env` dosyası ile özelleştirilebilir.
- **Tema Desteği**: Material-UI (MUI) temaları ile aydınlık ve karanlık mod arasında geçiş yapılabilir.
- **Dil Desteği**: i18next kütüphanesi ile Türkçe ve İngilizce dil seçenekleri sunulmaktadır.
- **Responsive Tasarım**: Kullanıcı dostu bir arayüz ve modern tasarım.

---

## 🔧 Kullanılan Teknolojiler

### Front-end:
- **React.js**: Kullanıcı arayüzü geliştirme.
- **Material-UI (MUI)**: Stil ve tema yönetimi.
- **React Three Fiber**: 3D modelleme.
- **i18next**: Çoklu dil desteği.
- **Canvas API**: Kalp çizimi ve animasyon.

---

## 🚀 Kurulum

### Gereksinimler

1. [Node.js](https://nodejs.org/) yüklü olmalıdır.
2. [Git](https://git-scm.com/downloads) isterseniz direkt indirin isterseniz git kullanın ben buraya koyayım gene de.



### Adımlar

1. **Projeyi Klonlayın**:
   ```
   git clone https://github.com/EspeeeBne/react-ve-cos-sin-ile-yilbasi-agaci-ve-yazisi-degisen-kalp.git
   cd react-ve-cos-sin-ile-yilbasi-agaci-ve-yazisi-degisen-kalp
   ```

2. **Bağımlılıkları Yükleyin**:
   ```
   npm install (güncel yüklediğim zaman bir hata vermiyor ama verirse sonuna --legacy-peer-deps ekleyin react 18 ile kodlamak zorunda kaldım bende react 19 kullanmak istiyordum yoksa)
   ```

3. **`env.example` Dosyasını `.env` Olarak Değiştirin**:
   ```
   cp env.example .env (elinizle de yapabilirsiniz bu daha havalı ama)
   ```

4. **Uygulamayı Çalıştırın**:
   ```
   npm start
   ```

   Uygulama genellikle şu adreste çalışacaktır: [http://localhost:3000](http://localhost:3000)

---

## 📄 .env İçeriği

`.env` dosyasındaki mesajınızı özelleştirebilirsiniz. Örnek:

```
REACT_APP_HEART_MESSAGE=Yeni Yılınız Kutlu Olsun
```

Mesajınız, kalp üzerine yazılacaktır.

---

## 🎮 Kullanım

- **Dil Değiştirme**: Sağ üst köşede bulunan dil seçeneklerinden dil değiştirilebilir.
- **Tema Geçişi**: Güneş ve ay ikonları ile aydınlık ve karanlık mod arasında geçiş yapılabilir.
- **Sayfa Geçişi**: Navbar üzerinden "Ağaç" ve "Kalp" sayfaları arasında geçiş yapılabilir.
- **Kalp Mesajı**: `.env` dosyasında belirttiğiniz mesaj, kalp üzerinde görüntülenir.

---

## 🎨 Görseller

Uygulama, 3D yılbaşı ağacı ve özelleştirilebilir kalp tasarımı ile görsel bir şölen sunar. Yılbaşı ağacını üniversite yüzünden başka şehirde unutanlara gelsin!

---

## 📄 Lisans

Bu proje MIT lisansı ile lisanslanmıştır. Daha fazla bilgi için [LICENSE](./LICENSE) dosyasını inceleyebilirsiniz.
