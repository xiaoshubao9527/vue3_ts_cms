let BASE_URL = ''

const env = process.env.NODE_ENV

if (env === 'development') {
  BASE_URL = 'http://152.136.185.210:5000'
} else if (env === 'production') {
  BASE_URL = 'production'
} else if (env === 'test') {
  BASE_URL = 'test'
}

export { BASE_URL }
