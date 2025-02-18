/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
    {
        sl1: 1,
        name1: "Papa Kojo Ampim-Darko",
        designation1: "Software Engineer, Google",
        image1: "https://avatars.githubusercontent.com/u/46641503?v=4",
        message1: "I had the pleasure of mentoring and supervising Enoch during his internship at CodeDay Labs. His hardworking nature and potential for growth stood out. If he continues to apply himself with the same dedication, he will go far in his career."
    },
    {
        sl2: 2,
        name2: "Osamudiamen (Victor) Ojo",
        designation2: "Back End Developer, Simplify Synergy",
        image2: "https://avatars.githubusercontent.com/u/46641503?v=4",
        message2: "Enoch is a great team player, always collaborative and easy to work with. His contributions to our projects have been invaluable."
    },
    {
        sl1: 3,
        name1: "Justice Chimobi",
        designation1: "Software Engineer | Frontend Developer",
        image1: "https://avatars.githubusercontent.com/u/46641503?v=4",
        message1: "Enoch is a reliable teammate. It’s always a pleasure working with him due to his strong technical skills and team spirit."
    },
    {
        sl2: 4,
        name2: "Zainab Ebrahimi",
        designation2: "Engineering Manager, Justworks | Founder, Florish",
        image2: "https://avatars.githubusercontent.com/u/46641503?v=4",
        message2: "Enoch has been my long-term mentee, and I’ve witnessed his remarkable growth. He is capable, hardworking, and has the potential to achieve great things in the future."
    },    
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
