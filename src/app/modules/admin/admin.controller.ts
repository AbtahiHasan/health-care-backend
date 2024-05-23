import { Request, Response } from "express";

import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import AdminServices from "./admin.service";
import { pick } from "../../utils/pick";
import { adminFilterAbleFields } from "./admin.constants";
const getAllAdmin = async (req: Request, res: Response) => {
  try {
    const queryData = pick(req.query, adminFilterAbleFields);
    const result = await AdminServices.getAllAdmin(queryData);
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
