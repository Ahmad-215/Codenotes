const colorMap = {
  amber: "bg-amber/15 text-amber border-amber/30",
  teal: "bg-teal/15 text-teal border-teal/30",
  coral: "bg-coral/15 text-coral border-coral/30",
  dust: "bg-dust/15 text-dust border-dust/30",
};

export default function CategoryTab({ color = "amber", children }) {
  return (
    <span
      className={`inline-flex items-center font-mono text-xs uppercase tracking-wider
                  px-2.5 py-1 rounded border ${colorMap[color] ?? colorMap.amber}`}
    >
      {children}
    </span>
  );
}
