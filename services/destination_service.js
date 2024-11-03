import DestinationModel from "../models/Destination.js";

export async function getAllDestinations(){
  return await DestinationModel.find();
}

export async function getDestinationById(id){
  return await DestinationModel.findById(id);
}

export async function createDestination(destination){
  return await DestinationModel.create(destination);
}

export async function updateDestination(id, destination){
  return await DestinationModel.findByIdAndUpdate(id, destination, {new: true});
}

export async function deleteDestination(id){
  await ReservationModel.deleteMany({ destinationId: id });
  return await DestinationModel.findByIdAndDelete(id);
}
