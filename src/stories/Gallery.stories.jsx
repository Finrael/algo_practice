import React from 'react';

import GalleryComponent from './Gallery'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Gallery',
  component: GalleryComponent,

};
const Template = (args) => <GalleryComponent {...args} />;

export const Form1 = Template.bind({});
Form1.args = {
  imageNumber: '3',
};
// export const Primary =()=><GalleryComponent imageNumber={'3'}/>