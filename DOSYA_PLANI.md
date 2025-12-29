# 📁 DIGITAL SHIELD PROJECT - DOSYA PLANI

> **Son Güncelleme:** 2025-01-XX  
> **Proje Tipi:** React + TypeScript + Vite  
> **Hedef Kitle:** Ortaokul öğrencileri için dijital güvenlik eğitim platformu

---

## 📋 İÇİNDEKİLER

1. [Proje Yapısı](#proje-yapısı)
2. [Kök Dizin](#kök-dizin)
3. [Client Dizin Yapısı](#client-dizin-yapısı)
4. [Kaynak Dosyalar (src/)](#kaynak-dosyalar-src)
5. [Public Dosyalar](#public-dosyalar)
6. [Component'ler](#componentler)
7. [Sayfalar (Pages)](#sayfalar-pages)
8. [İçerik Dosyaları (Content)](#içerik-dosyaları-content)
9. [Stil Dosyaları (CSS)](#stil-dosyaları-css)
10. [Yapılandırma Dosyaları](#yapılandırma-dosyaları)

---

## 🏗️ PROJE YAPISI

```
digital-shield-project_2/
├── client/                    # Frontend uygulaması
│   ├── public/               # Statik dosyalar
│   ├── src/                  # Kaynak kodlar
│   └── index.html            # Ana HTML dosyası
├── node_modules/             # NPM bağımlılıkları
├── package.json              # Proje bağımlılıkları
├── package-lock.json         # Kilitli bağımlılık versiyonları
├── tsconfig.json             # TypeScript yapılandırması
├── tsconfig.node.json        # Node için TS yapılandırması
├── vite.config.ts            # Vite yapılandırması
├── tailwind.config.js        # Tailwind CSS yapılandırması
├── postcss.config.js         # PostCSS yapılandırması
└── [Dokümantasyon Dosyaları]
```

---

## 📂 KÖK DİZİN

### Yapılandırma Dosyaları

| Dosya | Açıklama |
|-------|----------|
| `package.json` | NPM bağımlılıkları, script'ler ve proje metadata |
| `package-lock.json` | Kilitli paket versiyonları |
| `tsconfig.json` | TypeScript derleyici ayarları |
| `tsconfig.node.json` | Node.js için TypeScript ayarları |
| `vite.config.ts` | Vite build tool yapılandırması |
| `tailwind.config.js` | Tailwind CSS özelleştirmeleri |
| `postcss.config.js` | PostCSS işlemci ayarları |

### Dokümantasyon Dosyaları

| Dosya | Açıklama |
|-------|----------|
| `IMAGE_ANALYSIS_REPORT.md` | Görsel analiz raporu |
| `MODULE2_IMAGES_NEEDED.md` | Modül 2 için gerekli görseller |
| `MODULE5_SETUP.md` | Modül 5 kurulum notları |
| `DOSYA_PLANI.md` | Bu dosya - Proje dosya planı |

---

## 📁 CLIENT DİZİN YAPISI

```
client/
├── index.html                # Ana HTML entry point
├── public/                   # Statik dosyalar (görseller, vb.)
└── src/                      # Kaynak kodlar
```

---

## 🎯 KAYNAK DOSYALAR (src/)

### Ana Dosyalar

| Dosya | Tip | Açıklama |
|-------|-----|----------|
| `main.tsx` | TypeScript/React | React uygulamasının giriş noktası |
| `App.tsx` | TypeScript/React | Ana uygulama component'i, routing yapısı |
| `index.css` | CSS | Global stil tanımlamaları |
| `const.ts` | TypeScript | Sabit değerler ve yapılandırmalar |

---

## 🧩 COMPONENT'LER

### 📂 `client/src/components/`

#### Oyun Component'leri

| Dosya | Açıklama | Kullanıldığı Modül |
|-------|----------|-------------------|
| `BoxGame.jsx` | "Kutuyu Aç" quiz oyunu | Modül 1 |
| `CardMatchingGame.jsx` | Kart eşleştirme oyunu | Modül 2 |
| `CyberCrisisSimulation.jsx` | Siber kriz simülasyonu | Modül 5 |
| `DataFactoryGame.jsx` | Veri fabrikası oyunu | Modül 1 |
| `FlappyBirdGame.jsx` | Flappy Bird tarzı oyun | Modül 5 |
| `MemoryCardGame.jsx` | Hafıza kartı oyunu | - |
| `PacketDeliveryGame.jsx` | Paket teslim oyunu | Modül 2 |
| `PasswordSmithGame.jsx` | Şifre oluşturma oyunu | Modül 2, 3 |
| `TruthOrTrollGame.jsx` | Doğru/Yanlış oyunu | Modül 3 |
| `WordleGame.jsx` | Wordle tarzı kelime oyunu | Modül 3 |
| `WordData.js` | Wordle oyunu için kelime verileri | Modül 3 |

#### Senaryo Oyunları

| Dosya | Açıklama | Kullanıldığı Modül |
|-------|----------|-------------------|
| `ScenarioGame.jsx` | Genel senaryo oyunu | - |
| `ScenarioGame_2FA.jsx` | 2FA senaryo oyunu | Modül 3 |
| `ScenarioGame_Module2.jsx` | Modül 2 özel senaryo oyunu | Modül 2 |
| `ScenarioTest.jsx` | Senaryo test component'i | - |

#### Eğitim Component'leri

| Dosya | Açıklama | Kullanıldığı Modül |
|-------|----------|-------------------|
| `FileExtensionFlashcards.jsx` | Dosya uzantısı flashcard'ları | Modül 1 |
| `HardwareGallery.jsx` | Donanım galerisi | Modül 1 |
| `HardwareHotspot.jsx` | İnteraktif donanım hotspot'u | Modül 1 |
| `InteractiveCards.jsx` | İnteraktif kartlar | - |
| `InteractiveQuiz.jsx` | İnteraktif quiz component'i | Tüm modüller |
| `Quiz.jsx` | Basit quiz component'i | Modül 2 |
| `SoftwareSorting.jsx` | Yazılım sıralama oyunu | Modül 1 |
| `StoryMode.jsx` | Hikaye modu component'i | Modül 2 |

#### UI Component'leri

| Dosya | Açıklama |
|-------|----------|
| `ComparisonTable.jsx` | Karşılaştırma tablosu |
| `ConceptList.jsx` | Kavram listesi |
| `DragDrop.jsx` | Sürükle-bırak component'i |
| `DragDropEnhanced.jsx` | Gelişmiş sürükle-bırak |
| `FlowChart.jsx` | Akış şeması component'i |
| `LanguageSwitcher.jsx` | Dil değiştirici |
| `LoadingScreen.jsx` | Yükleme ekranı |
| `Sidebar.jsx` | Yan menü component'i |

#### Özel Component'ler

| Dosya | Açıklama |
|-------|----------|
| `ErrorBoundary.tsx` | Hata yakalama boundary |
| `Map.tsx` | Google Maps entegrasyonu |
| `ManusDialog.tsx` | Dialog component'i |

#### UI Kütüphanesi (`ui/`)

Radix UI tabanlı 53 adet UI component'i:

- `accordion.tsx` - Akordeon
- `alert.tsx` - Uyarı mesajları
- `alert-dialog.tsx` - Onay dialog'ları
- `avatar.tsx` - Avatar görselleri
- `badge.tsx` - Rozet/etiket
- `button.tsx` - Buton component'i
- `card.tsx` - Kart component'i
- `checkbox.tsx` - Checkbox
- `dialog.tsx` - Dialog pencereleri
- `dropdown-menu.tsx` - Açılır menü
- `input.tsx` - Input alanları
- `label.tsx` - Etiket
- `progress.tsx` - İlerleme çubuğu
- `radio-group.tsx` - Radyo buton grubu
- `select.tsx` - Seçim menüsü
- `slider.tsx` - Kaydırıcı
- `switch.tsx` - Açma/kapama düğmesi
- `tabs.tsx` - Sekmeler
- `tooltip.tsx` - İpucu balonları
- ... ve 34 adet daha

---

## 📄 SAYFALAR (Pages)

### 📂 `client/src/pages/`

| Dosya | Açıklama | Route |
|-------|----------|-------|
| `Home.tsx` | Ana sayfa | `/` |
| `Module1.jsx` | Modül 1: Bilgisayar Dünyasını Keşfediyorum | `/module1` |
| `Module2.jsx` | Modül 2: İnternet ve Ağlar | `/module2` |
| `Module3.jsx` | Modül 3: Dijital Güvenlik | `/module3` |
| `Module4.jsx` | Modül 4: Dijital Vatandaşlık | `/module4` |
| `Module5.jsx` | Modül 5: Siber Tehditler | `/module5` |
| `NotFound.tsx` | 404 sayfası | `/404` veya fallback |

### Eski/Kullanılmayan Dosyalar

| Dosya | Durum | Not |
|-------|-------|-----|
| `Module1_Enhanced.jsx` | Kullanılmıyor | Eski versiyon |
| `Module1_FileExtensions.jsx` | Kullanılmıyor | Eski versiyon |

---

## 📚 İÇERİK DOSYALARI (Content)

### 📂 `client/src/content/`

| Dosya | Açıklama | Dil |
|-------|----------|-----|
| `module_content_tr.js` | Tüm modüllerin Türkçe içeriği | TR |
| `module1_lang_en.js` | Modül 1 İngilizce içeriği | EN |
| `module2_lang_en.js` | Modül 2 İngilizce içeriği | EN |
| `module2_lang_tr.js` | Modül 2 Türkçe içeriği | TR |
| `module3_lang_en.js` | Modül 3 İngilizce içeriği | EN |
| `module4_lang_en.js` | Modül 4 İngilizce içeriği | EN |
| `module5_lang_en.js` | Modül 5 İngilizce içeriği | EN |

### İçerik Yapısı

Her modül dosyası şu yapıyı içerir:
- `hero_image` - Modül başlık görseli
- `sections[]` - Bölümler
  - `id` - Bölüm ID'si
  - `title` - Bölüm başlığı
  - `intro` - Bölüm giriş metni
  - `activity_type` - Aktivite tipi
  - `activity_title` - Aktivite başlığı
  - `activity_desc` - Aktivite açıklaması
  - `content{}` - İçerik öğeleri
    - Görseller
    - Metinler
    - Quiz soruları
    - Örnekler

---

## 🎨 STİL DOSYALARI (CSS)

### Ana Stil Dosyaları

| Dosya | Açıklama | Kapsam |
|-------|----------|--------|
| `index.css` | Global stiller | Tüm uygulama |
| `modules.css` | Modül stilleri | Tüm modüller |

### Modül Özel Stilleri

| Dosya | Açıklama | Modül |
|-------|----------|--------|
| `module1_new.css` | Modül 1 stilleri | Modül 1 |
| `module2.css` | Modül 2 stilleri | Modül 2 |
| `module3.css` | Modül 3 stilleri | Modül 3 |
| `module5.css` | Modül 5 stilleri | Modül 5 |

### Component Özel Stilleri

| Dosya | Açıklama | Component |
|-------|----------|-----------|
| `card-matching.css` | Kart eşleştirme stilleri | CardMatchingGame |
| `comparison-table.css` | Karşılaştırma tablosu stilleri | ComparisonTable |
| `flow-chart.css` | Akış şeması stilleri | FlowChart |
| `hardware-gallery.css` | Donanım galerisi stilleri | HardwareGallery |
| `interactive-cards.css` | İnteraktif kart stilleri | InteractiveCards |
| `loading-screen.css` | Yükleme ekranı stilleri | LoadingScreen |
| `scenario-game.css` | Senaryo oyunu stilleri | ScenarioGame* |

### Özel Stil Klasörü

| Dosya | Açıklama |
|-------|----------|
| `styles/custom_fixes.css` | Özel düzeltmeler |
| `styles/cyber-crisis.css` | Siber kriz simülasyonu stilleri |

---

## 🖼️ PUBLIC DOSYALAR

### 📂 `client/public/`

#### Ana Görseller (`images/`)

**Genel Görseller:**
- `2fa_hero.png` - 2FA hero görseli
- `concept_*.png` - Kavram görselleri (data_info, file_management, hardware_software, os, tech_impact, troubleshooting)
- `digital_footprint_*.png` - Dijital ayak izi görselleri
- `final_mission_hero.png` - Final görev hero görseli
- `password_security_hero.png` - Şifre güvenliği hero görseli
- `privacy_detective_hero.png` - Gizlilik dedektifi hero görseli

**Donanım Görselleri:**
- `hardware_*.png` - Donanım parçaları (cpu, gpu, hdd, headphones, keyboard, monitor, motherboard, mouse, printer, ram)

**Modül 1 Görselleri:**
- `module1_*.png` - Modül 1 özel görselleri (factory_analogy, hardware_overview, software_concept, software_types)

**Modül 2 Görselleri:**
- `module2_*.png` - Modül 2 özel görselleri (home_network, network_overview)
- `module2/` - 27 adet JPG görsel

**Modül 3 Görselleri:**
- `module3/Brush.png`
- `module3/citizenship.jpg`
- `module3/cyberbullying.png`

**Modül 4 Görselleri:**
- `module4/security.jpg`
- `module4/WhatsApp Image *.jpeg` - 10 adet WhatsApp görseli

**Modül 5 Görselleri:**
- `module5/threats.jpg`

**Oyun Görselleri:**
- `game_*.png` - Oyun ekran görselleri (2fa_setup, first_post, friend_request, password_creation, privacy_settings, scene1_dark_room, scene2_os_error, scene3_messy_desktop, social_media_setup, start, success_shield, success, username_choice)

#### Hikaye Görselleri (`story_images/`)

- `page-01.png` - `page-15.png` - 15 adet hikaye sayfası görseli

#### Diğer Dosyalar

- `digital-shield-final.zip` - Final proje arşivi

---

## ⚙️ YAPILANDIRMA DOSYALARI

### Context'ler

| Dosya | Açıklama |
|-------|----------|
| `contexts/LanguageContext.jsx` | Dil yönetimi context'i |
| `contexts/ThemeContext.tsx` | Tema yönetimi context'i |

### Hook'lar

| Dosya | Açıklama |
|-------|----------|
| `hooks/useComposition.ts` | Kompozisyon hook'u |
| `hooks/useMobile.tsx` | Mobil cihaz tespiti hook'u |
| `hooks/usePersistFn.ts` | Kalıcı fonksiyon hook'u |

### Utility'ler

| Dosya | Açıklama |
|-------|----------|
| `lib/utils.ts` | Yardımcı fonksiyonlar (cn, vb.) |
| `utils/soundEffects.js` | Ses efektleri utility'si |

---

## 🔄 AKTİVİTE TİPLERİ

### Modül 1
- `hardware_hotspot` - Donanım hotspot oyunu
- `data_factory` - Veri fabrikası oyunu
- `software_sorting` - Yazılım sıralama
- `file_extensions` - Dosya uzantıları
- `scenario_test` - Senaryo testi
- `box_game` - Kutuyu aç oyunu

### Modül 2
- `packet_delivery` - Paket teslim oyunu
- `password_smith` - Şifre oluşturma oyunu
- `quiz` - Quiz
- `card_matching` - Kart eşleştirme
- `scenario_game` - Senaryo oyunu
- `story_mode` - Hikaye modu
- `interactive_quiz` - İnteraktif quiz

### Modül 3
- `password_smith` - Şifre oluşturma oyunu
- `wordle_game` - Wordle oyunu
- `truth_or_troll` - Doğru/Yanlış oyunu
- `scenario_2fa` - 2FA senaryo oyunu
- `quiz` - Quiz
- `interactive_quiz` - İnteraktif quiz

### Modül 4
- `quiz` - Quiz
- `interactive_quiz` - İnteraktif quiz

### Modül 5
- `cyber_crisis` - Siber kriz simülasyonu
- `flappy_bird` - Flappy Bird oyunu
- `advanced_hotspot_quiz` - Gelişmiş hotspot quiz

---

## 📦 BAĞIMLILIKLAR

### Ana Bağımlılıklar

- **React 19.2.2** - UI kütüphanesi
- **React DOM 19.2.2** - React DOM renderer
- **Wouter 3.0.0** - Routing kütüphanesi
- **Framer Motion 12.23.26** - Animasyon kütüphanesi
- **Canvas Confetti 1.9.4** - Konfeti animasyonları
- **Radix UI** - UI component kütüphanesi (53 component)
- **Tailwind CSS 4.0.0** - Utility-first CSS framework
- **TypeScript 5.5.3** - Type safety
- **Vite 5.4.0** - Build tool

### Geliştirme Bağımlılıkları

- **@vitejs/plugin-react** - Vite React plugin'i
- **@types/react** - React TypeScript tipleri
- **Autoprefixer** - CSS vendor prefix'leri
- **PostCSS** - CSS işlemci

---

## 🗂️ DOSYA İSTATİSTİKLERİ

### Toplam Dosya Sayıları

- **Component'ler:** 30+ ana component + 53 UI component = **83+ component**
- **Sayfalar:** 7 sayfa (5 modül + Home + NotFound)
- **İçerik Dosyaları:** 7 içerik dosyası
- **Stil Dosyaları:** 15+ CSS dosyası
- **Görseller:** 100+ görsel dosyası
- **Hook'lar:** 3 custom hook
- **Context'ler:** 2 context

---

## 🔍 ÖNEMLİ NOTLAR

### Kullanılmayan Dosyalar
- `Module1_Enhanced.jsx` - Eski versiyon, kullanılmıyor
- `Module1_FileExtensions.jsx` - Eski versiyon, kullanılmıyor

### Modül 4 Görselleri
- Modül 4 görselleri WhatsApp formatında (`WhatsApp Image *.jpeg`)
- Bu görseller `module_content_tr.js` içinde referans edilmiş durumda

### Routing Yapısı
- Tüm routing `App.tsx` içinde tanımlı
- Wouter kütüphanesi kullanılıyor
- Route'lar: `/`, `/module1`, `/module2`, `/module3`, `/module4`, `/module5`, `/404`

### Dil Desteği
- Türkçe: Ana dil, `module_content_tr.js` içinde
- İngilizce: Her modül için ayrı `*_lang_en.js` dosyası
- Dil değiştirme: `LanguageContext` ve `LanguageSwitcher` component'i ile

---

## 📝 GÜNCELLEME NOTLARI

### Son Yapılan Değişiklikler

1. **TruthOrTrollGame Import'u Eklendi** - Module3'e eklendi
2. **Quiz Tekrarı Düzeltildi** - Module4'te quiz'ler tekrar gösterilmiyor
3. **Modül 4 Görselleri Entegre Edildi** - Tüm görseller doğru yerlere eklendi
4. **WordleGame Entegre Edildi** - Modül 3'e eklendi
5. **ScenarioGame_2FA Entegre Edildi** - Modül 3'e eklendi
6. **StoryMode Entegre Edildi** - Modül 2'ye eklendi

---

## 🚀 GELİŞTİRME NOTLARI

### Yeni Component Ekleme
1. `client/src/components/` altına component dosyasını ekle
2. İlgili modül sayfasına import et
3. `renderActivity()` fonksiyonuna case ekle
4. Gerekirse özel CSS dosyası oluştur

### Yeni Modül Ekleme
1. `client/src/pages/` altına `ModuleX.jsx` oluştur
2. `client/src/content/` altına içerik dosyası ekle
3. `App.tsx`'e route ekle
4. `Sidebar.jsx`'e menü öğesi ekle
5. `Home.tsx`'e modül kartı ekle

### Görsel Ekleme
1. Görseli `client/public/images/` altına ekle
2. `module_content_tr.js` içinde görsel yolunu güncelle
3. Gerekirse modül klasörü oluştur (`moduleX/`)

---

**Son Güncelleme:** 2025-01-XX  
**Dokümantasyon Versiyonu:** 1.0

