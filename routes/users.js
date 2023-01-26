import express from "express";
import { createUser, getUsers, getUser, deleteUser, updateUser } from "../controllers/users.js";
import { schemas, validateJoi } from "../validation/user.schema.js"

const router = express.Router();

// all routes in here are starting with /users

// our browser can only handle GET requests so we need to use Postman to test our post request

router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)


export default router;