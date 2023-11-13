import prisma from "../database/prisma_database";
import { Request, Response } from 'express';
import { parseDates, parseQueryParams } from "../helpers/filter_helper";




const createEvent = async (req: Request, res: Response) => {

  try {
    const { name, description, date, category_id, place_id } = req.body;
    const event = await prisma.event.create({
      data: {
        name, description, date: new Date(date).toISOString(), category_id, place_id
      }
    }
    )
    res.status(201).json({ "status": "Event Created Successfully", "data": event });

  } catch (error) {
    console.log(error);
     res.status(500).json({ "status": "An Error Ocurred On Server", error });
  }
}

const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany()
    res.status(200).json({ "status": "Events Listed Successfully", "data": events })

  } catch (error) {
    res.status(500).json({ "status": "An Error Ocurred On Server", error });
  }
}


const getEventsFiltered = async (req: Request, res: Response) => {
  try {
    const { categories, dates, places } = req.query;

    if(typeof categories === "undefined" && typeof places === "undefined" && typeof dates === "undefined") {
      console.log("here");
      return res.status(400).json({ "status": "Filters Error"})

    }
    
    const categoriesParsed = parseQueryParams(categories); // Transfer to a set
    const datesParsed = parseDates(parseQueryParams(dates));
    const placesParsed = parseQueryParams(places);

    const events = await prisma.event.findMany({
      where : {
        category_id: {
          in: categoriesParsed
        },
        place_id: {
          in: placesParsed
        },
        date : {
          gte: datesParsed[0],
          lte: datesParsed[1],

        }
      }
    })
    res.status(200).json({ "status": "Events Listed Successfully", "data": events })

  } catch (error) {
     res.status(500).json({ "status": "An Error Ocurred On Server", error });
  }
}


const getEventById = async (req: Request, res: Response) => {
  try {
    const { eventId } = req.params;
    const event = await prisma.event.findFirst({
      where: {
        id: {
          equals: eventId
        }
      }
    })
    res.status(200).json({ "status": "Events Listed Successfully", "data": event })

  } catch (error) {
     res.status(500).json({ "status": "An Error Ocurred On Server", error });
  }
}


const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { eventId } = req.params;
    await prisma.event.delete({
      where: {
        id: eventId
      }
    })

    res.status(200).json({ "status": "Events Deleted Successfully" })
  } catch (error) {
     res.status(500).json({ "status": "An Error Ocurred On Server", error });
  }
}

const updateEvent = async (req: Request, res: Response) => {


  try {
    const { id, name, description, date, category_id, place_id } = req.body;
    await prisma.event.update({
      where: {
        id: id
      },
      data: {
        name, description, date, category_id, place_id
      }
    })

  } catch (error) {
     res.status(500).json({ "status": "An Error Ocurred On Server", error });
  }
}


export { getEvents, getEventById, createEvent, updateEvent, deleteEvent, getEventsFiltered }


