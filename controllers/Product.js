const Product =require('../models/Product')
const shortid =require('shortid')
const slugify =require('slugify')


exports.createProduct=(req,res)=>{
    // res.status(200).json({
    //     file:req.files,
    //     body:req.body
    // })
    const {name,price,description,category,quantity} =req.body
    let productPictures =[]
    if(req.files.length >0){
        productPictures = req.files.map(file=>{
            return {img:file.filename}
        })
    }
    console.log({})
    const product = new Product({
        name,
        slug:slugify(name),
        price,
        quantity,
        description,
        productPictures,
        category,
        createdBy:req.user.id,
    })
    product.save((error,product)=>{
        if(error){
            res.status(400).json({error})
        }
        if(product){
            res.status(201).json({
                product,
                message:"Product successfully created"
            })
        }
    })
}

exports.singleProduct=(req,res)=>{
    Product.findOne({_id:req.params.id},(error,product)=>{
        if(error) return res.status(400).json({error})
        if(product){
            return res.status(200).json({
                product
            })
        }
    })
}

exports.allProducts=(req,res)=>{
    Product.find({})
    .then(products=>{
        return res.status(200).json({
            products
        })
    })
    .catch(error=>{
        return res.status(400).json({error})
    })
}