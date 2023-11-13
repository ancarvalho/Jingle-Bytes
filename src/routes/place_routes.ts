import { Router } from "express";
import { createPlace, deletePlace, getPlaceById, getPlaces, updatePlace } from "../controllers/places_controller"
const placeRouter = Router();


placeRouter.post("/", createPlace);
placeRouter.get("/", getPlaces);
placeRouter.get("/:placeId", getPlaceById);
placeRouter.delete("/:placeId", deletePlace);
placeRouter.patch("/", updatePlace);

export { placeRouter };
