export const onChange = (setState,e) => {
    if(e.target.files[0] && e.target.files[0].name){   
        setState(e.target.files[0].name) 
    }
};
export const onClick = (file,e) => {
    e.preventDefault()
    if(file.current != null){
     file.current.click()
    }
};