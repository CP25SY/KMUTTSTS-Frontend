import Sidebar from "@/components/shared/Sidebar";
import SearchBar from "@/components/shared/SearchBar";

export default function Page() {
  // Use theme context for dynamic styling
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex max-w-[1280px] gap-4 px-4 py-4">
        {/* Top Bar */}
        <SearchBar />
        <Sidebar />
      </div>
    </div>
  );
}