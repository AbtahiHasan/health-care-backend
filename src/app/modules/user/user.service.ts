import bcrypt from "bcrypt";
import { db } from "../../utils/db";

const createAdmin = async (payload: any) => {
  const result = await db.$transaction(async (tx) => {
    const hashPassword = await bcrypt.hash(payload.password, 12);
    const user = (await tx.user.create({
      data: {
        email: payload.admin.email,
        password: hashPassword,
        role: "ADMIN",
        needPasswordChange: false,
      },
    })) as any;

    delete user.password;
    const admin = await tx.admin.create({
      data: payload.admin,
    });

    return { user, admin };
  });
  return result;
};

const UserServices = {
  createAdmin,
};

export default UserServices;
