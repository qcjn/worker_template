
/** @typedef {Object} Env */

/** @satisfies {ExportedHandler<Env>} */
export default {
  /**
   * @param {Request} request
   * @param {Env} env
   * @param {ExecutionContext} ctx
   * @returns {Promise<Response>}
   */
  async fetch(request, env, ctx) {
    return fetchHandler(request, env, ctx).catch(errorHandler)
  }
};

/** @type {(request: Request, env: Env, ctx: ExecutionContext) => Promise<Response>} */
const fetchHandler = async (request, env, ctx) => { throw new Error("Global Error Catch") }

/** @type {(error: Error) => Promise<Response>} */
const errorHandler = async (error) => Response.json({ error: { message: error.message } }, { status: 500 })
