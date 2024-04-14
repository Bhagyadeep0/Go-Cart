
const Link = () => {
  // navigation data
  const navData = [
    { name: "home", path: "/" },
    { name: "Contact", path: "/contact" },

  ];
  return (
      <ul className=" space-y-5  text-center">
      {navData.map((item, index) => (
          <li className="text-[30px] lg:[text-20px] capitalize text-white hover:text-yellow-300 transition-all duration-300 ease-linear" key={index}>
            <a href={item.path}>{item.name}</a>
        </li>
      ))}
      </ul>
  );
};

export default Link;
