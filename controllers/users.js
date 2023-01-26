import User from '../model/User.js'


export const getUsers = async (req, res) => { // routes to obtain/receive request using the get http method
    try {
        const users = await User.find()
        res.json(users)
        res.send(users)

    } catch(err) {
        res.json({message: err.message})
    }
}

export const createUser = async (req, res) => { // routes to send/post request using the post http method
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    });

    try{
        const savedUser = await user.save()
        res.json(savedUser)
        
    }catch(err){
        res.json({message: err.message})
    }
    // res.send(`User with the name ${user.firstName} added to the database!`)
    console.log(req.body)
    
}

export const getUser = async (req, res) => {
    try {
    const user = await User.findById(req.params.id)
    res.json(user)
    } catch(err) {
        res.json({message: err.message})
    }
}

export const deleteUser = async (req, res) => {
    try {
        const removedUser = await User.remove({_id: req.params.id})
        res.json(removedUser)
    }catch(err) {
        res.json({message: err.message})
    }
    
    res.send(`User with the id ${id} removed from the database!`);
}

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

