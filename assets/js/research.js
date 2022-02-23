/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "CVE-2021-40126",
    authors:
      "Cisco",
    conferences:
      "Abhinav Khanna",
    researchYr: 2021,
    citebox: "popup1",
    image: "assets/images/research-page/cve.jpg",
    citation: {
      vancouver:
        "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-40126",
    },
	abstract:"Descriptive error message leading to enumeration",
	absbox: "absPopup1",
    
  },

  {
    title: "CVE-2021-1474 , CVE-2021-1475",
    authors:
      "Cisco",
    conferences:
      "Abhinav Khanna",
    researchYr: 2021,
    citebox: "popup2",
    image: "assets/images/research-page/cve.jpg",
    citation: {
      vancouver:
        "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-1474 https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-1475",
    },
    abstract:
      "Link & Formula Injection",
    absbox: "absPopup2",
  },

  {
    title:
      "CVE-2021-1221",
    authors: "Cisco",
    conferences:
      "Abhinav Khanna",
    researchYr: 2021,
    citebox: "popup3",
    image: "assets/images/research-page/cve.jpg",
    citation: {
      vancouver:
        "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-1221",
    },
    abstract:
      "Hyperlink Injection",
    absbox: "absPopup3",
  },

  {
    title:
      "CVE-2021-1350",
    authors:
      "Cisco",
    conferences:
      "Abhinav Khanna",
    researchYr: 2021,
    citebox: "popup4",
    image: "assets/images/research-page/cve.jpg",
    citation: {
      vancouver:
        "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-1350",
    },
    abstract:
      "Packet Flood Attack",
    absbox: "absPopup4",
  },

  {
    title: "Defect Advisory for Host Header Injection",
    authors: "Cisco",
    conferences:
      "Abhinav Khanna",
    researchYr: 2021,
    citebox: "popup5",
    image: "assets/images/research-page/advisory.jpg",
    citation: {
      vancouver:
        "https://www.esecforte.com/responsible-vulnerability-disclosure-defect-advisory-for-host-header-injection-in-cisco-umbrella-dashboard/",
    },
    abstract:
      "Host Header Injection",
    absbox: "absPopup5",
  },

  {
    title: "CVE-2019-16961",
    authors: "SolarWinds",
    conferences:
      "Abhinav Khanna",
    researchYr: 2019,
    citebox: "popup6",
    image: "assets/images/research-page/cve.jpg",
    citation: {
      vancouver:
        "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-16961",
    },
    abstract:
      "Cross-Site Scripting",
    absbox: "absPopup6",
  },

  {
    title:
      "CVE-2019-16962",
    authors: "Manage Engine",
    conferences:
      "Abhinav Khanna",
    researchYr: 2019,
    citebox: "popup7",
    image: "assets/images/research-page/cve.jpg",
    citation: {
      vancouver:
        "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-16962",
    },
    abstract:
      "HTML Injection",
    absbox: "absPopup7",
  },
  {
    title:
      "CVE-2019-16954",
    authors:
      "ManageEngine",
    conferences:
      "Abhinav Khanna",
    researchYr: 2019,
    citebox: "popup8",
    image: "assets/images/research-page/cve.jpg",
    citation: {
      vancouver:
        "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-16954",
    },
    abstract:
      "HTML Injection",
    absbox: "absPopup8",
  },
{
    title: "CVE-2019-16960",
    authors: "SolarWinds",
    conferences:
      "Abhinav Khanna",
    researchYr: 2019,
    citebox: "popup9",
    image: "assets/images/research-page/cve.jpg",
    citation: {
      vancouver:
        "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-16960",
    },
    abstract:
      "Cross-Site Scripting",
    absbox: "absPopup9",
  },
{
    title: "CVE-2019-16956",
    authors: "SolarWinds",
    conferences:
      "Abhinav Khanna",
    researchYr: 2019,
    citebox: "popup10",
    image: "assets/images/research-page/cve.jpg",
    citation: {
      vancouver:
        "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-16956",
    },
    abstract:
      "Cross-Site Scripting",
    absbox: "absPopup10",
  },
{
    title: "CVE-2019-16959",
    authors: "SolarWinds",
    conferences:
      "Abhinav Khanna",
    researchYr: 2019,
    citebox: "popup11",
    image: "assets/images/research-page/cve.jpg",
    citation: {
      vancouver:
        "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-16959",
    },
    abstract:
      "Formula Injection",
    absbox: "absPopup11",
  },
{
    title: "CVE-2019-16957",
    authors: "SolarWinds",
    conferences:
      "Abhinav Khanna",
    researchYr: 2019,
    citebox: "popup12",
    image: "assets/images/research-page/cve.jpg",
    citation: {
      vancouver:
        "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-16957",
    },
    abstract:
      "Cross-Site Scripting",
    absbox: "absPopup12",
  },
{
    title: "CVE-2019-16955",
    authors: "SolarWinds",
    conferences:
      "Abhinav Khanna",
    researchYr: 2019,
    citebox: "popup13",
    image: "assets/images/research-page/cve.jpg",
    citation: {
      vancouver:
        "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-16955",
    },
    abstract:
      "Cross-Site Scripting",
    absbox: "absPopup13",
  },
{
    title: "CVE-2019-16958",
    authors: "SolarWinds",
    conferences:
      "Abhinav Khanna",
    researchYr: 2019,
    citebox: "popup14",
    image: "assets/images/research-page/cve.jpg",
    citation: {
      vancouver:
        "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-16958",
    },
    abstract:
      "Cross-Site Scripting",
    absbox: "absPopup14",
  },


];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
