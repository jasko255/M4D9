const isProudction = process.env.NODE_ENV==="production"



const {REACT_APP_BE_URL,REACT_APP_BE_DEV} = process.env;

export const BACKEND_URL = isProudction  ? REACT_APP_BE_URL:REACT_APP_BE_DEV