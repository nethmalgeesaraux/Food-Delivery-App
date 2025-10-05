import express from 'express';
import { addcart, removecart, getCart} from '../controllers/cartController.js';
import authMiddlewre from '../middleware/auth.js';

const cartrouter = express.Router();

cartrouter("/add", addcart);
cartrouter("/remove",removecart);
cartrouter("/get", getCart);

export default cartrouter;

