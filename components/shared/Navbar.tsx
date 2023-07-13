import Link from "next/link";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const user = true;
  return (
    <header>
      <nav>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">CRC</a>
          </div>
          <div className="mr-8">
            <ul className="flex space-x-6">
              <Link href="/">Home</Link>
              <Link href="/">About</Link>
              <Link href="/">Services</Link>
              <Link href="/">Contact</Link>
            </ul>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div>
                  <FaUser className="w-ful text-[40px]" />
                  {user && (
                    <ul
                      tabIndex={0}
                      className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </a>
                      </li>
                      <li>
                        <a>Settings</a>
                      </li>
                      <li>
                        <a>Logout</a>
                      </li>
                    </ul>
                  )}
                </div>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
