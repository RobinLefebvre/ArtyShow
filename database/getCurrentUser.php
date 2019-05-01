
<?php
include 'dbConfig.php';

// Create connection
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);

if ($conn->connect_error) {

 die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT user_id, user_name, user_mail FROM UserRegistrationTable ";

$result = $conn->query($sql);

if ($result->num_rows >0) {


    while($row[] = $result->fetch_assoc()) {

      $userData = $row;


      $userDataObject = json_encode($userData, JSON_FORCE_OBJECT);



    }


  } else {
    echo "No Results Found.";
  }
  echo $userDataObject;

 $myfile = fopen("newfile.json", "w") or die("Unable to open file!");


 fwrite($myfile, json_encode($userDataObject, JSON_FORCE_OBJECT));
 fclose($myfile);


$conn->close();
?>
