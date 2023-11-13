import { Router } from "express";
import { createEvent, deleteEvent, getEventById, getEvents, getEventsFiltered, updateEvent } from "../controllers/event_controller"
const eventRouter = Router();


eventRouter.post("/", createEvent);
eventRouter.get("/", getEvents);
eventRouter.get("/unique/:eventId", getEventById);
eventRouter.get("/find", getEventsFiltered);
eventRouter.delete("/", deleteEvent);
eventRouter.patch("/", updateEvent);
export { eventRouter };
