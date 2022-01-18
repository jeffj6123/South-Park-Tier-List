import { NextFunction, Request, Response } from "express";

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client("242188787504-rgmvikkqhmg0uhruc64udgj7q91ltbnp.apps.googleusercontent.com");
async function verify(token) {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "242188787504-rgmvikkqhmg0uhruc64udgj7q91ltbnp.apps.googleusercontent.com",  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  return payload;
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}

export const authMiddleWare = async (req: Request, res: Response, next: NextFunction) => {
    if(req.headers['authorization']) {
        const info = await verify(req.headers['authorization']);
        res.locals['auth'] = info;
        console.log(info);
        next();
    }else{
        res.sendStatus(403);
    }
}