alert("For better view of this webpage open it in \n'DESKTOP MODE' or \n'OPEN IT IN PC'")
"debugger";
const c = setInterval(myfunc,10);

function myfunc(){
  const dt = new Date();
  let hours = dt.getHours();
  let minute = dt.getMinutes();
  let ap = hours >= 12 ? 'pm' : 'am';
  const day=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
  const tday=day[dt.getDay()]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let mont=months[dt.getMonth()];
  document.querySelector(".date").value =dt.getDate() + "-" + mont + "-" + dt.getFullYear();
  document.querySelector(".day").value =tday;
  document.querySelector(".hour").value = dt.getHours();
  document.querySelector(".minute").value = dt.getMinutes();
  document.querySelector(".second").value = dt.getSeconds();
  document.querySelector(".ampm").value = ap;


}
