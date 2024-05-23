import { Request, Response } from "express";
import UserServices from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
const createAdmin = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.createAdmin(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Admin create successfully",
      data: result,
    });
  } catch (error) {}
};

const UserControllers = {
  createAdmin,
};
export default UserControllers;
