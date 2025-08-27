// Certificate data
const certificates = {
  'comptia-itf': {
    file: 'certificates/comptia-itf.pdf',
    title: 'CompTIA IT Fundamentals (ITF+) Certification',
    type: 'pdf'
  },
  'diploma': {
    file: 'certificates/Diploma.jpg',
    title: 'Certificate of Completion of BSIT Graduate Course - DIPLOMA',
    type: 'image'
  },
  'numbomath': {
    file: 'certificates/numbomath.jpg',
    title: 'Certificate of Leadership – Capstone Project',
    type: 'image'
  },
  'mockinterview': {
    file: 'certificates/MockInterviewMontes.png',
    title: 'Certificate of Mock Interview',
    type: 'image'
  }
};

// DOM elements
const modal = document.getElementById('certificateModal');
const pdfViewer = document.getElementById('pdfViewer');
const pdfFrame = document.getElementById('pdfFrame');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prevCert');
const nextBtn = document.getElementById('nextCert');
const certificateCards = document.querySelectorAll('.certificate-card');

// State variables
let currentCertificateIndex = 0;
const certificateKeys = Object.keys(certificates);

// Open modal with certificate
function openCertificateModal(index) {
  const certKey = certificateKeys[index];
  const cert = certificates[certKey];
  
  currentCertificateIndex = index;
  
  // Show appropriate viewer based on file type
  if (cert.type === 'pdf') {
    pdfViewer.style.display = 'block';
    modalImage.style.display = 'none';
    
    // Load PDF in iframe
    pdfFrame.src = cert.file + '#view=FitH'; // Fit to width
  } else {
    pdfViewer.style.display = 'none';
    modalImage.style.display = 'block';
    modalImage.src = cert.file;
    modalImage.alt = cert.title;
  }
  
  // Update navigation buttons state
  prevBtn.style.display = index === 0 ? 'none' : 'flex';
  nextBtn.style.display = index === certificateKeys.length - 1 ? 'none' : 'flex';
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close modal
function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Navigate to previous certificate
function showPrevCertificate() {
  if (currentCertificateIndex > 0) {
    openCertificateModal(currentCertificateIndex - 1);
  }
}

// Navigate to next certificate
function showNextCertificate() {
  if (currentCertificateIndex < certificateKeys.length - 1) {
    openCertificateModal(currentCertificateIndex + 1);
  }
}

// Event listeners for certificate cards
certificateCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    openCertificateModal(index);
  });
});

// Close modal when clicking on close button
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the content
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Certificate navigation events
prevBtn.addEventListener('click', showPrevCertificate);
nextBtn.addEventListener('click', showNextCertificate);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (modal.style.display === 'block') {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      showPrevCertificate();
    } else if (e.key === 'ArrowRight') {
      showNextCertificate();
    }
  }
});

// Swipe support for touch devices
let touchStartX = 0;
let touchEndX = 0;

modal.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

modal.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  
  if (touchEndX < touchStartX - swipeThreshold) {
    // Swipe left - next certificate
    showNextCertificate();
  } else if (touchEndX > touchStartX + swipeThreshold) {
    // Swipe right - previous certificate
    showPrevCertificate();
  }
}