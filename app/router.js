import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('author', function() {
    this.route('authors', {path: '/:id'});
  });
  this.route('book', function() {
    this.route('books', { path: '/:id' }, function() {
      this.route('delete', function() {
        this.route('deletebook');
      });
      this.route('edit');
    });
  });
  this.route('chapter');
  this.route('photo');
  //this.route('books');

  this.route('delete', function() {});
});

export default Router;
