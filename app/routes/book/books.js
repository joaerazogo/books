import Route from '@ember/routing/route';

export default Route.extend({
  model({id}){
    // const book = this.modelFor('book');
    // const author_book = book.findBy('id', id);
    // const nameBook = author_book.get('title');
    // const chapterBook = author_book.get('chapters');

    // if(!author_book){
    //   this.transitionTo('author');
    // }else {
    //   return{
    //     id,
    //     nameBook,
    //     chapterBook,
    //   };
    // }
    const books = this.modelFor('book');
    const book = books.findBy('id', id);
    if (!book) {
        this.transitionTo('author');

    } else {
      return book;
    }
  }
});
