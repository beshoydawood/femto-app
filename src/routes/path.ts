
const path = ( root: string, sublink: string ) => {
    return `${root}${sublink}`;
}

const ROOT_API: string =  'https://femto-app.vercel.app/api/';

export const API_BASE: {
    auth: { login: string, signup: string, validate: string }
} = {
    auth: {
        login: path( ROOT_API, 'login' ),
        signup: path( ROOT_API, 'signup' ),
        validate: path( ROOT_API, 'validate' )
    }
}

