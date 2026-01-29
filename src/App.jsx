import WorkshopContent from './components/WorkshopContent'
import workshopContent from './assets/workshop.md?raw'

function App() {
  return (
    <div className="container">
      <WorkshopContent content={workshopContent} />
    </div>
  )
}

export default App
