import path from 'path';
import webpack from 'webpack';
import precss from 'precss';
import autoprefixer from 'autoprefixer';


const port = process.env.envPORT || 3000;

const TARGET_ENV = process.env.npm_lifecycle_event === 'build' ? 'production' : 'development';

if(TARGET_ENV === 'development') {
  console.log('Serving locally ...');
}

const srcPath =  path.resolve(__dirname, 'src/App.js');
const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?reload=true',
    'babel-regenerator-runtime',
    'tether',
    'font-awesome/scss/font-awesome.scss',
    srcPath
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        WEBPACK: true
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      tether: 'tether',
      Tether: 'tether',
      'window.Tether': 'tether',
      Popper: ['popper.js', 'default'],
      Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
      Button: 'exports-loader?Button!bootstrap/js/dist/button',
      Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
      Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
      Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
      Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
      Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
      Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
      Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
      Tooltip: 'exports-loader?Tooltip!bootstrap/js/dist/tooltip',
      Util: 'exports-loader?Util!bootstrap/js/dist/util'
    })
  ],
  performance: {
    hints: false
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [{
      loader: ['jsx-loader', 'babel-loader'],
      test: /\.jsx?$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/
    }, {
      test: /\.(s?css)$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: function() {
            return [
              precss,
              autoprefixer({
                browsers: ['last 3 versions']
              })];
          }
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }
      ]
    },//handle images
    {
      test: /\.(jpe?g|png|gif|svg)$/i,  
      use: [{
        loader: 'url-loader',
        options: { 
          limit: 8000, // Convert images < 8kb to base64 strings
          name: '[path][name].[ext]'
        } 
      }]
    },// font-awesome
    {
      test: /font-awesome\.config\.js/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'font-awesome-loader'
        }
      ]
    },
    {
      test: /\.html$/,
      use: {
        loader: 'html-loader',
        options: { minimize: true } 
      }
    },
    {
      test: require.resolve('jquery'),
      use: [
        { loader: 'expose-loader', options: 'jQuery' },
        { loader: 'expose-loader', options: '$' }
      ]
    },
    {
      test: require.resolve('wow.js/dist/wow.js'), 
      loader: 'exports-loader?this.WOW'
    },
    {
      test: require.resolve('tether'),
      use: [
        { loader: 'expose-loader', options: 'Tether' }
      ]
    },
    // Bootstrap 4
    {
      test: /bootstrap\/dist\/js\/umd\//,
      use: 'imports-loader?jQuery=jquery'
    },
    // Used for Bootstrap Glyphicon Fonts
    {
      test: /\.(woff2|woff|ttf|svg|eot)$/,
      loader: 'file-loader'
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    hot: true
  }
};



module.exports = config;