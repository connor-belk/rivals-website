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

export default function PreviousResults() {
  return (
    <>
      <div className="text-white md:hidden m-2 border border-transparent rounded-full focus:outline-none active:outline-none">
        <select
          name="cars"
          id="cars"
          className="rounded-full w-full px-2 py-1 mb-4 bg-black text-2xl text-center"
        >
          <option value="week-5">Week 5</option>
          <option value="week-4">Week 4</option>
          <option value="week-3">Week 3</option>
          <option value="week-2">Week 2</option>
          <option value="week-1">Week 1</option>
        </select>
        <Table className="mb-4">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow className="border">
              <TableHead className=" text-xl">Pos</TableHead>
              <TableHead className="w-content text-xl">Driver</TableHead>
              <TableHead className=" text-xl">Time</TableHead>
              <TableHead className="text-right w-content text-lg">
                PI Rating
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-green-400/40 font-bold text-lg">
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

      <div className="hidden md:flex gap-2 m-2 w-full">
        <div className="bg-slate-400 min-h-40 w-[20%]">hehe</div>
        <div className="bg-slate-600 min-h-40 flex-grow max-w-[78%]">hehe</div>
      </div>
    </>
  );
}
