import express from "express";
const router=express.Router();
import * as ReservationController from "../controllers/reservation_controller.js";

router.route("/").get(ReservationController.getAllReservations)
                 .post(ReservationController.createReservation);
router.route("/:id").get(ReservationController.getReservationById)
                    .put(ReservationController.updateReservation)
                    .delete(ReservationController.deleteReservation);
export default router;