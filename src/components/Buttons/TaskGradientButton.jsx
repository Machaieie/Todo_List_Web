import React, { useContext } from 'react';
import { Button, ConfigProvider, Space } from 'antd';
import { css } from '@emotion/css';

const TaskGradientButton = ({ text, icon, onClick }) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const rootPrefixCls = getPrefixCls();
  
  // Estilos personalizados para o botão com gradiente
  const linearGradientButton = css`
    &.${rootPrefixCls}-btn-primary:not([disabled]):not(.${rootPrefixCls}-btn-dangerous) {
      border-width: 0;
      position: relative;
      overflow: hidden;

      > span {
        position: relative;
        z-index: 1;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
        z-index: 0;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `;

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            className: linearGradientButton,
          },
        },
      }}
    >
      <Space>
        <Button type="primary" size="large" onClick={onClick} icon={icon}>
          {text}
        </Button>
      </Space>
    </ConfigProvider>
  );
};

export default TaskGradientButton;
