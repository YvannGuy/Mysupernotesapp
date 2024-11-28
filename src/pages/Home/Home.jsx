import NoteCard from "../../components/Cards/NoteCard"
import Navbar from "../../components/Navbar/Navbar"

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto">
    <div>
    <NoteCard 
    title="Meeting on 7th April" 
    date="3rd Apr 2024" 
    content="Meeting on 7th April Meeting on 7th April"   
    tags="#Meeting" 
    isPinned={true}
    onEdit={()=>{}}
    onDelete={()=>{}}
    OnPinNote={()=>{}}
    />
    </div>
    </div>
    </>
  )
}

export default Home