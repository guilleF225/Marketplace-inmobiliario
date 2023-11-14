import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { storeContext } from "../Store/StoreProvider";

export default function ComboBox(props) {
  const [selectedDepartment, setSelectedDepartment] = React.useState(null);
  const [store] = React.useContext(storeContext);
  const [optionsDepartamentos, setOptionsDepartamentos] = React.useState([])
  const handleDepartmentChange = (value) => {
    props.setLocalidades(value)
  }


  React.useEffect(() => {
    setOptionsDepartamentos(store.localidades);
  }, [store.localidades]);
  return (
    <Autocomplete
      style={{ backgroundColor: "white" }}
      disablePortal
      id="combo-box-demo"
      options={optionsDepartamentos}
      sx={{ width: 300 }}
      value={selectedDepartment}
      onChange={(e) => handleDepartmentChange(e.target.textContent)}
      getOptionLabel={(option) => option}
      renderInput={(params) => <TextField {...params} label="Departamento" />}
    />
  );
}
