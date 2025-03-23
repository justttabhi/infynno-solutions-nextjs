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
import {  Calendar1, Search } from "lucide-react";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { getDateWiseData } from "@/helpers/api";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

async function fetchPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json()
}

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
  const [activeDate, setActiveDate] = useState(new Date()); // Default to today

  // Generate 7 dates starting from today
  const dates = generateDates();

  // const data1 = [
  //   { name: 'Live', country: 'Span 2-1 USA' },
  //   { name: '13:40', country: 'Japan - Canada' },
  //   { name: '18:20', country: 'Gnk - UK' }
  // ];
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getDateWiseData("2025-04-12")
  });
  // Log loading, error, and data state for debugging
  console.log("Loading:", isLoading);
  console.log("Error:", error);
  if (data) {
    console.log("Data received:", data);  // Ensure data is logged when available
  }

  const openCalendar = (e) => {
    return (<>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </>)
  }
  return (
    <>
      {/* Grid container */}
      <div className="grid grid-rows-2 gap-4 p-0" style={{ paddingTop: "0" }}>

        {/* Row 1: Image */}
        <div className=" row-span-2 rounded-lg bg-img">

        </div>

        {/* Row 2: Division with 4 rows */}
        <Card className=" shadow-lg rounded-lg text-[#FFFFFF]" style={{ backgroundColor: "#222222" }}>
          <CardHeader>
            <div className="flex justify-between space-x-4" style={{ alignItems: "baseline" }}>
              <div className="flex text-center">
                <CardTitle>
                  <a href="#" className="block py-2 px-4 rounded-lg bg-[#303030] shadow-md transition-all">
                    <span style={{ color: "#C3CC5A" }}>Live</span> [0]
                  </a>
                </CardTitle>
              </div>
              <div className="flex-4 text-center">
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
                <CardTitle> <a href="#" className="block py-2 px-4 rounded-lg bg-[#303030] shadow-md hover:shadow-lg hover:bg-gray-50 transition-all">
                  <select name="cars" id="cars">
                    <option value="">All Matches</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </a></CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2 justify-center mt-4">
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
                  <Calendar1 onClick={openCalendar} />
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
                    <th colSpan={4} className="px-6 py-3  font-medium text-left">World - FIFA Women's World Cup <b style={{ color: "#303030" }}>(Quarter Final)</b></th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {data?.data?.map((match, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-[#303030]' : 'bg-[#222222]'}
                    >
                      {/* <td className="px-6 py-3">{match.name}</td> */}
                      <td className="px-6 py-3">{new Date(match.starting_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                      <td className="px-6 py-3">{match.name.split(' vs ')[0]}</td>
                      <td className="px-6 py-3">{match.result_info ? match.result_info : 'N/A'}</td>
                      <td className="px-6 py-3">{match.name.split(' vs ')[1]}</td>
                    </tr>
                  ))}
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
