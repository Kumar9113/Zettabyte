const mongoose=require("mongoose");

const ClassRooms = new mongoose.Schema(
  {
    sid:{
        type:String,
        required:true
    },
    cid:{
        type:String,
        required:true
    },
    cname:{
        type:String,
        required:true
    },
    value:{
        type:String,
        required:true
    },
    topics:[
        {
            tid:{
                type:String,
                required:true
            },
            tname:{
                type:String,
                required:true
            }
        }
    ]
}

   
  
);
const classRooms=mongoose.model("classRooms",ClassRooms);
module.exports=classRooms;
