import { useFetch } from "../hooks/useFetch";
import {useCounter} from "../hooks/useCounter"
import {LoadingMessage} from './LoadingMessage'
import {PokemonCard} from './PokemonCard'


export const MultipleCustomHooks = () => {
  const {counter,decrement,increment} = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
      <h1>Informacion Pokémon</h1>
      <hr />
      {isLoading? <LoadingMessage title={"Cargando informacion..."} /> : <PokemonCard id={data.id} name={data.name} />}
      <button type="button" class="btn btn-success" onClick={()=>decrement(undefined,1)}>
        anterior
      </button>
      <button type="button" class="btn btn-success" onClick={()=>increment()}>
        siguiente
      </button>
    </>
  );
};
