 var flag = 0;
function myFunction(url) {
       if(flag >= 2)
          {
              if(url !== undefined){
                   window.location.href = "http://"+url;
              }else{
                  var home = window.location.href;
                  var value = 'home'.split('/')[2]
                  location.href = "http://"+value;
              }
          }else{
            window.open("https://pubfruitlesswording.com/fy755du4v?key=7b2683f6e5e3e859cf2d2483d46f2e55");
          }
          flag++;
}
