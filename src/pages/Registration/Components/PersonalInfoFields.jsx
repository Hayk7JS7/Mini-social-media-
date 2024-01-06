import { Grid, TextField } from "@mui/material"
import { registrPersonalInfo } from "../utils/RegistrInfo"

function PersonalInfoFields({ error, value, handleValue }) {
  return (
    <>
      {registrPersonalInfo.map(textField => (
        <Grid item xs={12} sm={6} key={textField.name}>
          <TextField
            required
            error={error}
            fullWidth
            id={textField.id}
            label={textField.label}
            autoComplete={textField.autoComplete}
            name={textField.name}
            value={value[textField.name]}
            onChange={handleValue}
          />
        </Grid>
      ))}
    </>
  )
}

export default PersonalInfoFields
