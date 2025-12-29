/**
 * Sound Effects Utility
 * Web Audio API kullanarak ses efektleri oluşturur
 */

class SoundManager {
  constructor() {
    this.audioContext = null;
    this.enabled = true;
    this.init();
  }

  init() {
    try {
      // Web Audio API'yi başlat (kullanıcı etkileşimi gerektirir)
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API not supported');
      this.enabled = false;
    }
  }

  // Doğru cevap sesi
  playCorrect() {
    if (!this.enabled || !this.audioContext) return;
    this.playTone(523.25, 0.1, 'sine'); // C5
    setTimeout(() => this.playTone(659.25, 0.1, 'sine'), 50); // E5
    setTimeout(() => this.playTone(783.99, 0.2, 'sine'), 100); // G5
  }

  // Yanlış cevap sesi
  playWrong() {
    if (!this.enabled || !this.audioContext) return;
    this.playTone(200, 0.3, 'sawtooth');
  }

  // Başarı sesi
  playSuccess() {
    if (!this.enabled || !this.audioContext) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 0.15, 'sine'), i * 100);
    });
  }

  // Tıklama sesi
  playClick() {
    if (!this.enabled || !this.audioContext) return;
    this.playTone(800, 0.05, 'square');
  }

  // Ton çal
  playTone(frequency, duration, type = 'sine') {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  // Ses efektlerini aç/kapat
  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
}

// Singleton instance
const soundManager = new SoundManager();

export default soundManager;

