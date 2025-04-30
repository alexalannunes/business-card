import { MoreHorizontal } from "lucide-react";

export function BusinessCardTitle() {
  return (
    <div className="flex items-center px-4 py-3">
      <div className="flex space-x-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <div className="flex-1 text-center text-sm font-medium -ml-[calc(var(--spacing)*6)]">
        Business Card.json
      </div>
      <MoreHorizontal className="h-4 w-4 text-zinc-300" />
    </div>
  );
}
