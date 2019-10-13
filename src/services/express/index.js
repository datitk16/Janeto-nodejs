import express from 'express'
import path from 'path';
import {env} from './../../config';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import bodyParser from 'body-parser';


export default (apiRoot,router)=>{
    const app = new express();
    if(env==='production'||env==='development'){
      app.use(cors());
      app.use(compression());
      app.use(morgan('dev'))
    }
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(apiRoot,router)
    const wwwRoot = path.join(__dirname, '../../../www')
    app.use(express.static(wwwRoot))
    
    app.get('/*', (req, res) => {
      res.sendFile(path.join(wwwRoot, 'index.html'))
    })
    return app;
}
