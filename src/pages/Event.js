import Navbar from "../components/Navbar";
import CustomCarousal from "../components/Carousal";
import Footer from "../components/Footer";

const Event = () => {
  const CarousalData = [
    "https://www.efficientindia.com/img/other/ngo.png",
    "https://rajivgandhingo.wordpress.com/wp-content/uploads/2017/12/about-us-bal-utsav-bangalore-india.jpg",
    "https://assets.codepen.io/32795/poster.png",
    "https://rajivgandhingo.wordpress.com/wp-content/uploads/2017/12/about-us-bal-utsav-bangalore-india.jpg",
    "https://assets.codepen.io/32795/poster.png",
    "https://www.efficientindia.com/img/other/ngo.png",
  ];

  return (
    <div>
      <Navbar />
      <div id="recent-events" className="relative flex flex-col items-center px-4">
        <h1
          className="absolute z-20 text-[var(--primary-color)] m-2 text-4xl pt-4 font-extrabold tracking-wide"
        >
          Recent Events
        </h1>

        <div className="mt-24 max-w-5xl text-left">
          <p className="text-[1.20rem] md:text-[1.35rem] leading-relaxed text-gray-800">
            Our recent events reflect our continued commitment to community engagement,
            social development, and impactful initiatives. Each activity is designed to
            bring people together, inspire collaboration, and create meaningful change
            across the communities we serve.
          </p>
          <p className="text-[1.20rem] md:text-[1.35rem] mt-6 leading-relaxed text-gray-800">
            Through awareness drives, educational workshops, healthcare outreach, and
            environmental campaigns, we strive to address pressing social needs while
            empowering individuals to participate in collective progress. Every event
            stands as a testament to our mission of building a stronger and more
            inclusive future.
          </p>
        </div>
      </div>
      <CustomCarousal title={"Our Events"} images={CarousalData} />
      <Footer />
    </div>
  );
};

export default Event;
