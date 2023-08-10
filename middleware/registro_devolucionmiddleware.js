import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import { RegisDevo } from '../dtocontroller/registro_devolucion.js';
import { Router } from "express";
const appMiddlewareRegisDevoVerify = Router()


appMiddlewareRegisDevoVerify.use(async(req,res,next) => {
    if(!req.rateLimit) return;
    let {payload} = req.data;
    delete payload.iat;
    delete payload.exp;
    
    let clone = JSON.stringify(classToPlain(plainToClass(RegisDevo, {}, { ignoreDecorators: true })));
    let verify = clone === JSON.stringify(payload);

    console.log(payload);
    console.log(clone);

    if(!verify) res.status(406).send({status: 406, message: "No Autorizado"})
    next();
}
);

export { 
    appMiddlewareRegisDevoVerify
};