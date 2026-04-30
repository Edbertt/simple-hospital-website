export default function DoctorListSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 animate-pulse rounded-full bg-slate-200" />

            <div className="flex-1">
              <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200" />
              <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-slate-200" />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200" />
          </div>

          <div className="mt-6 h-10 w-32 animate-pulse rounded-xl bg-slate-200" />
        </div>
      ))}
    </div>
  )
}