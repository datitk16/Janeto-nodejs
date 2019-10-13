import express from './services/express/index';
import {ip,env, port ,apiRoot} from './config';
import router from './api'
const app = new express(apiRoot,router);

app.listen(port, () => console.log('Server listening on http://%s:%d, in %s mode', ip, port, env))
