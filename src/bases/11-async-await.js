


const getImagen = async() => {
    try {
        const apiKey = '1iTRtO45INGd8mUOvAWVInRVYRxTyuyJ';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await resp.json();
        const {url} =  data.images.original;
    
        const img = document.createElement('img');
        img.src = url ;
    
        document.body.append(img);
    } catch (error) {
        //Manejo del Error
        console.error(error);
    }



}

getImagen();

