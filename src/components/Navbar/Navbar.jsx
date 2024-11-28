import {useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
const Navigate = useNavigate;

const onLogout = () => {
  Navigate("/login");

}
  
const handleSearch = () => {

}

const onClearSearch = () => {
  setSearchQuery("")
};

  return (
    <div className="bg-blue-700 flex items-center justify-between px-6 py-2 drop-shadow-sm">
      <img src="/logoyv2.png" alt="Logo" className="h-8" />

      <SearchBar 
       value={searchQuery}
       onChange={({ target }) => {
        setSearchQuery(target.value);
       }}
       handleSearch={handleSearch}
       onClearSearch={onClearSearch}
       />
      
  
      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
