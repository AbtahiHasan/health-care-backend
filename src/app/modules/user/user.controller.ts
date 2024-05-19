import { Request, Response } from "express";
const createAdmin = async (req: Request, res: Response) => {
  try {
    console.log("admin created successfully");
  } catch (error) {}
};

const UserControllers = {
  createAdmin,
};
export default UserControllers;
