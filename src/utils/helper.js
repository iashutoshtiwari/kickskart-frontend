export const getApiUrl = () => process.env.NEXT_PUBLIC_API_URL

export const getAuthToken = () => {
  return localStorage.getItem('token')
}
