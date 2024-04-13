// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//swiper modules
import { FreeMode, Pagination, EffectCoverflow } from "swiper/modules";

// react icons
import { FaQuoteLeft } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Mr. Gwen Ryan",
      msg: "thanks woow nice.",
      img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/393.jpg",
      title: "patient",
    },
    {
      name: "Eda",
      msg: "thanks woow nice.",
      img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/306.jpg",
      title: "customer",
    },
    {
      name: "Dr. Sherri Fahey",
      msg: "thanks woow nice.",
      img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/918.jpg",
      title: "doctor",
    },
    {
      name: "Irma Bode",
      msg: "thanks woow nice.",
      img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/255.jpg",
      title: "Regional Factors Specialist",
    },
    {
      name: "Miss Casey Bartoletti",
      msg: "thanks woow nice.",
      img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/597.jpg",
      title: "Global Web Agent",
    },
    {
      name: "Gladys Bode",
      msg: "thanks woow nice.",
      img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/856.jpg",
      title: "Human Solutions Designer",
    },
    {
      name: "William Gorczany",
      msg: "thanks woow nice.",
      img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1097.jpg",
      title: "Senior Functionality Director",
    },
  ];

  return (
    <ScrollReveal>
    <section>
      <div className="flex flex-col justify-center items-center container mx-auto mb-5 py-10 space-y-5 ">
        {/* text */}
        <div className="flex flex-col text-center items-center container mx-auto ">
          <h1 className="h1">
            Customers Love.
            <hr className="max-w-[100%] bg-blue-600 m-auto" />
          </h1>
          <p>
            Our customers are the heartbeat of our brand. Explore the heartfelt
            testimonials shared by those who have experienced the magic of our
            company.
          </p>
        </div>
        {/* --------------------------slider------------------------------- */}
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={"auto"}
          freeMode={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, EffectCoverflow]}
          className="h-full w-full container mx-auto"
        >
          {testimonialsData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col justify-between shadow-lg">
                {/*----------people,name,title-------------------- */}
                <div className="flex-1 flex gap-5 items-center space-y-3 px-3 py-[6px]">
                  <div className=" max-w-[80px]">
                    {/* people */}
                    <img
                      src={item.img}
                      alt="img"
                      className=" rounded-full object-cover"
                    />
                  </div>
                  {/* name */}
                  <h3 className="h3 capitalize">{item.name}</h3>
                  {/* title */}
                  <p className="capitalize">{item.title.title}</p>
                </div>
                {/* ------------------msg------------------ */}
                <div className="bg-blue-100 flex-1 flex flex-col items-center px-3 py-[6px] rounded-md capitalize">
                  <p className="text-3xl text-red-800/30 self-center">
                    <FaQuoteLeft />
                  </p>
                  <p className="my-5">{item.msg}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </ScrollReveal>
  );
};

export default Testimonials;
