import ReservationModel from "../models/Reservation.js";
import DestinationModel from "../models/Destination.js";
import VoyageurModel from "../models/Voyageur.js"; 

export async function getAllReservations(){
  return await ReservationModel.find();
}

export async function getReservationById(id){
  return await ReservationModel.findById(id);
}

export async function createReservation(reservation){
  // Calcul du prix total
  const destination=await DestinationModel.findById(reservation.destinationId);
  if (destination && reservation.dateDebut && reservation.dateFin) {
    const days = (new Date(reservation.dateFin) - new Date(reservation.dateDebut)) / (1000 * 60 * 60 * 24);
    reservation.prixTotal = days * destination.prixParNuit;
  }
// Créer la réservation
const newReservation = await ReservationModel.create(reservation);

// Ajouter l'ID de la réservation au champ `reservations` du voyageur
await VoyageurModel.findByIdAndUpdate(reservation.voyageurId, {
  $push: { reservations: newReservation._id }
});
return newReservation;
}

export async function updateReservation(id, reservationData){
 // Récupérer la réservation existante
 const existingReservation = await ReservationModel.findById(id);

 // Récupérer la destination pour obtenir le prix par nuit
 const destination = await DestinationModel.findById(existingReservation.destinationId);
 
 // Vérifier que la destination existe et que les dates sont présentes
 if (destination && reservationData.dateDebut && reservationData.dateFin) {
   const days = (new Date(reservationData.dateFin) - new Date(reservationData.dateDebut)) / (1000 * 60 * 60 * 24);
   reservationData.prixTotal = days * destination.prixParNuit;
 }

 // Mettre à jour la réservation avec le nouveau prixTotal
 const updatedReservation = await ReservationModel.findByIdAndUpdate(id, reservationData, { new: true });
 
 return updatedReservation;
} 

export async function deleteReservation(id){
  return await ReservationModel.findByIdAndDelete(id);
}
