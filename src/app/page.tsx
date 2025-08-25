import Sidebar from "@/components/shared/Sidebar";
import SearchBar from "@/components/shared/SearchBar";
import { CategoryTabs, StreamGrid } from "@/components/features/streaming";

export default function Page() {
  // Use theme context for dynamic styling
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex max-w-[1280px] gap-4 px-4 py-4">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 space-y-6 ml-[6rem]">
          {/* Top Bar */}
          <SearchBar />
          
          {/* Category Tabs */}
          <CategoryTabs />
          
          {/* Stream Grid */}
          <StreamGrid />
        </div>
      </div>
    </div>
  );
}