const express=require('express');
const productRouter=require('./product.js');
let app=express();
app.listen(8080);
app.use('/product',productRouter);

















