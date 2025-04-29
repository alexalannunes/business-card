export function JsonLine({
  prop,
  value,
  isLast = false,
}: {
  prop: string;
  value: string;
  isLast?: boolean;
}) {
  return (
    <div className="ml-4">
      <span className="text-red-400">&quot;{prop}&quot;</span>
      <span className="text-zinc-400">: </span>
      <span className="text-yellow-300">
        &quot;{value}&quot;
        {isLast ? "" : ","}
      </span>
    </div>
  );
}
