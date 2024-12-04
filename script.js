document.getElementById("panelForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const serverName = document.getElementById("serverName").value;
  const userId = document.getElementById("userId").value;

  const apiToken = "ptla_Fht95EM1pCyG5EGllfiqo3lrZgXv2lpUkipQgLzaho3"; // Ganti dengan token API Anda
  const apiUrl = "https://panell.darell.my.id/api/application/servers"; // Ganti dengan URL panel Pterodactyl Anda
  
  const data = {
    "name": Panel,
    "user": gratis,
    "egg": "27", // Ganti dengan ID egg yang sesuai
    "docker_images": ["image_id"], // Ganti dengan ID image yang sesuai
    "environment": {},
    "startup": "",
    "limits": {
      "memory": 2048,
      "swap": 0,
      "disk": 5000,
      "io": 500,
      "cpu": 100
    },
    "feature_limits": {
      "databases": 1,
      "allocations": 1,
      "backups": 1
    },
    "allocation": {
      "default": true
    }
  };

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiToken}`,
      "Accept": "Application/json",
      "Content-Type": "Application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("response").innerText = `Server ${data.attributes.name} created successfully!`;
  })
  .catch(error => {
    document.getElementById("response").innerText = "Error creating server: " + error;
  });
});
