import { Router } from "express";
import AdminControllers from "./admin.controller";

const router = Router();

router.get("/", AdminControllers.getAllAdmin);

const AdminRoutes = router;
export default AdminRoutes;
