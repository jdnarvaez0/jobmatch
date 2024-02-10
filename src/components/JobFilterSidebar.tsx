<<<<<<< HEAD
import { jobTypes } from "@/lib/job-types";
import prisma from "@/lib/prisma";
import { jobFilterSchema } from "@/lib/validation";
=======
import prisma from "../app/lib/prisma";
>>>>>>> 68455b78f8496cf6e987445b9b65b623a8533e55
import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Select from "./ui/select";
<<<<<<< HEAD
import { JobFilterValues } from "@/lib/validation";
import FormSubmitButton from './FormSubmitButton';
=======
import { jobTypes } from "../app/lib/job-types";
import { jobFilterSchema } from "../app/lib/validation";
>>>>>>> 68455b78f8496cf6e987445b9b65b623a8533e55

async function filterJobs(formData: FormData) {
  "use server";

  const values = Object.fromEntries(formData.entries());

  const { q, type, location, remote } = jobFilterSchema.parse(values);

  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(type && { type }),
    ...(location && { location }),
    ...(remote && { remote: "true" }),
  });

<<<<<<< HEAD
  redirect(`/?${searchParams.toString()}`);
}

interface JobFilterSidebarProps {
  defaultValues: JobFilterValues;
}

export default async function JobFilterSidebar({
  defaultValues,
}: JobFilterSidebarProps) {
=======
  redirect(`/jobs?${searchParams}`);
}

export default async function JobFilterSidebar() {
>>>>>>> 68455b78f8496cf6e987445b9b65b623a8533e55
  const distinctLocations = (await prisma.job
    .findMany({
      where: { approved: true },
      select: { location: true },
      distinct: ["location"],
    })
    .then((locations) =>
      locations.map(({ location }) => location).filter(Boolean),
    )) as string[];

  return (
    <aside className="sticky top-0 h-fit rounded-lg border bg-background p-4 md:w-[260px]">
      <form action={filterJobs}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="q">Search</Label>
<<<<<<< HEAD
            <Input
              id="q"
              name="q"
              placeholder="Title, company, etc."
              defaulValue={defaultValues.q}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="type">Type</Label>
            <Select
              id="type"
              name="type"
              defaultValue={defaultValues.type || ""}
            >
=======
            <Input id="q" name="q" placeholder="Title, company, etc." />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="type">Type</Label>
            <Select id="type" name="type" defaultValue="">
>>>>>>> 68455b78f8496cf6e987445b9b65b623a8533e55
              <option value="">All types</option>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="location">Location</Label>
<<<<<<< HEAD
            <Select
              id="location"
              name="location"
              defaultValue={defaultValues.location || ""}
            >
=======
            <Select id="location" name="location" defaultValue="">
>>>>>>> 68455b78f8496cf6e987445b9b65b623a8533e55
              <option value="">All locations</option>
              {distinctLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <input
<<<<<<< HEAD
              id="remote"
              name="remote"
              type="checkbox"
              className="scale-125 accent-black"
              defaultChecked={defaultValues.remote}
            />
            <Label htmlFor="remote">Remote jobs</Label>
          </div>
          <FormSubmitButton className="w-full">
            Filter jobs
          </FormSubmitButton>
=======
              type="checkbox"
              name="remote"
              id="remote"
              className="scale-125 accent-black"
            />
            <Label htmlFor="remote">Remote jobs</Label>
          </div>
          <Button type="submit" className="w-full">
            Filter jobs
          </Button>
>>>>>>> 68455b78f8496cf6e987445b9b65b623a8533e55
        </div>
      </form>
    </aside>
  );
}
