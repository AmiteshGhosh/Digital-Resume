<!--Amitesh-->
  function hideResumeDataSections()
  { 
    var Objective=document.getElementById("Objective");
    var Highlights=document.getElementById("Highlights");
    var Technical_Expertise=document.getElementById("Technical_Expertise");
    var Oranization_Experience=document.getElementById("Oranization_Experience");
    var Education_Qualification=document.getElementById("Education_Qualification");
    var Technical_Certification=document.getElementById("Technical_Certification");
    var Responsibilities=document.getElementById("Responsibilities");
    var Extra=document.getElementById("Extra");
    var Declaration=document.getElementById("Declaration");   

    Objective.classList.toggle("hideResumeContent");
    Highlights.classList.toggle("hideResumeContent");
    Technical_Expertise.classList.toggle("hideResumeContent");
    Oranization_Experience.classList.toggle("hideResumeContent");
    Education_Qualification.classList.toggle("hideResumeContent");
    Technical_Certification.classList.toggle("hideResumeContent");
    Responsibilities.classList.toggle("hideResumeContent");
    Extra.classList.toggle("hideResumeContent");
    Personal_Information.classList.toggle("hideResumeContent");
    Declaration.classList.toggle("hideResumeContent");
  }

function StickyNavigtion(header,sticky) {
  if (window.pageYOffset > sticky)
  {
    header.classList.add("sticky");
  } 
  else 
  {
    header.classList.remove("sticky");
  }
}

const angleToRadian=(angle) =>{
  return angle*(Math.PI/180);
}
const radius =100;
const diameter= radius*2;
const circle=document.querySelector('Resume-Menu');
circle.style.width = '${diameter}px';
circle.style.height = '${diameter}px';

const  text=circle.innerText;
 