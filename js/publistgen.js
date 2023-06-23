/*
function generate_pub(){
  let lst = document.getElementById("publist");

  let members;
  let yearcard;
  $.get("../data/pub.csv", function (csv) {
    // console.log(json); // this will show the info it in firebug console
    members=$.csv.toObjects(csv);
    for (let member of members) {
      if(member.author == "*"){
        yearcard = document.createElement("div");
        yearcard.className = "panel panel-default";
        let head = document.createElement("div");
        head.className = "panel-heading";
        head.setAttribute("role", "tab");
        head.id="heading"+member.year;
        let h4 = document.createElement("h4");
        h4.className = "panel-title";
        let a = document.createElement("a");
        a.className = "collapsed";
        a.setAttribute("role","button");
        a.setAttribute("data-toggle","collapse");
        a.setAttribute("data-parent","#accordion");
        a.setAttribute("href","#collapse"+member.year);
        a.setAttribute("aria-expanded","false");
        a.setAttribute("aria-controls","collapse"+member.year);
        a.innerHTML = member.year;

        h4.append(a);
        head.append(h4);
        yearcard.append(head);

        let collapse = document.createElement("div");
        collapse.id = "collapse"+member.year;
        collapse.className = "panel-collapse collapse";
        collapse.setAttribute("role","tabpanel");
        collapse.setAttribute("aria-labelledby","heading"+member.year);
        yearcard.append(collapse);
        // document.getElementById("papers").append(yearcard);
        document.getElementById("accordion").insertBefore(yearcard, document.getElementById("oralpanel"));

        lst = document.createElement("ul");
        document.getElementById("collapse"+member.year).append(lst);

        continue;
      }

      let div = document.createElement('li');
      // div.className = "media";
      let innerhtml = '';
      innerhtml += member["author"].replace('李辉', '<b>李辉</b>').replace('Hui Li', '<b>Hui Li</b>') + "<br/>";
      innerhtml += member["title"] + "<br/>";
      innerhtml += "<i>"+member["journal"]+ "</i>" + " <b>" + member["vol"]+ "</b>, " + member['page'] + " ("+ member['year'] + '). <a href="https://doi.org/' +member['doi']+ '">doi:' + member['doi'] + '</a> ';
      if (member["comment"] != ""){
        innerhtml += member['comment'];
      }

      div.innerHTML = innerhtml;
      lst.append(div);
    }
  }, 'Text');

}

*/

function generate_pub(){
  let lst = document.getElementById("publist");

  let members;
  let yearcard;
  $.get("../data/pub.csv", function (csv) {
    // console.log(json); // this will show the info it in firebug console
    members=$.csv.toObjects(csv);
    for (let member of members) {
      if(member.author == "*"){
        head = document.createElement("h1");
        head.innerHTML = member.year + '<a name="year' + member.year + '">' + '</a>';
        $("#publist").append(head);
        li = document.createElement("li");
        li.setAttribute("role", "presentation");
        li.innerHTML = '<a href="#year' + member.year + '">' + member.year + '</a>';
        // document.getElementById("#yearnav").insertBefore(li,document.getElementById("talk"));
        // $("#yearnav").insertBefore(li, $("talk"));
        document.getElementById("yearnav").insertBefore(li, document.getElementById("talknav"));
        lst = document.createElement("ul");
        // document.getElementById("collapse"+member.year).append(lst);
        $("#publist").append(lst);
        continue;
      }

      let div = document.createElement('li');
      // div.className = "media";
      let innerhtml = '';
      innerhtml += member["author"].replace('李辉', '<b>李辉</b>').replace('Hui Li', '<b>Hui Li</b>') + "<br/>";
      innerhtml += member["title"] + "<br/>";
      innerhtml += "<i>"+member["journal"]+ "</i>" + " <b>" + member["vol"]+ "</b>, " + member['page'] + " ("+ member['year'] + '). <a href="https://doi.org/' +member['doi']+ '">doi:' + member['doi'] + '</a> ';
      if (member["comment"] != ""){
        innerhtml += member['comment'];
      }

      div.innerHTML = innerhtml;
      lst.append(div);
    }
  }, 'Text');

}

