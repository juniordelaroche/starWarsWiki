import { useEffect, useState } from "react"
import { getPersonaje } from "../helper/getPersonaje";

export const useFetchPersonaje = ( busqueda ) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getPersonaje(busqueda)
    .then(p => {
      setState({
        data: p,
        loading: false
      });
    })
  },[busqueda])

  return state;
}
