import { Prisma } from "@prisma/client";
import { db } from "../../utils/db";
import { adminSearchAbleFields } from "./admin.constants";

const getAllAdmin = async (query: any) => {
  const andConditions: Prisma.AdminWhereInput[] = [];

  if (query?.searchTerm) {
    andConditions.push({
      OR: adminSearchAbleFields.map((field) => ({
        [field]: {
          contains: query?.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  console.dir(andConditions, { depth: "infinity" });

  const whereCondition: Prisma.AdminWhereInput = { AND: andConditions };

  const result = await db.admin.findMany({
    where: whereCondition,
  });
  return result;
};

const AdminServices = {
  getAllAdmin,
};

export default AdminServices;
