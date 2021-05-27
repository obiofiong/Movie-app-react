import React from 'react'
import PropTypes from 'prop-types'

function Pagination({itemsCount, pageSize, onPageChange, currentPage}) {

    const pagesCount = Math.ceil(itemsCount/pageSize)

    function range(start, end) {
        var list = [];
        for (let i = start; i <= end; i++) {
            list.push(i);
        }
        return list;
    }
    const pages = range(1,pagesCount)
    

    if (pagesCount === 1) return null;

    return (
       
        <div>
            <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {
                    
                    pages.map(page => (
                        <li key = {page}
                            className = { (page === currentPage) ? "page-item active" : "page-item"}>
                            <a 
                                className="page-link"
                                onClick = {() => onPageChange(page)}
                            >
                                {page}
                            </a>
                        </li>
                    ))
                }
                
            </ul>
            </nav>
        </div>
    )
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired, 
    pageSize : PropTypes.number.isRequired, 
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired 
};

export default Pagination
