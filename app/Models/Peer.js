/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Peer extends Model {
  service() {
    return this.belongsTo('App/Models/Service', 'service_id', 'id');
  }

  messages() {
    return this.hasMany('App/Models/Message', 'id', 'peer_id');
  }
}

module.exports = Peer;
