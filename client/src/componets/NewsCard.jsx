function NewsCard({newsdiscription, newsTitle, imageURL, url}) {
    console.log("NewsCard function callled")
    return ( 
        <div className="card m-4" style={{width: "80%" , textAlign : "center", height : "400px", fontSize : "12px"}}>
        <div className="card-body">
            {imageURL && <img src={imageURL} alt={newsTitle} style={{width: "80%"}} />}
            <h5 className="card-title">{newsTitle}</h5>
            <p className="card-text">{newsdiscription}</p>
            <a href={url} className="btn btn-primary">more info</a>
        </div>
        </div>
     );
}

export default NewsCard;