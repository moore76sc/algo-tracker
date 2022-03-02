const request = require('supertest');

const server = 'http://localhost:3000';


describe('Serve HTML', () => {
    describe('/', () => {
      describe('GET', () => {
        it('responds with 200 status and text/html content type', () => {
          request(server)
            .get('/')
            .expect('Content-Type', /text\/html/)
            .expect(200);
        });
      });
    });
  });
  
describe('/verify', () => {
    describe('GET', () => {
        it('responds with 200 status and application/json content type', () => {
            const result = request(server).get('/verify');
            console.log(result);
            request(server)
              .get('/verify')
              .expect('Content-Type', /application\/json/)
              .expect(200);
          });
        });
      });
      
 describe('/getAll', () => {
    describe('GET', () => {
        it('responds with 200 status and application/json content type', () => {
            const result = request(server).get('/getAll');
            console.log(result);
            request(server)
              .get('/getAll')
              .expect('Content-Type', /application\/json/)
              .expect(200);
          });
        });
      });

  describe('/github', () => {
      describe('GET', () => {
          it('redirects to github', () => {
            const result = request(server).get('/getAll');
            console.log(result);
            request(server)
              .get('/getAll')
              .expect('Content-Type', /application\/json/)
              .expect('Location', '/github')
          });
        });
      });

  describe('/callback', () => {
      describe('GET', () => {
          it('redirects to the right path', () => {
            const result = request(server).get('/callback');
            request(server)
              .get('/callback')
              .expect('Content-Type', /application\/json/)
              .expect('Location', '/callback')
          });
        });
      });

  describe('PUT', () => {
      const newAlgo = [
        {
          algo1: 'TwoSum',
         },
        {
          algo2: 'CoinSum',
        },
      ];
        it('responds with 200 status and application/json content type', () => {
           request(server)
              .put('/')
              .send(newAlgo)
              .expect('Content-Type', /application\/json/)
              .expect(200);
            });
      
        it('responds with the updated algo', () => {
            request(server)
              .put('/')
              .send(newAlgo)
              .expect((res) => expect(res.body).toEqual(newAlgo));
            });
          });
    
  describe('/one', () => {
     describe('GET', () => {
         it('responds with 200 status and application/json content type', () => {
            const result = request(server).get('/one');
            console.log(result);
            request(server)
              .get('/one')
              .expect('Content-Type', /application\/json/)
              .expect(200);
              });
            });
          });

  describe('/all', () => {
      describe('GET', () => {
          it('responds with 200 status and application/json content type', () => {
             const result = request(server).get('/all');
              console.log(result);
              request(server)
                .get('/all')
                .expect('Content-Type', /application\/json/)
                .expect(200);
              });
            });
          });

  