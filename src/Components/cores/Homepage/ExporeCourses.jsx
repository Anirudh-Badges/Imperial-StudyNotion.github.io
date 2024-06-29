import CoursesCard from "./CoursesCard"
import { HomePageExplore } from "../../../data/homepage-explore"
import {Heading} from './Heading';
import { useState } from "react";

const tabsName = [
  "Free",
  "New to Coding",
  "Most Popular",
  "Skills Paths",
  "Career Paths",
]

const ExporeCourses = () => {

  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard , setCurrentCard ]= useState(HomePageExplore[0].courses.heading);
  
  return (
    <div>
      <div className=" my-10">
        <div className="text-4xl font-semibold text-center ">
          Unlock the
          <Heading text={"Power of Code"} />
        </div>
        <p className="text-center text-richblack-300 mt-3 ">
            Learn to Build Anything You Can Imagine
        </p>
      </div>


      <div>

      </div>

    </div>
  )
}

export default ExporeCourses
