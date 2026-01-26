// Simple Router
const router = {
    navigate: function(viewId) {
        // Determine if it's a module detail or home
        if (viewId.startsWith('module-')) {
            this.showDetail(viewId);
        } else {
            this.showHome();
        }
    },

    showHome: function() {
        document.getElementById('view-home').classList.add('active');
        document.getElementById('view-detail').classList.remove('active');

        // Clear active nav
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    },

    showDetail: function(moduleId) {
        const data = moduleData[moduleId];
        if (!data) return;

        // Populate Content
        document.getElementById('detail-title').innerText = data.title;
        document.getElementById('detail-subtitle').innerText = data.subtitle;
        document.getElementById('detail-content').innerHTML = data.content;

        // Highlight code blocks newly injected
        hljs.highlightAll();

        // View Switch
        document.getElementById('view-home').classList.remove('active');
        document.getElementById('view-detail').classList.add('active');

        // Nav Sidebar Active State
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        const activeNav = document.getElementById(`nav-${moduleId}`);
        if(activeNav) activeNav.classList.add('active');
    }
};
