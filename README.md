# inventoryapp
simple inventory app

Nikhil lærer seg Svelte..


## Todo

- PUT for å oppdatere
- Ikke skriv norsk og engelsk i README
- Host et eller annet sted
- Bak SSO/Kun tilgjengelig fra labben?



## Install

Prereqs: mongodb, node 16+, 

0. Install and start mongodb (https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

1. npm install in server/ folder
2. npm run dev in server/ folder

API should now be running. You can verify with Postman. Look further down in API section for more details.

3. npm install in inventory/ folder
4. npm run dev in /inventory folder

5. Visit http://localhost:3000/



## API
Same endpoint for all calls: /api/inventory
Use methods GET, POST, DELETE

DELETE takes an ID.

Example data for POST:

{
    "name": "ESP8266 Wemos D1 dev board",
    "description": "Wemos D1 dev board. Micro USB, 3.3v and 5v"
    "inStock": true 
}
