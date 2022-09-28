import * as React from 'react';
import { singleProps, multiProps, strokeLinecap } from '../../utils/types';

export interface CircleProps {
  type: 'front' | 'back';
  configItem: singleProps;
  index?: number;
}

const Circle: React.FC<CircleProps> = (props: CircleProps) => {
  const { type, configItem, index } = props;
  const {
    position: { x, y },
    radius = 50,
    strokeBarColor = [
      { offset: '0%', color: '#FF7529' },
      { offset: '5%', color: '#FFAC47' },
      { offset: '100%', color: '#FF7529' },
    ],
    strokeBackgroundColor = '#f4f4f4',
    strokeWidth = 14,
    strokeLinecap = 'round',
    percent = 0.5,
  } = configItem;
  const strokeDashValue: number = Number((Math.PI * radius).toFixed(0));
  const value = percent * strokeDashValue;
  const strokeDasharray =
    type === 'back' ? strokeDashValue : `${value} ${strokeDashValue}`;
  const renderStrokeLinecap: strokeLinecap =
    strokeLinecap !== 'round'
      ? strokeLinecap
      : type === 'back'
      ? 'round'
      : value > 0
      ? 'round'
      : 'butt';
  const strokeBack = Array.isArray(strokeBackgroundColor)
    ? `url(#back-linear-gradient_${index || 0})`
    : strokeBackgroundColor;
  const strokeFront = Array.isArray(strokeBarColor)
    ? `url(#front-linear-gradient_${index || 0})`
    : strokeBarColor;
  return (
    <circle
      cx={x}
      cy={y}
      r={radius}
      stroke={type === 'back' ? strokeBack : strokeFront}
      strokeWidth={strokeWidth}
      fill='none'
      strokeDasharray={strokeDasharray}
      strokeDashoffset={-strokeDashValue}
      strokeLinecap={renderStrokeLinecap}
    />
  );
};

export { Circle };

export default Circle;
