import axios from 'axios';

 const KEY='AIzaSyBBW_VObDK4Lpqbv0VfQm-XDVgw5q9w02E';

 export default axios.create({
   baseURL: 'https://www.googleapis.com/books/v1',
   params:{
    maxResults: 15,
    key:KEY
  }

 })
