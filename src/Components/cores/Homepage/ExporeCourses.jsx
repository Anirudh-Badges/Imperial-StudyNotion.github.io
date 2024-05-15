import CoursesCard from "./CoursesCard"
import { HomePageExplore } from "../../../data/homepage-explore"
import {Heading} from './Heading';

const ExporeCourses = () => {
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
    </div>
  )
}

export default ExporeCourses
