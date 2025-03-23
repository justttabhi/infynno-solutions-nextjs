"use client";
import { useState } from "react";
import {
    AudioWaveform,
    Bell,
    BookOpen,
    Bot,
    Cog,
    Command,
    Download,
    Frame,
    GalleryVerticalEnd,
    Home,
    House,
    LandPlot,
    LogOut,
    Menu,
    MessageCircle,
    Search,
    Settings2,
    Shield,
    SquareTerminal,
    User,
    Users,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { SidebarGroup, SidebarGroupContent, SidebarInput } from "@/components/ui/sidebar";
import { Label } from "@radix-ui/react-dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";



const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },

    navMain: [
        {
            title: "Followed Team",
            url: "#",
            icon: Shield,
            isActive: true,
            items: [
                { title: "History", url: "#" },
                { title: "Starred", url: "#" },
                { title: "Settings", url: "#" },
            ],
        },
        {
            title: "Followed Players",
            url: "#",
            icon: User,
            items: [
                { title: "Genesis", url: "#" },
                { title: "Explorer", url: "#" },
                { title: "Quantum", url: "#" },
            ],
        },
        {
            title: "Followed Grounds",
            url: "#",
            icon: LandPlot,
            items: [
                { title: "Introduction", url: "#" },
                { title: "Get Started", url: "#" },
                { title: "Tutorials", url: "#" },
                { title: "Changelog", url: "#" },
            ],
        },

    ],
    projects: [
        { name: "Home", url: "/home", icon: Home },
        { name: "Leader Board", url: "#", icon: Users },
        { name: "Ground", url: "#", icon: LandPlot },
        { name: "Chat", url: "#", icon: MessageCircle },
        { name: "Notification", url: "#", icon: Bell }
    ],
    projects2: [
        { name: "Settings", url: "/home", icon: Cog },
        { name: "Download the App", url: "#", icon: Download },

    ],
};

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [openSubmenu, setOpenSubmenu] = useState(null); // Track the currently open submenu

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Toggle submenu visibility
    const toggleSubmenu = (index) => {
        if (openSubmenu === index) {
            setOpenSubmenu(null); // Close the submenu if it's already open
        } else {
            setOpenSubmenu(index); // Open the clicked submenu
        }
    };

    const [searchTerm, setSearchTerm] = useState("");  // State to hold the search term

    // Handle input change
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Search term submitted:", searchTerm); // This is where you can handle the search logic
    };

    // Handle clearing the input field
    const handleClear = () => {
        setSearchTerm("");
    };

    return (
        <div>
            {/* Button to toggle sidebar */}
            <button
                className="md:hidden p-2 text-white"
                onClick={toggleSidebar}
            >
                <Menu/>
            </button>

            {/* Sidebar */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 md:bg-opacity-0 md:relative md:w-64 md:block transition-all ease-in-out duration-300 ${isOpen ? "block" : "hidden"
                    } md:block`}
            >
                <div
                    className={`absolute top-0 left-0 h-full w-64 p-4 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                        } md:translate-x-0 md:block`}
                >
                    {/* FOOTBALLSHURU Title */}
                    <h1
                        className="text-3xl text-center mb-6"
                        style={{ fontStyle: "italic" }}
                    >
                        <span className="font-bold">FOOTBALL</span>
                        <span style={{ color: "#C3CC5A" }}>SHURU</span>
                    </h1>

                    {/* Search Bar */}
                    <div className="flex items-center p-0 rounded-lg mb-6">
                        <form>
                            <SidebarGroup className="py-0">
                                <SidebarGroupContent className="relative" style={{ width: '110%' }}>
                                    <Label htmlFor="search" className="sr-only">
                                        Search
                                    </Label>
                                    {/* Sidebar Input for Search with focus and hover styles */}
                                    <SidebarInput
                                        id="search"
                                        placeholder="Search"
                                        className="pl-8 text-center focus:ring-2 focus:ring-blue-500"
                                        style={{ backgroundColor: '#303030' }}
                                    />
                                    {/* Search Icon with hover effect */}
                                    <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50 hover:opacity-75 transition-opacity duration-200" />
                                </SidebarGroupContent>
                            </SidebarGroup>
                        </form>
                    </div>

                    {/* Scrollable Sidebar Content */}
                    <ScrollArea className="h-100" style={{ width: '285px', position:'absolute' }}>
                        <ul>
                            {data.projects.map((project, index) => (
                                <li key={index} className="mb-4">
                                    <a
                                        href={project.url}
                                        className="block py-2 px-4 rounded hover:text-[#C3CC5A]"
                                    >
                                        <div className="flex items-center">
                                            <project.icon className="mr-2" />
                                            <span>{project.name}</span>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <hr style={{ border: '0', borderTop: "2px solid #333", margin: "20px 0" }} />

                        {/* Navigation for AppSidebar */}
                        {data.navMain.map((navItem, index) => (
                            <div key={index}>
                                {/* Main menu item */}
                                <button
                                    className="w-full text-left py-2 px-4 rounded hover:text-[#C3CC5A]"
                                    onClick={() => toggleSubmenu(index)}
                                >
                                    <div className="flex items-center">
                                        <navItem.icon className="mr-2" />
                                        <span>{navItem.title}</span>
                                    </div>
                                </button>

                                {/* Submenu */}
                                {openSubmenu === index && (
                                    <ul className="pl-6 mt-2">
                                        {navItem.items.map((item, subIndex) => (
                                            <li key={subIndex} className="mb-2">
                                                <a
                                                    href={item.url}
                                                    className="block py-2 px-4 rounded hover:text-[#C3CC5A]"
                                                >
                                                    {item.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                        <hr style={{ border: '0', borderTop: "2px solid #333", margin: "20px 0" }} />
                        <ul>
                            {data.projects2.map((project, index) => (
                                <li key={index} className="mb-4">
                                    <a
                                        href={project.url}
                                        className="block py-2 px-4 rounded hover:text-[#C3CC5A]"
                                    >
                                        <div className="flex items-center">
                                            <project.icon className="mr-2" />
                                            <span>{project.name}</span>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    {/* User Profile Section */}
                    <div style={{position:'relative',bottom:'0',padding: '0px 22px 0px 0px'}}>
                        <a href="#" className="block py-2 px-4 rounded-lg bg-[#303030] shadow-md hover:shadow-lg hover:bg-gray-50 transition-all">
                            <div className="flex items-center space-x-3">
                                {/* First Icon */}
                                <span className="text-xl text-gray-600 bg-[#C3CC5A] p-1 rounded-sm">
                                    <User />
                                </span>

                                {/* Username */}
                                <span className="flex-2">
                                    <div className="text-[#C3CC5A]">Username</div>
                                    <small>varun@</small>
                                </span>

                                {/* Second Icon */}
                                <span className="text-xl text-[#C3CC5A]">
                                    <LogOut />
                                </span>
                            </div>
                        </a>
                    </div>
                    </ScrollArea>

                </div>
            </div>
        </div>
    );
}
