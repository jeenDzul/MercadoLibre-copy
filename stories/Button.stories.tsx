import React from 'react';
import Button from '../components/UI/atoms/Button';


export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },

};

export const Primary = (args) => (
  <div style={{ width: '20%' }}>
    <Button {...args}>
      Comprar
    </Button>
  </div>
);



export const Secondary = (args) => (
  <div style={{ width: '20%' }}>
    <Button {...args} color="secondary">
      Comprar
    </Button>
  </div>
);

export const ButtonDisabled = (args) => (
  <div style={{ width: '20%' }}>
    <Button {...args} disabled color="secondary">
      Comprar
    </Button>
  </div>
);

