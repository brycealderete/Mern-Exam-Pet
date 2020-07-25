const mongoose=require('mongoose');
const Pet=mongoose.model('Pet');

module.exports={
    index: (req,res)=>{
        Pet.find().sort('type')
        .then((pets)=>{
            console.log ("we are in pets.find");
            console.log(pets);
            res.json(pets)
        })
        .catch(err=>{
            console.log(err);
            res.status(400).json(err)
        });
    },
    getOne:(req,res)=>{
        Pet.findOne({_id: req.params.id})
        .then(pet=>res.json(pet))
        .catch(err=>res.status(400).json(err));
    },
    create:(req,res)=>{
        Pet.create(req.body)
        .then(newPet=>res.json(newPet))
        .catch(creationErrors=>res.status(400).json(creationErrors));
    },
    update: (req,res)=>{
        Pet.findOneAndUpdate({_id:req.params.id},req.body, {runValidators:true,new:true})
        .then(updatedPet=>res.json({pet:updatedPet}))
        .catch(err=>res.json({message:"something went wrong", error:err}));
    },
    delete: (req,res)=>{
        Pet.deleteOne({_id: req.params.id})
        .then(result=>res.json({result:result}))
        .catch(err=>res.json({message:"Something went wrong", error:err}));
    }
}