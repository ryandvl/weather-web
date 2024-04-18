interface SeparatorsProps {
  length?: string;
  stroke?: string;
}

export function HorizontalSeparator({ length, stroke }: SeparatorsProps) {
  return (
    <div
      className="bg-zinc-500 dark:bg-zinc-700"
      style={{
        width: stroke ?? "1px",
        height: length ?? "2rem", // 8px
        borderRadius: "0.375rem", // 6px
      }}
    />
  );
}

export function VerticalSeparator({ length, stroke }: SeparatorsProps) {
  return (
    <div
      className="bg-zinc-500 dark:bg-zinc-700"
      style={{
        height: stroke ?? "1px",
        width: length ?? "2rem", // 8px
        borderRadius: "0.375rem", // 6px
      }}
    />
  );
}
