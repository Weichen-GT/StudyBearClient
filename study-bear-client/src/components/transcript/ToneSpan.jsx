export default function ToneSpan({ tone, children }) {
  const map = {
    green: "bg-emerald-100 text-emerald-900",
    blue: "bg-sky-100 text-sky-900",
    orange: "bg-orange-100 text-orange-900",
    normal: "",
  };

  return (
    <span className={`px-1 rounded-sm ${map[tone] || ""}`}>{children}</span>
  );
}
