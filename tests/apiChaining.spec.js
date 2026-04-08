//@ts-check

import {expect, test} from "@playwright/test"

test('API chaining',async({request})=>{
    const response=await request.get('https://jsonplaceholder.typicode.com/users')
    expect(response.status()).toBe(200)

    //parse reponse body to json
    const responseBody=await response.json()
    const userId=responseBody[0]
    const commentsResponse=await request.get(`https://jsonplaceholder.typicode.com/posts/${userId.id}/comments`)
    expect(commentsResponse.status()).toBe(200)


    const comments=await commentsResponse.json()
    expect(comments.length).toBeGreaterThan(0)
    expect(comments[0].postId).toBe(userId.id)

})