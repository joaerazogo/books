import Controller from '@ember/controller';
import { all } from 'rsvp';

export default Controller.extend({
  actions:{
    delete(book){
      console.log(this.get('id'));
        // this.get('store').findRecord('book', id, { backgroundReload: false }).then(function(post) {
        const promises = book.get('chapters').map(chapter => chapter.destroyRecord());
        promises.pushObjects()
        all(promises).then(() => book.destroyRecord());

        // book.destroyRecord();
        // book.get('isDeleted'); // => true
        // book.save(); // => DELETE to /posts/1
      // });
    }
  },
});
