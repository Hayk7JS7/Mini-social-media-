import { emailRegex, nameLastnameRegex, passwordRegex, usernameRegex } from "../utils/registrationRegex"

export function validateInput(value) {
    return (
        emailRegex.test(value.email)
        && nameLastnameRegex.test(value.firstName)
        && nameLastnameRegex.test(value.lastName)
        && usernameRegex.test(value.username)
        && passwordRegex.test(value.password)
    )
}
