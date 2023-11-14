# Ciclo 02 - Atlântico Avanti FullStack - Jingle Bytes


### Created With
- TypeScript
- Express
- Prisma

### How To Start
*needed to create a .env with database url*
```
  npm install
  npx migrate dev
  npm run dev
```


### Routes
*Category*
- /category - GET - get all categories
- /category/:categoryId - GET - get unique category with categoryId
- /category - POST - create an category (name*)
- /category - PATCH - update an category (name)
- /category/:categoryId - DELETE - delete an category by categoryId

*place*
- /place - GET - get all places
- /place/:placeId - GET - get unique place with placeId
- /place - POST - create an place (name*, address*, neighborhood*, city*, state*, country*)
- /place - PATCH - update an place (name, address, neighborhood, city, state, country)
- /place/:placeId - DELETE - delete an place by placeId

*Event*
- /event - GET - get all events
- /event/find?categories=List<Uuid>&dates=List<Date>&places=List<Uuid> - GET - filter events by categories (string list separated by comma), dates(list of 2 datas separated by comma MM/DD/YYYY) and places (string list separated by comma)
- /event/unique/:eventId - GET - get unique event with eventId
- /event - POST - create an Event (name*, description, date*, categoryId*, placeId*)
- /event - PATCH - update an Event (name, description, date, categoryId, placeId)
- /event/:eventId - DELETE - delete an Event by eventId



(*) all items marked with (*) are required