import React from 'react'
import ReviewArea from '../components/reviews/ReviewArea'
import reviewServices from '../services/reviewServices'
import ReviewService from '../services/reviewServices'

const reviews = ({posts}) => {
  console.log(posts)
  return (
    <div className='mt-24'>
      <h2 className='p-8'>Reviews</h2>
      <ReviewArea res={posts} />
    </div>
  )
}

export default reviews

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await reviewServices.get()
  const posts = await res.json()
  // console.log(res);
  // const res = await ReviewService.get()

  // const hello =[{id: 1, name: "mim"}];
  // console.log(res)
  // console.log("hello",hello)

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts
    },
  }
}

