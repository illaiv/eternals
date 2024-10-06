const eternals = [

    {
        name: "ajak",
        skills: ["immortality", "healing", "language", "strength"],
        image: "ajak.png"
    },
    {
        name: "druig",
        skills: ["immortality", "healing", "language", "strength", "intelligence", "combat"],
        image: "druig.png"
    },
    {
        name: "ikaris",
        skills: ["teleportation", "shapeshifting", "language", "strength"],
        image: "ikaris.png"
    },
    {
        name: "sprite",
        skills: ["immortality", "combat", "language", "strength", "multiverse"],
        image: "sprite.png"
    },
    {
        name: "thena",
        skills: ["immortality", "healing", "language", "strength", "shapeshifting", "combat"],
        image: "thena.png"
    }
    
    ]

    let eternalsList = document.querySelector(".eternalsList");
    let allEternalsList = `<ol>`;
    eternals.forEach((eternal) => {
        allEternalsList += `<li> The eternal ${eternal.name}. </li>`;
    });
    allEternalsList += `</ol>`;
    eternalsList.innerHTML = allEternalsList;

    function showInfo() {
        const skill = document.getElementById("eternalSkills").value;
        //filter instead of find since looking for all matching skills
        const matchingEternals = eternals.filter(eternal => eternal.skills.includes(skill));

        let selectedEternalInfo = document.querySelector(".selectedEternalInfo");
        if (matchingEternals.length > 0) {
            
let infoHTML = `The eternals with the skill "${skill}" are: <br>`;
matchingEternals.forEach(eternal => {
    infoHTML += `<div>
    <p>${eternal.name}</p>
    <img src="${eternal.image}" alt="${eternal.name}" style="width:140px;height:140px;">
</div>`;
});


selectedEternalInfo.innerHTML = infoHTML;

        } else {
            selectedEternalInfo.innerHTML = `No eternals have this skill, please try another skill...hint = immortality, healing, language, strength, combat...`;

        }
    }
