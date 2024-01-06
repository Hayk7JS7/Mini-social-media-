export const registrPersonalInfo = [
    { autoComplete: "given-name", name: "firstName", id: "firstName", label: "First Name" },
    { autoComplete: "family-name", name: "lastName", id: "lastName", label: "Last Name" }
]

export const registrInfo = [
    { name: 'username', label: 'Username', autoComplete: 'username' },
    { name: 'email', label: 'Email Address', autoComplete: 'email', type: 'email' },
    { name: 'password', label: 'Password', autoComplete: 'current-password', type: 'password' }
]

export const signUpForm = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    username: '',
    avatar: '',
    acceptTermsOfService: false
}
