import { Button } from "@mui/material";
import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <div className="headerSearch ml-3 mr-3">
      <input type="text" placeholder="Search for shirts..." />
      <Button>
        <IoIosSearch />
      </Button>
    </div>
  );
};

export default SearchBox;
