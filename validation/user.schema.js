import express from 'express';
import Joi from "joi";



export const validateJoi  = (schemas) => {
    async (req, res, next) => {
        try{
            await schemas.validateAsync(req.body)
            next();
        }catch(err){
            console.error(err);
            return res.json({ err})
        }
    }
}


export const schemas = {
    user: Joi.object({
        firstName:Joi.string().alphanum().min(2).max(100).required(),
        lastName:Joi.string().alphanum().min(2).max(100).required(),
        age:Joi.number().integer().max(100).required(),

    })
}
