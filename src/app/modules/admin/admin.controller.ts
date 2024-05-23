import { Request, Response } from "express";

import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import AdminServices from "./admin.service";
const getAllAdmin = async (req: Request, res: Response) => {
  try {
    const result = await AdminServices.getAllAdmin(req.query);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Admins fetched successfully",
      data: result,
    });
  } catch (error) {}
};

const AdminControllers = {
  getAllAdmin,
};
export default AdminControllers;
