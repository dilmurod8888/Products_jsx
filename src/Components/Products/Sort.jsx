import Select from "react-select";
import { productStore } from "../../store/products";
import Dilmurod from "../redux/Dilmurod";

const Sort = () => {
  const { setOrder } = productStore();

  const options = [
    { value: "Default", label: "Default" },
    { value: "title", label: "Title" },
    { value: "price", label: "Price" },
    { value: "star", label: "Stars" },
  ];
  const changeOption = (info) => {
    setOrder(info.value);
  };

  return (
    <Select placeholder="Sort By :" onChange={changeOption} options={options} />
  );
};

export default Sort;
