const proxy = [
    {
      context: 'http://api.agromonitoring.com/agro/1.0/',
      target: 'http://localhost:4200',
      pathRewrite: {'^/agro/1.0/' : ''}
    }
  ];
  module.exports = proxy;