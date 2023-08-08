import session from 'express-session';
import { Router } from 'express';
import { SignJWT, jwtVerify } from 'jose';
import { MongoClient } from 'mongodb';
import { getDB } from '../db/db.mjs';

const storageSucursalAutomovil = Router();
let con = undefined;

storageSucursalAutomovil.use(session({
    secret: 'mi-secreto',
    resave: false,
    saveUninitialized: true,   
}));


storageSucursalAutomovil.use("/:id?", async (req, res, next) => {
    try {  
        const encoder = new TextEncoder();
        const payload = { body: req.body, params: req.params, id: req.params.id  };
        const jwtconstructor = new SignJWT(payload);
        const jwt = await jwtconstructor 
            .setProtectedHeader({ alg: "HS256", typ: "JWT" })
            .setIssuedAt()
            .setExpirationTime("1h")
            .sign(encoder.encode(process.env.JWT_PRIVATE_KEY)); 
        req.body = payload.body;
        req.session.jwt = jwt;
        const maxAgeInSeconds = 3600;
        res.cookie('token', jwt, { httpOnly: true, maxAge: maxAgeInSeconds * 1000 });
        next();  
    } catch (err) { 
        console.error('Error al generar el JWT:', err.message);
        res.sendStatus(500); 
    }
});
storageSucursalAutomovil.get("/:id?", async (req, res) => {
    const jwt = req.session.jwt;
    const encoder = new TextEncoder();  
    const jwtData = await jwtVerify( 
        jwt,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    )
    if (jwtData.payload.id && jwtData.payload.id !== req.params.id) {
        return res.sendStatus(403);
    }
    const db = getDB();
    const collection = db.collection('sucursal_automovil');
    const sucursal_automoviles = await collection.find().toArray();

    res.json(sucursal_automoviles);


    // let sql = (jwtData.payload.id) 
    //     ? [`db.empleado.findById()`, jwtData.payload.id]  
    //     : [`db.empleado.find()`];   
})
export default storageSucursalAutomovil;