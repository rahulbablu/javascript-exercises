const getTheTitles = function() {
    const books = [{title: 'Book',author: 'Name'},
                    {title: 'Book2',author: 'Name2'}];

    let titles = [];
    for(let i = 0; i < books.length; i++){
        titles.push(books[i].title);
    }
    return titles;
};

getTheTitles();

// Do not edit below this line
module.exports = getTheTitles;
