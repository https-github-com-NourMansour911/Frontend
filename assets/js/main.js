const coachButtons = document.querySelectorAll(".btnCoach");
const coachSection = document.getElementById('top-rated');

coachButtons.forEach(btn => {
  btn.addEventListener('click', ()=> {
  coachSection.scrollIntoView({ behavior: "smooth" });
});
});