"use client";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import helpdesk from "../../public/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import {ArrowRightIcon} from '@radix-ui/react-icons'


// const CategoryEnum = z.enum(['SOFTWARE', 'HARDWARE', 'ACCESSORIES', 'REQUEST', 'OTHER']);

// const schema = z.object({
//     fullName: z.string().min(1).max(255),
//     contact: z.string().min(1).max(255),
//     email: z.string().min(1).max(255),
//     department: z.string().min(1).max(255),
//     title: z.string().min(1).max(255),
//     category: CategoryEnum,
//     description: z.string().min(1),
// });

export function Form() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
  };

  return (
    <div className="flex h-screen w-full bg-[#030712]">
      <div className="flex w-1/2 flex-col p-16">
        <h1 className="text-4xl font-bold text-white inline-block">
          Having An Issue?
        </h1>
        <p className="mt-4 mb-8 text-lg text-gray-400 ">
          Please describe your issue in as much detail as possible. We will get
          back to you as soon as possible.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="full-name" className="">
                Full Name
              </Label>
              <Input
                className="w-full dark:bg-gray-800"
                id="full-name"
                placeholder="Name:"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact">Contact</Label>
              <Input
                className="w-full dark:bg-gray-800"
                id="contact"
                placeholder="Telephone Or Email:"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className="w-full dark:bg-gray-800"
                id="email"
                placeholder="Your Email Address:"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Input
                className="w-full dark:bg-gray-800"
                id="department"
                placeholder="Where Do You Need Help?"
              />
            </div>
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
              <div className="w-full dark:bg-gray-800 size-10  rounded-md ">
                <select
                  id="category"
                  name="category"
                  className="w-full text-sm p-3 rounded-md dark:bg-gray-800"
                  style={{ color: "#9ca3af" }}
                >
                  <option className="font-serif" value="software">
                    Software Issue: Email, Word, Outlook, etc.
                  </option>
                  <option className="font-serif" value="hardware">
                    Hardware Issue: Computer, Phone, etc.
                  </option>
                  <option className="font-serif" value="accessories">
                    Accessories: Charger, Keyboard, Mouse, etc.
                  </option>
                  <option className="font-serif" value="request">
                    Item Requests
                  </option>
                </select>
              </div>
            </div>
          </div>
          <Textarea
            className="w-full min-h-[100px]  dark:bg-gray-800"
            id="description"
            placeholder="Description"
          />
          <Button
            type="submit"
            className=" hover: ease-in duration-300 hover:scale-105 "
          >
            Submit <ArrowRightIcon style={{height: 14, width: 20}}/>{" "}
          </Button>
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
