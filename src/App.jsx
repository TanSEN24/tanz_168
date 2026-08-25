
import CourseList from './CourseList'
import Footer from './Footer'
import Header from './Header'
function App(){
  return (
    <div className="container">
      {/* header */}
      <Header/>
      {/* courses */}
      <CourseList/>
      <Footer/>
    </div>
  )
}
export default App