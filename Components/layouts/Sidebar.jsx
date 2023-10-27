import { useState } from "react";
import Link from "next/link";
import { useRouter, useParams, } from 'next/router';
import { links, links2 } from "Data/links";
// import Logo from "./Logo";
// import { Line } from "components";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { id } = useParams();
  const location = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    location("/");
  };

  return (
    <div className={` sidebarw fixed
     c-black ml-[-20px] top-[-5px] overflow-y-auto overflow-x-hidden bottom-[14px] w-[159px] h-[100%] text-center items-center justify-center`}>
      <div>
        <div>
          {/* Logo */}
          <Link to="/" className="p-2 !opacity-100">
            {/* <Logo
              className="flex gap-8 text-sm items-center ml-[28px] justify-center flex-center-between"
              userimage="/tabnovel.svg"
              tabnoveltext="TabNovel"
            /> */}
          </Link>
          <div className="mt-5 ml-[45px] flex-items-center flex-justify-center">
            <div

              className={`w-[23rem] h-screen p-5 pt-8 mb-9 relative duration-300`}
            >
              <div className="my-35 sm:mt-[-40px] mx-[-8px] sm:h-[100%] h-[15%] w-[35%] md:h-auto align-center items-center justify-center rounded-[10px] shadow-bs2 w-full">
                {links.map(({ id, title, iconisActive, iconinActive, url, url2, }) => (
                  <Link
                    to={url}
                    key={id}
                    className="flex flex-row py-1 gap-x-3 align-center items-center justify-left w-full"
                  >
                    <div>
                      {location.pathname === `${url}` ||
                        location.pathname === `${url2}` ? (
                        <Line className="bg-primary mt-3 h-10 w-[4px]" />
                      ) : (
                        null
                      )}
                    </div>
                    <li
                      className={`flex rounded-md py-2 px-1 cursor-pointer text-black-300 text-sm items-center gap-x-4 w-full`}
                    >
                      {location.pathname === `${url}` ||
                        location.pathname === `${url2}` ? (
                        <>
                          <img src={`/sidebar/${iconisActive}.svg`} alt="" />
                          <span className={`origin-left text-primary ml-[-10px] text-[12px] duration-100`}>
                            {title}
                          </span>
                        </>
                      ) : (
                        <>
                          <img src={`/images/${iconinActive}.svg`} alt="" />
                          <span className={`origin-left ml-[-10px] text-[12px] duration-100`}>
                            {title}
                          </span>
                        </>
                      )}
                    </li>
                  </Link>
                ))}

                <br /><br /><br /><br />

                {links2.map(({ id, title, icon, url }) => (
                  <>
                    <Link
                      to={url}
                      key={id}
                      end="true"
                      className="px-2 py-1 flex-align-center gap-x-3"
                    >
                      <li
                        className={`flex rounded-md p-2 cursor-pointer hover:bg-white text-black-300 text-sm items-center gap-x-4`}
                      >
                        <img src={`/images/${icon}.svg`} />
                        <span className={`origin-left ml-[-10px] text-[12px] duration-100`}>
                          {title}
                        </span>
                      </li>
                    </Link>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div></div>
  );
};

export default Sidebar;
