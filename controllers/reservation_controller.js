import * as ReservationService from "../services/reservation_service.js";

export async function getAllReservations(req,res){
  const reservations= await ReservationService.getAllReservations();
  res.json(reservations);
}

export async function getReservationById(req,res){
  const reservation = await ReservationService.getReservationById(req.params.id);
  res.json(reservation);
}

export async function createReservation(req,res){
  const newReservation = await ReservationService.createReservation(req.body);
  res.json(newReservation);
}

export async function updateReservation(req,res){
  const updatedReservation = await ReservationService.updateReservation(req.params.id,req.body);
  res.json(updatedReservation);
}

export async function deleteReservation(req,res){
  await ReservationService.deleteReservation(req.params.id);
  res.json({message:"Reservation deleted successfully"});
}

