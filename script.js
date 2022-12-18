const data1 = "./db/manga.json";
const data2 = "./db/manhwa.json";
const data3 = "./db/manhua.json";
const listManga = document.querySelector('#manga');
const listManhwa = document.querySelector('#manhwa');
const listManhua = document.querySelector('#manhua');


const getListManga = () => {
    fetch(data1)
        .then(response => {
            return response.json();
        }).then(responseManga => {
            // console.log(responseManhua.manhua);
            listManga.innerHTML = "";
            let comic = responseManga.manga;
            comic.forEach(item => {
                listManga.innerHTML += `
                <div  class="card-komik1">
                    <img src="${item.img}" class="img1">
                    <div class="judul-komik1">
                        <p><a href="#e">${item.nama}</a> </p>
                    </div>
                    <p class="p">chapter</p>
                    <div class="ch1">
                        <a href="/notfound.html">${item.chapter}</a>
                    </div>
                </div>
                `
            });
        }).catch(error => {
            console.error(error);
        });
}
const getListManhwa = () => {
    fetch(data2)
        .then(response => {
            return response.json();
        }).then(responseManhwa => {
            // console.log(responseManhwa.manhwa);
            listManhwa.innerHTML = "";
            let comic = responseManhwa.manhwa;
            comic.forEach(item => {
                listManhwa.innerHTML += `
                <div  class="card-komik1">
                    <img src="${item.img}" class="img1">
                    <div class="judul-komik1">
                        <p><a href="#e">${item.nama}</a> </p>
                    </div>
                    <p class="p">chapter</p>
                    <div class="ch1">
                        <a href="#234">${item.chapter}</a>
                    </div>
                </div>
                `
            });
        }).catch(error => {
            console.error(error);
        });
}

const getListManhua = () => {
    fetch(data3)
        .then(response => {
            return response.json();
        }).then(responseManhua => {
            // console.log(responseManhua.manhua);
            listManhua.innerHTML = "";
            let comic = responseManhua.manhua;
            comic.forEach(item => {
                listManhua.innerHTML += `
                <div  class="card-komik1">
                    <img src="${item.img}" class="img1">
                    <div class="judul-komik1">
                        <p><a href="#e">${item.nama}</a> </p>
                    </div>
                    <p class="p">chapter</p>
                    <div class="ch1">
                        <a href="#234">${item.chapter}</a>
                    </div>
                </div>
                `
            });
        }).catch(error => {
            console.error(error);
        });
}

document.addEventListener('DOMContentLoaded', getListManga);
document.addEventListener('DOMContentLoaded', getListManhwa);
document.addEventListener('DOMContentLoaded', getListManhua);