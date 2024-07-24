import axios from "axios";
import { Result} from "@/utils/type/results";
import {PokemonDetail} from "@/utils/type/pokemon";

const url = "https://pokeapi.co/api/v2/pokemon"

export const getPokemon = async () => {
    try {
        const response = await axios.get(url);

        return response.data as Result;
    } catch (error: any) {
        throw Error(error.response.data.message);
    }
};

export const getPokemonDetails = async (name: string) => {
    try {
        const response = await axios.get(`url/${name}`);

        return response.data as PokemonDetail;
    } catch (error: any) {
        throw Error(error.response.data.message);
    }
};
