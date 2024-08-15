import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="translate-x-[100%] h-full w-[300px] bg-orange-500 fixed z-50 right-0">
      <div className="px-2 flex justify-between items-center">
        <div>
          <h1>Logo Here</h1>
        </div>
        <div>
          <img src="/Cross.png" alt="Cancel" />
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
  );
};

export default Sidebar;
