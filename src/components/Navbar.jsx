import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  return (
    <div className=" bg-gray-900">
      <nav className="flex justify-between items-center w-11/12 mx-auto p-4">
        <div className="text-2xl">Logo</div>
        <div className="flex gap-2 ">
          <Link
            className="btn border lg:py-2 py-1 px-2 lg:px-4 rounded"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="btn border lg:py-2 py-2 px-4 lg:px-4 rounded"
            href={"/profile"}
          >
            Profile
          </Link>
          {user ? (
            <>
              <Link
                className="btn border lg:py-2 py-2 px-4 lg:px-4 rounded"
                href={"/api/auth/logout"}
              >
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link
                className="btn border lg:py-2 py-2 px-4 lg:px-4 rounded"
                href={"/api/auth/login"}
              >
                Sign In
              </Link>
              <Link
                className="btn border lg:py-2 py-2 px-4 lg:px-4 rounded"
                href={"/api/auth/register"}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
