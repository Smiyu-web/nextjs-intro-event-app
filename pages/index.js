import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/event-list'

export default function Home() {
  const featuredEvents = getFeaturedEvents()
  console.log("🚀 ~ file: index.js ~ line 6 ~ Home ~ featuredEvents", featuredEvents)

  

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}
