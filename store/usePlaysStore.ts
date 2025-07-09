import { create } from 'zustand';
import { Play } from '@/types';

interface PlaysState {
  plays: Play[];
  addPlay: (numbers: number[]) => void;
  removePlay: (playId: string) => void;
  clearPlays: () => void;
  canAddPlay: boolean;
  hasPlays: boolean;
}

export const usePlaysStore = create<PlaysState>((set, get) => ({
  plays: [],
  
  addPlay: (numbers: number[]) => {
    const newPlay: Play = {
      id: Date.now().toString(),
      numbers,
      createdAt: new Date(),
    };
    set((state) => {
      const newPlays = [...state.plays, newPlay];
      return {
        plays: newPlays,
        canAddPlay: newPlays.length < 3,
        hasPlays: newPlays.length > 0,
      };
    });
  },
  
  removePlay: (playId: string) => {
    set((state) => {
      const newPlays = state.plays.filter(play => play.id !== playId);
      return {
        plays: newPlays,
        canAddPlay: newPlays.length < 3,
        hasPlays: newPlays.length > 0,
      };
    });
  },
  
  clearPlays: () => {
    set({ 
      plays: [], 
      canAddPlay: true, 
      hasPlays: false 
    });
  },
  
  canAddPlay: true,
  hasPlays: false,
}));