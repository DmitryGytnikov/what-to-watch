import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';

describe(`App`, () => {
  const filmsListMock = [
    {
      name: `Aviator`,
      src: `img/aviator.jpg`,
    },
    {
      name: `Shutter Island`,
      src: `img/shutter-island.jpg`,
    },
  ];

  it(`renders correctly`, () => {
    const tree = renderer.create(
        <App
          films={filmsListMock}
        />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});