import DS from 'ember-data';

export default DS.Model.extend({
  author_id: DS.attr('number'),
  name: DS.attr('string'),
  dateOfBitrh: DS.attr('date'),
  dateOfDeath: DS.attr('date'),
  books: DS.hasMany('book'),
  //photos: DS.hasMany('photo'),

});
