
function book(author, name, pages, read) {
    this.author = author,
    this.name = name,
    this.pages = pages,
    this.read = read,
    this.info = function(){
        return (`${this.name} by ${this.author}, ${this.pages}, ${this.read} yet`)
    }
}

const theHobbit = new book("J.R.R Tokien", "The Hobbit", 295, "not read" );
console.log(theHobbit.info());