import connect from 'next-connect'
import NextCors from 'nextjs-cors'

import BookActionFactory from '~/server/apps/client-front-rest/Factories/BookActionFactory'
import ErrorMiddlewareFactory from '~/server/apps/client-front-rest/Factories/ErrorMiddlewareFactory'
import type HttpRequest from '~/server/apps/client-front-rest/Shared/Http/Definitions/HttpRequest'
import type HttpResponse from '~/server/apps/client-front-rest/Shared/Http/Definitions/HttpResponse'

export default connect<HttpRequest, HttpResponse>({
  onError: ErrorMiddlewareFactory.Reporter(),
}).get(NextCors, BookActionFactory.GetAll())