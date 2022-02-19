class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        }
        this.books.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
    payBook(bookName) {
        let hasThisBookName = true;
        // for (const book of this.books) {
        //     if (book.bookName == bookName) {
        //         hasThisBookName = true;
        //         break;
        //     }
        //     else {
        //         hasThisBookName = false;
        //     }
        // }
        if (!this.books.some(x=>x.bookName==bookName)) {
            throw new Error(`${bookName} is not in the collection.`);
        } else {
            let book = this.books.find(x => x.bookName == bookName);
            if (book != undefined) {
                if (book.payed) {
                    throw new Error(`${bookName} has already been paid.`)
                }
                else {
                    book.payed = true;
                    return `${bookName} has been successfully paid.`;
                }
            }

        }

    }
    removeBook(bookName) {
        let hasThisBookName = true;
        // for (const book of this.books) {
        //     if (book.bookName == bookName) {
        //         hasThisBookName = true;
        //         break;
        //     }
        //     else {
        //         hasThisBookName = false;
        //     }
        // }
        if (!this.books.some(x=>x.bookName==bookName)) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
        else {
            let book = this.books.find(x => x.bookName == bookName);
            if (book != undefined) {
                if (!book.payed) {
                    throw new Error(`${bookName} need to be paid before removing from the collection.`)
                }
                else {
                    let indexOfBook = this.books.indexOf(x => x.bookName == bookName);
                    this.books.splice(indexOfBook, 1);
                    return `${bookName} remove from the collection.`;
                }
            }

        }
    }
    getStatistics(bookAuthor) {
        let result = '';

        if (bookAuthor == undefined) {
            result += `The book collection has ${this.capacity - this.books.length} empty spots left.\n`;
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            for (const key of this.books) {
                if (key.payed) {
                    result += `${key.bookName} == ${key.bookAuthor} - Has Paid.\n`
                }
                else {
                    result += `${key.bookName} == ${key.bookAuthor} - Not Paid.\n`
                }
            }

        }
        else {
            let authors = [];
            for (const key of this.books) {
                if (key.bookAuthor == bookAuthor) {
                    authors.push(key);
                }
            }

            if (authors.length === 0) {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
            else {
                for (const key of authors) {
                    if (key.payed) {
                        result += `${key.bookName} == ${key.bookAuthor} - Has Paid.\n`
                    }
                    else {
                        result += `${key.bookName} == ${key.bookAuthor} - Not Paid.\n`
                    }
                }
            }
        }
        return result.trimEnd();

    }
}

