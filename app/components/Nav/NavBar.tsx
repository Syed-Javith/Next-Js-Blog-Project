import Link from "next/link"
import NavItems from "./NavItems"

export default function NavBar() {
    return (
        <nav className="bg-gray-800 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="flex items-center justify-between h-16">
                    <div
                        className="flex items-center">
                        <Link href="/">
                           <img src={"https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"} 
                           alt="logo"
                           height={40}
                           width={40} 
                           className="mr-4"
                           />
                        </Link>
                        {/* <span className="text-white text-2xl font-bold mx-auto">Blog Website</span> */}
                    </div>
                    <div className="flex items-center">
                        {/* <Link href="/blogs" className="text-white hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Home
                        </Link>
                        <Link href="/blogs/add-blog" className="text-white hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Create Blog
                        </Link> */}
                        <NavItems />
                    </div>
                </div>
            </div>
        </nav>
    )
}