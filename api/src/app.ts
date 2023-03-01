// server here
import Express from 'express'
import cors from 'cors'
import passport from 'passport'

import { googleStrategy } from './config/passport'
import userRouter from './routes/users'

const app = Express()
app.use(Express.json())
app.use(cors())
app.use(passport.initialize())
passport.use(googleStrategy)

app.use('/user', userRouter)

export default app;

