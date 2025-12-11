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

  // const marquee = () => {
  //   let text = document.querySelector(".movableText");
  //   let textWidth = text.offsetWidth;
  //   let containerWidth = text.parentElement.offsetWidth;
  //   let start = containerWidth - 1300;
  //   let end = -textWidth;
  //   let duration = (textWidth + containerWidth) * 10;
  //   text.animate(
  //     [
  //       { transform: `translateX(${start}px)` },
  //       { transform: `translateX(${end}px)` },
  //     ],
  //     {
  //       duration: duration,
  //       iterations: Infinity,
  //       easing: "linear",
  //     }
  //   );
  //   text.addEventListener("mouseenter", () => {
  //     text.style.animationPlayState = "paused";
  //   });
  //   text.addEventListener("mouseleave", () => {
  //     console.log("mouse left");
  //     text.style.animation = "none";
  //     text.style.animationPlayState = "running";
  //   });
  // };

  // useEffect(() => {
  //   marquee();
  // }, []);

  return (
    <div>
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20 space-y-16 text-gray-800">

        {/* Introduction */}
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


          <div className="absolute flex justify-around -bottom-32 z-20">
            {cardData.map((card, index) => (
              <div
                className={`w-[250px] h-[250px] text-white relative ${card.bgColor} flex flex-col justify-center items-center p-4 gap-2
              hover:bg-transparent transition-all duration-300 ease-in-out
              `}
                key={card.title}
              >
                <div
                  className="w-full p-0 m-0 bg-gray-100 absolute -z-20 pt-12"
                  style={{
                    backgroundImage: `url("${card.bgImage}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                  }}
                />
                <h2 className="text-2xl font-bold">{card.title}</h2>
                <p className="text-lg text-center p-2">{card.description}</p>
                <span className="bg-yellow-500 "></span>
                <span className="bg-purple-500 "></span>
                <span className="bg-pink-500 "></span>
                <Button
                  style={{
                    fontSize: "20px",
                    fontWeight: "300",
                  }}
                  className={`!px-4 !py-4 hover:!text-white  hover:!backdrop-blur-sm hover:!${buttonColors[index]}`}
                  ghost
                  shape="round"
                >
                  Donate Now
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Are */}
        <div className="space-y-3 pt-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-900">
            Who We Are
          </h2>
          <p className="text-[1.18rem] md:text-[1.26rem] leading-[1.85]">
            Rooted in compassion and guided by strong community values, we work every day to
            uplift, empower, and stand beside individuals in need. Whether someone seeks
            emotional support, recovery assistance, or a safe, understanding space, we walk
            with them—every step of the way.
          </p>
        </div>

        {/* What We Do */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-900">
            What We Do
          </h2>

          <div className="space-y-10">

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Support for Children & Youth
              </h3>
              <p className="text-[1.15rem] md:text-[1.25rem] leading-[1.85] mt-1">
                We provide emotional support, mentorship, and safe environments for young
                individuals navigating trauma, instability, or difficult life circumstances.
                Every child deserves safety, stability, and the opportunity to grow.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Drug & Alcohol Addiction Support
              </h3>
              <p className="text-[1.15rem] md:text-[1.25rem] leading-[1.85] mt-1">
                Our recovery services include counselling, relapse prevention strategies,
                and wellness programs aimed at rebuilding strength, confidence,
                and long-term stability.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Mental Health Assistance
              </h3>
              <p className="text-[1.15rem] md:text-[1.25rem] leading-[1.85] mt-1">
                We offer confidential counselling, wellness workshops, and restorative
                healing spaces for individuals experiencing anxiety, depression, or
                emotional distress.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Healing & Wellness Sessions
              </h3>
              <p className="text-[1.15rem] md:text-[1.25rem] leading-[1.85] mt-1">
                Through guided meditation, mindfulness practices, community circles,
                and spiritual wellness sessions, we help individuals seeking balance,
                clarity, and inner peace.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Shelter & Homelessness Support
              </h3>
              <p className="text-[1.15rem] md:text-[1.25rem] leading-[1.85] mt-1">
                We provide shelter, warm meals, essential supplies, and supportive
                pathways for individuals experiencing homelessness in Calgary. No one
                is left behind.
              </p>
            </div>

          </div>
        </div>

        {/* Commitment */}


        {/* Join Us */}


      </section>




      {/* <div className="w-full overflow-hidden  my-12 flex flex-col justify-center items-center gap-6">
        <h1 className="text-6xl  w-[200%] flex movableText">
          Over 1 billion people in the world are living in poverty. You can be
          the change in their lives. Donate now.
        </h1>
        <h3 className="text-3xl text-center text-[var(--text-color)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
        </h3>
      </div> */}

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
          {/* <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-900">
              Join Us in Making a Difference
            </h2>
            <p className="text-[1.18rem] md:text-[1.26rem] leading-[1.85]">
              Whether you are seeking help, looking to volunteer, or hoping to partner with us,
              we welcome you wholeheartedly. Together, we can strengthen our community and
              create meaningful, lasting impact—one act of kindness at a time.
            </p>
          </div> */}
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
          {/* <h3 className="text-3xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
          </p> */}
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

      <div className="w-full flex flex-row justify-center items-center gap-20 my-16">
        {/* <img
          src="https://www.shutterstock.com/image-vector/ngo-organization-black-glyph-icon-260nw-1795132267.jpg"
          className="w-1/4 border-2 border-black"
        /> */}
        {/* <div className="flex flex-col justify-center items-center gap-6 w-1/3">
          <div className="">
            <h3 className="text-xl font-medium">
              Lorem ipsum dolor sit amet nec.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam nec.
            </p>
          </div>
          <div className="">
            <h3 className="text-xl font-medium">
              Lorem ipsum dolor sit amet nec.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam nec.
            </p>
          </div>
          <div className="">
            <h3 className="text-xl font-medium">Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam nec.
            </p>
          </div>
        </div> */}
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

      {/* <div className="w-full flex flex-col justify-center items-center gap-6 my-16 relative p-4">
        <div
          style={{
            backgroundImage: `url("https://media.istockphoto.com/id/1439764294/photo/paint-brush-stroke-blue-on-white-background.jpg?s=612x612&w=0&k=20&c=MUinl2YlJiYFcX05EJ05tDWvqJMC5WKuO6aicxX2_F4=")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "grayscale(1) brightness(1.5)",
            width: "100%",
            height: "100%",
          }}
          className="absolute -z-10 "
        />
         <h1 className="text-4xl font-bold text-[var(--text-color)]">
          Anyone can be a volunteer
        </h1>
        <h1 className="text-2xl font-bold">Join us now</h1>
        <p className="text-lg text-center w-1/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
        </p> 
        <Button
          style={{
            fontSize: "20px",
            fontWeight: "300",
          }}
          className={`!px-4 !py-4`}
          size="large"
          shape="round"
        >
          Join Now
        </Button> 
      </div> */}

      <Footer />
    </div>
  );
};

export default Home;
