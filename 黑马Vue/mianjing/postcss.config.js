module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      //下面375是设备的宽度
      //设计给的设计稿，可能是二倍图，或者是三倍大小
      viewportWidth: 375
    }
  }
}
