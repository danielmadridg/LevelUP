import { create } from 'zustand'

interface GameState {
  level: number
  xp: number
  xpToNextLevel: number
  
  // Actions
  addXp: (amount: number) => void
}

export const useGameStore = create<GameState>((set) => ({
  level: 1,
  xp: 0,
  xpToNextLevel: 100, // Starting threshold

  addXp: (amount) => set((state) => {
    let currentXp = state.xp + amount;
    let currentLevel = state.level;
    let required = state.xpToNextLevel;

    // Level up logic while overflow exists
    while (currentXp >= required) {
      currentXp -= required;
      currentLevel++;
      // XP Curve: Each level requires 20% more XP than previous (example)
      required = Math.floor(required * 1.2); 
    }

    return {
      xp: currentXp,
      level: currentLevel,
      xpToNextLevel: required
    };
  }),
}))
