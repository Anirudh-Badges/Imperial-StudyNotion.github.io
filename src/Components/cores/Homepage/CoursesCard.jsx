import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";
const CoursesCard = ({cardActive,currentCard}) => {
  return (
    <div>
      <div className={`w-[350px] lg:w-[30%] flex flex-col justify-center gap-6 ${
        cardActive ? 'bg-white shadow-[12px_12px_0_0] shadow-yellow-50' : 'bg-richblack-800'
      }text-richblack-25 h-[300px] box-border cursor-pointer`}>
        <div className="border-b border-richblack-400 border-dashed h-[80%] flex  flex-col gap-3">
            <div className={`
            ${cardActive ? 'text-richblack-900' : "bg-richblack-800 text-richblack-5 leading-[1.875rem]"}
            `}>

                {/* {heading}  */}
            </div>
            <div>
                {/* {paragraph} */}
            </div>
        </div>

        <div className={`flex justify-between items-center ${cardActive ? 'text-blue-300' : 'text-richblack-300'} `}>
            <div className="flex items-start justify-center">
                <HiUsers/>{" "}
                <p className="text-xl">Beginner</p>
            </div>
            <div className="flex items-center justify-center gap-3">
                <ImTree/>{" "}
            </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesCard
