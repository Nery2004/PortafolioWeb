import React, { useState, useRef, useEffect } from 'react';
import './BackgroundMusic.css';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.3);
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.loop = true;
      
      // Intentar reproducir automáticamente
      const playAudio = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Autoplay bloqueado por el navegador:', error);
          setIsPlaying(false);
        }
      };
      
      playAudio();
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(e => {
          console.log('Error al reproducir audio:', e);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
  };

  return (
    <div className="music-controls-container">
      <audio 
        ref={audioRef}
        preload="auto"
      >
        <source src="/audio/background-music.mp3" type="audio/mpeg" />
        <source src="/audio/background-music.ogg" type="audio/ogg" />
        Tu navegador no soporta audio HTML5.
      </audio>
      
      <div className="music-controls">
        <button 
          className="music-toggle"
          onClick={togglePlay}
          title={isPlaying ? 'Pausar música' : 'Reproducir música'}
        >
          {isPlaying ? '♪♫' : '♪'}
        </button>
        
        <button 
          className="volume-button"
          onClick={() => setShowVolumeControl(!showVolumeControl)}
          title="Control de volumen"
        >
          🎵
        </button>
      </div>

      {showVolumeControl && (
        <div className="volume-popup">
          <div className="volume-content">
            <h3>Control de Volumen</h3>
            <div className="volume-slider-container">
              <span className="volume-label">🔇</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider-pergamino"
              />
              <span className="volume-label">🔊</span>
            </div>
            <div className="volume-percentage">
              {Math.round(volume * 100)}%
            </div>
            <button 
              className="close-volume"
              onClick={() => setShowVolumeControl(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BackgroundMusic;