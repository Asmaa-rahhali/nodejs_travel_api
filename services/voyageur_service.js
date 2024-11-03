import VoyageurModel from "../models/Voyageur.js";
import ReservationModel from "../models/Reservation.js";

export async function getAllVoyageurs(){
  return await VoyageurModel.find().populate('reservations');
}
export async function addUser(user){
  return await VoyageurModel.create(user);
}

export async function getVoyageurById(id){
  return await VoyageurModel.findById(id).populate('reservations');
}

export async function updateVoyageur(id,voyageur){
  return await VoyageurModel.findByIdAndUpdate(id,voyageur, { new: true});
}

export async function deleteVoyageur(id){
  await ReservationModel.deleteMany({ voyageurId: id });
  return await VoyageurModel.findByIdAndDelete(id);
}
