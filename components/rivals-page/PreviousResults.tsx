"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";

export default function PreviousResults() {

  const [selectedWeek, setSelectedWeek] = useState("week-5");
  const [displayedWeek, setDisplayedWeek] = useState(selectedWeek);

  const handleSelectChange = (e: any) => {
    setSelectedWeek(e.target.value);
    setDisplayedWeek(selectedWeek);
  };

  return (
    <>
      <div className="text-white md:hidden m-2 border border-transparent rounded-full focus:outline-none active:outline-none">
        <select
          name="cars"
          id="cars"
          className="rounded-full w-full px-2 py-1 mb-4 bg-black text-2xl text-center"
          onChange={handleSelectChange}
          
        >
          <option value="week-5">Week 5</option>
          <option value="week-4">Week 4</option>
          <option value="week-3">Week 3</option>
          <option value="week-2">Week 2</option>
          <option value="week-1">Week 1</option>
        </select>
        <Table className="mb-4">
          {/* <TableCaption>A table of previous time trial results.</TableCaption> */}
          <TableHeader>
            <TableRow className="border">
              <TableHead className="text-lg md:text-xl">Pos</TableHead>
              <TableHead className="w-content text-lg md:text-xl">Driver</TableHead>
              <TableHead className="text-lg md:text-xl">Time</TableHead>
              <TableHead className="text-right w-content text-lg">PI</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border">
            <TableRow className="bg-green-400/40">
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Pablo </TableCell>
              <TableCell>01:24.546</TableCell>
              <TableCell className="text-right">700</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2</TableCell>
              <TableCell>Riley</TableCell>
              <TableCell>01:24.785</TableCell>
              <TableCell className="text-right">699</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Connor</TableCell>
              <TableCell>01:25.006</TableCell>
              <TableCell className="text-right">700</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Connor</TableCell>
              <TableCell>01:25.006</TableCell>
              <TableCell className="text-right">700</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Connor</TableCell>
              <TableCell>01:25.006</TableCell>
              <TableCell className="text-right">700</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Connor</TableCell>
              <TableCell>01:25.006</TableCell>
              <TableCell className="text-right">700</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Connor</TableCell>
              <TableCell>01:25.006</TableCell>
              <TableCell className="text-right">700</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="hidden md:flex flex-col gap-2 m-2 w-full mb-10">
        <div className="text-white mb-3 px-4 py-2 text-center">
          <select onChange={handleSelectChange} className="text-center bg-black min-w-[50%] border px-4 py-3 rounded-full text-xl">
            <option value={'week-5'}>Week 5</option>
            <option value={'week-4'}>Week 4</option>
            <option value={'week-3'}>Week 3</option>
            <option value={'week-2'}>Week 2</option>
            <option value={'week-1'}>Week 1</option>
          </select>
        </div>
        <div className="text-white min-h-40 flex-grow">

        <Table className="">
          {/* <TableCaption>A table of previous time trial results.</TableCaption> */}
          <TableHeader>
            <TableRow className="border">
              <TableHead className="text-lg md:text-xl">Pos</TableHead>
              <TableHead className="w-content text-lg md:text-xl">Driver</TableHead>
              <TableHead className="text-lg md:text-xl">Time</TableHead>
              <TableHead className="w-content text-lg">PI</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border text-xl">
            <TableRow className="bg-green-400/40">
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Pablo </TableCell>
              <TableCell>01:24.546</TableCell>
              <TableCell className="">700</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2</TableCell>
              <TableCell>Riley</TableCell>
              <TableCell>01:24.785</TableCell>
              <TableCell >699</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Connor</TableCell>
              <TableCell>01:25.006</TableCell>
              <TableCell >700</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Connor</TableCell>
              <TableCell>01:25.006</TableCell>
              <TableCell >700</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Connor</TableCell>
              <TableCell>01:25.006</TableCell>
              <TableCell >700</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Connor</TableCell>
              <TableCell>01:25.006</TableCell>
              <TableCell >700</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Connor</TableCell>
              <TableCell>01:25.006</TableCell>
              <TableCell >700</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </div>
      </div>
    </>
  );
}
