const ListContainer = ({ children }) => {
  return (
    <div className="flex justify-center gap-3 my-4 flex-wrap h-fit">
      {children}
    </div>
  );
};

export default ListContainer;
