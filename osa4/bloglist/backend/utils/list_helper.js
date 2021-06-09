

const dummy = (blogs) => {

    return 1
}


const totalLikes = (blogs) => {
    const totalLikes = blogs.reduce((totalLikes, value) => {
        console.log(totalLikes,'WOOP WOOP')
        return totalLikes + value.likes
    }, 0)
    
    return totalLikes
}

const favoriteBlog = (blogs) => {
    if (blogs.length === 0){
        return null
    }
    const max = blogs.reduce((prev,current) =>
    
        prev.likes > current.likes ? prev : current,)

    
        const favoriteBlog = {
            title: max.title,
            author: max.author,
            likes: max.likes,
        }
    
        return favoriteBlog
}

const mostBlogs = (blogs) => {
    const authors = blogs.map((blog) => blog.author) // mapataan blogien kirjoittajat

    if (authors.length === 0){ // jos ei ole kirjoittajia, palautetaan null
        return null
    }
    const mostBlogsByAuthor = authors.reduce((acc,curr) =>{
        acc[curr] ? acc[curr]++ : (acc[curr] = 1)
    return acc
    },{})
    
    const authorWithMostBlogsList = Object.entries(
        mostBlogsByAuthor,).reduce((a,b) => (mostBlogsByAuthor[a[0]]> mostBlogsByAuthor[b[0]] ? a : b))
    
    const authorWithMostBlogs = {
        author: authorWithMostBlogsList[0],
        blogs: authorWithMostBlogsList[1],
    }
    return authorWithMostBlogs
}
const mostLikes = (blogs) => {
    if (blogs.length === 0) {
      return null
    }
  
    // haetaan kaikki kirjoittajat
    const authors = blogs.map((blog) => blog.author)
  
    
    let uniqueAuthors = [...new Set(authors)]  // filtteröi duplikatet veke
  
    const likesByAuthor = uniqueAuthors.map((author) => {
      const blogsByAuthor = blogs.filter((blog) => blog.author === author)
      // haetaan jokaisen kirjoittajan blogit
  
    
      const countLikesPerAuthor = blogsByAuthor.reduce(
        (accumulator, currentValue) => accumulator + currentValue.likes,
        0,
      ) // lasketaan tykkäykset
  
      
      const amountOfLikesByAuthor = {
        author: author,
        likes: countLikesPerAuthor,
      }
  
      return amountOfLikesByAuthor
    })
 
    return likesByAuthor.reduce((a, b) => (a.likes > b.likes ? a : b))
  }

module.exports = {
    dummy, totalLikes, favoriteBlog,  mostBlogs, mostLikes
}