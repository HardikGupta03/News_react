
import './App.css';
import { useEffect,useState } from 'react';
import Spinner from './components/Spinner'
import Cards from './components/Cards';

function App() {
  const api_key=`11466a91eabd4b519cd7d85ce00b11d4`;
const [news,setNews]=useState(null);
const [loading,setLoading]=useState(true)
const [search,setSearch]=useState("india")

async function fetchData(){
  setLoading(true)
  try{
    const response=await fetch(`https://newsapi.org/v2/everything?q=${search}&apikey=${api_key}`);
    const finalData=await response.json()
 setNews(finalData.articles)
console.log(finalData.articles)
  }
  catch(err){
    console.log("error h bhai")
  }
  setLoading(false);
}
useEffect(()=>{
fetchData();
},[])

function handleInput(e){
console.log(e.target.value)
setSearch(e.target.value)
}

function userInput(event){
setSearch(event.target.value)
}


  return (
    <div className="App">
<nav>
  <div>
    <h1>Trendy News</h1>
  </div>
  <ul>
    <a>All News</a>
    <a>Trending</a>
  </ul>
  <div className='searchbar'>
    <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
    <button onClick={fetchData}>Search</button>
  </div>
</nav>

<div className='categoryBtn'>
<button onClick={userInput} value="Sports">Sports</button>
<button onClick={userInput} value="Politics">Politics</button>
<button onClick={userInput} value="Entertainment">Entertainment</button>
<button onClick={userInput} value="Health">Health</button>
<button onClick={userInput} value="Fitness">Fitness</button>
</div>

     <div>
{
  news?loading?(<Spinner/>):(<Cards news={news}/>):null
 
}
     </div>
    
    </div>
  );
}

export default App;
