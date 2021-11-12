import axios from "axios"

const apiKey= 'QUeDTSdn2Gt9v7MVxckvYjXgKgl16ftU'
//`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

giphyApi.get('/random')
    .then(({data})=>{
        const { 
            data: {
                images:{
                    original:{
                        url
                    }
                }
            }} = data;

        const img=document.createElement('img')
        img.src=url
        document.body.append(img);
    })