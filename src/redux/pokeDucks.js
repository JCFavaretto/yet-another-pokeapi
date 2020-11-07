import Axios from "axios";

// constantes
const dataInicial = {
  array: [],
  offset: 0,
};

// types
const GET_POKE_SUCCES = "GET_POKE_SUCCES";
const NEXT_PAGE_SUCCES = "NEXT_PAGE";
const BACK_PAGE_SUCCES = "BACK_PAGE_SUCCES";
const GET_SINGLE_POKE_SUCCES = "GET_SINGLE_POKE_SUCCES";

// reducer
export default function pokeReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_POKE_SUCCES:
      return {
        ...state,
        array: action.payload.array,
        offset: action.payload.offset,
      };
    case NEXT_PAGE_SUCCES:
      return {
        ...state,
        array: action.payload.array,
        offset: action.payload.offset,
      };
    case BACK_PAGE_SUCCES:
      return {
        ...state,
        array: action.payload.array,
        offset: action.payload.offset,
      };
    case GET_SINGLE_POKE_SUCCES:
      return {};
    default:
      return state;
  }
}

// acciones
export const obtenerPokemonsAction = () => async (dispatch) => {
  try {
    const respuesta = await Axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
    );
    dispatch({
      type: GET_POKE_SUCCES,
      payload: {
        array: respuesta.data.results,
        offset: 0,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const siguientePagPokemons = (numero) => async (dispatch, getState) => {
  const offset = getState().pokemones.offset;
  const siguiente = offset + numero;

  try {
    const respuesta = await Axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`
    );
    dispatch({
      type: NEXT_PAGE_SUCCES,
      payload: {
        array: respuesta.data.results,
        offset: siguiente,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const anteriorPagPokemons = (numero) => async (dispatch, getState) => {
  const offset = getState().pokemones.offset;
  const anterior = offset - numero;

  try {
    const respuesta = await Axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${anterior}&limit=20`
    );
    dispatch({
      type: BACK_PAGE_SUCCES,
      payload: {
        array: respuesta.data.results,
        offset: anterior,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const obtenerPokemon = (nombre) => async (dispatch) => {
  try {
    const respuesta = await Axios.get(
      `https://pokeapi.co/api/v2/pokemon/${nombre}`
    );
    dispatch({
      type: GET_SINGLE_POKE_SUCCES,
      payload: respuesta.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};
