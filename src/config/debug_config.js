const __DEV__ = process.env.NODE_ENV === 'development'

export default {
  reduxLogging: __DEV__
}
