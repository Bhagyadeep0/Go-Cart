// react-icons
import { AiFillShopping } from "react-icons/ai";
import ScrollReveal from "./ScrollReveal";

const Products = () => {
  //product data
  const productsData = [
    { name: "Classic something", price: "$39.99", img: "/0.jpg" },
    { name: "Classic something", price: "$39.99", img: "/1.jpg" },
    { name: "Classic something", price: "$39.99", img: "/2.jpg" },
    { name: "Classic something", price: "$39.99", img: "/3.jpg" },
    { name: "Classic something", price: "$39.99", img: "/4.jpg" },
    { name: "Classic something", price: "$39.99", img: "/5.jpg" },
  ];

  return (
    <ScrollReveal>
    <section>
      <div className="flex flex-col space-y-10 container mx-auto py-10">
        {/* text & buttons */}
        <div className=" flex flex-col lg:flex-row gap-5 justify-between items-center">
          {/* text */}
          <div className="max-w-[500px] flex-1">
            <h2 className="h2 capitalize">Discover fashion</h2>
            <p className="p">
              Dive into a world of fashion innovation at Klothink. Our carefully
              curated collections bring together the latest trends and timeless
              classics, ensuring you find the perfect pieces for every occasion.
            </p>
          </div>
          {/* buttons */}
          <div className="flex-1">
            <button className="btn bg-yellow-300 hover:bg-yellow-600 capitalize">
              View all Products
            </button>
          </div>
        </div>
        {/* items */}
        <div className="space-y-10">
          {/* text, buttons */}
          <div className="space-y-3 flex flex-col lg:flex-row items-center justify-between">
            {/* text */}
            <div className="flex-1 flex gap-5 uppercase">
              <p>all</p>
              <p>menswaear</p>
              <p>womenswear</p>
              <p>kidswear</p>
            </div>
            {/* buttons */}
            <div className="space-x-5">
              <button className="uppercase btn">casual</button>
              <button className="uppercase btn">formal</button>
            </div>
          </div>
          {/* img container */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 lg:px-0">
            {/* data */}
            {productsData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col flex-wrap cursor-pointer"
              >
                {/* img */}
                <div className="h-[300px] lg:h-[500px]  overflow-hidden relative group rounded-xl">
                  <img
                    src={item.img}
                    alt="product.img"
                    className="h-fit md:h-full w-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                  />
                  <span className="absolute -bottom-5 -right-5 bg-white p-10 z-[1] rounded-full "></span>
                  <span className="z-[2] absolute bottom-0 right-0 text-3xl bg-yellow-300 group-hover:bg-yellow-600 p-2 rounded-full transition-all duration-300">
                    <AiFillShopping className="z-50" />
                  </span>
                </div>
                {/* text */}
                <div className="my-3">
                  <p className="p">{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
};

export default Products;
