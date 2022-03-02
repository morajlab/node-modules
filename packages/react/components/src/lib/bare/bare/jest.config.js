module.exports = {
  displayName: 'react-components-src-lib-bare-bare',
  preset: '../../../../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../../../../coverage/packages/react/components/src/lib/bare/bare',
};
