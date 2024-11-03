import express from "express";
const router=express.Router();
import * as DestinationController from "../controllers/destination_controller.js";

router.route("/").get(DestinationController.getAllDestinations)
                 .post(DestinationController.createDestination);
router.route("/:id").get(DestinationController.getDestinationById)
                 .put(DestinationController.updateDestination)
                 .delete(DestinationController.deleteDestination);

export default router;
