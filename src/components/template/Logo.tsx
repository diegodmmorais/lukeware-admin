const Logo = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center h-12 w-12 rounded-full bg-white shadow hover:shadow-lg`}
    >
      <div
        className={`h-3 w-3 rounded-full bg-gradient-to-tr from-red-300 to-red-500`}
      ></div>
      <div
        className={`h-3 w-3 rounded-full bg-gradient-to-tr from-green-300 to-green-500`}
      ></div>
      <div
        className={`h-3 w-3 rounded-full bg-gradient-to-tr from-yellow-300 to-yellow-500`}
      ></div>
    </div>
  );
};

export default Logo;
