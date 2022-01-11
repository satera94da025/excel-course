export function capitalize(string) {
    return 'string' === typeof string ?
         string.charAt(0).toUpperCase() + string.slice(1) :
        ''
}