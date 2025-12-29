# Module 5 Kurulum Talimatları

## Gerekli Dosyalar

### 1. Ses Dosyaları
Aşağıdaki ses dosyalarını `client/public/sounds/` klasörüne ekleyin:

- `correct.mp3` - Doğru cevap sesi (kısa, neşeli bir ses)
- `wrong.mp3` - Yanlış cevap sesi (kısa, uyarı sesi)

**Önerilen Ses Dosyaları:**
- Doğru cevap için: Kısa bir "ding" veya başarı sesi (0.5-1 saniye)
- Yanlış cevap için: Kısa bir "buzz" veya hata sesi (0.5-1 saniye)

### 2. Quiz Görselleri
Aşağıdaki görselleri `client/public/images/quiz/` klasörüne ekleyin:

1. **link-message.jpg** - Gizemli link senaryosu için görsel
   - Mesajlaşma ekranı görüntüsü
   - Bilinmeyen bir link içeren mesaj
   - İki tıklanabilir hotspot alanı (yanlış: link, doğru: sil butonu)

2. **password.jpg** - Şifre tuzağı senaryosu için görsel
   - Şifre paylaşımı isteyen bir ekran
   - İki tıklanabilir hotspot alanı (yanlış: şifre paylaş, doğru: reddet)

3. **stranger-message.jpg** - Tanımadık mesaj senaryosu için görsel
   - Tanımadık birinden gelen mesaj
   - İki tıklanabilir hotspot alanı (yanlış: cevap ver, doğru: engelle/sil)

4. **email-urgent.jpg** - Acil e-posta senaryosu için görsel
   - Acil görünen bir e-posta
   - İki tıklanabilir hotspot alanı (yanlış: hemen tıkla, doğru: büyüğüne sor)

**Görsel Özellikleri:**
- Format: JPG veya PNG
- Boyut: 800x600px veya daha büyük (responsive için)
- Kalite: Yüksek çözünürlük (görsel net olmalı)
- Hotspot konumları görselde belirtilmiş olmalı

### 3. Module5 Görselleri
Aşağıdaki görselleri `client/public/images/module5/` klasörüne ekleyin:

- `threats.jpg` - Kötü amaçlı yazılım tehditleri görseli
- `phishing.jpg` - Kimlik avı görseli
- `crisis_response_hero.jpg` - Kriz yönetimi hero görseli

## Dosya Yapısı

```
client/
  public/
    sounds/
      correct.mp3
      wrong.mp3
    images/
      quiz/
        link-message.jpg
        password.jpg
        stranger-message.jpg
        email-urgent.jpg
      module5/
        threats.jpg
        phishing.jpg
        crisis_response_hero.jpg
```

## Hotspot Konumları

Her quiz görselinde hotspot konumları şu şekilde ayarlanmıştır:

### link-message.jpg
- Hotspot 1 (Yanlış): top: 45%, left: 30% - Link üzerinde
- Hotspot 2 (Doğru): top: 72%, left: 65% - Sil butonu üzerinde

### password.jpg
- Hotspot 1 (Yanlış): top: 55%, left: 42% - Şifre paylaş butonu
- Hotspot 2 (Doğru): top: 78%, left: 68% - Reddet butonu

### stranger-message.jpg
- Hotspot 1 (Yanlış): top: 50%, left: 35% - Cevap ver butonu
- Hotspot 2 (Doğru): top: 75%, left: 70% - Engelle/sil butonu

### email-urgent.jpg
- Hotspot 1 (Yanlış): top: 48%, left: 40% - Hemen tıkla butonu
- Hotspot 2 (Doğru): top: 80%, left: 65% - Büyüğüne sor butonu

## Test Etme

1. Tüm dosyaları ekledikten sonra uygulamayı çalıştırın
2. Module5'e gidin
3. İkinci bölüme (Kimlik Avı) gidin
4. AdvancedHotspotCyberQuiz'in çalıştığını kontrol edin
5. Her hotspot'a tıklayarak seslerin çaldığını ve geri bildirimlerin göründüğünü test edin

## Notlar

- Ses dosyaları küçük olmalı (her biri < 100KB)
- Görseller optimize edilmiş olmalı (her biri < 500KB)
- Hotspot konumları görsellerinize göre ayarlanabilir
- CSS dosyası zaten oluşturulmuş ve stilize edilmiştir

