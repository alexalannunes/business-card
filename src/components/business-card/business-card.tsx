import { Card, CardContent } from "@/components/ui/card";

import { BusinessCardLineNumber } from "./business-card-line-number";
import { BusinessCardTitle } from "./business-card-title";
import { BusinessCardToolbar } from "./business-card-toolbar";
import { BusinessCardJsonCode } from "./business-card-json-code";

export interface BusinessCardProps {
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
            <BusinessCardTitle />
            <BusinessCardToolbar />
          </div>

          <div className="bg-zinc-900 p-4 font-[family-name:var(--font-fira-code-mono)] text-sm text-left">
            <div className="flex">
              <BusinessCardLineNumber />
              <BusinessCardJsonCode
                email={email}
                link={link}
                name={name}
                title={title}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
