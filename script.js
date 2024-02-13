const apiKey="oeNej0fRbUpIvwqXXKxsEThiHks1IoCHL65lJIuUlIxw7JXRdNQonA4S";
const perPage=15;
let currentPage=1;

const generateHTML = (images) => {
    images.map(img =>
        `<li class="card"><img src="images/img1.jpeg" alt="img">
        <div class="details">
            <div class="photographer">
                <i class="uil uil-camera"></i>
                <span>Kritika Acharya</span>
            </div>
            <button><i class="uil uil-import"></i></button>
        </div>
    </li>`
        )
}

const getImages = (apiURL) => {
    fetch(apiURL, {
        headers: { Authorization: apiKey }
    }).then(res => res.json()).then(data => {
        generateHTML(data.photos);
    })
}

getImages(`https://api.pexels.com/v1/curated?page=${currentPage}per_page=${perPage}`);