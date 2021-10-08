 var flag = 0;
function myFunction(url) {
       if(flag >= 2)    // jika di klik lebih dari 2 kali
          {
              if(url !== undefined){ // jika terdapat ada parameter d button akan redrect ke url tujuan
                   window.location.href = "http://"+url;
              }else{ // jika tidak ada parameter d button akan redrect ke homepage
                  document.location.href="/";
              }
          }else{ // jika di klik kurang / sama dengan 2 kali akan redirect ke url iklan
            window.open("https://pubfruitlesswording.com/fy755du4v?key=7b2683f6e5e3e859cf2d2483d46f2e55");
          }
          flag++;
}
