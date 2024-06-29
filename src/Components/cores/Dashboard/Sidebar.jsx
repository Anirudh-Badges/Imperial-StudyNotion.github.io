import React from 'react'
// import { sidebarLinks } from "../../../data/dashboard-links"
import { useSelector } from 'react-redux';
import  SidebarLink from "../Dashboard/SidebarLink";
import { VscSignOut } from "react-icons/vsc"
import ConfirmationModal from "../../Comman/ConfirmationModal"

const Sidebar = () => {

    const { loading: authLoading } = useSelector((state) => state.auth);
    const { user, loading: profileLoading } = useSelector((state) => state.profile);
    const [confirmationModal, setConfirmationModal] = useState(null)

    if (profileLoading || authLoading) {
        return (
            <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
                <div className="spinner"></div>
            </div>
        )
    }

    return (
        <div>
            <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10">
                <div className="flex flex-col">
                    {sidebarLinks.map((link) => {
                        if (link.type && user?.accountType !== link.type) return null
                        return (
                            <SidebarLink key={link.id} link={link} iconName={link.icon} />
                        )
                    })}
                </div>
                <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />
                <div className="flex flex-col">
                    <SidebarLink
                        link={{ name: "Settings", path: "/dashboard/settings" }}
                        iconName="VscSettingsGear"
                    />
                    <button
                        onClick={() =>
                            setConfirmationModal({
                                text1: "Are you sure?",
                                text2: "You will be logged out of your account.",
                                btn1Text: "Logout",
                                btn2Text: "Cancel",
                                btn1Handler,
                                btn2Handler,
                            })
                        }
                        className="px-8 py-2 text-sm font-medium text-richblack-300"
                    >
                        <div className="flex items-center gap-x-2">
                            <VscSignOut className="text-lg" />
                            <span>Logout</span>
                        </div>
                    </button>
                </div>
            </div>
            {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
        </div>
    )
}

export default Sidebar