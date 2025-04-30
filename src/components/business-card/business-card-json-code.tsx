import { BusinessCardProps } from "./business-card";
import { JsonLine } from "./business-card-json-line";

export function BusinessCardJsonCode({
  email,
  link,
  name,
  title,
}: BusinessCardProps) {
  return (
    <div className="flex-1">
      <div className="text-zinc-400">{"{"}</div>
      <JsonLine prop="name" value={name} />
      <JsonLine prop="title" value={title} />
      <JsonLine prop="email" value={email} />
      <JsonLine prop="link" value={link} isLast />
      <div className="text-zinc-400">{"}"}</div>
    </div>
  );
}
