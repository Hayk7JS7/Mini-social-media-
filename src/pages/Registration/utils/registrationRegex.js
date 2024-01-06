export const usernameRegex = /^[a-zA-Z0-9_.]{3,30}$/
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/
export const nameLastnameRegex = /^[a-zA-Z][a-zA-Z-' ]*$/
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export const passwordDetailedRegex = {
    lowerUpper: /[a-z].*[A-Z]|[A-Z].*[a-z]/,
    digit: /\d/,
    specialChar: /[@$!%*?&_]/,
    length: /^.{8,}$/
}
