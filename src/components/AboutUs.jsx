// icons
import { AiFillBulb,AiFillStar } from "react-icons/ai";
import ScrollReveal from "./ScrollReveal";
const AboutUs = () => {
  const aboutData = [
    {
      title: "Passionate Craftsmanship",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dolore.",
      icon: <AiFillStar/> ,
    },
    {
      title: "Global Inspiration",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dolore.",
      icon: <AiFillBulb />,
    },
    {
      title: "Fashion Forward",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dolore.",
      icon: <AiFillStar/>,
    },
    {
      title: "Empowering Your Style",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dolore.",
      icon: <AiFillBulb />,
    },
    {
      title: "Customer-Centric Approach",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dolore.",
      icon: <AiFillStar/>,
    },
    {
      title: "Sustainable Practices",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dolore.",
      icon: <AiFillBulb />,
    },
  ];

  return (
    <ScrollReveal>
    <section className="bg-yellow-300 wave-y">
      <div className="flex flex-col container mx-auto gap-5 py-10">
        {/* text */}
        <div className="mb-3">
          <h1 className="h1">The Experience</h1>
          <p className="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias non
            aliquid accusamus dolores esse eligendi sint commodi quasi. Nihil,
            sequi. Impedit soluta repudiandae aliquam minima.
          </p>
        </div>
        {/* box container  */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 bg-green-600/50 p-2 rounded-xl ">
          {aboutData.map((item, index) => (
            <div key={index} className="bg-orange-800/20 rounded-lg px-3 py-2">
              <h2 className="text-[20px] font-[600] flex items-center gap-x-3">
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </h2>
              <p className="text-md">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
};

export default AboutUs;
