export const getApiUrl = () =>
  //TODO: Modify this method to support environment variables
  'https://kickskart-backend.onrender.com'

export const getAuthToken = () => {
  return localStorage.getItem('token')
}
