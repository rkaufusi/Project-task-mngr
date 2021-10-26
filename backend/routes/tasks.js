import express from 'express'
// {} mean you can just get the function
import {getTasks} from '../controller/tasks.js'
// set up our router
const router = express.Router();
//set up routes request and response

router.get('/', getTasks);

export default router;