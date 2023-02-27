import React from 'react';

import { addons, types } from '@storybook/addons';

import { AddonPanel } from '@storybook/components';

const ADDON_ID = 'custom-addon';
const PANEL_ID = `${ADDON_ID}/panel`;

// give a unique name for the panel
const MyPanel = () => {
  return (
    <div>
      <img width={'30%'} height={'20%'} src={'https://raw.githubusercontent.com/gist/brudnak/aba00c9a1c92d226f68e8ad8ba1e0a40/raw/e1e4a92f6072d15014f19aa8903d24a1ac0c41a4/nyan-cat.gif'} alt={'cat'}/>
    </div>
  )
};

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Custom Addon',
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <MyPanel />
      </AddonPanel>
    ),
  });
});
