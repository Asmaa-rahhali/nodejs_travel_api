import express from "express";

const router=express.Router();
import * as VoyageurController from "../controllers/voyageur_controller.js";

router.route("/").get(VoyageurController.getAllVoyageurs)
                 .post(VoyageurController.addVoyageur);
router.route("/:id").get(VoyageurController.getVoyageurById)
                    .put(VoyageurController.updateVoyageur)
                    .delete(VoyageurController.deleteVoyageur);
                    
export default router;
