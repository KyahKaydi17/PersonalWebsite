document.querySelectorAll('.cert-image').forEach(img => {
    img.addEventListener('click', function() {
        const modalImage = document.getElementById('modalCertImage');
        modalImage.src = this.src;
        $('#certModal').modal('show');
    });
});

// Certification fade-in effect on load
document.addEventListener('DOMContentLoaded', function() {
    const certs = document.querySelectorAll('.cert-image');
    certs.forEach((cert, index) => {
        setTimeout(() => {
            cert.style.opacity = '1';
        }, index * 100); // Stagger the animations
    });
});

document.getElementById('viewMoreBtn').addEventListener('click', function() {
    const newCerts = [
        { id: 'cert5', src: 'cert5.png', alt: 'Certification 5' },
        { id: 'cert6', src: 'cert6.png', alt: 'Certification 6' },
        { id: 'cert7', src: 'cert7.png', alt: 'Certification 7' },
        { id: 'cert8', src: 'cert8.png', alt: 'Certification 8' }
    ];

    const row = document.querySelector('.certifications-preview .row');
    newCerts.forEach(cert => {
        const col = document.createElement('div');
        col.className = 'col-sm-3';
        const certLink = document.createElement('a');
        certLink.href = `#${cert.id}`;
        certLink.className = 'cert-link';
        const certImg = document.createElement('img');
        certImg.src = cert.src;
        certImg.alt = cert.alt;
        certImg.className = 'cert-image';
        certLink.appendChild(certImg);
        col.appendChild(certLink);
        row.appendChild(col);

        // Add click event to new images
        certImg.addEventListener('click', function() {
            const modalImage = document.getElementById('modalCertImage');
            modalImage.src = this.src;
            $('#certModal').modal('show');
        });

        // Apply fade-in effect to new certifications
        certImg.style.opacity = '0';
        setTimeout(() => {
            certImg.style.opacity = '1';
        }, 100);
    });

    // Remove the view more button after clicking
    this.style.display = 'none';
});

