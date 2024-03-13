/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IiF7LeiDGFe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const Sidebar = () => (
  <aside className="w-64 overflow-auto border-r border-zinc-200 dark:border-zinc-800">
    <nav className="flex flex-col gap-4 p-4">
      <h2 className="text-lg font-semibold text-zinc-500 dark:text-zinc-400">
        Filters
      </h2>
      <div className="space-y-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a metric" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="users">Users</SelectItem>
            <SelectItem value="sessions">Sessions</SelectItem>
            <SelectItem value="bounce_rate">Bounce Rate</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a date range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="last_7_days">Last 7 days</SelectItem>
            <SelectItem value="last_30_days">Last 30 days</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </nav>
  </aside>
);

const Main = () => (
  <main className="flex-1 overflow-auto p-4">
    <div className="grid gap-4">
      <div className="h-96 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
      <div className="h-96 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
    </div>
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      <div className="h-64 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
      <div className="h-64 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
      <div className="h-64 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
    </div>
  </main>
);

export default function Dashboard() {
  return (
    <div className="flex h-screen w-screen flex-col bg-white dark:bg-zinc-900">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

// import { unstable_noStore as noStore } from "next/cache";
// import Link from "next/link";

// import { CreatePost } from "~/app/_components/create-post";
// import { api } from "~/trpc/server";

// export default async function Home() {
//   noStore();
//   const hello = await api.post.hello.query({ text: "from tRPC" });

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
//       <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
//         <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
//           Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
//         </h1>
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
//           <Link
//             className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
//             href="https://create.t3.gg/en/usage/first-steps"
//             target="_blank"
//           >
//             <h3 className="text-2xl font-bold">First Steps →</h3>
//             <div className="text-lg">
//               Just the basics - Everything you need to know to set up your
//               database and authentication.
//             </div>
//           </Link>
//           <Link
//             className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
//             href="https://create.t3.gg/en/introduction"
//             target="_blank"
//           >
//             <h3 className="text-2xl font-bold">Documentation →</h3>
//             <div className="text-lg">
//               Learn more about Create T3 App, the libraries it uses, and how to
//               deploy it.
//             </div>
//           </Link>
//         </div>
//         <div className="flex flex-col items-center gap-2">
//           <p className="text-2xl text-white">
//             {hello ? hello.greeting : "Loading tRPC query..."}
//           </p>
//         </div>

//         <CrudShowcase />
//       </div>
//     </main>
//   );
// }

// async function CrudShowcase() {
//   const latestPost = await api.post.getLatest.query();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
