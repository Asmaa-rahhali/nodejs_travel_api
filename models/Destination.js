import mongoose from "mongoose";
const destinationSchema=new mongoose.Schema({
  nom:{
    type:String,
    required:true
  },
  pays:{
    type:String,
    required:true
  },
  prixParNuit:{
    type:Number,
    required:true
  },
  description:{
    type:String
  }
})

const DestinationModel=mongoose.model("Destination",destinationSchema);
export default DestinationModel;