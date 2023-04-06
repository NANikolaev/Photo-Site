import { url } from "../constants"

export const request=(endpoint,method,content)=>{
  
   if(content && method){
    return fetch(url+endpoint,{
      method:method,
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify(content)
    })
    .then(res => res.json())
   }
   return fetch(url+endpoint)
          .then(res=>res.json())

}