hexo.extend.helper.register('paper', function(path, canvas){
  return '<script type="text/paperscript" src="' + hexo.config.root + path + '.js" canvas="' + canvas + '"></script>';
});