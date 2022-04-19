{ 
    "first_name"  :  "Sammy", 
    "last_name"   :  "Shark", 
    "online"      :  true 
  }

  var sammy = { 
    "first_name"  :  "Sammy", 
    "last_name"   :  "Shark", 
    "online"      :  true 
  }

  var sammy = '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}';

  var user = {
    first_name: "Sammy",
    last_name : "Shark",
    online    : true,
    full_name : function() {
       return this.first_name + " " + this.last_name;
    }
};

var sammy = { 
    "first_name"  :  "Sammy", 
    "last_name"   :  "Shark", 
    "online"      :  true 
  }

  sammy.first_name
sammy.last_name
sammy.online

alert(sammy.first_name);

alert(sammy["online"]);

var user_profile = { 
    "username" : "SammyShark",
    "social_media" : [
      {
        "description" : "twitter",
        "link" : "https://twitter.com/digitalocean"
      },
      {
        "description" : "facebook",
        "link" : "https://www.facebook.com/DigitalOceanCloudHosting"
      },
      {
        "description" : "github",
        "link" : "https://github.com/digitalocean"
      }
    ]
  }

  alert(user_profile.social_media[1].description);

  var obj = {"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}

var s = JSON.stringify(obj)

'{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}'

var o = JSON.parse(s)

<!DOCTYPE html>
<html>
<body>

<p id="user"></p>

<script>
var s = '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}';

var obj = JSON.parse(s);

document.getElementById("user").innerHTML =
"Name: " + obj.first_name + " " + obj.last_name + "<br>" +
"Location: " + obj.location;
</script>

</body>
</html>