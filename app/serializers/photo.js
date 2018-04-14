import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr){
    switch (attr) {
      case 'id_photo':
        return 'id';
      case 'imageableId':
        return 'imageable_id';
      case 'imageableType':
        return 'imageable_type';
      default:
        return this._super(...arguments);
    }
  }
});
