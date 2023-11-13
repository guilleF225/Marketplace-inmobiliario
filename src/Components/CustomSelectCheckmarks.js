import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import { useContext } from "react";
import { storeContext } from "../Store/StoreProvider";


const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: "30vh",
      width: 250,
    },
  },
};

export default function CustomSelectCheckmarks(props) {
  const [optionName, setOptionName] = React.useState([]);
  const [store, dispatch] = useContext(storeContext);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setOptionName(
      typeof value === "string" ? value.split(",") : value
    );

    props.options(value);
  };

  return (
    <div>
      <FormControl sx={{ width: "20vw" }}>
        <InputLabel id="checkmarks">Tipo de Propiedad</InputLabel>
        <Select
          labelId="checkmarks"
          id="checkmarks"
          multiple
          value={optionName}
          onChange={handleChange}
          input={<OutlinedInput label="Tipo de Propiedad" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {store.tipoPropiedad.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={optionName.indexOf(option) > -1} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}