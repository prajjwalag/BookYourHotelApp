import React from 'react'
import { Pagination, PaginationContent, PaginationNext, PaginationPrevious } from '../../../../components/ui/pagination'
import useSearchPagination from '../hooks/use-search-pagination';

const PaginationFilter = ({totalEntries, className, limit}) => {

  const {currentPage, onPageChange, paginationConfig} = useSearchPagination(totalEntries, limit);

  return (
    <Pagination className={'justify-center'}>
      <PaginationContent> 
        {paginationConfig.totalPages ? (
          <PaginationPrevious
            className="h-8 text-xs"
            onClick={() => onPageChange(currentPage - 1, 1)}
            disabled={currentPage <= 1} />
        ) : null }
        {paginationConfig.paginationLinks}
        {
          paginationConfig.totalPages ? (
            <PaginationNext
              className="h-8 text-xs"
              onClick={() => onPageChange(Math.min(currentPage + 1, paginationConfig.totalPages))}
              disabled={currentPage >= paginationConfig.totalPages} />
          ) : null
        }

      </PaginationContent>
    </Pagination>
  )
}

export default PaginationFilter
