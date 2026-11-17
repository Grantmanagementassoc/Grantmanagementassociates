"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Trash2, AlertTriangle, CheckCircle, ShieldAlert } from "lucide-react";

type Row = {
  id: number;
  type: "contact" | "assessment" | "career";
  subType?: "contact" | "playbook" | "assessment" | "career" | "spam";
  title: string;
  name: string;
  email: string;
  phone: string | null;
  createdAt: string;
  status: string;
  assignedTo: number | null;
  internalNotes: string | null;
  serviceInterest?: string | null;
  fields: { label: string; value: string }[];
};

export function SubmissionManager({
  rows,
  employees,
  activeTab,
  spamCount,
}: {
  rows: Row[];
  employees: { id: number; name: string }[];
  activeTab?: string;
  spamCount?: number;
}) {
  const router = useRouter();
  const [open, setOpen] = useState<Row | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPurging, setIsPurging] = useState(false);

  async function save(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!open) return;
    const d = Object.fromEntries(new FormData(e.currentTarget));
    await fetch(`/api/admin/submissions/${open.type}/${open.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(d),
    });
    setOpen(null);
    router.refresh();
  }

  async function handleDelete(type: string, id: number) {
    if (!confirm("Are you sure you want to permanently delete this submission?")) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/admin/submissions/${type}/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setOpen(null);
        router.refresh();
      } else {
        alert("Failed to delete submission.");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting submission.");
    } finally {
      setIsDeleting(false);
    }
  }

  async function handlePurgeSpam() {
    if (!confirm(`Are you sure you want to delete all ${spamCount || ""} bot spam submissions permanently?`)) return;
    setIsPurging(true);
    try {
      const res = await fetch("/api/admin/submissions/purge-spam", {
        method: "POST",
      });
      const data = await res.json();
      if (res.ok) {
        alert(`Successfully purged ${data.deleted || 0} bot spam submissions!`);
        router.refresh();
      } else {
        alert(data.error || "Failed to purge spam.");
      }
    } catch (err) {
      console.error(err);
      alert("Error purging spam.");
    } finally {
      setIsPurging(false);
    }
  }

  return (
    <>
      {/* Purge Spam Banner */}
      {(activeTab === "spam" || (spamCount && spamCount > 0)) && (
        <div className="mb-4 bg-amber-50 border border-amber-200 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2.5 text-amber-900">
            <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0" />
            <span>
              <strong>{spamCount} automated bot submissions</strong> detected with random alphanumeric strings.
            </span>
          </div>
          <button
            onClick={handlePurgeSpam}
            disabled={isPurging}
            className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-md text-xs transition-colors shadow-sm disabled:opacity-50 whitespace-nowrap"
          >
            {isPurging ? "Purging..." : "Purge All Spam Now"}
          </button>
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
        <div className="grid grid-cols-[120px_1fr_160px_130px_110px] gap-4 px-5 py-3.5 bg-slate-50 border-b text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          <div>Source</div>
          <div>Client / Organization</div>
          <div>Received</div>
          <div>Owner</div>
          <div>Status</div>
        </div>

        {rows.length ? (
          rows.map((r) => {
            const isPlaybook = r.subType === "playbook";
            const isSpam = r.subType === "spam";

            return (
              <button
                key={`${r.type}-${r.id}`}
                onClick={() => setOpen(r)}
                className={`w-full text-left grid grid-cols-[120px_1fr_160px_130px_110px] gap-4 px-5 py-4 border-b border-slate-100 hover:bg-slate-50/80 items-center transition-colors ${
                  isSpam ? "bg-rose-50/20 opacity-75" : ""
                }`}
              >
                <div>
                  {isPlaybook ? (
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800">
                      Playbook
                    </span>
                  ) : isSpam ? (
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700">
                      Spam Bot
                    </span>
                  ) : r.type === "assessment" ? (
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700">
                      Assessment
                    </span>
                  ) : r.type === "career" ? (
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700">
                      Career
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      Contact
                    </span>
                  )}
                </div>

                <div className="min-w-0 pr-2">
                  <div className="text-sm font-semibold text-slate-900 truncate flex items-center gap-2">
                    <span>{r.title}</span>
                    {r.serviceInterest && (
                      <span className="text-[11px] font-normal text-slate-500 truncate">
                        • {r.serviceInterest}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 truncate">
                    {r.name} · {r.email} {r.phone ? `· ${r.phone}` : ""}
                  </div>
                </div>

                <div className="text-xs text-slate-500">
                  {new Date(r.createdAt).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>

                <div className="text-xs text-slate-600 font-medium truncate">
                  {employees.find((e) => e.id === r.assignedTo)?.name || (
                    <span className="text-slate-400">Unassigned</span>
                  )}
                </div>

                <div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      r.status === "new"
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : r.status === "closed"
                        ? "bg-slate-100 text-slate-600"
                        : "bg-amber-50 text-amber-700 border border-amber-200"
                    }`}
                  >
                    {r.status}
                  </span>
                </div>
              </button>
            );
          })
        ) : (
          <div className="p-16 text-center text-sm text-slate-500">
            No submissions in this queue.
          </div>
        )}
      </div>

      {/* Detail Slide-over Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm flex justify-end animate-in fade-in duration-150"
          onMouseDown={(e) => {
            if (e.currentTarget === e.target) setOpen(null);
          }}
        >
          <div className="w-full max-w-2xl bg-white h-full overflow-y-auto shadow-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 flex items-center gap-2">
                    <span>{open.subType || open.type} submission #{open.id}</span>
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950">{open.title}</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Submitted on {new Date(open.createdAt).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => setOpen(null)}
                  className="text-slate-400 hover:text-slate-600 p-1 text-xl leading-none"
                >
                  ✕
                </button>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-5 bg-slate-50 p-5 rounded-xl border border-slate-100">
                {open.fields.map((f) => (
                  <div key={f.label} className={f.label === "Message" ? "sm:col-span-2" : ""}>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {f.label}
                    </div>
                    <div className="mt-1 text-sm text-slate-800 whitespace-pre-wrap font-medium">
                      {f.value || "—"}
                    </div>
                  </div>
                ))}
              </div>

              {/* Status Update Form */}
              <form onSubmit={save} className="mt-8 border-t border-slate-200 pt-6 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="text-sm font-medium text-slate-700">
                    Status
                    <select
                      name="status"
                      defaultValue={open.status}
                      className="mt-1.5 w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-600"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="qualified">Qualified</option>
                      <option value="closed">Closed</option>
                    </select>
                  </label>

                  <label className="text-sm font-medium text-slate-700">
                    Assign to
                    <select
                      name="assignedTo"
                      defaultValue={open.assignedTo || ""}
                      className="mt-1.5 w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-600"
                    >
                      <option value="">Unassigned</option>
                      {employees.map((e) => (
                        <option key={e.id} value={e.id}>
                          {e.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="text-sm font-medium text-slate-700 block">
                  Internal notes
                  <textarea
                    name="internalNotes"
                    defaultValue={open.internalNotes || ""}
                    rows={4}
                    placeholder="Add operational notes or next steps here..."
                    className="mt-1.5 w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-600"
                  />
                </label>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="submit"
                    className="rounded-lg bg-[#18243a] hover:bg-[#253655] text-white px-5 py-2.5 text-sm font-semibold transition-colors shadow-sm"
                  >
                    Save Changes
                  </button>

                  <button
                    type="button"
                    disabled={isDeleting}
                    onClick={() => handleDelete(open.type, open.id)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 px-3 py-2 rounded-lg hover:bg-rose-50 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                    {isDeleting ? "Deleting..." : "Delete Submission"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
