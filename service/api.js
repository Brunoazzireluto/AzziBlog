import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://ckxwwmjsgvxyfcsujeer.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNreHd3bWpzZ3Z4eWZjc3VqZWVyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzE2NDAyNCwiZXhwIjoyMDA4NzQwMDI0fQ.sCCgrH-qLTPQBK0_NzTlKqAc-zqrImVostsyg19aWqE",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNreHd3bWpzZ3Z4eWZjc3VqZWVyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzE2NDAyNCwiZXhwIjoyMDA4NzQwMDI0fQ.sCCgrH-qLTPQBK0_NzTlKqAc-zqrImVostsyg19aWqE"
    }
})

