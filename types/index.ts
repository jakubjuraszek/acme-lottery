export interface Play {
  id: string;
  numbers: number[];
  createdAt: Date;
}

export interface PlayContextValue {
  plays: Play[];
  addPlay: (numbers: number[]) => void;
  removePlay: (playId: string) => void;
  clearPlays: () => void;
  canAddPlay: boolean;
  hasPlays: boolean;
}

export interface NumberButtonProps {
  number: number;
  isSelected: boolean;
  onPress: (number: number) => void;
}

export interface PlayCardProps {
  play: Play;
  onDelete: () => void;
}

export interface NumberGridProps {
  selectedNumbers: number[];
  onNumberSelect: (number: number) => void;
  maxNumber: number;
}

export interface SelectedNumberListProps {
  selectedNumbers: number[];
  maxNumbers?: number;
}