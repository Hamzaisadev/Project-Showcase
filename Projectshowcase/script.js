const githubIcon = document.querySelector('.github iconify-icon');
const whatsappIcon = document.querySelector('.whatsapp iconify-icon');
const gmailIcon = document.querySelector('.gmail iconify-icon');
const linkedinIcon = document.querySelector('.linkedin iconify-icon');

// Add CSS transition to the icons
githubIcon.style.transition = 'transform 0.3s ease-in-out';
whatsappIcon.style.transition = 'transform 0.3s ease-in-out, icon 0.3s ease-in-out';
gmailIcon.style.transition = 'transform 0.3s ease-in-out, icon 0.3s ease-in-out';
linkedinIcon.style.transition = 'transform 0.3s ease-in-out, icon 0.3s ease-in-out';

// Add event listeners for hover effects
githubIcon.addEventListener('mouseover', () => {
  githubIcon.style.transform = 'scale(1.2)'; // Add zoom effect
});

githubIcon.addEventListener('mouseout', () => {
  githubIcon.style.transform = 'scale(1)'; // Reset zoom effect
});

whatsappIcon.addEventListener('mouseover', () => {
  whatsappIcon.icon = 'logos:whatsapp-icon';
  whatsappIcon.width = 40;
  whatsappIcon.style.transform = 'scale(1.2)'; // Add zoom effect
});

whatsappIcon.addEventListener('mouseout', () => {
  whatsappIcon.icon = 'mdi:whatsapp';
  whatsappIcon.width = 40;
  whatsappIcon.style.transform = 'scale(1)'; // Reset zoom effect
});

gmailIcon.addEventListener('mouseover', () => {
  gmailIcon.icon = "skill-icons:gmail-light";
  gmailIcon.width = 40;
  gmailIcon.style.transform = 'scale(1.3)'; // Add zoom effect
});

gmailIcon.addEventListener('mouseout', () => {
  gmailIcon.icon = 'mdi:gmail';
  gmailIcon.width = 40;
  gmailIcon.style.transform = 'scale(1)'; // Reset zoom effect
});

linkedinIcon.addEventListener('mouseover', () => {
    linkedinIcon.icon = 'devicon:linkedin';
    linkedinIcon.width = 40;
    linkedinIcon.style.transform = 'scale(1.2)'; // Add zoom effect
  });
  
  linkedinIcon.addEventListener('mouseout', () => {
    linkedinIcon.icon = 'mdi:linkedin';
    linkedinIcon.width = 40;
    linkedinIcon.style.transform = 'scale(1)'; // Reset zoom effect
  });