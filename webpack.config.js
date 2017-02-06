var path = require('path')

module.exports = {
  entry: "./src/wizard.jsx",
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }

    ]
  },
  externals: {
    "react": {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    },
    "react-bootstrap": {
      commonjs: "react-bootstrap",
      commonjs2: "react-bootstrap",
      amd: "react-bootstrap",
      root: "ReactBootstrap"
    }
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: "wizard.js",
    library: "ReactWizard",
    libraryTarget: "umd"
  }
}
