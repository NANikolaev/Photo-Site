import { url } from "../constants";
import { request } from "../utils/request";

export const register = (e) => {
  e.preventDefault()
  let data = new FormData(e.currentTarget);
  let user = {
    username: data.get('username'),
    password: data.get('password'),
  }
  if (data.get('password') !== data.get('re-pass')) {
    throw new Error('Password Missmatch')
  }

  return request('/users/register','POST', user)
    .then(data => {
      if (data.errors) { throw new Error(data.errors) }
      return data
    })

};

export const login = (e) => {
  e.preventDefault()
  let data = new FormData(e.currentTarget)
  let user = {
      username: data.get('username'),
      password: data.get('password'),
  }
  return request('/users/login','POST',  user)
    .then(data => {
      if (data.errors) { throw new Error(data.errors) }
      return data
    })
};

