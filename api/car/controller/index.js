
     var express = require('express')
     const router = express.Router();
     const dbmodel = require("../models/car");

     // api name car 

     router.get("/", async(req, res) => {

      await  dbmodel.find({},(err,data)=>{
            if(err){
                res.send(err)
            }else{
                res.send(data)
            }
        })
});
router.get("/props", async(req, res) => {
   const data = ["name","model"]
  await res.send(data)
});

router.post("/", async (req, res) => {
    const {name,model} = req.body
      const post1 = new dbmodel({name,model});
   await   post1.save((err,data)=>{
          if(err){
              res.send(err)
          }else{
              res.send(data)
          }
      })
});

router.get("/:id",async(req,res)=>{
   await dbmodel.findById(req.params.id, (err, data) => {
        if (err) {
          res.send("This id not exist !");
        } else {
          res.json(data);
        }
      });
})
router.put("/:id",async (req,res)=>{
    await  dbmodel.findByIdAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true, useFindAndModify: false },
          (err, data) => {
            if (err) {
              res.send(err);
            } else {
              res.json(data);
            }
          }
        );
  })

  router.delete("/:id",async(req,res)=>{
    dbmodel.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.json(data);
        }
      });
})


     module.exports = router
     