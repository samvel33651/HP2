import MapiService from './services/MapiService';

const mapi = new MapiService();
mapi.getAllSeries().then((data) => {
  console.log(data);
});
