function toggleSkills() {
    const skillsContent = document.getElementById('skills-content');
    if (skillsContent.classList.contains('hidden')) {
        skillsContent.classList.remove('hidden');
    } else {
        skillsContent.classList.add('hidden');
    }
}