import expres from 'express';
import { createUser,  getDatawithBike,  getProfile, userLogin } from '../controllers/usercontroller.js';
import { userAuth } from '../middlewares/UserAuth.js';


const route =expres.Router();

route.post('/createuser',createUser);
route.post('/Loginuser',userLogin);
route.get('/profile',userAuth,getProfile);
route.get('/getbikeData',userAuth,getDatawithBike);

export default route;