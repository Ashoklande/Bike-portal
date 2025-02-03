import express from 'express';
import { AddbikeData, DeleteBikeData, getAllbike } from '../controllers/Bikecontrollers.js';
import { userAuth } from '../middlewares/UserAuth.js';
import upload from '../config/multer.js'

const route=express.Router();


route.post('/Addbike',upload.array('photo',2),userAuth,AddbikeData);
route.get('/getAllbike',getAllbike);
route.post('/Deletebike',DeleteBikeData);

export default route;