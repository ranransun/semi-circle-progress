import * as React from 'react';
import Circle from '../circle';
import { singleProps, multiProps, strokeLinecap } from '../../utils/types';

export interface ProgressProps {
  width?: number;
  height?: number;
  config: singleProps | multiProps;
}

const SemiCircleProgress: React.FC<ProgressProps> = (props: ProgressProps) => {
  const { config, width = 400, height = 200 } = props;

  const renderLinearGradient = (colorConfig, id: string) => {
    return (
      <defs>
        <linearGradient id={id} x1='0%' y1='0%' x2='100%' y2='0%'>
          {colorConfig.map((linear) => (
            <stop
              key={linear.offset}
              offset={linear.offset}
              style={{ stopColor: linear.color, stopOpacity: 1 }}
            />
          ))}
        </linearGradient>
      </defs>
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
          {Array.isArray(strokeBackgroundColor) &&
            renderLinearGradient(
              strokeBackgroundColor,
              `back-linear-gradient_${index || 0}`
            )}
          {Array.isArray(strokeBarColor) &&
            renderLinearGradient(
              strokeBarColor,
              `front-linear-gradient_${index || 0}`
            )}
          <Circle type='back' configItem={singleConfig} index={index} />
          <Circle type='front' configItem={singleConfig} index={index} />
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
