import { url } from "../constants";
import { request } from "../utils/request";

const upload = (file) => {
    let data = new FormData()
    data.append('image', file)
    return fetch(url + "/upload/image", {
        method: "POST",
        body: data
    })
};


export const create = async (e, token) => {
    e.preventDefault()
    let data = new FormData(e.currentTarget);
    let imageFile = data.get('image');
    let response = await upload(imageFile);
    let image = await response.json();

   return fetch(url+"/images/catalog", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "authorization": token,
         },
        body: JSON.stringify(image)
     })
     .then(res=>res.json())
     .then(data => {
            if (data.errors) { throw new Error(data.errors) }
            return data
     })
};  

export const getSpecificImage=(imageId)=>{  
          return request(`/image/${imageId}`)
};

export const last10=()=>{
    return request('/images/last10')
}