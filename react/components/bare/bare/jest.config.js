module.exports = {
  displayName: 'node-modules-react-components-bare-bare',
  preset: '../../../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../../../coverage/packages/node-modules/react/components/bare/bare',
};
