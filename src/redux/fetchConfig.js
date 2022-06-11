const CONFIG_API_BOOKS={
    URL: "https://wolnelektury.pl/api/books/?format=json",
    method: 'get',
    headers: {
        "Accept": "application/json",
    },
};

let CONFIG_API_BOOK={
    // URL: "https://wolnelektury.pl/api/books/${slug}?format=json",
    method: 'get',
    headers: {
        "Accept": "application/json",
    },
};



export {CONFIG_API_BOOKS, CONFIG_API_BOOK};