function validation(){
    var name=document.getElementById("name").value;
    var phone=document.getElementById("Phone").value;
    var nrc=document.getElementById("nrc").value;
    var checkin=document.getElementById("checkin").value;
    var room=document.getElementById("rooms").value;
    var error_message=document.getElementById("error_message");
    var text;
    error_message.style.padding="10px";
      if(name.length<5){
          text="Please Enter Valid Name";
          error_message.innerHTML=text;
          return false;
      }
      if(isNaN(phone) || phone.length !=11){
        text="Please Enter Valid Phone Number";
        error_message.innerHTML=text;
        return false;
      }
    alert(`
    FullName : ${name}
    Phone : ${phone}
    Nrc: ${nrc}
    BookingDate: ${checkin}
    Room:${room}
    {Thanks you so much for your booking}
    `);
      return true;
}