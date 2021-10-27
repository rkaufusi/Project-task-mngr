import express from 'express'
// {} mean you can just get the function
import {getTasks, createTask} from '../controller/tasks.js'
// set up our router
const router = express.Router();

//set up routes request and response. controllers to another file, easier to read and understand
router.get('/', getTasks);

router.post('/', createTask);

export default router;