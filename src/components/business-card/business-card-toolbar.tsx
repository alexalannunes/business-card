import {
  Code,
  Copy,
  Download,
  File,
  Folder,
  MoreHorizontal,
  RotateCcw,
  Square,
} from "lucide-react";

export function BusinessCardToolbar() {
  return (
    <div className="flex items-center space-x-4 border-b border-t bg-zinc-900/30 border-zinc-900 py-3 px-4">
      <File className="h-4 w-4 text-zinc-300" />
      <Copy className="h-4 w-4 text-zinc-300" />
      <Folder className="h-4 w-4 text-zinc-300" />
      <Download className="h-4 w-4 text-zinc-300" />
      <RotateCcw className="h-4 w-4 text-zinc-300" />
      <Code className="h-4 w-4 text-zinc-300" />
      <div className="flex-1"></div>
      <Square className="h-4 w-4 text-zinc-300" />
      <MoreHorizontal className="h-4 w-4 text-zinc-300" />
    </div>
  );
}
