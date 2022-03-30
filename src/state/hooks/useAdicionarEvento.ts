import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { obterId } from "../../util";
import { listaDeEventosState } from "../atom";

const useAdicionarEvento = () => {

    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

    const hoje = new Date();

    return (evento: IEvento) => {

        if (evento.inicio < hoje) {
            throw new Error("Eventos não podem ser cadastrados com a data inferior a data atual.");
        }
        evento.id = obterId();
        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }

}

export default useAdicionarEvento;