fis.match('js/*.js', {
  parser: fis.plugin('babel-6.x'),
  rExt: 'js'
});

fis.match('scss/(*.scss)', {
  isCssLike: true,
  parser: fis.plugin('node-sass'),
  rExt: '.css',
  // change css folder from scss to css
  release: '/css/$1'
});
