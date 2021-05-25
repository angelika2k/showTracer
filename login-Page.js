var users = [
    
    {
        email:'d',
        password:'a'
    },
    {
        email: 'david@email.com',
        password: 'secret#CatOne1'
    },
    {
        email: 'john@email.com',
        password: 'secret#CatTwo2'
    },

    {
        email: 'chloe@email.com',
        password: 'secret#CatThree3'
    },

    {
        email: 'susan@email.com',
        password: 'secret#CatFour4'
    },

    {
        email: 'sirani@email.com',
        password: 'secret#CatFive5'
    }
];


function check(){
    let uEmail = $('#usre').val();
    let uPassword = $('#usrp').val();
    let login = false

    for (let i = 0; i < users.length; i++) {
        if (uEmail == users[i].email && uPassword == users[i].password ) {
            login=true
            break;
        }
    }

    if (login) {
        alert('Login Succesful')
    }else{
        alert('Login Unsuccesful')
    }
    
}