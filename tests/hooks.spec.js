//@ts-check


import test from "@playwright/test"

test.beforeAll(async () => {
    console.log("Before all test")
})
test.beforeEach(async () => {
    console.log("Before each test")
})
test.afterAll(async () => {
    console.log("After all test")
})
test.afterEach(async () => {
    console.log("After each test")
})

test('First Test Case',async({})=>{
    console.log("This my first test case")
})
test('Second Test Case',async({})=>{
    console.log("This my second test case")
})