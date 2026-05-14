function purches(pro){
   return (pro > 5000) ? pro * 0.20-pro : (pro > 2000)  ? pro * 0.10-pro : pro * 0.5-pro;
}



console.log(purches(600));