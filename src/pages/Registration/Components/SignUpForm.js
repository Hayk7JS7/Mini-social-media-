import { useForm } from '../Hooks/useForm'
import { Box, Button, Grid, Link } from "@mui/material" 
import { useClientResponse } from "../Hooks/useClientResponse"
import { signUpForm } from '../utils/RegistrInfo'
import PersonalInfoFields from './PersonalInfoFields'
import RegistrationFields from './RegistrationFields'
import FormCheckbox from "../Models/FormCheckbox"
import ResponseBar from "../../../models/clientResponseBar/responseBar"
import UserValidationHint from "./UserValidationHint"

function SignUpForm() {
  const { value, error, handleSubmit, handleValue, handleToggleServices } = useForm(signUpForm)  
  const { openResponse, clientResponseMessage, handleCloseResponse } = useClientResponse()

  return (
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <PersonalInfoFields error={error} value={value} handleValue={handleValue} />
            <RegistrationFields error={error} value={value} handleValue={handleValue} />
            <UserValidationHint password={value.password} />
            <Grid item xs={12}>
              <FormCheckbox value={value.acceptTermsOfService} setValue={handleToggleServices} />
            </Grid>
          </Grid>
          
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/Login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          <ResponseBar snackbarStatus={false} message={clientResponseMessage} setCloseResponse={handleCloseResponse} openResponse={openResponse} />
        </Box>
    )
}

export default SignUpForm
