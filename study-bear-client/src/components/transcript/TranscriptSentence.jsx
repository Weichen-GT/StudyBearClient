import ToneSpan from "./ToneSpan";

export default function TranscriptSentence({ item }) {
  return (
    <div className="border border-slate-200 rounded-xl p-3">
      {/* English */}
      <div className="text-base leading-relaxed text-slate-900">
        {item.spans?.length
          ? item.spans.map((sp, i) => (
              <ToneSpan key={i} tone={sp.tone}>
                {sp.text}
              </ToneSpan>
            ))
          : item.en}
      </div>

      {/* Chinese translation */}
      <div className="mt-2 text-sm text-slate-600">{item.zh}</div>
    </div>
  );
}
