import { reactLocalStorage } from 'reactjs-localstorage'

export const saveToken = (token: string) => {
  reactLocalStorage.set('@preyellc_token', token)
}

export const saveEventRef = (ref: any) => {
  reactLocalStorage.set('@preyellc_ref', ref)
}

export const getEventRef = () => {
  const ref = reactLocalStorage.get('@preyellc_ref')
  return ref ? ref : null
}

export const removeEventRef = () => {
  reactLocalStorage.remove('@preyellc_ref')
}

export const saveUserData = (data: any) => {
  reactLocalStorage.set('@preyellc_user', JSON.stringify(data))
}

export const saveAdminData = (data: any) => {
  reactLocalStorage.set('@preyellc_admin', JSON.stringify(data))
}

export const getToken = () => {
  const token = reactLocalStorage.get('@preyellc_token')
  return token ? token : null
}

export const getUserData = () => {
  const storedUser: any = reactLocalStorage.get('@preyellc_user')
  const jsonStored = storedUser ? JSON.parse(storedUser) : null
  return jsonStored
}

export const logUserOut = () => {
  reactLocalStorage.remove('@preyellc_user')
  reactLocalStorage.remove('@preyellc_admin')
  reactLocalStorage.remove('@preyellc_token')
  reactLocalStorage.remove('@preyellc_ref')
}
