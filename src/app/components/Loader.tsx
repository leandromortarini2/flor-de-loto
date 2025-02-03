const LotoLoader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {" "}
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LotoLoader;
