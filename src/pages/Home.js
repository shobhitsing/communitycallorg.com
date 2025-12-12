import Navbar from "../components/Navbar";
import { Button, Carousel } from "antd";
import { useEffect } from "react";
import "@splidejs/react-splide/css";
import "../styles/Home.css";
import CustomCarousal from "../components/Carousal";
import MidContent from "../components/MidContent";
import Footer from "../components/Footer";

const Home = () => {
  const cardData = [
    {
      title: "Child Education",
      description: "We provide free education to children",
      bgColor: "bg-red-500/75",
      bgImage: "/images/img1.jpg",
    },
    {
      title: "Refugee Support",
      description: "We provide food and shelter to refugees",
      bgColor: "bg-blue-500/75",
      bgImage:
        "/images/img2.jpg",
    },
    {
      title: "Food Distribution",
      description: "We provide food to the homeless",
      bgColor: "bg-green-500/75",
      bgImage:
        "/images/child9.jpg",
    },
  ];

  const buttonColors = [
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-gray-500",
  ];


  return (
    <div>
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 pt-6 pb-20 space-y-16 text-gray-800">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-900">
            Welcome To Our Organization
          </h2>
          <p className="text-[1.18rem] md:text-[1.26rem] leading-[1.85]">
            We are a Calgary-based non-profit committed to supporting children, individuals
            experiencing addiction, and anyone navigating mental health challenges. Our mission
            is to create a safe, inclusive, and compassionate environment where people can heal,
            rebuild, and rediscover hope.
          </p>
        </div>
        <div
          className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] h-[110vh] flex justify-center items-center mb-44"
          style={{
            backgroundImage: `url("https://aicdn.picsart.com/2147cba2-1fe6-4970-b8b3-f49783f9ddba.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
        </div>

        <div>

          {/* WHO WE ARE */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-900 mb-2">
              Who We Are
            </h2>
            <p className="text-[1.18rem] md:text-[1.26rem] leading-[1.75]">
              Rooted in compassion and guided by strong community values, we work every day to
              uplift, empower, and stand beside individuals in need. Whether someone seeks
              emotional support, recovery assistance, or a safe, understanding space, we walk
              with them—every step of the way.
            </p>
          </div>

          {/* WHAT WE DO */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-900">
              What We Do
            </h2>

            {/* ITEM LIST */}
            <div>

              <div className="mb-6 pt-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Support for Children & Youth
                </h3>
                <p className="text-[1.15rem] md:text-[1.25rem] leading-[1.75]">
                  We provide emotional support, mentorship, and safe environments for young
                  individuals navigating trauma, instability, or difficult life circumstances.
                  Every child deserves safety, stability, and the opportunity to grow.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Drug & Alcohol Addiction Support
                </h3>
                <p className="text-[1.15rem] md:text-[1.25rem] leading-[1.75]">
                  Our recovery services include counselling, relapse prevention strategies,
                  and wellness programs aimed at rebuilding strength, confidence,
                  and long-term stability.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Mental Health Assistance
                </h3>
                <p className="text-[1.15rem] md:text-[1.25rem] leading-[1.75]">
                  We offer confidential counselling, wellness workshops, and restorative
                  healing spaces for individuals experiencing anxiety, depression, or
                  emotional distress.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Healing & Wellness Sessions
                </h3>
                <p className="text-[1.15rem] md:text-[1.25rem] leading-[1.75]">
                  Through guided meditation, mindfulness practices, community circles,
                  and spiritual wellness sessions, we help individuals seeking balance,
                  clarity, and inner peace.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Shelter & Homelessness Support
                </h3>
                <p className="text-[1.15rem] md:text-[1.25rem] leading-[1.75]">
                  We provide shelter, warm meals, essential supplies, and supportive
                  pathways for individuals experiencing homelessness in Calgary. No one
                  is left behind.
                </p>
              </div>

            </div>
          </div>
        </div>

      </section>
      <div
        className={`w-full  text-white relative bg-stone-800/80 flex flex-col justify-evenly items-center p-4 gap-2
               transition-all duration-300 ease-in-out
              `}
        style={{
          height: "calc(60vh - 120px)",
        }}
      >
        <div
          className="w-full p-0 m-0 bg-gray-100 absolute -z-20 "
          style={{
            backgroundImage: 'url("/images/img1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
          }}
        />
        <div>
          <h2 className="text-4xl font-bold text-center">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg text-center mt-4">
            Whether you are seeking help, looking to volunteer, or hoping to partner with us,
            we welcome you wholeheartedly. Together, we can strengthen our community and
            create meaningful, lasting impact—one act of kindness at a time.
          </p>
        </div>
        <Button
          style={{
            fontSize: "20px",
            fontWeight: "300",
          }}
          className={`!px-4 !py-4`}
          size="large"
          shape="round"
        >
          Donate Now
        </Button>
      </div>

      <div className="w-full flex  justify-center items-center gap-6 my-16">
        <div className="w-1/3 relative">
          <span className="videoBehind"></span>
          <video
            className="videoElement "
            id="video"
            controls="controls"
            preload="none"
            width="600"
            poster="https://assets.codepen.io/32795/poster.png"
          >
            <source
              id="mp4"
              src="http://media.w3.org/2010/05/sintel/trailer.mp4"
              type="video/mp4"
            />
            <span>Your browser does not support the video tag.</span>
          </video>
        </div>
        <div className="text-left w-1/3">
          <h1 className=" text-6xl">Watch our video</h1>
          <Button
            style={{
              fontSize: "20px",
              fontWeight: "300",
            }}
            className={`!px-4 !py-4`}
            ghost
            size="large"
            shape="round"
          >
            Read More
          </Button>
        </div>
      </div>

      <div
        className={`w-full  text-white relative bg-stone-800/80 flex flex-col justify-evenly items-center p-4 gap-2
               transition-all duration-300 ease-in-out
              `}
        style={{
          height: "calc(60vh - 120px)",
        }}
      >
        <div
          className="w-full p-0 m-0 bg-gray-100 absolute -z-20 "
          style={{
            backgroundImage: 'url("/images/img2.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
          }}
        />
        <h2 className="text-4xl font-bold text-center mb-2">Our Commitment</h2>
        <p className="text-lg text-center leading-snug">
          We are committed to building a healthier, safer, and more compassionate community.
          Every individual who reaches out to us is met with dignity, respect, and unwavering
          support—regardless of their background or circumstances.
        </p>
      </div>

      <MidContent data={cardData} />
      <CustomCarousal
        images={[
          "https://www.efficientindia.com/img/other/ngo.png",
          "https://rajivgandhingo.wordpress.com/wp-content/uploads/2017/12/about-us-bal-utsav-bangalore-india.jpg",
          "https://assets.codepen.io/32795/poster.png",
          "https://rajivgandhingo.wordpress.com/wp-content/uploads/2017/12/about-us-bal-utsav-bangalore-india.jpg",
          "https://assets.codepen.io/32795/poster.png",
          "https://www.efficientindia.com/img/other/ngo.png",
        ]}
      />
      <Footer />
    </div>
  );
};

export default Home;
