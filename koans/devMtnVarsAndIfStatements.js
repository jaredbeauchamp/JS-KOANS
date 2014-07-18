describe("About variables and If Statments", function() {
  it("should create a variable called myFirstVariable and set it equal to 1", function() {
    //code goes here.
    var myFirstVariable = 1
    expect(myFirstVariable).toBe(1);
  });

  it("should understand if statements", function () {
    var message = 'my first if statement';
    var answer;

    if(message === 'my frist if statement'){
      answer = 'A';
    } else if (message === 'my first if statment'){
      answer = 'B';
    } else if(message === 'my first if statement'){
      answer = 'C';
    } else {
      answer = 'D';
    }

    expect(answer).toBe('C');
  });

  it("should understand equality operators", function () {
    var answer;
    var favoriteNumber = '33';
    
    if(favoriteNumber === 33){
      answer = 'A';
    } else if(favoriteNumber == 33){
      answer = 'B';
    } else if(favoriteNumber === '33'){
      answer = 'C';
    } else {
      answer = 'D';
    }

    expect(answer).toBe('B');

    //Double equal doesn't care if it's a string or an integer (int).  The function runs top to bottom, so since it finds a match in B, it doesn't care that C is also a match.

  });

  it("should understand equality operators, again", function () {
    var answer;
    var favoriteNumber = 50;
    
    if(favoriteNumber === '50'){
      answer = 'A';
    } else if(favoriteNumber === 40){
      answer = 'B';
    } else if(favoriteNumber = 12){
      answer = 'C';
    } else {
      answer = 'D';
    }

    expect(answer).toBe('C');

    //Single = is an assignment operator and will always equate to true in an if statement (assuming it is a non negative value).
  });

  it('should understand adding strings', function(){
    var num = '3';
    expect(num + 8).toBe('38');

    //'3' is a string, but 8 is a number. Anytime you add a string to anything, JS assumes you want a string back. So adding '3' to 8 is going to return the string '38'
  });

  it('should understand adding strings, again', function(){
    var num = '1';
    expect(num + 8).toBe('18');

    //Same explanation as above.
  });
});



