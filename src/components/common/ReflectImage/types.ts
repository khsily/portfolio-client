export interface ReflectImageProps {
  image: string;
  className?: string;
  style?: React.CSSProperties;
  shade?: { from: string; to: string };
  hideReflection?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
