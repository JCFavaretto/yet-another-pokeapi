import React, { useEffect } from "react";
// hooks de react-redux
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerPokemonsAction,
  siguientePagPokemons,
  anteriorPagPokemons,
} from "redux/pokeDucks";
import "components/Pokemones.css";
import { NavLink } from "react-router-dom";

const Pokemones = () => {
  //declaramos el dispatch para llamar a las accion
  const dispatch = useDispatch(obtenerPokemonsAction);

  const pokemones = useSelector((store) => store.pokemones);

  useEffect(() => {
    dispatch(obtenerPokemonsAction());
  }, []); //eslint-disable-line

  return (
    <div className=" contenedor section home">
      <h1 className="titulo">Pokemones</h1>
      <h4 className="index">
        {pokemones.offset} - {pokemones.offset + 20}{" "}
      </h4>
      <ul className="lista-pokes-home">
        {pokemones.array.map((item) => (
          <li key={item.name}>
            <NavLink to={`/pokemon/${item.name}`}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
      {pokemones.offset > 0 && (
        <button
          className="btn"
          onClick={() => dispatch(anteriorPagPokemons(20))}
        >
          Anterior
        </button>
      )}

      <button
        className="btn"
        onClick={() => dispatch(siguientePagPokemons(20))}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pokemones;
