import Link from "next/link";

const FeatureTitle = () => {
  return (
    <div
      className="   
     text-lg text-white  bg-gradient-to-b from-pink-500 via-pink-400 to-yellow-200 text-justify grid  grid-cols-1 sm:grid-cols-2"
    >
      <div className="p-4  flex items-center ">
        <img
          src="/images/heroalt.webp"
          className="hover:shadow-2xl transition duration-300 ease-in-out relative border-1 "
          alt=""
        />
      </div>
      <div className=" px-4 mb-6 flex">
        <div className=" pt-4">
          <div className="text-3xl font-BSerif pb-4 tracking-wide text-s">
            Meet Benedicta Syran
          </div>

          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureTitle;
