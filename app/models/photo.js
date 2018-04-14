import DS from 'ember-data';

export default DS.Model.extend({
  id_photo: DS.attr('number'),
  imageableId: DS.attr('number'),
  imageableType: DS.attr('string'),
  title: DS.attr('string'),
  uri: DS.attr('string'),
});
