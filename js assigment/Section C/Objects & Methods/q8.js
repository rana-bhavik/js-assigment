let movieDB = {


 movies : [],


 addmovies : function (id,genre,year,rating,cast){

    let movie = {
id :id,
        genre : genre,
        year : year,
        rating : rating,
        cast : cast
    }
    this.movies.push(movie)
return "add movies"

 }
,


 filtergern : function (genre){
return this.movies.filter((movie)=>{
     return movie.genre === genre
});
 }
,



sort : function(sorts){
return this.movies.sort((a,b)=>{
     return a.rating - b.rating});
}
,



actor : function(actor){
return this.movies.filter((actor)=>actor.cast.includes(actor));
}


,


getmovie : function(){
   return this.movies
    
}



}






console.log(movieDB.addmovies(1,"action",2014,4.1,"srk"));
console.log(movieDB.addmovies(2,"comady",2026,1.2,"slm"));
console.log(movieDB.addmovies(3,"action",2025,2.5,"ak"));
console.log(movieDB.addmovies(4,"horror",2017,4.5,"sj"));
console.log(movieDB.addmovies(5,"thrill",2015,5.0,"ntr"));
console.log(movieDB.getmovie());
console.log(movieDB.filtergern("action"));
console.log("sort by rating",movieDB.sort());
console.log("sort by",movieDB.actor());
console.log(movieDB.getmovie());


