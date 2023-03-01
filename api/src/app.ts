// server here
import Express from 'express'
import cors from 'cors'
import passport from 'passport'

const app = Express()
app.use(Express.json())
app.use(passport.initialize())

// app.use('/user', userRouter)

export default app;

