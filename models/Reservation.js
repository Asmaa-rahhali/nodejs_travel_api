import mongoose from "mongoose";
const reservationSchema= new mongoose.Schema({
  destinationId:{
    type:mongoose.Types.ObjectId,
    ref:"Destination"
  },
  voyageurId:{
    type:mongoose.Types.ObjectId,
    ref:"Voyageur"
  },
  dateDebut:{
    type:Date,
    required:true
  },
  dateFin:{
    type:Date,
    required:true
  },
  nombrePersonnes:{
    type:Number,
    required:true
  },
  prixTotal:{
    type:Number,
    default:0
    }
});
/*// Calcul automatique du prixTotal avant d'enregistrer une réservation
reservationSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("dateDebut") || this.isModified("dateFin")) {
    const destination = await mongoose.model("Destination").findById(this.destinationId);
    if (destination && this.dateDebut && this.dateFin) {
      const days = (this.dateFin - this.dateDebut) / (1000 * 60 * 60 * 24);
      this.prixTotal = days * destination.prixParNuit;
    }
  }
  next();
});*/

const ReservationModel=mongoose.model("Reservation",reservationSchema);
export default ReservationModel;