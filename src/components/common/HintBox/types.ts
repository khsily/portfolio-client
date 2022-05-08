export interface HintBoxProps extends React.HTMLProps<HTMLDivElement> {
  visible?: boolean;
  position?: { top: number; left: number };
}
