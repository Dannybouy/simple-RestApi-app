import User from '../model/User.js'
import Joi from "joi";

export const getUsers = async (req, res) => { // routes to obtain/receive request using the get http method
    try {
        const users = await User.find()
        res.json(users)
        res.send(users)

    } catch(err) {
        res.json({message: err.message})
    }
}

export const createUser = async (req, res) => { // routes to send/post request using the post http method with Validation using Joi
    const schema = Joi.object({
        firstName: Joi.string().alphanum().min(2).max(30).required(),
        lastName: Joi.string().alphanum().min(2).max(30).required(),
        age: Joi.number().integer().min(0).max(120).required()
      });
    
      const { error, value } = schema.validate(req.body);
    
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    });

    try{
        const savedUser = await user.save()
        res.json(savedUser)
        
    }catch(err){
        res.json({message: err.message})
    }
   
    console.log(req.body)
    
}

// Getting a particular user information using the id of the user
export const getUser = async (req, res) => {
    try {
    const user = await User.findById(req.params.id)
    res.json(user)
    } catch(err) {
        res.json({message: err.message})
    }
}

// Deleting user information using the delete method
export const deleteUser = async (req, res) => {
    try {
        const removedUser = await User.remove({_id: req.params.id})
        res.json(removedUser)
    }catch(err) {
        res.json({message: err.message})
    }
    
    res.send(`User with the id ${id} removed from the database!`);
}

// Updating user information using the patch method
export const updateUser = async (req, res) => {
    try{
        const updatedUser = await User.updateOne(
            {_id: req.params.id},
            {$set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age
            }}
        );
        res.json(updatedUser)
    }catch(err){
        res.json({message: err.message});
    }
    res.send(`User with the id ${id} has been updated!`);
    
}

