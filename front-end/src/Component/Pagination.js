import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Pag from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));


const Pagination = ({ postsPerPages, totalPosts, paginate }) => {

    const PageNumbers = [];
    const numPages = Math.ceil(totalPosts / postsPerPages)
    const currPage = 1;

    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        paginate(page);
    };


    for (let i = currPage; i <= Math.min(currPage + 27, Math.max(numPages, currPage + 27)); i++) {
        PageNumbers.push(i);
    }

    console.log(page);

    return (
        <div className="pagination">

            <div className={classes.root}>

                <Pag
                    count={numPages}
                    color="primary"
                    size="large"
                    page={page}
                    onChange={handleChange}
                    boundaryCount={3}
                    showFirstButton
                    showLastButton
                />

            </div>
        </div>

    );
}

export default Pagination;