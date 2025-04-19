
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  audioSrc?: string;
  className?: string;
  defaultPlaying?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioSrc = '/ambient-dystopia.mp3', // Placeholder audio file path
  className = '',
  defaultPlaying = false
}) => {
  const [isPlaying, setIsPlaying] = useState(defaultPlaying);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;
    
    audio.addEventListener('canplaythrough', () => {
      setIsLoaded(true);
      if (defaultPlaying) {
        audio.play().catch(err => console.log('Audio autoplay prevented:', err));
      }
    });

    return () => {
      // Cleanup
      audio.pause();
      audio.src = '';
      audio.remove();
    };
  }, [audioSrc, defaultPlaying]);

  const toggleAudio = () => {
    if (!audioRef.current || !isLoaded) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log('Audio play prevented:', err));
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleAudio}
      className={`flex items-center space-x-2 text-xs uppercase font-mono tracking-wider text-fog/70 hover:text-toxic transition-colors ${className} ${!isLoaded ? 'opacity-50 animate-pulse' : ''}`}
      disabled={!isLoaded}
      title={isPlaying ? 'Disattiva Audio' : 'Attiva Audio'}
    >
      <span className="inline-block w-3 h-3 rounded-full bg-rust relative">
        {isPlaying && (
          <span className="absolute inset-0 rounded-full bg-rust animate-ping opacity-75"></span>
        )}
      </span>
      {isPlaying ? (
        <Volume2 className="h-4 w-4 text-toxic" />
      ) : (
        <VolumeX className="h-4 w-4 text-fog/70" />
      )}
      <span className="hidden md:inline">{isPlaying ? 'Disattiva Audio' : 'Attiva Audio'}</span>
    </button>
  );
};
