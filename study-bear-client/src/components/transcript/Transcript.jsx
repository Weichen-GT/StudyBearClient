import TranscriptSentence from "./TranscriptSentence";
import { transcript } from "../../data/transcriptTest";

export default function Transcript() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
      <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
        <div className="font-semibold text-slate-900">Article</div>
        <div className="text-xs text-slate-500 hidden lg:block">
          Sentence + Translation
        </div>
      </div>

      <div className="p-4 overflow-auto space-y-4">
        {transcript.map((s) => (
          <TranscriptSentence key={s.id} item={s} />
        ))}
      </div>
    </div>
  );
}
