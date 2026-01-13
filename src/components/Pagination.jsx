const items = [
  {
    id: 1,
    title: "Back End Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 2,
    title: "Front End Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 3,
    title: "User Interface Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
  },
];

export default function Pagination() {
  return (
    <div className="flex items-center justify-between border-t border-white/5 bg-[var(--surface-level-1)] text-text-primary px-4 py-3 sm:px-6 rounded-b-xl">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-lg border border-white/10 bg-[var(--surface-level-2)] px-4 py-2 text-sm font-medium text-text-secondary hover:bg-white/5 hover:text-primary-hover transition-colors"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-lg border border-white/10 bg-[var(--surface-level-2)] px-4 py-2 text-sm font-medium text-text-secondary hover:bg-white/5 hover:text-primary-hover transition-colors"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-text-secondary">
            Showing <span className="font-medium text-text-primary">1</span> to{" "}
            <span className="font-medium text-text-primary">10</span> of{" "}
            <span className="font-medium text-text-primary">97</span> results
          </p>
        </div>
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm gap-1"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-text-muted ring-1 ring-inset ring-white/10 hover:bg-white/5 focus:z-20 focus:outline-offset-0 transition-colors"
            >
              <span className="sr-only">Previous</span>
              <button aria-hidden="true" className="size-5 hover:text-primary-hover transition-colors">
                prev
              </button>
            </a>
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white shadow-glow focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-md"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-text-secondary ring-1 ring-inset ring-white/10 hover:bg-white/5 hover:text-primary-hover focus:z-20 focus:outline-offset-0 rounded-md transition-colors"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-text-secondary ring-1 ring-inset ring-white/10 hover:bg-white/5 hover:text-primary-hover focus:z-20 focus:outline-offset-0 md:inline-flex rounded-md transition-colors"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-text-muted focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-text-secondary ring-1 ring-inset ring-white/10 hover:bg-white/5 hover:text-primary-hover focus:z-20 focus:outline-offset-0 md:inline-flex rounded-md transition-colors"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-text-secondary ring-1 ring-inset ring-white/10 hover:bg-white/5 hover:text-primary-hover focus:z-20 focus:outline-offset-0 rounded-md transition-colors"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-text-secondary ring-1 ring-inset ring-white/10 hover:bg-white/5 hover:text-primary-hover focus:z-20 focus:outline-offset-0 rounded-md transition-colors"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-text-muted ring-1 ring-inset ring-white/10 hover:bg-white/5 focus:z-20 focus:outline-offset-0 transition-colors"
            >
              <span className="sr-only">Next</span>
              <button aria-hidden="true" className="hover:text-primary-hover transition-colors">
                next
              </button>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
