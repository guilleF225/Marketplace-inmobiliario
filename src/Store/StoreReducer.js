import {
  ListadoPropiedades,
  ListadoLocalidades,
  ListadoTipoDePropiedad,
  ListadoCantidadDormitorios,
  ListadoBaños,
  ListadoTipoDePublicacion,
  ListadoMoneda,
  ListadoDeEstado,
  ListadoComodidades,
  ListadoOpciones,
  ListadoAtributos,
  ListadotypesDeAtributos,
  nombreDeGuardadoDeLosAtributos,
} from "./Data.js";

const initialStore = () => {
  const store = {
    propiedades: ListadoPropiedades,
    localidades: ListadoLocalidades,
    tipoDePropiedad: ListadoTipoDePropiedad,
    dormitorios: ListadoCantidadDormitorios,
    baños: ListadoBaños,
    opcion: ListadoOpciones,
    tipoDePublicacion: ListadoTipoDePublicacion,
    moneda: ListadoMoneda,
    estado: ListadoDeEstado,
    comodidad: ListadoComodidades,
    atributos: ListadoAtributos,
    nombreAtributosGuardado: nombreDeGuardadoDeLosAtributos,
    filters: null
  };
  return store;
};

const types = {
  setProperty: "setProperty",
  setFilters: "setFilters",
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.setProperty:
      return {
        ...state,
        propiedades: state.propiedades.push(...action.payload),
      };
    case types.setFilters:
      return {
        ...state,
        filters: {  ...action.payload },
      };

    default:
      return state;
  }
};

export { types };
export { initialStore };
export default storeReducer;