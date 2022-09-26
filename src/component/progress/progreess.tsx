import * as React from 'react';
import { singleProps, multiProps, strokeLinecap } from '../../utils/types';

export interface ProgressProps {
  width?: number;
  height?: number;
  config: singleProps | multiProps;
}

const SemiCircleProgress: React.FC<ProgressProps> = (props: ProgressProps) => {
  const { config } = props;
  const renderCircle = (
    type: 'front' | 'back',
    configItem: singleProps,
    index?: number
  ) => {
    const {
      position: { x, y },
      radius,
      strokeColor,
      strokeWidth = 14,
      strokeLinecap = 'round',
      percent = 0,
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
    const stroke = Array.isArray(strokeColor)
      ? `single-linear-gradient_${index || 0}}`
      : strokeColor;
    return (
      <circle
        cx={x}
        cy={y}
        r={radius}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill='none'
        strokeDasharray={strokeDasharray}
        strokeDashoffset={-strokeDashValue}
        strokeLinecap={renderStrokeLinecap}
      />
    );
  };
  const renderSingleProgress = (singleConfig?: singleProps, index?: number) => {
    if (singleConfig) {
      const { strokeColor } = singleConfig;
      return (
        <React.Fragment>
          {Array.isArray(strokeColor) && (
            <defs>
              <linearGradient
                id={`single-linear-gradient_${index || 0}`}
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                {strokeColor.map((linear) => (
                  <stop
                    key={linear.offset}
                    offset={linear.offset}
                    style={{ stopColor: linear.color, stopOpacity: 1 }}
                  />
                ))}
              </linearGradient>
            </defs>
          )}
          {renderCircle('back', singleConfig, index)}
          {renderCircle('front', singleConfig, index)}
          );
        </React.Fragment>
      );
    }
    console.error('未正确配置组件 ');
  };

  const renderMultiProgress = (config: multiProps) => {
    return (
      <React.Fragment>
        {config.map((degreeItem, index) => {
          return (
            <React.Fragment key={index}>
              {renderSingleProgress(degreeItem, index)}
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  };

  return (
    <svg width={450} height={200} style={{ overflow: 'unset' }}>
      {Array.isArray(config)
        ? renderMultiProgress(config)
        : renderSingleProgress(config)}
    </svg>
  );
};

export { SemiCircleProgress };

export default SemiCircleProgress;