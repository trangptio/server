/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Message extends Model {
  peer() {
    return this.belongsTo('App/Models/Peer', 'peer_id', 'id');
  }
}

module.exports = Message;
