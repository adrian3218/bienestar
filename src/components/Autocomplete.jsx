import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoComplete({ nombre, obligatorio }) {
  const [value, setValue] = React.useState(null);
  const [options, setOptions] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://proyecto-backend-sgbienestar.onrender.com/ficha');
        if (!response.ok) {
          throw new Error('No se pudieron obtener las opciones');
        }
        const data = await response.json();
        setOptions(data);
      } catch (error) {
        console.error('Error al obtener las opciones:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Autocomplete
      className='autocomplete'
      disablePortal
      id="Campo-autocomplete"
      options={options}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      getOptionLabel={(option) => option.label} 
      sx={{ m: 1, width: '25ch' }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={nombre}
          required={obligatorio}
        />
      )}
    />
  );
}

