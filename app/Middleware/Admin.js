/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Admin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ auth, request, response }, next) {
    // call next to advance the request
    if (!auth.user || !auth.user.is_admin) {
      response.notFound();
      return;
    }
    console.log('admin', auth.user.is_admin);
    await next();
  }
}

module.exports = Admin;
