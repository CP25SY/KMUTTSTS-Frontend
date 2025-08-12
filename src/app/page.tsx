import Sidebar from "@/components/Sidebar";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f6f6fa]">
      <div className="mx-auto flex max-w-[1280px] gap-4 px-4 py-4">
        <Sidebar />
      </div>
    </div>
  );
}
