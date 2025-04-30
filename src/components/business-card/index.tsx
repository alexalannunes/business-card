import { Card, CardContent } from "@/components/ui/card";
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
import { JsonLine } from "./json-line";

interface BusinessCardProps {
  name: string;
  title: string;
  email: string;
  link: string;
}

// compound components
// Header
// Toolbar
// code
// * numbers
// * json
export function BusinessCard({ email, link, name, title }: BusinessCardProps) {
  return (
    <Card className="w-full max-w-md overflow-hidden border-zinc-700 bg-zinc-800 text-zinc-100 p-0 shadow-2xl">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div className="flex flex-col">
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
          </div>

          <div className="bg-zinc-900 p-4 font-[family-name:var(--font-fira-code-mono)] text-sm text-left">
            <div className="flex">
              <div className="mr-4 flex flex-col text-right text-zinc-600">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
              </div>
              <div className="flex-1">
                <div className="text-zinc-400">{"{"}</div>
                <JsonLine prop="name" value={name} />
                <JsonLine prop="title" value={title} />
                <JsonLine prop="email" value={email} />
                <JsonLine prop="link" value={link} isLast />
                <div className="text-zinc-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
