import * as DestinationService from "../services/destination_service.js";

export async function getAllDestinations(req,res){
  const destinations=await DestinationService.getAllDestinations();
  res.json(destinations);
}

export async function getDestinationById(req,res){
  const destination=await DestinationService.getDestinationById(req.params.id);
  res.json(destination);
}

export async function createDestination(req,res){
  const destination=await DestinationService.createDestination(req.body);
  res.json(destination);
}

export async function updateDestination(req,res){
  const destination=await DestinationService.updateDestination(req.params.id,req.body);
  res.json(destination);
}

export async function deleteDestination(req,res){
  const destination=await DestinationService.deleteDestination(req.params.id);
  if(destination){
    res.json({message:"Destination deleted successfully"});
  }else{
    res.status(404).json({ message: "Destination not found" });
  }

}