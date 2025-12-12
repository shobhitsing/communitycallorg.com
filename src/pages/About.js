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
        <h1 className="absolute z-20 text-[var(--primary-color)] m-2 text-5xl pt-4 font-bold tracking-wide">
          About Us
        </h1>
        <div className="mt-28 max-w-5xl text-left space-y-14 text-gray-800">
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-wide text-gray-900">
              Who We Are
            </h2>
            <p className="text-[1.15rem] md:text-[1.28rem] leading-[1.9]">
              Community Call Organization is a Calgary-based, non-profit organization dedicated
              to supporting individuals and families facing life’s most difficult challenges.
              We uplift children in need, guide individuals battling addiction, provide mental
              health support, and offer shelter services to those experiencing homelessness.
            </p>
            <p className="text-[1.15rem] md:text-[1.28rem] leading-[1.9] mt-4">
              At Community Call Organization, we believe every person deserves safety, dignity,
              and an opportunity to heal.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-wide text-gray-900">
              Our Purpose
            </h2>
            <p className="text-[1.15rem] md:text-[1.28rem] leading-[1.9]">
              Our purpose is to bring hope, healing, and meaningful support to vulnerable
              individuals in our community. We focus on:
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2 text-[1.12rem] md:text-[1.25rem] leading-[1.85]">
              <li>Supporting children and youth facing emotional or family challenges</li>
              <li>Helping individuals recover from drug and alcohol addiction</li>
              <li>Providing mental health counselling and emotional support</li>
              <li>Offering spiritual and holistic healing sessions</li>
              <li>Assisting homeless individuals with shelter, food, and essential care</li>
            </ul>

            <p className="text-[1.15rem] md:text-[1.28rem] leading-[1.9] mt-4">
              We collaborate with counsellors, volunteers, and community partners to ensure
              every person receives compassionate and effective care.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-wide text-gray-900">
              Our Approach
            </h2>
            <p className="text-[1.15rem] md:text-[1.28rem] leading-[1.9]">
              We follow a holistic approach to healing—addressing emotional, mental, spiritual,
              and practical needs. Our programs include:
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2 text-[1.12rem] md:text-[1.25rem] leading-[1.85]">
              <li>Trauma-informed counselling</li>
              <li>Addiction recovery support</li>
              <li>Meditation, mindfulness, and spiritual healing</li>
              <li>Community wellness circles</li>
              <li>Emotionally safe healing spaces</li>
              <li>Shelter support and transitional guidance</li>
            </ul>

            <p className="text-[1.15rem] md:text-[1.28rem] leading-[1.9] mt-4">
              Every individual is welcomed with respect, confidentiality, and cultural sensitivity.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-wide text-gray-900">
              Our Vision
            </h2>
            <p className="text-[1.15rem] md:text-[1.28rem] leading-[1.9]">
              To build a compassionate Calgary where every child feels safe, every individual
              has access to healing, and every person—regardless of circumstances—can live with
              dignity, hope, and purpose.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-wide text-gray-900">
              Our Values
            </h2>

            <div className="space-y-4 text-[1.15rem] md:text-[1.28rem] leading-[1.9] text-gray-800">
              <p>
                <span className="font-semibold text-gray-900">Compassion – </span>
                We support individuals with empathy, patience, and genuine care.
              </p>

              <p>
                <span className="font-semibold text-gray-900">Respect – </span>
                We honour the dignity and experiences of every person we serve.
              </p>

              <p>
                <span className="font-semibold text-gray-900">Inclusivity – </span>
                We welcome everyone without judgment or discrimination.
              </p>

              <p>
                <span className="font-semibold text-gray-900">Healing – </span>
                We promote emotional, mental, and spiritual well-being through
                compassionate and holistic practices.
              </p>

              <p>
                <span className="font-semibold text-gray-900">Community – </span>
                We strengthen communities through connection, shared responsibility,
                and collective support.
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-wide text-gray-900">
              Why We Do What We Do
            </h2>

            <p className="text-[1.15rem] md:text-[1.28rem] leading-[1.9]">
              Every day, countless people in Calgary struggle with addiction, homelessness,
              trauma, and mental health challenges—often alone. Community Call Organization
              exists to change that.
            </p>

            <p className="text-[1.15rem] md:text-[1.28rem] leading-[1.9] mt-4">
              One child at a time.<br />
              One family at a time.<br />
              One life at a time.
            </p>
          </section>
        </div>
      </div>

      <CustomCarousal title={"Our Journey"} images={CarousalData} />
      <Footer />
    </div>
  );
};

export default About;
