export default function VocabCard({ item }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-3 lg:p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-semibold text-slate-900">{item.term}</div>
          <div className="text-sm text-slate-500">{item.ipa}</div>
        </div>
      </div>

      <div className="mt-2 text-sm text-slate-700 leading-relaxed">
        {item.def}
      </div>
      <div className="mt-1 text-sm text-slate-600">{item.zh}</div>
    </div>
  );
}
