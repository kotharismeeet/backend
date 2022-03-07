const asyncHandler=require('express-async-handler')
const Category=require('../model/categoryModel');
const { search } = require('../routes/categoryRoutes');

//Get Category
const getCategories=asyncHandler(async(req,res)=>{
    try{
        
        const searchCategory=req.query.searchCategory
        const sortField=req.query.sortField;
        const limit=req.query.limit;
        const order=req.query.order;    //1:Ascending   -1:Descending
        const offset=req.query.offset;
        const category=await Category.find({},{categoryName:1,categoryDescription:1})
                                     //.populate({path:'vendorDetails'})
                                     .sort([[sortField,order]])
                                     .limit(limit)
                                     .skip(offset)
                                     
        const matchCategory=await Category.aggregate( [
            { $match: { $or: [ { categoryName: searchCategory }, { startingRange: { $gt: 150} } ] } }
            
          ] );
        
       
        // -------------------------------Aggregate Queries---------------------------

        //List all the distinct categories
        const distinctMainCategories=await Category.distinct("categoryName")
        console.log(`Category:Total Distinct Items are `+distinctMainCategories)




        res.status(200).json(category)
    }catch(err){
        console.log(err)
    }
})
//Create Category 
const setCategories=asyncHandler(async(req,res)=>{
        const category = await Category.create({
        categoryName:req.body.categoryName,
        categoryDescription:req.body.categoryDescription,
        vendorDetails:req.body.vendorDetails
    }).populate({path:'vendorDetails'})
    //category.populate('vendorDetails')
    
    res.status(200).json(category)
})

//Update Category By Id
const updateCategories=asyncHandler(async(req,res)=>{

    const category=await Category.findById(req.params.id)

    if(!category){
        res.send(400)
        throw new Error('Category not found')
    }
    const updatedCategory=await Category.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    res.status(200).json(updatedCategory)
})

//Delete Category by Id
const deleteCategories=asyncHandler(async(req,res)=>{

    const category=await Category.findById(req.params.id)

    if(!category){
        res.send(400)
        throw new Error('Category not found')
    }
    await category.remove()
    res.status(200).json({id:req.params.id})
})

module.exports={
  getCategories,setCategories,updateCategories,deleteCategories
}