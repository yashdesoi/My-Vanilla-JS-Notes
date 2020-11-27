let place = {
    name: 'Berlin',
    listOfMuseums: ['Pergamonmuseum', 'Neues Museum', 'Alte Nationalgalerie'],
    coordinates: {
        x: 13.4050,
        y: 52.5200
    }
};

console.log(place.name);

console.log(place.listOfMuseums[1]);

console.log(place.coordinates.y);
console.log(place.coordinates['y']);

console.log(place['coordinates']['x']);
console.log(place['coordinates'].x);