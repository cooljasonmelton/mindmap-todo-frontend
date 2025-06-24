// TODO: add skull image to nav
const Navbar = () => {
  return (
    <nav className="w-full border-b flex justify-between items-center p-2">
      <div className="text-xl font-bold"></div>
      <div className="space-x-8 space-y-8 flex flex-nowrap font-bold">
        <button className="btn-primary-sm">new</button>
      </div>
    </nav>
  );
};

export default Navbar;
