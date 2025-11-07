document.addEventListener('DOMContentLoaded', function () {
    const togglePgpBtn = document.getElementById('togglePgpBtn');
    const pgpKey = document.getElementById('pgpKey');
    const pgpActions = document.getElementById('pgpActions');
    const copyPgpBtn = document.getElementById('copyPgpBtn');
    const copyFeedback = document.getElementById('copyFeedback');

    togglePgpBtn.addEventListener('click', function () {
        if (pgpKey.style.display === 'none' || pgpKey.style.display === '') {
            pgpKey.style.display = 'block';
            pgpActions.style.display = 'flex';
            togglePgpBtn.textContent = 'Hide PGP Public Key';

            // Optional: Smooth scroll to ensure PGP key is visible
            setTimeout(() => {
                pgpKey.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        } else {
            pgpKey.style.display = 'none';
            pgpActions.style.display = 'none';
            togglePgpBtn.textContent = 'Show PGP Public Key';
            // Hide feedback when hiding the key
            copyFeedback.classList.remove('show');
        }
    });

    copyPgpBtn.addEventListener('click', function () {
        // Get the PGP key text without HTML tags
        const pgpText = pgpKey.innerText || pgpKey.textContent;

        // Use the Clipboard API to copy the text
        navigator.clipboard.writeText(pgpText).then(function () {
            // Show success feedback
            copyFeedback.textContent = 'Copied!';
            copyFeedback.classList.add('show');

            // Hide feedback after 2 seconds
            setTimeout(() => {
                copyFeedback.classList.remove('show');
            }, 2000);
        }).catch(function (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = pgpText;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                copyFeedback.textContent = 'Copied!';
                copyFeedback.classList.add('show');
                setTimeout(() => {
                    copyFeedback.classList.remove('show');
                }, 2000);
            } catch (err) {
                copyFeedback.textContent = 'Failed to copy';
                copyFeedback.classList.add('show');
                setTimeout(() => {
                    copyFeedback.classList.remove('show');
                }, 2000);
            }
            document.body.removeChild(textArea);
        });
    });
});