import Route from '@ember/routing/route';

export default Route.extend({
  model({id}){
    const books = this.modelFor('book');
    const book = books.findBy('id', id);
    //alert(books);
    if (!book) {
        this.transitionTo('author');

    } else {
      return book;
    }
  }
});
