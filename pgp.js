document.addEventListener('DOMContentLoaded', function () {
    const togglePgpBtn = document.getElementById('togglePgpBtn');
    const pgpKey = document.getElementById('pgpKey');

    togglePgpBtn.addEventListener('click', function () {
        if (pgpKey.style.display === 'none' || pgpKey.style.display === '') {
            pgpKey.style.display = 'block';
            togglePgpBtn.textContent = 'Hide PGP Public Key';
        } else {
            pgpKey.style.display = 'none';
            togglePgpBtn.textContent = 'Show PGP Public Key';
        }
    });
});