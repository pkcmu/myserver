import express, { Request, Response } from 'express';

import { Utils } from './Utils';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {    
      res.send(Utils.add(1,2)+"");
});

app.listen(port, () => {    
      console.log(`Server is running ${port}`);
});
