import mongoose, { mongo } from "mongoose";
const voyageurSchema= new mongoose.Schema({
  nom:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  telephone:{
    type:String
  },
  reservations:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Reservation"
  }]
});

const VoyageurModel=mongoose.model("Voyageur",voyageurSchema);
export default VoyageurModel;

