

// Coin Change: Given a float value representing money, return a hash that shows the least amount of US coins necessary to equal that amount. 

// Given: 1.26
// Output: 
// {
//   '25' => 5
//   .10 => 0
//   5 => 0
//   1 => 1
// }

// make coin variables 

var coins = 
{  
  'Quarter':.25,
  'Dime': .10,
  'Nickel': .05,
  'Penny': .01
  
}

function coinChanger(amount){
  
  var coinCounter = {
      'Quarter': 0,
      'Dime': 0,
      'Nickel': 0,
      'Penny': 0
  
    
  }
  
  for (let key in coins){
    // console.log(key)
    // console.log(coins[key])
    
    
    while(amount >= coins[key]){
      coinCounter[key] ++
      amount -= coins[key];
      
      
      // console.log(amount)
    }
  }
  
  console.log('Coin Counter: ', coinCounter)

  
}

coinChanger(1.00);