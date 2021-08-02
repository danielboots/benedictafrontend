const Info = () => {
  return (
    <div className="relative bg-rose-900 font-body ">
      <div className="h-56  sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover "
          src="/images/hero.jpeg"
          alt=""
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-thin uppercase tracking-wider text-white">
            2021: Eddie Gordon
          </h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            For the love of Music
          </p>
          <p className="mt-3 text-lg text-white">
            This site is dedicated to my amazing daughter Olivia Alexandra
            Gordon
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
