$.ajax('http://random.dog/woof.json').done((response) => {
    console.log(response);
    $('.dog-home').html(`
    <img src= "${dogData.url}">
    `)
})