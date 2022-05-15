import type { Project } from 'shared/types';

export interface ProjectSliderProps {
  data?: Project[]; // TODO: 타입 확정되면 변경할것
  currentIndex?: number;
  selected?: boolean;
  size?: { width: number; height: number };
  onChange?: (index: number) => void;
  onSelect?: () => void;
  onDeselect?: () => void;
}
