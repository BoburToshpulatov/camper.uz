import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from './top100Films';

const MuiComponent = () => {
  return (
    <div>
      <Autocomplete
      disablePortal
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
    </div>
  )
}

export default MuiComponent