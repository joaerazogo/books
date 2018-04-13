import DS from 'ember-data';

export default DS.Model.extend({
  ordering: DS.attr('number'),
  title: DS.attr('string'),
  book: DS.belongsTo('book'),
});
