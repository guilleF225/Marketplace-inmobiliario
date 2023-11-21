import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CustomSelectCheckmarks from "./CustomSelectCheckmarks";
import CarrouselV5 from "./CarrouselV5";
import Footer from "./Footer";
import Button from "@mui/material/Button";
import "./MainPage.css";
import Autocomp from "./Autocomp";
import { useState } from "react";
import { Link } from "react-router-dom";
import { storeContext } from "../Store/StoreProvider";
import { SdStorage } from "@mui/icons-material";

function MainPage() {
  const [seleccion, setSeleccion] = React.useState("venta");
  const [store, dispatch] = React.useContext(storeContext);

  return (
    <div className="App">
      <div className="SearchBackground">
        <div className="Search">
          <Box>
            <ToggleButtonGroup
              color="primary"
              value={seleccion}
              exclusive
              // onChange={handleChange}
              aria-label="Opciones"
              id="opciones"
            >
              <ToggleButton value="Venta">Venta</ToggleButton>
              <ToggleButton value="Alquiler">Alquiler</ToggleButton>
              <ToggleButton value="Alquiler temporal">
                Alquiler Temporal
              </ToggleButton>
            </ToggleButtonGroup>

            <div className="contenedorBusqueda">
              <CustomSelectCheckmarks />
              <Autocomp />
              <Link to={"/resultados"}>
                <Button type="submit" variant="contained">
                  Buscar
                </Button>
              </Link>
            </div>
          </Box>
        </div>
      </div>
      <div className='carrousel-container'>
        <CarrouselV5 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
