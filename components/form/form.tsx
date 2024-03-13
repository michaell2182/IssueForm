
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import helpdesk from "../../public/marvin-meyer-SYTO3xs06fU-unsplash.jpg";

export function Form() {
  return (
    <div className="flex h-screen w-full bg-[#030712]">

      <div className="flex w-1/2 flex-col p-16">
        <h1 className="text-4xl font-bold text-white inline-block">Having An Issue?</h1>
        <p className="mt-4 mb-8 text-lg text-gray-400 ">
          Please describe your issue in as much detail as possible. We will get
          back to you as soon as possible.
        </p>
        <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="full-name" className="">Full Name</Label>
              <Input className="w-full dark:bg-gray-800" id="full-name" placeholder="Name:" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact">Contact</Label>
              <Input className="w-full dark:bg-gray-800" id="contact" placeholder="Telephone Or Email:" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
          <Select>
            <SelectTrigger
              className="w-full  dark:bg-gray-800"
              id="department"
              style={{ color: "#9ca3af" }}
              
            >
              <SelectValue placeholder="Where Do You Need Help?" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="floor1">Floor 1</SelectItem>
              <SelectItem value="floor2">Floor 2</SelectItem>
              <SelectItem value="floor3">Floor 3</SelectItem>
            </SelectContent>
          </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
            <Label htmlFor="issue-title">Title Of Issue</Label>
            <Input
              className="w-full  dark:bg-gray-800"
              id="issue-title"
              placeholder="What's The Issue?:"
            />
            </div>
            <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger
                className="w-full  dark:bg-gray-800"
                id="category"
                style={{ color: "#9ca3af" }}
              >
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="software">Software Issue: Email,Word,Outlook ect</SelectItem>
                <SelectItem value="hardware">Hardware Issue: Computer,Phone ect</SelectItem>
                <SelectItem value="accessories">Accessories: Charger,Keyboard,Mouse ect</SelectItem>
                <SelectItem value="request">Item Requests</SelectItem>
              </SelectContent>
            </Select>
            </div>
          </div>
          <Textarea
            className="w-full min-h-[100px]  dark:bg-gray-800"
            id="description"
            placeholder="Description"
          />
          <Button>Get in touch</Button>
        </form>
      </div>
      <div className="w-1/2 p-4 opacity-60">
        <img
          src={helpdesk.src}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
