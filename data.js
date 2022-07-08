import axios from "axios"

async function getData (id) {
   const { data : user} = await axios(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const { data : posts} = await axios(
        `https://jsonplaceholder.typicode.com/posts?id=${id}`
    )

    return {user, posts};

}

export default getData;