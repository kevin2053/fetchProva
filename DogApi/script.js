

const dom = document.getElementById('img')

const getImages = async ()=> {
    const response = await fetch('https://dog.ceo/api/breed/hound/images')
    const jsonResponse = await response.json()
    
    dom.src = jsonResponse.message[7]
    
}

getImages()