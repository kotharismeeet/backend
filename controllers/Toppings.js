const Topping = require('../models/toppingModels')

const getToppings   = async(req,res) => {
    try {
        // let pages = req.query.pages >= 1 ? req.query.pages : 1
        let pages = parseInt(req.query.pages)
        pages = pages - 1
        const perPage = parseInt(req.query.records)
        const filterKey = req.query.key
        const order = parseInt(req.query.ord)
        const pass = req.query.pass

        // const tops = await Topping.find().limit(perPage).skip(perPage*pages)
        // const tops = await Topping.find({[filterKey]:{$regex:pass}}).limit(perPage).skip(perPage*pages).sort([[filterKey,order]])
        const tops = await Topping.aggregate(
            [   
                // {$match: {[filterKey]: pass}},
                {$match: {[filterKey]:{$regex:pass}}
                // {$match: {[filterKey]:{$regex:new RegExp(eval("/"+String(pass)+"/i/"))}}

                    // {$regexMatch: {input: filterKey, regex: pass}}},
                    // {$group: {field: filterKey}},
                    // {$let: {vars:"$$filterKey"}},
                },
                {$sort: {[filterKey]: order}},
                {$skip: perPage*pages},
                {$limit: perPage},
                // {$let:{count: { $sum: 1 }}},
                // { $group: { _id: null, count: { $sum: 1 } } },
                // {$group: {_id:null,}},
                // {$count: "total records"},
            ])
        
        res.json([tops,{"total records":tops.length}])
        
    } catch (error) {   
        console.log(error);
        res.sendStatus(500);
    }
}
 
const createToppings = async(req,res) => {
    try {
        const tops = await Topping.create(req.body
            // groupName : req.body.groupName,
            // name : req.body.name,
            // price : req.body.price,
            // stock : req.body.stock
            )
        res.json(tops)   
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

const deleteToppings = async(req,res) => {
    try {
        // await Topping.findByIdAndDelete(req.params.id)
        await Topping.findOneAndDelete(req.query.groupName)
        res.sendStatus(200)  
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

const updateToppings = async(req, res) => {
    try {
        // const tops = 
        const query = {groupName: req.query.key}
        await Topping.findOneAndUpdate(query, req.body) 
        // await Topping.findByIdAndUpdate(req.params.id, req.body)  
        res.sendStatus(200)  
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

module.exports = {
    getToppings,
    createToppings,
    deleteToppings,
    updateToppings
}