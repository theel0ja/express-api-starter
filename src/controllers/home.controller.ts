import { NextFunction, Request, Response, Router } from "express";

const router: Router = Router();

/**
 * Index
 */
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({
    'msg': 'Hello world!',
  });
});

export const HomeController: Router = router;
