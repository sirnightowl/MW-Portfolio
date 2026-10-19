type Env = {
  ASSETS: { fetch(request: Request): Promise<Response> }
}

const worker = {
  fetch(request: Request, env: Env): Promise<Response> | Response {
    const url = new URL(request.url)

    if (url.hostname === 'www.snowl.uk') {
      url.hostname = 'snowl.uk'
      url.protocol = 'https:'
      url.port = ''
      return Response.redirect(url.toString(), 308)
    }

    return env.ASSETS.fetch(request)
  },
}

export default worker
