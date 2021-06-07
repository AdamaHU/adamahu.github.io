let names = ['Ádám', 'Zoli', 'Gergő', 'Ottilia', 'József']

names.forEach(element => {
    if (element === 'Ádám') {
        $('ul').append('<li id="myName">' + element + '</li>')
        $('#myName').css('font-weight', 'bold')
    } else {
        $('ul').append('<li>' + element + '</li>')
    }
})

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!",
}

$('main').append('<div id="block"></div>')
$('#block').append('<h3>' + additionalBlock.title + '</h3>')
$('#block').append('<p>' + additionalBlock.text + '</p>')