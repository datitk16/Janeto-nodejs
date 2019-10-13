import path from 'path';
import merge from 'merge'
if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv-safe')
  dotenv.config({
    path: path.join(__dirname, '../.env'),
    sample: path.join(__dirname, '../.env.default')
  })
}
const config={
  all:{
    env:process.env.NODE_ENV||'development',
    root: path.join(__dirname, '..'),
    port: process.env.PORT || 3000,
    ip: process.env.IP || '0.0.0.0',
    apiRoot: process.env.API_ROOT || '',
  },
  development:{

  },
  production:{
    port: process.env.PORT || 8080,
    ip: process.env.IP || '0.0.0.0'
  }
}

module.exports=merge(config.all,config[config.all.env]);
export default module.exports;