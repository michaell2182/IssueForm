"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import helpdesk from "../../public/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Separator } from "@/components/ui/separator";

export function Form() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      contact: "",
      email: "",
      department: "",
      title: "",
      category: "",
      description: "",
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, "Name Must Be At Least 2 Characters")
        .max(50)
        .required("Full Name Is Required"),
      contact: Yup.string()
        .min(2, "Contact Information Is Required")
        .required("Contact Information Is Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("A Valid Email Is Required"),
      department: Yup.string()
        .min(2, "Required")
        .required("Department Is Required"),
      title: Yup.string().min(2, "Required").required("Title Is Required"),
      category: Yup.string()
        .oneOf(
          ["SOFTWARE", "HARDWARE", "ACCESSORIES", "REQUEST"],
          "Invalid category selection"
        )
        .required("Category is required"),
      description: Yup.string().min(2).required("Required"),
    }),

    onSubmit: async (values) => {
      try {
        const response = await fetch("/api/add-post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }

        // Handle successful form submission
        console.log("Form submitted successfully:", values);
      } catch (error) {
        // Handle form submission errors
        console.error("Error submitting form:", error);
      }
    },
  });

  return (
    <div className="flex h-screen w-full  ">
      <div className="flex w-1/2 flex-col p-16">
        <h1 className="text-2xl font-bold  inline-block">Having An Issue?</h1>
        <p className="mt-2 mb-4 text-md text-gray-600 ">
          Please describe your issue in as much detail as possible. We will get
          back to you as soon as possible.
        </p>
        <Separator style={{ backgroundColor: "gray-600" }} />

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="full-name"
                className={` ${
                  formik.touched.fullName && formik.errors.fullName
                    ? "text-red-400"
                    : ""
                }`}
              >
                {formik.touched.fullName && formik.errors.fullName
                  ? formik.errors.fullName
                  : "Full Name"}
              </Label>
              <Input
                className="w-full"
                id="full-name"
                placeholder="Full Name:"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                name="fullName"
                style={{ backgroundColor: "white", border: "1px solid gray" }}
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="contact"
                className={` ${
                  formik.touched.contact && formik.errors.contact
                    ? "text-red-400"
                    : ""
                }`}
              >
                {formik.touched.contact && formik.errors.contact
                  ? formik.errors.contact
                  : "Contact"}
              </Label>
              <Input
                className="w-full"
                id="contact"
                placeholder="Telephone Or Email:"
                value={formik.values.contact}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ backgroundColor: "white", border: "1px solid gray" }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className={` ${
                  formik.touched.email && formik.errors.email
                    ? "text-red-400"
                    : ""
                }`}
              >
                {" "}
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "Email"}
              </Label>
              <Input
                className="w-full"
                id="email"
                placeholder="Your Email Address:"
                value={formik.values.email}
                onChange={formik.handleChange}
                style={{ backgroundColor: "white", border: "1px solid gray" }}
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="department"
                className={` ${
                  formik.touched.department && formik.errors.department
                    ? "text-red-400"
                    : ""
                }`}
              >
                {formik.touched.department && formik.errors.department
                  ? formik.errors.department
                  : "Department"}
              </Label>
              <Input
                className="w-full"
                id="department"
                placeholder="Where Do You Need Help?"
                value={formik.values.department}
                onChange={formik.handleChange}
                style={{ backgroundColor: "white", border: "1px solid gray" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="issue-title"
                className={` ${
                  formik.touched.title && formik.errors.title
                    ? "text-red-400"
                    : ""
                }`}
              >
                {" "}
                {formik.touched.title && formik.errors.title
                  ? formik.errors.title
                  : "Issue Title"}
              </Label>
              <Input
                className="w-full  "
                id="issue-title"
                placeholder="What's The Issue?:"
                value={formik.values.title}
                onChange={formik.handleChange}
                name="title"
                style={{ backgroundColor: "white", border: "1px solid gray" }}
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="category"
                className={` ${
                  formik.touched.category && formik.errors.category
                    ? "text-red-400"
                    : ""
                }`}
              >
                {formik.touched.category && formik.errors.category
                  ? formik.errors.category
                  : "Category"}
              </Label>
              <div className="w-full  size-10  rounded-md ">
                <select
                  id="category"
                  name="category"
                  className="w-full text-sm p-3 rounded-md bg-black"
               
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  style={{ backgroundColor: "white", border: "1px solid gray" }}
                >
                  <option className="font-serif" value=""></option>
                  <option className="font-serif" value="SOFTWARE">
                    Software Issue: Email, Word, Outlook, etc.
                  </option>
                  <option className="font-serif" value="HARDWARE">
                    Hardware Issue: Computer, Phone, etc.
                  </option>
                  <option className="font-serif" value="ACCESSORIES">
                    Accessories: Charger, Keyboard, Mouse, etc.
                  </option>
                  <option className="font-serif" value="REQUEST">
                    Item Requests
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              className="w-full min-h-[100px]  "
              id="description"
              placeholder="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              name="description"
              style={{ backgroundColor: "white", border: "1px solid gray" }}
            />
          </div>
          <Button
            style={{ backgroundColor: "black", color: "white" }}
            type="submit"
            className="hover: ease-in duration-300 hover:scale-105 "
          >
            Submit <ArrowRightIcon style={{ height: 14, width: 20 }} />{" "}
          </Button>
        </form>
      </div>
      <div className="w-1/2 p-4 ">
        <img
          src={helpdesk.src}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
