import Navbar from "../components/Navbar";
import CustomCarousal from "../components/Carousal";
import Footer from "../components/Footer";

const About = () => {
  const CarousalData = [
    "https://www.efficientindia.com/img/other/ngo.png",
    "https://rajivgandhingo.wordpress.com/wp-content/uploads/2017/12/about-us-bal-utsav-bangalore-india.jpg",
    "https://assets.codepen.io/32795/poster.png",
  ];

  return (
    <div>
      <Navbar />
      <div id="about-us" className="flex flex-col items-center px-4">
        <h1
          className="absolute z-20 text-[var(--primary-color)] m-2 text-4xl pt-4 font-extrabold tracking-wide"
        >
          About Us
        </h1>
        <div className="mt-24 max-w-5xl text-left space-y-8">
          <p className="text-[1.20rem] md:text-[1.35rem] leading-relaxed text-gray-800">
            Welcome to <span className="font-semibold">Community-Call-Organization</span>,
            a purpose-driven institution committed to empowering individuals and strengthening communities.
            Our foundation is built on integrity, social responsibility, and a long-term vision
            to create meaningful and measurable impact.
          </p>

          <p className="text-[1.20rem] md:text-[1.35rem] leading-relaxed text-gray-800">
            Since our inception, we have worked tirelessly to address critical societal challenges across
            education, healthcare, and environmental sustainability. Through innovative programs and
            collaborative initiatives, we strive to create equitable opportunities for individuals from all
            backgrounds, ensuring that progress is both inclusive and sustainable.
          </p>

          <p className="text-[1.20rem] md:text-[1.35rem] leading-relaxed text-gray-800">
            Our work is guided by a simple belief: positive change begins with collective effort.
            With the support of volunteers, partners, and community leaders, we continue to build
            solutions that are scalable, impactful, and aligned with the evolving needs of society.
          </p>

          <p className="text-[1.20rem] md:text-[1.35rem] leading-relaxed text-gray-800">
            We invite you to join us in advancing our mission and contributing to a more resilient,
            compassionate, and progressive future. Together, we can make a lasting difference that
            transcends generations.
          </p>
        </div>
      </div>

      <CustomCarousal title={"Our Journey"} images={CarousalData} />
      <Footer />
    </div>
  );
};

export default About;
