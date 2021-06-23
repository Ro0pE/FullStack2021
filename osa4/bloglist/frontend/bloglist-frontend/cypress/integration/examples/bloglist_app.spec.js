describe('Front page view', function() {
    beforeEach(function() {

              /*    cy.request('POST', 'http://localhost:3003/api/testing/reset') 
        const user = {
            name: 'Roope',
            username: 'Roope Toope',
            password: 'testi'
          }
          cy.request('POST', 'http://localhost:3003/api/users/', user)  
    */
        
        cy.visit('http://localhost:3000')
        cy.get('#username').type('Roope Toope')
        cy.get('#password').type('testi')
      })
    it('front page can be opened', function() {
      cy.contains('LOGIN')
      cy.contains('Username')
      cy.contains('Password')
    })
  })


  

  describe('Login', function() {
    it('login form can be opened', function() {
      cy.contains('LOGIN').click()

    })
    it('user can login', function () {
        cy.contains('LOGIN').click()
        cy.get('#login-button').click()
        cy.contains('Roope is logged in')
      }) 

      it('user is logged in', function () {
        cy.contains('Logout').click()
        cy.get('#username').type('Roope Toope')
        cy.get('#password').type('testi')
        cy.get('#login-button').click()
        cy.contains('Roope is logged in')
      }) 
      it('blog can be created and like-button works', function () {
          cy.contains('Create').click()
          cy.get('#title').type('testi')
          cy.get('#author').type('testaaja')
          cy.get('#url').type('google.fi')
          cy.contains('createblog').click()
        //  cy.contains('Title:')
         // cy.contains('view').click()
        //  cy.contains('Likes: 0')
       //   cy.contains('like').click()
       //   cy.contains('view').click()
        //  cy.contains('Likes:1')
          

      })
  })


  describe('Login fails', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000')
        cy.get('#username').type('Roope Roope')
        cy.get('#password').type('testo')
      })
    it('front page can be opened', function() {
        cy.contains('LOGIN').click()
        cy.get('#login-button').click()
        cy.contains('ERROR, wrong credentials')

      }) 
  })


