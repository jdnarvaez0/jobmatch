<<<<<<< HEAD
import prisma from "@/lib/prisma";
import JobFilterSidebar from "../components/JobFilterSidebar";
import H1 from "@/components/ui/h1";
import JobResults from "@/components/JobResults";
import { JobListItem } from "@/components/JobListItem";
import { JobFilterValues } from "@/lib/validation";

interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
  };
}

export default async function Home({
  searchParams: { q, type, location, remote },
}: PageProps) {
  const filterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };
=======
import prisma from "./lib/prisma";
import JobListItem from "@/components/JobListItem";
import JobFilterSidebar from "../components/JobFilterSidebar";
>>>>>>> 68455b78f8496cf6e987445b9b65b623a8533e55

  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <H1>Developer Jobs</H1>
        <p className="text-muted-foreground">Find your dream job</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
<<<<<<< HEAD
        <JobFilterSidebar defaultValues={filterValues} />
        <JobResults filterValues={filterValues} />
=======
        <JobFilterSidebar />
        <div className="grow space-y-3">
          {jobs.map((job) => (
            <JobListItem key={job.id} job={job} />
          ))}
        </div>
>>>>>>> 68455b78f8496cf6e987445b9b65b623a8533e55
      </section>
    </main>
  );
}
