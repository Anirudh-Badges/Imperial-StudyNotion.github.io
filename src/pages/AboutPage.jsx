import { Heading } from "../Components/cores/Homepage/Heading";
import Quote from "../Components/cores/About/Quote";
import about1 from "../assets/Images/aboutus1.webp";
import about2 from "../assets/Images/aboutus2.webp";
import about3 from "../assets/Images/aboutus3.webp";
import foundingStory from "../assets/Images/FoundingStory.png";
import Footer from "../Components/Comman/Footer";
import GetInTouchForm from "../Components/cores/About/GetInTouchForm";


const visitors = [
    {
        title:"5K",
        name:"Active Students",
    },
    {
        title:"10+",
        name:"Mentors",
    },
    {
        title: "200+",
        name:"Courses",
    },
    {
        title: "50+",
        name: "Awards",
    }

]
const AboutPage = () => {
  return (
    <div>
      {/* section 1 */}
      <div className="bg-richblack-800 h-[550px] relative">
        <div className="w-11/12 mx-auto max-w-maxContent flex flex-col item-center justify-center gap-y-2 ">
          <h1 className="text-center text-richblack-200 mt-14">About</h1>
          <div className=" text-4xl text-richblack-25 mt-5 font-semibold flex flex-col items-center">
            Driving innovation in Online Education for a{" "}
            <Heading text={"Bright future"} />
          </div>
          <p className="w-[75%] text-[18px] text-richblack-200 p-7 text-center mx-auto">
            StudyNotion is at the forefront of driving innovation in Online
            education. We are passionate about creating a bright future by
            offering cutting-edges courses, levelaging emerging technologies,
            and nuturing a vibrant learning community.
          </p>
        </div>
        <div className=" absolute left-20 right-20 -bottom-20  flex items-center justify-center gap-x-6 ">
          <img src={about1} alt="" />
          <img src={about2} alt="" />
          <img src={about3} alt="" />
        </div>
      </div>

      {/* section 2 */}
      <section className="border-b-richblack-700 border-b-2">
        <div className="h-[150px]"></div>
        <div className="w-11/12 mx-auto max-w-maxContent flex justify-center items-center gap-10 text-richblack-500">
          <Quote />
        </div>
      </section>

      {/* section 3 */}
      <section>
        <div className="w-11/12 mx-auto max-w-maxContent flex items-center justify-center gap-10 text-richblack-500">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-[50%] flex flex-col my-24 gap-10 p-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>
            <div>
              <div></div>
              <img
                src={foundingStory}
                alt=""
                className="shadow-[-20px_-20px_20px_0px] shadow-[#FC6767] mr-10"
                width={550}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section-4  */}
      <section>
        <div className="w-11/12 mx-auto max-w-maxContent flex  items-center justify-center gap-8 text-richblack-500 mb-6">
            <div className="flex lg:flex-row flex-col items-center justify-between gap-10 ">
                

                {/* left-section  */}
                <div className="lg:w-[50%] flex flex-col gap-2 p-10">
                    <h1 className=" bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold text-4xl mb-3 ">Our Vision</h1>
                    <p className="text-base font-medium text-richblack-300 lg:w-[85%]">
                    With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
                    </p>
                </div>

                {/* right-section  */}
                <div className="flex flex-col lg:w-[50%] gap-2 p-10 ">
                    <h1 className="text-4xl mb-3 "> <Heading text={"Our Mission"} /></h1>
                    <p className="text-base font-medium text-richblack-300 ">
                    our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* section-5  */}
      <section className="bg-richblack-800 h-[150px] mb-5">
        <div className="w-11/12 mx-auto max-w-maxContent flex items-center justify-center gap-10 text-richblack-500">
            <div className="flex items-center justify-between gap-24 lg:flex-row flex-col">
                {
                    visitors.map((ele,i) => {
                        return(
                            <div key={i} className="flex flex-col items-center justify-center p-11 gap-2">
                                <h1 className="text-white text-3xl font-semibold">{ele.title}</h1>
                                <span className="font-semibold">{ele.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </section>
      {/* GetinTouch  */}
      <GetInTouchForm
        title={"Get In Touch"}
        description={"Wed love to here for you, Please fill out this form."}
      />
      <div className="h-[100px]"></div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
