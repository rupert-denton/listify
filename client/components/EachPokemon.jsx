import React, {useEffect} from "react";
import { request } from "express";

`https://pokeapi.co/api/v2/pokemon/${name}`

function useFetch(url) {
  useEffect(() => {
    request.get(url).then((res) => {
      
    })
  })
}

export default useFetch