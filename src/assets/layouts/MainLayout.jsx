const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-slate-200 flex justify-center items-center py-10">
      {children}
    </div>
  );
};

export default MainLayout;
