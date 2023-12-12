import Image from "next/image";
import spicon from "../../assets/images/logo.png";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div>
      <div className="w-[80px] bg-white h-screen text-center shadow-sm">
        <div className="flex flex-col items-center pt-2">
          <Link href={"/dashboard/"}>
            <Image width={50} src={spicon} alt="icon" />
          </Link>
          <h2 className="text-sm font-semibold">SPADMIN</h2>
          <Link href={"/dashboard/task"} className="my-5">
            <BsListTask size={32} />
          </Link>
          <Link href={"/dashboard/task/create"} className="my-5">
            <AiOutlineAppstoreAdd size={32} />
          </Link>
          <Link href={"/dashboard/"} className="my-5">
            <IoSettingsOutline size={32} />
          </Link>
          <Link href={"/logout/"} className="my-5">
            <RiLogoutCircleLine size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
}
