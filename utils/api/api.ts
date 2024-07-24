import axios from "axios";
import { Result} from "@/utils/type/results";
import {PokemonDetailType} from "@/utils/type/pokemon";

const baseUrl = "https://pokeapi.co/api/v2/pokemon"

export const getPokemon = async () => {
    try {
        const response = await axios.get(baseUrl);

        return response.data as Result;
    } catch (error: any) {
        throw Error(error.response.data.message);
    }
};

export const getPokemonDetails = async (name: string | string[] | undefined) => {
    const urlWithParams = baseUrl + `/${name}`
    try {
        const response = await axios.get(urlWithParams);

        return response.data as PokemonDetailType;
    } catch (error: any) {
        throw Error(error.response.data.message);
    }
};
