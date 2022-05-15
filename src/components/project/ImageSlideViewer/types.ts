export interface ImageSlideViewerProps {
  images?: { url: string; title: string }[];
  activeIndex?: number;
  onChangeIndex?: (index: number) => void;
}
