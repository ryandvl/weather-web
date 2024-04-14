interface SeparatorsProps {
  length?: string;
}

export function HorizontalSeparator({ length }: SeparatorsProps) {
  return (
    <div
      className="bg-zinc-500 dark:bg-zinc-700"
      style={{
        width: "1px",
        height: length ?? "2rem", // 8px
        borderRadius: "0.375rem", // 6px
      }}
    />
  );
}

export function VerticalSeparator({ length }: SeparatorsProps) {
  return (
    <div
      className="bg-zinc-500 dark:bg-zinc-700"
      style={{
        height: "1px",
        width: length ?? "2rem", // 8px
        borderRadius: "0.375rem", // 6px
      }}
    />
  );
}
