var expect = require('chai').expect;
var Mocha = require('mocha')
var assert = require('assert')
var mocha = new Mocha()
var https = require('https')


mocha.suite.emit('pre-require', this, 'solution', mocha)


var tools = {
  printName(first, last){
    return `${last}, ${first}`
  },
  
  loadWiki(data, callback){
    var url = `https://www.facebook.com/PresidentLincoln/`
    
    https.get(url, function(res){
      
      var body = " ";
              
      res.setEncoding("UTF-8")
              
      res.on("data", function(chunk){
        body += chunk;
       });
    
      res.on('end', function(){
        callback(body);
        console.log(body)
        
      });
      
    });
  }
};


describe("Tools", function(){
  
  describe('printName()', function(){
  
    it("should print the last name first", function(){

      var results = tools.printName('Alex','Banks');    

      expect(results).to.equal("Banks, Alex");

    });

  });

  describe('Load Wiki', function(){
    this.timeout(10000);
    
    it('Load Abraham Lincolns Wikipedia Page', function(done){
      
      tools.loadWiki({first:'Abraham', last:'Lincoln'}, function(html){
        
        expect(html).to.be.ok;
        done();
        
      });
      
    });
    
    
  });
  
  ;
})




mocha.run()
