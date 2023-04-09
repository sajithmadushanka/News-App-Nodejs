
import { useEffect, useState } from 'react'
import Navbar from './componets/Navbar'
import NewsCard from './componets/NewsCard'
import './style/index.scss'
import { getNews } from './utils/api'
import Spinners from './componets/spinners'

function App() {
  const [newsList, setnewsList] = useState([]);
  
  const [error, seterror] = useState("")
  const [searchText, setsearchText] = useState("")
  const [submit, setsubmit] = useState("cricket")

  const [loading, setloading] = useState(false)

  useEffect(() => {
    async function getData() {
      setloading(true)
      console.log("function called!");
      const res = await getNews(submit);
      setloading(false)
      if (res.error) {
        seterror(res.data);
      } else {
        setnewsList(res.data);
      }
    }
  
    getData();
  }, [submit]);
  

   
  return(
   
    <>
    
    <Navbar></Navbar>

    {loading && <Spinners></Spinners>}

    <div className="input-group mb-3 m-4">
  <button className="btn btn-outline-secondary" type="button" onClick={()=>setsubmit(searchText)}>Search</button>
  <input type="search" className="form-control" aria-describedby="button-addon1" onChange={(e) =>
    setsearchText(e.target.value)
  } />
</div>
    {error && <div className="alert alert-warning">{error}</div>}
    
    <div>
  {
    newsList && newsList.map((element) =>
      (<NewsCard
        newsdiscription={element.description}
        newsTitle={element.title}
        imageURL={element.urlToImage}
        url={element.url}
       key={element.title}
      />)
    )
  }
</div>

    
    <button type="button" className="btn btn-primary">Primary</button>
    
    </>

  );

    }
export default App
