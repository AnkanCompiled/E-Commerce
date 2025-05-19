import { Profile_Asset, Search_Asset, Shopping_Asset } from "@/assets";
import Link from "next/link";

export default function NavbarComponent() {
  return (
    <nav className="flex justify-between h-[60px]">
      <div className="flex items-center space-x-4">
        <Link href={"/"} className="font-bold text-3xl px-4 font-mono">
          ECom
        </Link>
        <div className="flex h-full">
          {["men", "women", "explore", "sale"].map((item, index) => (
            <Link
              className="relative flex items-center h-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:bg-neutral-600 hover:after:h-[5px] after:transition-all after:duration-150"
              key={index}
              href={item}
            >
              <span className="px-4 uppercase font-semibold text-neutral-600 gap-4">
                {item}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <div className="group space-x-4 px-4 flex items-center rounded-lg border-[1px] border-[#ccc] bg-[#eee] focus-within:bg-white">
          <Search_Asset color="#aaa" size="24px" />
          <input
            className="h-[35px] w-[20vw] text-sm focus:ring-0 focus:outline-0"
            placeholder="Search for t-shirts, jeans and more"
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center">
        {Object.entries({
          profile: <Profile_Asset />,
          cart: <Shopping_Asset />,
        }).map(([key, value], index) => (
          <Link
            className="relative px-4 flex items-center h-full hover:bg-neutral-200 duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:bg-neutral-600 hover:after:h-[5px] after:transition-all after:duration-150"
            key={index}
            href={key}
          >
            {value}
          </Link>
        ))}
      </div>
    </nav>
  );
}
