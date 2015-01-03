<?php

$username = "chaker";
$password = "allaoui";

if(isset($_GET['login']) && isset($_GET['mdp'])){
//if($_GET['login']== $username){
if($_GET['login']== $username && $_GET['mdp'] ==$password){
//if($_POST['login']== $username && $_POST['mdp'] ==$password){
session_start();
$id_session=session_id();

if($id_session){
echo "
<style type='text/css'>
#menucompte {
width:200px;
background:#998767;
 color: yellow; 
float:right;
}

</style>
<details id='menucompte'>
	<summary>Compte </summary>
		<ul>
			<li><a href='#'>informations persnnelles</a></li>
			<li><a href='#'>configuration</a></li>
			<li><a href='#'>déconnecter</a></li>
		</ul>
	</details>
<br>déconnexion - informations persnnelles <br>";
echo "ID SESSION GET : ".$id_session;
}



echo "<p id='toto'>
<img id='imgbtsearch' src='./img/search.png' width='30'  height='30'  />
<strong>Requete GET : Success de récéption et de renvoie des données <mark>php et ajax </mark> avec la méthode <mark>GET</mark></strong></p>";
}
else
{
echo "Veuillez vérifier vos coordonnées";

}
}


if(isset($_POST['login']) && isset($_POST['mdp'])){

if($_POST['login']== $username && $_POST['mdp'] ==$password){
session_start();
$id_session=session_id();
echo "ID SESSION POST : ".$id_session;
echo "<p id='toto'>
<img id='imgbtsearch' src='./img/search.png' width='30'  height='30'  />
<strong>Requete POST : Success de récéption et de renvoie des données <mark>php et ajax</mark> avec la méthode <mark>POST</mark></strong></p>";
}
else
{
echo "Veuillez vérifier vos coordonnées";

}
}
/*
if( isset($_POST['username']) && isset($_POST['password']) ){
if($_POST['username'] == $username && $_POST['password'] ==$password){ 
session_start();
$_SESSION['user'] = $username;
echo "Success";
}
else{ 
echo "Failed";
}
}
*/


?>