const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description'
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        choices:['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependencies'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribute'
    },

];

module.exports = {
    questions
}