import {join} from 'path';
const homecontroller = (req, res)=>{
  res.sendFile(join(process.cwd(), 'views','index.html' ))
}

export {homecontroller};