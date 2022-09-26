export interface circlePosition {
  x: number;
  y: number;
}

export type strokeLinecap = 'butt' | 'square' | 'round';

export interface ProgressGradientItem {
  offset: string;
  color: string;
}

export type ProgressGradient = ProgressGradientItem[];

export interface singleProps {
  position: circlePosition;
  radius: number;
  percent?: number;
  strokeWidth?: number;
  strokeLinecap?: strokeLinecap;
  strokeBackgroundColor?: string | ProgressGradient;
  strokeBarColor?: string | ProgressGradient;
  width?: number;
  height?: number;
}

export type multiProps = singleProps[];
