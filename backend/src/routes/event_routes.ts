import { Router } from "express";
import { createEvent, deleteEvent, getEventById, getEvents, getEventsFiltered, getNextEvents, updateEvent } from "../controllers/event_controller"
const eventRouter = Router();


eventRouter.post("/", createEvent);
eventRouter.get("/all", getEvents);
eventRouter.get("/unique/:event_id", getEventById);
eventRouter.get("/find", getEventsFiltered);
eventRouter.get("/next", getNextEvents);
eventRouter.delete("/:event_id", deleteEvent);
eventRouter.patch("/:event_id", updateEvent);
export { eventRouter };
