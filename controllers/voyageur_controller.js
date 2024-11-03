import * as VoyageurService from "../services/voyageur_service.js";

export async function getAllVoyageurs(req,res){
  const voyageurs=await VoyageurService.getAllVoyageurs();
  res.json(voyageurs);
}
export async function addVoyageur(req,res){
  const voyageur=await VoyageurService.addUser(req.body);
  res.json(voyageur);
}

export async function getVoyageurById(req,res){
  const voyageur=await VoyageurService.getVoyageurById(req.params.id);
  if (voyageur) {
    res.json(voyageur);
  } else {
    res.status(404).json({ message: "Voyageur not found" });
  }}

export async function updateVoyageur(req,res){
  const voyageur=await VoyageurService.updateVoyageur(req.params.id, req.body);
  if(voyageur){
    res.json(voyageur);
  }else{
    res.status(404).json({ message: "Voyageur not found" });
  }
}

export async function deleteVoyageur(req,res){
  const voyageur= await VoyageurService.deleteVoyageur(req.params.id);
  if(voyageur){
    res.json({message:"Voyageur deleted successfully"});
  }else{
    res.status(404).json({ message: "Voyageur not found" });
  }
}
