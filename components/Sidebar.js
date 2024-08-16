import React, { useContext } from "react";
import Link from "next/link";
import { SidebarContext } from "@/context/SidebarContext"; // Import the SidebarContext

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useContext(SidebarContext); // Use the context

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={toggleSidebar} // Close sidebar when clicking on the backdrop
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px]  bg-black bg-opacity-50 backdrop-blur-sm  z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent sidebar from closing when clicking inside
      >
        <div className="px-3 flex justify-between items-center">
          <div>
            <Link href="/">
              <h1 className="text-white">Logo Here</h1>
            </Link>
          </div>
          <div>
            <img
              src="/Cross.png"
              alt="Cancel"
              className="cursor-pointer"
              onClick={toggleSidebar} // Close the sidebar when the cross is clicked
            />
          </div>
        </div>
        <div>
          <ul className="pl-3 text-white cursor-pointer flex flex-col gap-8 mt-10">
            <Link href="/destination">
              <li className="flex justify-start gap-3 items-center">
                <img width={25} src="/destination.png" alt="destination" />
                <span>Destination</span>
              </li>
            </Link>

            <Link href="/stories">
              <li className="flex justify-start gap-3 items-center">
                <img width={25} src="/story.png" alt="story" />
                <span>Stories</span>
              </li>
            </Link>

            <Link href="/reviews">
              <li className="flex justify-start gap-3 items-center">
                <img width={25} src="/review.png" alt="review" />
                <span>Reviews</span>
              </li>
            </Link>

            <Link href="/login">
              <li className="flex justify-start gap-3 items-center">
                <img width={20} src="/logIn.png" alt="log In" />
                <span>Log In</span>
              </li>
            </Link>

            <Link href="/">
              <li className="flex justify-start gap-3 items-center">
                <img width={25} src="/logOut.png" alt="log Out" />
                <span>Log Out</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
