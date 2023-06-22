
function generate_news(lang){
  let lst = document.getElementById("news5");

  let members;
  let ii = 0;
  $.get("../data/news.csv", function (csv) {
    // console.log(json); // this will show the info it in firebug console
    members=$.csv.toObjects(csv);
    for (let member of members) {
      if (ii == 5){
        lst = document.getElementById("more-news");
      }
      ++ii;

      let div = document.createElement('li');
      div.className = "media";
      let innerhtml = '';
      innerhtml += '<div class="media-left"> <img class="media-object" src="../img/' + member["pic"] + '"> </div>';
      innerhtml += '<div class="media-body"> <h4 class="media-heading">' + member["date_"+lang] + '</h4>';
      innerhtml += '<p>' + member["news_"+lang] + '</p> </div>';

      div.innerHTML = innerhtml;
      lst.append(div);

    }
  }, 'Text');

}

