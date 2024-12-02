import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "./redux/products";

const Paginate = ({ total }) => {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.products.page);
  const handleClick = ({ selected }) => {
    dispatch(setPage(selected))
  }


  // const handlePageClick = ({ selectedItem }) => {
  // dispatch(setCurrentPage (selectedItem.selected + 1));
  // };

  return (
    <ReactPaginate
      className="paginate"
      breakLabel="..."
      nextLabel={<MdOutlineNavigateNext className="paginate_icon" />}
      previousLabel={<GrFormPrevious className="paginate_icon" />}
      onPageChange={handleClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      breakClassName="paginate_break"
      pageCount={Math.ceil(total / 9)}
      activeClassName="paginate_active"
      pageLinkClassName="paginate_link"
      nextClassName="paginate_btn"
      previousClassName="paginate_btn"
      forcePage={page}
    />
  )
}

export default Paginate;
