"use client";
import Image from "next/image";
import banner from "../../assets/img/banner.png"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarGroup, SidebarGroupContent, SidebarInput } from "@/components/ui/sidebar";
import { Calendar1, CalendarIcon, Search } from "lucide-react";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { getDateWiseData } from "@/helpers/api";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";


const generateDates = () => {

  const today = new Date();
  const dates = [];
  // Start 2 days before today
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 2);

  for (let i = 0; i < 6; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    dates.push(date);
  }

  return dates;
};

// Format the date to show only the day and date (e.g., Mon 12)
const formatDate = (date) => {
  return date.toLocaleDateString('en-GB', {
    weekday: 'long', // e.g., Mon, Tue
    day: '2-digit',   // e.g., 12, 13
  });
};

export default function Home() {
  const [showStatusBar, setShowStatusBar] = useState(true)
  const [showActivityBar, setShowActivityBar] = useState(false)
  const [showPanel, setShowPanel] = useState(false)
  const [activeDate, setActiveDate] = useState(new Date()); // Default to today
  const [date, setDate] = useState('')

  // Generate 7 dates starting from today
  const dates = generateDates();


  const { data, error, isLoading } = useQuery({
    queryKey: ["posts", activeDate.toISOString().split('T')[0]],
    queryFn: () => getDateWiseData(activeDate.toISOString().split('T')[0])
  });
  // Log loading, error, and data state for debugging
  console.log("Loading:", isLoading);
  console.log("Error:", error);
  if (data) {
    console.log("Data received:", data);  // Ensure data is logged when available
  }

  const openCalendar = (e) => {
    return (<>

    </>)
  }
  return (
    <>
      {/* Grid container */}
      <div className="grid grid-rows-2 gap-4 p-0" style={{ paddingTop: "0" }}>

        {/* Row 1: Image */}
        <div className="w-80 md:w-32 lg:w-full row-span-2 rounded-lg bg-img">

        </div>

        {/* Row 2: Division with 4 rows */}
        <Card className="w-80 md:w-32 lg:w-full shadow-lg rounded-lg text-[#FFFFFF]" style={{ backgroundColor: "#222222" }}>
          <CardHeader>
            <div className="flex flex-wrap justify-between space-x-4" style={{ alignItems: "baseline" }}>
              <div className="flex text-center">
                <CardTitle>
                  <a href="#" className="block py-2 px-4 rounded-lg bg-[#303030] shadow-md transition-all">
                    <span style={{ color: "#C3CC5A" }}>Live</span> [0]
                  </a>
                </CardTitle>
              </div>
              <div className="flex-4 w-48 md:w-32 lg:w-full text-center">
                <CardDescription>
                  <form>
                    <SidebarGroup className="py-0">
                      <SidebarGroupContent className="relative">
                        <Label htmlFor="search" className="sr-only">
                          Search
                        </Label>
                        {/* Sidebar Input for Search with focus and hover styles */}
                        <SidebarInput
                          id="search"
                          placeholder="Search"
                          className="pl-8 text-center focus:ring-2 focus:ring-blue-500"
                        />
                        {/* Search Icon with hover effect */}
                        <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50 hover:opacity-75 transition-opacity duration-200" />
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </form>
                </CardDescription>
              </div>
              <div className="flex text-center">
                <CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="bg-[#303030]">All Matches</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">

                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          Celtic vs Kilmarnock

                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Dundee United vs St. Johnstone

                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Motherwell vs Hearts
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          St. Mirren vs Ross County

                        </DropdownMenuItem>

                      </DropdownMenuGroup>


                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex  space-x-2 justify-center mt-4">
              {/* Render the tabs for 7 dates */}
              {dates.map((date, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDate(date)} style={{ backgroundColor: "#303030" }}
                  className={`px-3 py-1 rounded-lg text-sm font-semibold
            ${activeDate.toDateString() === date.toDateString()
                      ? 'bg-blue-500 text-[#C3CC5A]'
                      : 'bg-gray-200 text-white'} 
            hover:bg-blue-400 transition-colors`}
                >
                  {formatDate(date)}
                </button>
              ))}
              <a href="#" className="block py-2 px-4 rounded-lg bg-[#303030] shadow-md transition-all">
                <span style={{ color: "#C3CC5A" }}>
                  <Popover>
                    <PopoverTrigger asChild>
                      {/* <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      > */}
                      <CalendarIcon />
                      {/* {date ? format(date, "PPP") : <span>Pick a date</span>} */}
                      {/* </Button> */}
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={activeDate}
                        onSelect={setActiveDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </span>
              </a>
            </div>

          </CardContent>
          <CardContent>
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="min-w-full table-auto  text-sm text-[#FFFFFF]">
                {/* Table Header */}
                <thead className="bg-[#000000] text-white">
                  <tr>
                    <th colSpan={4} className="px-6 py-3  font-medium text-left">World - FIFA Men's World Cup <b style={{ color: "#303030" }}>(Quarter Final)</b></th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {data?.data ? (<>
                    { data?.data?.map((match, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-[#303030]' : 'bg-[#222222]'}
                      >
                        {/* <td className="px-6 py-3">{match.name}</td> */}
                        <td className="px-6 py-3">{new Date(match.starting_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                        <td className="px-6 py-3">{match.name}</td>
                        <td className="px-6 py-3">{match.result_info ? match.result_info : 'N/A'}</td>
                        {/* <td className="px-6 py-3">{match.name.split(' vs ')[1]}</td> */}
                      </tr>
                    ))}
                  </>
                  ):(<div className="p-3" style={{textAlign:"center"}}>No match played at this date.</div>)}

                </tbody>



              </table>
            </div>

          </CardContent>

        </Card>




        {/* <div className="grid grid-rows-4 gap-4">
          <div className="bg-gray-100 p-4 shadow-md rounded-lg">
            <h3 className="font-semibold">Row 1</h3>
            <p>Content for the first row inside the division.</p>
          </div>
          <div className="bg-gray-100 p-4 shadow-md rounded-lg">
            <h3 className="font-semibold">Row 2</h3>
            <p>Content for the second row inside the division.</p>
          </div>
          <div className="bg-gray-100 p-4 shadow-md rounded-lg">
            <h3 className="font-semibold">Row 3</h3>
            <p>Content for the third row inside the division.</p>
          </div>
          <div className="bg-gray-100 p-4 shadow-md rounded-lg">
            <h3 className="font-semibold">Row 4</h3>
            <p>Content for the fourth row inside the division.</p>
          </div>
        </div> */}

      </div>
    </>
  );
}
