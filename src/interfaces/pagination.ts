export interface IPaginationgOption {
  page?: number;
  limit?: number;
  skip?: number;
  sortBy?: string | undefined;
  sortOrder?: 'asc' | 'desc';
}
