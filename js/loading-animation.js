document.addEventListener('DOMContentLoaded', function() {

    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="full-moon"></div>

        <div class="jumping-rabbits">
            <div class="rabbit"></div>
            <div class="rabbit"></div>
            <div class="rabbit"></div>
            <div class="rabbit"></div>
            <div class="rabbit"></div>
        </div>

        <div class="falling-leaves">
            <div class="leaf"></div>
            <div class="leaf"></div>
            <div class="leaf"></div>
            <div class="leaf"></div>
            <div class="leaf"></div>
            <div class="leaf"></div>
        </div>

        <div class="change-figure"></div>

        <div class="signature-container">
            <div class="signature-text">
                <span class="letter">R</span><span class="letter">o</span><span class="letter">b</span><span class="letter">i</span><span class="letter">n</span>
                <span class="letter">&nbsp;</span>
                <span class="letter">T</span><span class="letter">s</span><span class="letter">a</span><span class="letter">i</span>
            </div>
            <div class="slogan-text">Diagnosing your property goals, prescribing the right solutions</div>
            <div class="blessing-text">
                <div class="chinese-blessing">中秋节快乐</div>
                <div class="english-blessing">Happy Mid-Autumn Festival</div>
            </div>
        </div>
    `;

    document.body.appendChild(loadingOverlay);

    setTimeout(() => {
        loadingOverlay.classList.add('hidden');
        setTimeout(() => { loadingOverlay.remove(); }, 700);
    }, 5000);
});