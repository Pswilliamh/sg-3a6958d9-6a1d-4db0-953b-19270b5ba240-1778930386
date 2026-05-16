import { useEffect, useRef, useState } from "react";

interface AudioPlayerOptions {
  src: string;
  loop?: boolean;
  autoPlay?: boolean;
}

export function useAudioPlayer({ src, loop = true, autoPlay = true }: AudioPlayerOptions) {
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    audioContextRef.current = new AudioContext();
    gainNodeRef.current = audioContextRef.current.createGain();
    gainNodeRef.current.connect(audioContextRef.current.destination);

    fetch(src)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => audioContextRef.current!.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        audioBufferRef.current = audioBuffer;
        if (autoPlay) {
          play();
        }
      })
      .catch((error) => {
        console.error("Error loading audio:", error);
      });

    return () => {
      stop();
      audioContextRef.current?.close();
    };
  }, [src]);

  useEffect(() => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.setValueAtTime(volume, audioContextRef.current!.currentTime);
    }
  }, [volume]);

  const play = () => {
    if (!audioContextRef.current || !audioBufferRef.current || !gainNodeRef.current) return;

    if (sourceRef.current) {
      sourceRef.current.stop();
    }

    const source = audioContextRef.current.createBufferSource();
    source.buffer = audioBufferRef.current;
    source.loop = loop;
    source.connect(gainNodeRef.current);
    source.start(0);

    sourceRef.current = source;
    setIsPlaying(true);
  };

  const stop = () => {
    if (sourceRef.current) {
      sourceRef.current.stop();
      sourceRef.current = null;
      setIsPlaying(false);
    }
  };

  const fadeIn = (duration = 1000) => {
    if (!gainNodeRef.current || !audioContextRef.current) return;
    const currentTime = audioContextRef.current.currentTime;
    gainNodeRef.current.gain.setValueAtTime(0, currentTime);
    gainNodeRef.current.gain.linearRampToValueAtTime(volume, currentTime + duration / 1000);
  };

  const fadeOut = (duration = 1000) => {
    if (!gainNodeRef.current || !audioContextRef.current) return;
    const currentTime = audioContextRef.current.currentTime;
    gainNodeRef.current.gain.setValueAtTime(volume, currentTime);
    gainNodeRef.current.gain.linearRampToValueAtTime(0, currentTime + duration / 1000);
  };

  return {
    play,
    stop,
    fadeIn,
    fadeOut,
    setVolume,
    isPlaying,
    volume,
  };
}