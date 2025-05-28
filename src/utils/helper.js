export const getApiUrl = () =>
  //TODO: Modify this method to support environment variables
  'https://api.kickskart.ashutoshtiwari.co.in'

export const getAuthToken = () => {
  return localStorage.getItem('token')
}
