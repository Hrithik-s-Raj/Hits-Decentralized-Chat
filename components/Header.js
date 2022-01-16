import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-gradient-to-t from-black  shadow-sm border-b-4 text-pink-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        {" "}
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            src="https://links.papareact.com/3pi"
            objectFit="cover"
            layout="fill"
            className="rounded-full "
          />
        </div>
        <div className="text-left col-span-4 lg:text-center">
          <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
            <div>
              <Avatar logoutOnPress />
            </div>

            {/* Avatar */}
            {/* Welcome Message */}
            {/* Username */}

            {/* Chnage user name Component */}
          </div>
          <h1 className="text-3xl">Welcome to Hits Metaverse</h1>
          <h2 className="text-5xl font-bold truncate">
            {user.get("username")}
          </h2>

          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
