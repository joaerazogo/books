import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  datePublished: DS.attr('date'),
  seriesId: DS.attr('number'),
  authors: DS.belongsTo('author'),
  chapters: DS.hasMany('chapter'),
});
