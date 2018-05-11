import Route from '@ember/routing/route';

export default Route.extend({
  model({id}){
    const authors = this.modelFor('author');
    const author = authors.findBy('id', id);
    const books = author.get('books');
    const authorName = author.get('name');
    const auxnum = books.on('title').length;
    if(!author){
      this.transitionTo('author');
    }else {
      return{
        author,
        books,
        authorName,
        auxnum,
      };
    }
  }
});
