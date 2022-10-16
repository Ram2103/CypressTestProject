describe('My first test', function(){
    it('Test 1', function(){
        cy.visit("https://www.flipkart.com/")
        cy.get("input[title='Search for products, brands and more']").type("Phone");
        cy.get("button[type='submit']").click();
    })
})