let jsonobj = {
    "people":[
    {
        "name": "Ruth Ewing",
        "sex": 'F',
        "born": "10/30/1983",
        "died": "Alive",
        "father": "George Marshall",
        "mother": "Jessica Shuster"
    },
    {
        "name": "Joshua Wheeler",
        "sex": 'M',
        "born": "05/12/1984",
        "died": "Alive",
        "father": "Bart Wheeler",
        "mother": "Betty Wheeler"
    },
    {
        "name": "Antonio Autrey",
        "sex": 'M',
        "born": "12/03//1971",
        "died": "Alive",
        "father": "Robt Autrey",
        "mother": "Svetlana Autrey"
    },
    {
        "name": "Landon Hood",
        "sex": 'M',
        "born": "04/16/1994",
        "died": "Alive",
        "father": "George Hood",
        "mother": "Jessica Hood"
    },
    {
        "name": "Crystal Higdon",
        "sex": 'F',
        "born": "04/18/1962",
        "died": "Alive",
        "father": "Steve Higdon",
        "mother": "Eve Higno"
    }
    ]
}



document.getElementById('search').onclick = function() {

    let input = (document.getElementById('searchName').value).toLowerCase();   
    jsonobj.people.forEach(element => {
 
        let elementName = element.name;
        let elementNameLower = elementName.toLowerCase();
        console.log(elementNameLower);
        if (elementNameLower.includes(input)) {
            let elementprint = 
            "Name: " + element.name + "<br>" + 
            "Sex: " + element.sex + "<br>" +
            "Born: " + element.born + "<br>" +
            "Died: " + element.died + "<br>" +
            "Father: " +element.father + "<br>" +
            "Mother: " + element.mother;

            document.getElementById('data').innerHTML = elementprint;
        } else {
            document.getElementById('data').innerHTML = "Invalid Name";
        }
       
    });
}