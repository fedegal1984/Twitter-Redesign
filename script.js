const recomendedUsers = [
    {
        nombre: 'Milli Smith',
        username: '@Milli1243',
        image: 'https://lh3.googleusercontent.com/oUNz--fmfv96BCRoVs09WWkQtcuwV7y4JEeudixrRX_h2hWItOq9Zlepp3K4wvItzmS5SLRqkn9I6NO7U3i0-EJ4wVjx6gT1CCXXyJUTWQw0Ok12rio=w500-rp-e30'
    },
    {
        nombre: 'Tyrese',
        username: '@Codewithtyris',
        image: 'https://lh3.googleusercontent.com/ONpvLgqVCiILt1f5_bAl_FJn8Y2ZTWd1iABITTUce-UmHV3dkXHy-x7YNK668HnjDa0hoL5t7x0hCy91zdjyvOtdohOcoJ_w5Wuf2Cu5Uz3TmSI76GQ=w500-rp-e30'
    },
    {
        nombre: 'Pepe',
        username: '@PepeGrilloOk',
        image: 'https://lh3.googleusercontent.com/LxD7qhuSHIr45NYir7jj_68wEkkrCtaYzCrSHGgPT9mm0pWmXHoB0iLq42CsV4U9jPT7FdwSPPTPOvs1W8yV0Jzp0HccqF6gegtAvX2U-3iA_krgtPfB=w500-rp-e30'
    },
]

const recomendedListHTML = document.querySelector('.recomendedPeopleList')

recomendedUsers.forEach((user) =>{
    recomendedListHTML.innerHTML += `
        <div class="recomendedUserCard">
            <div class="userRecomendedImage">
                <img src=${user.image} alt="user image">
            </div>
            <div class="userRecomendedInfo">
                <p>${user.nombre}</p>
                <h6>${user.username}</h6>
            </div>
            <button class="btn-follow">Follow</button>
        </div>
    `
})

const comments = [
    {
        nombre: "Lakshay",
        username: "@laksh_co",
        comentario: "How about a startup which will let you meet people with same        interests as you!?",
        imagen: "./img/Ellipse_6.png",
        tiempo: "10 minutes ago",
        likes: 59,
        retweets: 22,
        comments: 39,
        otros:""
    },
    {
        nombre: "Product Hunt",
        username: "@ProductHunt",
        comentario: "Create a video message to yourself, your family or your friend, and this platform will deliver it in the future.",
        imagen: "./img/Ellipse_10.png",
        tiempo: "32 minutes ago",
        likes: 37,
        retweets: 14,
        comments: 3,
        otros: "https://meow.ph/seeyafutureme"
        
    },
    {
        nombre: "Martita Lopez",
        username: "@laksh_co",
        comentario: "lorem ipsum dolor",
        imagen: "./img/Ellipse_6.png",
        tiempo: "45 minutes ago",
        likes: 93,
        retweets: 125,
        comments: 16,
        otros:"",
    },
]

const comentariosHTML = document.querySelector(".contenido")

comments.forEach((com) =>{
    
    comentariosHTML.innerHTML += `
    <div class="usuario">
        <img class="userImg" src=${com.imagen} alt="user image">
        <p>${com.nombre}</p>
        <p class="p2">${com.username}</p>
        <i class="bi11 bi-three-dots"></i>
    </div>
        <p class="p2">${com.tiempo}</p>
        <p class="p6">${com.comentario}</p>
        <p class="p6"><a href="${com.otros}">${com.otros}</a></p>
    <div class="lrc">
        <i class="bi bi-heart"></i>
        <i class="bi bi-arrow-repeat"></i>
        <i class="bi bi-chat-dots"></i>
        <p2>${com.likes} Likes | </p2>
        <p2>${com.retweets} Retweet | </p2>
        <p2>${com.comments} Comments</p2>
    </div>
    <div class="botonesLakshay">
        <button><i class="bi bi-heart"></i>Like</button>
        <button><i class="bi bi-arrow-repeat"></i>Retweet</button>
        <button><i class="bi bi-chat-dots"></i>Comment</button>
        <button><i class="bi bi-upload"></i>Share</button>
    </div>
    `
})
