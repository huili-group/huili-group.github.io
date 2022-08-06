
function generate_members(lang){
  let lst = document.getElementById("memberlist");

  let members;
  $.get("../data/members.csv", function (csv) {
    // console.log(json); // this will show the info it in firebug console
    members=$.csv.toObjects(csv);
    for (let member of members) {
      if(member.name_zh == "*Alumni*"){
        let alumni = document.createElement('div');
        switch (lang){
          case "zh":
            alumni.innerHTML = "<h1>已毕业成员</h1>"; break;
          case "en":
          default:
            alumni.innerHTML = "<h1>Alumni</h1>"; break;
        }
        console.log(alumni);
        lst.append(alumni);
        continue;
      }
      let div = document.createElement('div');
      div.className = "member";
      let innerhtml = '';
      innerhtml += '<div class="photo"><img src="../img/' + member.photo + '"></img></div>';
      innerhtml += '<div class="info"> <p>';
      innerhtml += '<span class="name">' + member["name_"+lang] + '</span><br>';
      innerhtml += '<span class="state">' + member["state_"+lang] + '</span></p>';
      innerhtml += '<div class="project"> <p>' + member["project_"+lang] + '</p> </div>';
      innerhtml += '<div class="email"> <p><img src="../img/mail-142.svg" style="height: 12pt;"></img> ' + member.email + '</p></div>';
      if(member.orcid.length != 0){
        innerhtml += '<div class="orcid"> <p><img src="../img/ORCID_iD.svg" style="height: 12pt;"></img> ';
        innerhtml += member.orcid+' <a href="https://orcid.org/' + member.orcid + '"><img src="../img/externallink.svg" style="height:12pt"></img></a> </p></div>';
      }
      div.innerHTML = innerhtml;
      lst.append(div);
      lst.append(document.createElement('p'));
    }
  }, 'Text');

}

