import React from 'react'


const Pagination = ({postsPerPages, totalPosts, paginate}) => {

    const PageNumbers = [];
    const numPages = Math.ceil(totalPosts/postsPerPages)
    const currPage = 1;
    for(let i = currPage; i <= Math.min(currPage + 27, Math.max(numPages, currPage+27)); i++){
        PageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                <li className="prev page-item">
                    <a href="#" aria-label="Prev" className="page-link">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {PageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)}  className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
                <li className="next page-item">
                    <a href="#" aria-label="Next" className="page-link">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;