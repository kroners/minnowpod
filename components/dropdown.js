import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const dropdownItems = ['Last Week', 'Last Month'];

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <button
        aria-expanded={dropdown ? "true" : "false"}
        onClick={() => setDropdown((prev) => !prev)}

        css={{
          background: 'none',
          border: 0,
          color: 'white',
        }}
      >
      {dropdownItems[0]} <IoIosArrowDown />
     </button>
      <ul css={{
        display: 'none'
      }}>
        {dropdownItems.map((item, index) => (
        <li key={index}>
          <span>{item}</span>
        </li>
        ))}
      </ul>
    </>
  );
 };
 
 export default Dropdown;