import Home from "../pages/Home"

const home = new Home()

describe("testing home page", () => {
    it("should visit home page", () => {
        home.visit()
    })

    it("should search for a product", () => {
        home.searchInput("iphone")
        home.getSearchButton().click()
    })
})