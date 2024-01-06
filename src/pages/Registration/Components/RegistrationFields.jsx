import { Grid, TextField } from "@mui/material"
import { registrInfo } from "../utils/RegistrInfo"

function RegistrationFields({ error, value, handleValue }) {
  return (
    <>
      {registrInfo.map(textField => (
        <Grid item xs={12} key={textField.name}>
          <TextField
            error={error}
            required
            fullWidth
            name={textField.name}
            label={textField.label}
            type={textField.type}
            id={textField.name}
            value={value[textField.name]}
            onChange={handleValue}
          />
        </Grid>
      ))}
    </>
  )
}

export default RegistrationFields
