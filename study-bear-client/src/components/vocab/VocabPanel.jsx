import VocabCard from "./VocabCard";
import { vocab } from "../../data/vocabTest";

export default function VocabPanel() {
  return (
    <div className="lg:sticky lg:top-18 space-y-4">
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
        <div className="font-semibold mb-2">Levels</div>
        <div className="flex gap-2 flex-wrap"></div>
      </div>

      {/* Scroll just the cards area on laptop */}
      <div className="space-y-3 max-h-160 overflow-auto pr-1">
        {vocab.map((item, i) => (
          <VocabCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
