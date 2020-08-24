var skills = ["Javascript", "ReactJS", "React Native"]

function temHabilidade(skills) {
    for (const skill of skills) {
        if (skill == "Javascript") {
            console.log(`${skill} == True`)
            return true
        } else {
            console.log(`${skill} == False`)
            return false
        }
    }
}

temHabilidade(skills)