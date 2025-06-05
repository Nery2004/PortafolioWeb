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
      
      // Múltiples intentos para iniciar la música
      const playAudio = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Autoplay bloqueado, esperando interacción del usuario');
          setIsPlaying(false);
          
          // Reproducir en la primera interacción del usuario
          const startOnInteraction = () => {
            audio.play().then(() => {
              setIsPlaying(true);
              document.removeEventListener('click', startOnInteraction);
              document.removeEventListener('keydown', startOnInteraction);
              document.removeEventListener('touchstart', startOnInteraction);
            }).catch(e => console.log('Error:', e));
          };
          
          document.addEventListener('click', startOnInteraction);
          document.addEventListener('keydown', startOnInteraction);
          document.addEventListener('touchstart', startOnInteraction);
        }
      };
      
      // Intentar reproducir inmediatamente
      playAudio();
      
      // También intentar después de un pequeño delay
      setTimeout(playAudio, 100);
      setTimeout(playAudio, 500);
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
        autoPlay
        muted={false}
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