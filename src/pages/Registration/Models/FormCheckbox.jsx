import { Checkbox, FormControlLabel } from "@mui/material"

function FormCheckbox({value, setValue}) {
    return (
      <FormControlLabel
        value={value}
        onChange={() => setValue(!value)}
        control={<Checkbox value="allowExtraEmails" color="primary" />}
        label="I want to receive FriendSpace new features via email."
      />
    )
}

export default FormCheckbox