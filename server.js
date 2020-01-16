const Koa = require('koa')
// const Router = require('koa-router')

// const server = new Koa()
// const router = new Router()

// router.get('/test/:id/:name', (ctx) => {
  //   // ctx.body = `<p> request /test ${ctx.params.id}</p>`
  //   ctx.body = {
    //     success: true,
    //     id: ctx.params.id,
    //     name: ctx.params.name
    //   }
    //   ctx.set('Content-Type', 'application/json')

    // })

    // server.use(router.routes())
    // server.listen(1480, () => {
      //   console.log('listening on port 1480')
      // })
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.response = false
  })

  server.listen(1480, () => {
    console.log('listening on port 1480')
  })
})