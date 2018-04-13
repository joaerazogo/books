import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr){
    switch (attr) {
      case 'datePublished':
        return 'date_published';
      case 'seriesId':
        return 'series_id';
      default:
        return this._super(...arguments);
    }
  }
});
