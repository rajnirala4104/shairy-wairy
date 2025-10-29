const {Router} = require('express');
const { StatusCodes } = require('http-status-codes');

const v1Router = Router();

v1Router.get('/', (req,res) => {
    return res.status(StatusCodes.OK).json({
        message: "V1 Routes is working..",
        status: StatusCodes.OK,
        data:null
    })
})

module.exports = {v1Router};
