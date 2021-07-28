const skillsDiv = document.getElementById("skills-div")
const skillsArray = [
    {
        icon: ['fab', 'fa-html5'],
        color: 'red',
        text: 'Html5'
    },
    {
        icon: ['fab', 'fa-css3-alt'],
        color: 'blue',
        text: 'Css'
    },
    {
        icon: ['fab', 'fa-js-square'],
        color: 'yellow',
        text: 'Javascript'
    },
    {
        icon: ['fab', 'fa-bootstrap'],
        color: 'purple',
        text: 'Bootstrap'
    },
    {
        icon: ['fab', 'fa-git-alt'],
        color: 'red',
        text: 'Git'
    },
    {
        icon: ['fab', 'fa-node'],
        color: 'limegreen',
        text: 'Node'
    },
    {
        icon: ['fab', 'fa-react'],
        color: 'lightblue',
        text: 'React'
    },
    {
        icon: ['fab', 'fa-python'],
        color: 'blue',
        text: 'Python'
    },
    {
        icon: ['fas', 'fa-database'],
        color: 'cyan',
        text: 'Postgres'
    },
    {
        icon: ['fas', 'fa-server'],
        color: 'green',
        text: 'MongoDB'
    }
]

skillsArray.map(skill => {
    //Create Elements
    const paragraph = document.createElement('p')
    const div = document.createElement('div')
    const icon = document.createElement('i')
    
    //Style icons
    icon.classList.add(skill.icon[0], skill.icon[1])
    icon.style.color = skill.color
    div.style.margin = '3rem auto'
    
    paragraph.textContent = skill.text

    //Append icons in the correct order
    div.appendChild(icon)
    div.appendChild(paragraph)
    skillsDiv.appendChild(div)
})



