import refs from "./refs";

export default function navButtonsEfficiencySwitching() { 
    const navButtons = refs.navButtonsContainer.querySelectorAll('button');
    
    navButtons.forEach(button => button.classList.toggle('deactivated'));  
}