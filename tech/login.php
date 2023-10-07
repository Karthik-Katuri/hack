$con=new mysqli("localhost","root","placement");
if($con->connect_error){
die("failed to connect:"$con->connect_error);
}
else{
$stmt=$con->prepare("select*from registration whare email=?");
$stmt->bind_param("s",$email);
$stmt->execute();
$stmt_result=$stmt->get_result();
if($stmt-result->num_row>0){
$data=$stmt_result->fetch_assoc();
if($data['password']===$password){
echo "<h2>login successfully</h2>";
}
else{
echo "<h2>invalid email</h2>"
}
else{
echo "<h2>invalid email</h2>"
}
}
}