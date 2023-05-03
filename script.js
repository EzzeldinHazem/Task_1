const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconTheme = 'fa-sun';
const selectTheme = localStorage.getItem('selected-theme');
const selectIcon = localStorage.getItem('selected-icon');
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-solid fa-moon' : 'fa-solid fa-sun';

if (selectTheme) {
    document.body.classList[selectTheme === 'dark' ? 'add' : 'remove'](lightTheme);
    themeButton.classList[selectIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

// <i class="fa-solid fa-sun"></i>