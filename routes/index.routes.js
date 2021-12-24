import express from "express";

const router = express.Router();

router.route('/')
    .post((req, res)=>{
        return res.status(200).json({data:req.body, status:200})
    })

export default router;