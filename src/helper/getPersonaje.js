export const getPersonaje = async (busqueda) => {
  const url = `https://swapi.dev/api/people/?search=${encodeURI(busqueda)}`;
  const resp = await fetch( url );
  const {results} = await resp.json();
  
  
  // Con esto hago un poco mas manejable la info que me da la api
  const personaje = results.map( per => {
    return {
      name   : per.name,
      height : per.height,
      mass   : per.mass,
      birth_year : per.birth_year,
      gender : per.gender
    }
  });

  return personaje;
}