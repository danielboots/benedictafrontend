import Layout from "../components/Layout";

const about = () => {
  return (
    <Layout
      title="About | Benedicta Syran"
      description="About| Benedicta Syran"
    >
      <div>
        {/* Main container div */}
        <div
          style={{
            backgroundImage: "url(" + "/images/herofull.webp" + ")",
            marginTop: -80,
          }}
          className=" bg-center bg-cover bg-no-repeat m-auto bg-fixed relative h-40v flex justify-center items-center flex-col "
        >
          <div className="absolute h-full w-full flex overflow-x-auto bg-coolgray-900 bg-opacity-50 backdrop-filter  "></div>
          <h1 className=" text-white z-20 uppercase font-body text-center font-bold  tracking-wider text-3xl  sm:text-4xl md:text-6xl ">
            About
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default about;
