interface IOption {
  sortBy?: string;
  limit?: string;
  page?: string;
  orderBy?: string;
}

interface IReturn {
  page: number;
  limit: number;
  skip: number;
  sortBy: string;
  orderBy: string;
}

const calculatePagination = (options: IOption): IReturn => {
  const page = Number(options?.page) || 1;
  const limit = Number(options?.limit) || 10;
  const skip = (page - 1) * limit;
  const sortBy = options?.sortBy || "createdAt";
  const orderBy = options?.orderBy || "desc";

  return {
    page,
    limit,
    skip,
    sortBy,
    orderBy,
  };
};

const paginationHelper = {
  calculatePagination,
};

export default paginationHelper;
