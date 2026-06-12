"use client";

import { useRef, useEffect } from "react";

export function useMagicGlowSound(isPlaying: boolean, volume: number = 0.35) {
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<AudioNode[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!isPlaying) {
      if (ctxRef.current && ctxRef.current.state !== "closed") {
        try {
          ctxRef.current.close();
        } catch {}
        ctxRef.current = null;
        nodesRef.current = [];
      }
      return;
    }

    if (ctxRef.current && ctxRef.current.state !== "closed") return;

    let ctx: AudioContext;
    try {
      ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      ctxRef.current = ctx;
    } catch {
      return;
    }

    ctx.resume().then(() => {
      if (ctx.state === "closed") return;

      const master = ctx.createGain();
      master.gain.setValueAtTime(0, ctx.currentTime);
      master.gain.linearRampToValueAtTime(volume, ctx.currentTime + 1.2);
      master.connect(ctx.destination);

      const nodes: AudioNode[] = [master];

      const freqs = [164.81, 220, 277.18, 329.63, 440, 554.37, 659.25];
      freqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = i % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.detune.setValueAtTime((i - 3) * 5, ctx.currentTime);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        osc.connect(gain);
        gain.connect(master);
        osc.start(ctx.currentTime);
        nodes.push(osc, gain);

        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.type = "sine";
        lfo.frequency.setValueAtTime(0.3 + i * 0.1, ctx.currentTime);
        lfoGain.gain.setValueAtTime(3 + i, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start(ctx.currentTime);
        nodes.push(lfo, lfoGain);
      });

      const noiseLen = ctx.sampleRate * 2;
      const noiseBuf = ctx.createBuffer(1, noiseLen, ctx.sampleRate);
      const data = noiseBuf.getChannelData(0);
      for (let i = 0; i < noiseLen; i++) data[i] = Math.random() * 2 - 1;

      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuf;
      noise.loop = true;
      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.008, ctx.currentTime);
      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = "highpass";
      noiseFilter.frequency.setValueAtTime(2500, ctx.currentTime);
      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(master);
      noise.start(ctx.currentTime);
      nodes.push(noise, noiseGain, noiseFilter);

      nodesRef.current = nodes;
    });

    return () => {
      if (ctxRef.current && ctxRef.current.state !== "closed") {
        try {
          ctxRef.current.close();
        } catch {}
        ctxRef.current = null;
        nodesRef.current = [];
      }
    };
  }, [isPlaying, volume]);

  useEffect(() => {
    return () => {
      if (ctxRef.current && ctxRef.current.state !== "closed") {
        try {
          ctxRef.current.close();
        } catch {}
        ctxRef.current = null;
        nodesRef.current = [];
      }
    };
  }, []);
}
