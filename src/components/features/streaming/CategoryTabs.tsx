"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

interface Category {
  id: string;
  name: string;
  isActive?: boolean;
}

const categories: Category[] = [
  { id: "games", name: "Games", isActive: true },
  { id: "movies", name: "Movies" },
];

const gameCategories = [
  "Valorant",
  "Minecraft", 
  "PUBG",
  "Mobile Legend",
  "Free Fire",
  "Assasin Creed",
  "Battlegrounds",
  "Fortnite",
  "Brawl Stars"
];

export default function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState("games");
  const [activeGame, setActiveGame] = useState("Valorant");

  return (
    <div className="space-y-4">
      {/* Main Categories */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-foreground">Categories</span>
        <div className="flex gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "secondary"}
              size="sm"
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === category.id
                  ? "bg-yellow-400 text-black hover:bg-yellow-500"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {/* More Options */}
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full p-2 text-muted-foreground hover:text-foreground"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Game Categories */}
      {activeCategory === "games" && (
        <div className="flex flex-wrap gap-2">
          {gameCategories.map((game) => (
            <Button
              key={game}
              variant={activeGame === game ? "default" : "outline"}
              size="sm"
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors",
                activeGame === game
                  ? "bg-black text-white hover:bg-black/90"
                  : "border-border bg-background text-foreground hover:bg-muted"
              )}
              onClick={() => setActiveGame(game)}
            >
              {game}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
