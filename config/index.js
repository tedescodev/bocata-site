const LOCAL_CONNECTION_STRING = 'bocata.tedesco.es/v1/api'

const PRODUCTION_CONNECTION_STRING = 'https://api.supergympro.uy/v1/api'

let BASE_CONNECTION_STRING = process.env.NODE_ENV !== 'production' ? LOCAL_CONNECTION_STRING : PRODUCTION_CONNECTION_STRING;

export default BASE_CONNECTION_STRING;