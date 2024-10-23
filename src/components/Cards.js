import React from 'react'

const Cards = (props) => {
    const news=props.news;
    console.log(news)



  return (
    <div className='cardContainer'>
      {
        news.map((curItem)=>{
          if(!curItem.urlToImage){
            return null;
          }
          else{
            return(
              <div className='card'>
          <img src={curItem.urlToImage}/>
          <div className='cardContent'>
              <a className='title'  onClick={()=>window.open(curItem.url)}>{curItem.title}</a>
              <p>{curItem.description}</p>
              <button onClick={()=>window.open(curItem.url)}>Read More</button>
          </div>
              </div>
          )
          }

        })
      }
    </div>
  )
}

export default Cards
