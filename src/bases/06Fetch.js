const apiKey= 'QUeDTSdn2Gt9v7MVxckvYjXgKgl16ftU';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
.then(response=>response.json())
.then(({data})=>{
    const {url} = data.images.original;
    const img=document.createElement('img');
    img.src=url;
    document.body.append(img);
})
.catch(error=>console.log(error));