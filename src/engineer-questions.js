module.exports = [
        {
            type: 'input',
            name: 'name',
            message: 'Please enter name.',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter employeen ID.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter email address.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username.',
        },
        {
            type: 'list',
            name: 'menu',
            choices: ['engineer', 'intern', 'finish'],
            message: 'Would you like to add an engineer or intern? If not, please choose to finish your team.',
        },
    ];