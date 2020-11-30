import { createClient } from 'pexels';
const API_KEY = '563492ad6f91700001000001e18886ffa0cb4ee0bf10479c68847b0f'
// const client = createClient(process.env.API_KEY);
const client = createClient(API_KEY);

// async function fetchPhotosPerPage(query,page){
//     const resp = await fetch(`https://api.pexels.com/v1/search?page=${page}&query=${query}&per_page=20`,{
//         headers: new Headers({
//             "Authorization": API_KEY
//           })
//     })
//     const result = await resp.json()

//     console.log(result);
// }

// fetchPhotosPerPage('lion',3)
// fetchPhotosPerPage('lion',5)

export default {
    async fetchPhotos(query){
        const photos = await client.photos.search({ query, per_page: 20 })
            .then(photos => photos)
            console.log('INit', photos)
            return photos    
    },
    showPhoto(id){
        return client.photos.show({ id: id }).then(photo => photo.src.medium)
    },
    async fetchPhotosPerPage(page,query){
        const resp = await fetch(`https://api.pexels.com/v1/search?page=${page}&query=${query}&per_page=20`,{
            headers: new Headers({
                "Authorization": API_KEY
              })
        })
        const result = await resp.json()
    
        return result
    }
}






