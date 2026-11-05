
let coverUrls = [
    "https://imgs.search.brave.com/XPGF3qqWz8NUrSie18EwZLt20wravAYeNr-Q-18YtUc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/Yi53aWtpbWVkaWEu/b3JnL3dpa2lwZWRp/YS9jb21tb25zL3Ro/dW1iLzQvNGYvVG9f/S2lsbF9hX01vY2tp/bmdiaXJkXyUyOGZp/cnN0X2VkaXRpb25f/Y292ZXIlMjkuanBn/LzEyODBweC1Ub19L/aWxsX2FfTW9ja2lu/Z2JpcmRfJTI4Zmly/c3RfZWRpdGlvbl9j/b3ZlciUyOS5qcGc_/dXRtX3NvdXJjZT1l/bi53aWtpcGVkaWEu/b3JnJmFtcDt1dG1f/Y2FtcGFpZ249aW5k/ZXgmYW1wO3V0bV9j/b250ZW50PXRodW1i/bmFpbA",


    "https://imgs.search.brave.com/vsi215XZubmT8PeSk9DMu-jgdVzIafLwusOTM_jSPj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBkLzJj/LzA5LzBkMmMwOTE1/YjNjODZjOGFjMDY4/MGYzZjZjODg3MzFk/LmpwZw",

    "https://imgs.search.brave.com/T9uV0WX7tVuxwf72bODV_Y50IbO7ppGf52E1gkQfZKA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L3N0YXRpYy9zeXMt/aW1hZ2VzL0d1YXJk/aWFuL1BpeC9waWN0/dXJlcy8yMDEyLzYv/OC8xMzM5MTUxODE2/ODY5L1RoZS1HcmVh/dC1HYXRzYnktMDA3/LmpwZz93aWR0aD0z/NzUmZHByPTEmcz1u/b25lJmNyb3A9bm9u/ZQ",


    "https://imgs.search.brave.com/fj2JffvMz5u_lPTCFsMi9lOx_9PsmB9UwCMbFBmEqgk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTE4OWpVK09kVEwu/anBn"

]


const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee",          alreadyRead: true, coverUrl: coverUrls[0] },
  { title: "1984",                  author: "George Orwell",       alreadyRead: false, coverUrl: coverUrls[1] },
  { title: "The Great Gatsby",      author: "F. Scott Fitzgerald", alreadyRead: true, coverUrl: coverUrls[2]  },
  { title: "Moby Dick",             author: "Herman Melville",     alreadyRead: false, coverUrl: coverUrls[3] }
];

let bookElement = document.getElementById("Book List");



books.forEach((book) => {
    let bookIdentifier = document.createElement("li");
    let img = CreateCoverImage(book);

    bookIdentifier.textContent = `${book.title} ${book.author}`
    bookElement.appendChild(bookIdentifier);
    bookIdentifier.appendChild(img);
})


function CreateCoverImage(book)
{
    let coverImage = document.createElement("img")
    coverImage.src = book.coverUrl;
    coverImage.alt = `Cover Image for ${book.author}`;
    coverImage.width = 300; 
    coverImage.height = 300;
    return coverImage; 
}