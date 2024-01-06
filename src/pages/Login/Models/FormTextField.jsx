import { TextField } from "@mui/material";

function FormTextField({ autoComplete, name, id, label, autoFocus, type, value, onChange }) {
  return (
      <TextField
        margin="normal"
        required
        fullWidth
        autoComplete={autoComplete}
        name={name}
        id={id}
        label={label}
        autoFocus={autoFocus}
        type={type}
        value={value[name]}
        onChange={onChange}
      />
    )
}

export default FormTextField