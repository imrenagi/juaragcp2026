import WorkshopContent from "./components/WorkshopContent";
import workshopContent from "./assets/workshop.md?raw";

function App() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100 ring-1 ring-slate-900/5">
          <div className="p-8 sm:p-12 md:p-16">
            <WorkshopContent content={workshopContent} />
          </div>
        </div>
        <footer className="mt-8 text-center text-sm text-slate-500 font-medium">
          &copy; {new Date().getFullYear()} Workshop App. Built with React &
          Tailwind CSS.
        </footer>
      </div>
    </div>
  );
}

export default App;
