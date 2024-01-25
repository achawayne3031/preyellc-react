import { reactLocalStorage } from 'reactjs-localstorage'
import * as CryptoJS from 'crypto-js'
import { ENCRYPTION_KEY } from './constantData'

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
  let encryptData = encryptCrytoJs(data, true)

  reactLocalStorage.set('@preyellc_user', encryptData)
}

export const getToken = () => {
  const token = reactLocalStorage.get('@preyellc_token')
  return token ? token : null
}

export const getUserData = () => {
  const storedUser: any = reactLocalStorage.get('@preyellc_user')
  let deciperData = decipherCryptoJs(storedUser, true)

  const jsonStored = storedUser ? deciperData : null
  return jsonStored
}

export const encryptCrytoJs = (data: any, json = false) => {
  if (json) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY).toString()
  }

  return CryptoJS.AES.encrypt(data, ENCRYPTION_KEY).toString()
}

export const decipherCryptoJs = (data: any, json = false) => {
  if (json) {
    var bytes = CryptoJS.AES.decrypt(data, ENCRYPTION_KEY)
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
  }

  var bytes = CryptoJS.AES.decrypt(data, ENCRYPTION_KEY)
  return bytes.toString(CryptoJS.enc.Utf8)
}

export const logUserOut = () => {
  reactLocalStorage.remove('@preyellc_user')
  reactLocalStorage.remove('@preyellc_admin')
  reactLocalStorage.remove('@preyellc_token')
  reactLocalStorage.remove('@preyellc_ref')
}
