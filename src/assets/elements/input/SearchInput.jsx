const SearchInput = ({ handleChange, inputValue }) => {
  return (
    <div className="searchBox w-2/6 flex flex-row items-center m-auto p-1 bg-white rounded-xl">
      <input
        className="w-full p-3 outline-none "
        type="text"
        placeholder="Add Here..."
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className="text-slate-400 text-xl p-1">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default SearchInput;
