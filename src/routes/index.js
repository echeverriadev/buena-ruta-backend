// import * as UserRouter from './user'

exports.load = app => {

    // app.use('/users', UserRouter);

    app.get('/', (req, res) => {
      res.send("HELLO WORLD")
    })

    return app

}