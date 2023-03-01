import Router from 'express';
import passport from 'passport';
import { googleAuthenticate } from '../controllers/user';

const router = Router();

// google login doesn't need register
router.post(
  '/login-google',
  passport.authenticate('google-id-token', { session: false }),
  googleAuthenticate
);

export default router;
