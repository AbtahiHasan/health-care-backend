import { Prisma } from "@prisma/client";
import { db } from "../../utils/db";
import { adminSearchAbleFields } from "./admin.constants";
import paginationHelper from "../../utils/calculatePagination";

const getAllAdmin = async (query: any, options: any) => {
  const { searchTerm, ...remainsData } = query;
  const andConditions: Prisma.AdminWhereInput[] = [];
  const { limit, orderBy, skip, sortBy } =
    paginationHelper.calculatePagination(options);

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

  if (Object.keys(remainsData).length > 0) {
    andConditions.push({
      AND: Object.keys(remainsData).map((key: string) => ({
        [key]: {
          equals: remainsData[key],
        },
      })),
    });
  }

  console.dir(andConditions, { depth: "infinity" });

  const whereCondition: Prisma.AdminWhereInput = { AND: andConditions };

  const result = await db.admin.findMany({
    where: whereCondition,
    skip: skip,
    take: limit,
    orderBy: {
      [sortBy]: orderBy,
    },
  });
  return result;
};

const AdminServices = {
  getAllAdmin,
};

export default AdminServices;
