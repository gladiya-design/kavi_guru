/**
 * audioManager.js
 * 
 * Manages background music (HTML5 Audio) and ambient synth fallback,
 * along with paper/chime micro-sound effects using Web Audio API.
 */

class AudioManager {
  constructor() {
    this.audioElement = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.baseVolume = 0.55;
    this.currentChapterVolume = 1.0;
    this.audioContext = null;
    this.synthInterval = null;
    this.isUsingSynthFallback = false;
    this.listeners = new Set();
  }

  // Subscribe to playback state changes
  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify() {
    this.listeners.forEach((cb) => cb({ isPlaying: this.isPlaying, isMuted: this.isMuted }));
  }

  init(audioSrc = "/music/birthday-song.mp3", defaultVolume = 0.6) {
    if (this.audioElement) return;

    this.baseVolume = defaultVolume;
    this.audioElement = new Audio(audioSrc);
    this.audioElement.loop = true;
    this.audioElement.volume = this.baseVolume;

    // If audio file doesn't exist or fails to load, gracefully fall back to ambient synth
    this.audioElement.addEventListener("error", () => {
      console.info("Custom audio file not found or unsupported; using built-in ambient melodic synth.");
      this.isUsingSynthFallback = true;
      if (this.isPlaying) {
        this.startAmbientSynth();
      }
    });

    this.audioElement.addEventListener("play", () => {
      this.isPlaying = true;
      this.notify();
    });

    this.audioElement.addEventListener("pause", () => {
      this.isPlaying = false;
      this.notify();
    });
  }

  async startMusic() {
    this.isMuted = false;
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioContext = new AudioCtx();
      }
    }
    if (this.audioContext && this.audioContext.state === "suspended") {
      await this.audioContext.resume();
    }

    if (this.isUsingSynthFallback) {
      this.startAmbientSynth();
      this.isPlaying = true;
      this.notify();
      return;
    }

    if (this.audioElement) {
      try {
        await this.audioElement.play();
        this.isPlaying = true;
      } catch (err) {
        console.warn("HTML5 audio playback blocked or file missing, starting ambient synth:", err);
        this.isUsingSynthFallback = true;
        this.startAmbientSynth();
        this.isPlaying = true;
      }
      this.notify();
    }
  }

  toggleMusic() {
    if (this.isPlaying) {
      this.pauseMusic();
    } else {
      this.startMusic();
    }
  }

  pauseMusic() {
    this.isPlaying = false;
    if (this.audioElement && !this.isUsingSynthFallback) {
      this.audioElement.pause();
    }
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
    this.notify();
  }

  setVolume(vol) {
    this.baseVolume = Math.max(0, Math.min(1, vol));
    if (this.audioElement) {
      this.audioElement.volume = this.baseVolume * this.currentChapterVolume;
    }
  }

  // Adjust volume dynamically per section
  setChapterVolumeMultiplier(multiplier = 1.0) {
    this.currentChapterVolume = multiplier;
    if (this.audioElement) {
      const target = Math.max(0, Math.min(1, this.baseVolume * multiplier));
      this.audioElement.volume = target;
    }
  }

  // Built-in gentle ambient music-box / acoustic pentatonic chords
  // Creates an emotional, peaceful backdrop if the user has not placed a bgm.mp3 file
  startAmbientSynth() {
    if (this.synthInterval) return;
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.audioContext = new AudioCtx();
    }

    // Gentle relaxing pentatonic scale notes (frequencies in Hz)
    const notes = [
      261.63, // C4
      293.66, // D4
      329.63, // E4
      392.00, // G4
      440.00, // A4
      523.25, // C5
      587.33, // D5
      659.25, // E5
    ];

    let noteIdx = 0;
    const playNextNote = () => {
      if (!this.isPlaying || !this.audioContext) return;
      try {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        
        // Warm sine / triangle wave for music-box feeling
        osc.type = "sine";
        const baseFreq = notes[noteIdx % notes.length];
        // subtle variation
        osc.frequency.setValueAtTime(baseFreq, this.audioContext.currentTime);

        const now = this.audioContext.currentTime;
        const vol = 0.08 * this.currentChapterVolume;
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(vol, now + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

        osc.connect(gain);
        gain.connect(this.audioContext.destination);

        osc.start(now);
        osc.stop(now + 2.6);

        noteIdx = (noteIdx + Math.floor(Math.random() * 3) + 1) % notes.length;
      } catch {
        // Ignore audio context errors
      }
    };

    playNextNote();
    this.synthInterval = setInterval(playNextNote, 1400);
  }

  // Paper turn sound effect (subtle tactile friction)
  playPaperSound() {
    if (!this.audioContext) return;
    try {
      const now = this.audioContext.currentTime;
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.15);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
      osc.connect(gain);
      gain.connect(this.audioContext.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    } catch {
      // Ignore
    }
  }

  // Camera shutter click sound effect
  playShutterSound() {
    if (!this.audioContext) return;
    try {
      const now = this.audioContext.currentTime;
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.06);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      osc.connect(gain);
      gain.connect(this.audioContext.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } catch {
      // Ignore
    }
  }

  // Gentle chime for quiz or heartwarming reveal
  playChimeSound() {
    if (!this.audioContext) return;
    try {
      const now = this.audioContext.currentTime;
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.3); // A5
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);
      osc.connect(gain);
      gain.connect(this.audioContext.destination);
      osc.start(now);
      osc.stop(now + 0.65);
    } catch {
      // Ignore
    }
  }
}

export const audioManager = new AudioManager();
