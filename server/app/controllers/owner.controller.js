const db= require("../models");
const Owner= db.owners;

exports.create=(req,res)=>{

     if(!req.body.hostelname) {
         res.status(400).send({message:"content can not be empty"});
         return;
     }

     const owner = new Owner({
         hostelname: req.body.hostelname,
         ownername:req.body.ownername,
         address:req.body.address,
         email:req.body.email,
         phone:req.body.phone,
         noofrooms:req.body.noofrooms,
         vacantrooms:req.body.vacantrooms,
         roomtype:req.body.roomtype,
         rent:req.body.rent
        //  published:req.body.published ? req.body.published : false
     });

     owner
     .save(owner)
     .then(data => {
         res.send(data);
     })
     .catch(err =>{
         res.status(500).send({
             message:
             err.message || "Some error occured."
         });
     })

};

exports.findAll=(req,res) => {
    const hostelname = req.query.hostelname;
    var condition = hostelname ? { hostelname: { $regex: new RegExp(hostelname), $options : "i"} } :{};
    Owner.find(condition)
    .then(data =>{
        res.send(data);

    })
    .catch(err=> {
         res.status(500).send({
             message:
             err.message || "Some error occuring while retriving data"
         });
    });


};
exports.findOne=( req, res) =>{
    const  id= req.params.id;

    Owner.findById(id)
    .then(data=> {
        if(!data)
        res.status(404).send({message: "Not found data with id" + id});
        else res.send(data);
    })
    .catch(err =>{
        res
        .status(500)
        .send({message: "Error retriving datawith id" + id});
    });
};

exports.update=( req, res) =>{
    if(!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty"
        });
    }
    const  id= req.params.id;

    Owner.findByIdAndUpdate(id,req.body,{ useFindAndModify: false})
    .then(data=> {
        if(!data)
        res.status(404).send({message: `Cannot update data with id=${id}.Maybe data was not found`});
        else res.send({message: "Data was updated successfully."});
    })
    .catch(err =>{
        res
        .status(500)
        .send({message: "Error updating data with id=" + id});
    });
};

//dele a data with id

exports.delete=( req, res) =>{
   
    const  id= req.params.id;

    Owner.findByIdAndRemove(id,{ useFindAndModify: false})
    .then(data=> {
        if(!data)
        res.status(404).send({message: `Cannot delete data with id=${id}.Maybe data was not found`});
        else res.send({message: "Data was deleted successfully."});
    })
    .catch(err =>{
        res
        .status(500)
        .send({message: "Error deleting data with id=" + id});
    });
};

//dele all

exports.deleteAll=( req, res) =>{
   
   

    Owner.deleteMany({ })
    .then(data=> {
         res.send({message:` ${data.deletedCount} Data was deleted successfully.`});
    })
    .catch(err =>{
        res
        .status(500)
        .send({message: 
            err.message|| "Error occured while deleting all data"});
    });
};


//find all hostels 

// exports.findAllPublished=( req, res) =>{
   
//     Owner.find({ published: true})
//     .then(data=> {
//          res.send(data);
//     })
//     .catch(err =>{
//         res
//         .status(500)
//         .send({message: 
//             err.message|| "Error occured while retriving all data"});
//     });
// };