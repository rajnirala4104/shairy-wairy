const express = require('express');
const { StatusCodes } = require('http-status-codes');
const cors = require('cors');
const { appRouter } = require('./routers');

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", appRouter);

app.get('/', (req,res) => {
    return res.status(StatusCodes.OK).json({
        message:"api running successfully",
        status: StatusCodes.OK,
        data:null
    })
})

module.exports = { app };
