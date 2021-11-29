module.exports = {
  presets: ['@babel/preset-react',['@babel/preset-env', {targets: {node: 'current'}}]],
  plugins : ["syntax-class-properties", ["transform-class-properties", { "spec": true }]]
};