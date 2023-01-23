export interface PaginitionProps {
  totalItems: number;
  limit?: number;
  siblingCount?: number;
  page: number;
  onPageChange: (n: number) => void;
}
