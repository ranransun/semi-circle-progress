import * as React from 'react';
import { singleProps, multiProps, strokeLinecap } from '../../utils/types';

export interface ProgressProps {
  width?: number;
  height?: number;
  config: singleProps | multiProps;
}

const SemiCircleProgress: React.FC<ProgressProps> = (props: ProgressProps) => {
  const { config, width = 400, height = 200 } = props;
  const renderCircle = (
    type: 'front' | 'back',
    configItem: singleProps,
    index?: number
  ) => {
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
  const renderSingleProgress = (singleConfig?: singleProps, index?: number) => {
    if (singleConfig) {
      const {
        strokeBackgroundColor,
        strokeBarColor = [
          { offset: '0%', color: '#FF7529' },
          { offset: '5%', color: '#FFAC47' },
          { offset: '100%', color: '#FF7529' },
        ],
      } = singleConfig;
      return (
        <React.Fragment>
          {Array.isArray(strokeBackgroundColor) && (
            <defs>
              <linearGradient
                id={`back-linear-gradient_${index || 0}`}
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                {strokeBackgroundColor.map((linear) => (
                  <stop
                    key={linear.offset}
                    offset={linear.offset}
                    style={{ stopColor: linear.color, stopOpacity: 1 }}
                  />
                ))}
              </linearGradient>
            </defs>
          )}
          {Array.isArray(strokeBarColor) && (
            <defs>
              <linearGradient
                id={`front-linear-gradient_${index || 0}`}
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                {strokeBarColor.map((linear) => (
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
    <svg width={width} height={height} style={{ overflow: 'unset' }}>
      {Array.isArray(config)
        ? renderMultiProgress(config)
        : renderSingleProgress(config)}
    </svg>
  );
};

export { SemiCircleProgress };

export default SemiCircleProgress;
