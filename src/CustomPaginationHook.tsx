import { useCallback, useState } from "react";

const useCustomPagination = () => {
  const [startPage, setStartPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [endPage, setEndPage] = useState<number>(5);
  const [totalPages, setTotalPages] = useState<number>(10);

  const [isLastPage, setIsLastPage] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(false);

  const goToNextPage = useCallback(() => {
    if (currentPage === totalPages) {
      setIsLastPage(true);
    } else {
      setCurrentPage((prev) => prev + 1);
      setStartPage((prev) => prev + 1);
      setEndPage((prev) => prev + 1);
    }
  }, [currentPage, totalPages]);

  const goToPreviousPage = useCallback(() => {
    if (currentPage === 1) {
      setIsFirstPage(true);
    } else {
      setCurrentPage((prev) => prev - 1);
      setStartPage((prev) => prev - 1);
      setEndPage((prev) => prev - 1);
    }
  }, [currentPage]);

  return {
    currentPage,
    totalPages,
    isLastPage,
    isFirstPage,
    goToNextPage,
    goToPreviousPage,
  };
};

export default useCustomPagination;
