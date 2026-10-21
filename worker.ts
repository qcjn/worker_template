interface Env {}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return fetchHandler(request, env, ctx).catch(errorHandler)
	},
} satisfies ExportedHandler<Env>;

const fetchHandler = async (request: Request, env: Env, ctx: ExecutionContext): Promise<Response> => Response.json('Hello')

const errorHandler = async (error: Error): Promise<Response> => Response.json('Error', { status: 500 })
