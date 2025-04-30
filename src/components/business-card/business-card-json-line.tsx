export function JsonLine({
  prop,
  value,
  isLast = false,
}: {
  prop: string;
  value: string;
  isLast?: boolean;
}) {
  if (!value) return null;
  return (
    <div className="ml-4 truncate w-[calc(100%-3rem)]">
      <span className="text-red-400">&quot;{prop}&quot;</span>
      <span className="text-zinc-400">: </span>
      <span className="text-yellow-300">
        &quot;{value}&quot;
        {isLast ? "" : ","}
      </span>
    </div>
  );
}
