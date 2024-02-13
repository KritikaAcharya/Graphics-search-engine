const apiKey="oeNej0fRbUpIvwqXXKxsEThiHks1IoCHL65lJIuUlIxw7JXRdNQonA4S";
const perPage=15;
let currentPage=1;

getImages(`https://api.pexels.com/v1/curated?page=${currentPage}per_page=${perPage}`);