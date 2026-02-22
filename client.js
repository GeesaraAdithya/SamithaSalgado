// ==========================================
// --- 1. LANGUAGE & TRANSLATIONS ---
// ==========================================

const resources = {
  en: {
    translation: {
      nav: { services: "Services", about: "About", contact: "Contact Us" },
      hero: {
        badge: "Professional Astrologer",
        title1: "Unlock Your",
        title2: "True Potential",
        desc: "With over 20 years of experience, I guide you through life's complexities using the ancient wisdom of Vedic Astrology.",
        cta: "Book Consultation"
      },
      about: {
        heading: "The Wisdom of Stars",
        journeyTitle: "My Journey",
        journeyText: "My name is Samitha Salgado. For two decades, I have dedicated my life to decoding the celestial language. Astrology is not just prediction; it is a roadmap to your soul.",
        contactDetails: "Contact Details",
        location: "Colombo, Sri Lanka",
        watchIntro: "Watch Introduction",
        whyChoose: "Why Choose Me?",
        whyText: "I combine traditional calculations with modern psychological understanding to give you answers that are practical, actionable, and deeply healing."
      },
      zodiac: { heading: "Cosmic Energies" },
      stats: { exp: "Years Exp.", clients: "Happy Clients", age: "Years Old" },
      booking: {
        heading: "Request a Reading",
        sub: "Fill out the form below to generate your official booking ticket."
      },
      form: {
        personal: "Personal Details",
        fullname: "Full Name",
        whatsapp: "WhatsApp Number",
        dob: "Date of Birth",
        tob: "Time of Birth",
        pob: "Place of Birth & Address",
        serviceDetails: "Service & Question",
        selectService: "Select Service",
        question: "Your Question",
        payment: "Payment Method"
      },
      service: {
        full: "Full Horoscope Reading ($50)",
        specific: "Specific Question Analysis ($30)"
      },
      pay: {
        card: "Credit Card", soon: "Coming Soon",
        bank: "Bank Transfer", required: "Required for Ticket"
      },
      bank: {
        transferTo: "Transfer Fees To:",
        uploadInst: "Please take a photo of your slip. You will attach it in WhatsApp after clicking 'Confirm'."
      },
      btn: { confirm: "Confirm & Generate Ticket" }
    }
  },
  si: {
    translation: {
      nav: { services: "සේවා", about: "අපි ගැන", contact: "අමතන්න" },
      hero: {
        badge: "වෘත්තීය ජ්යෝතිර්වේදී",
        title1: "ඔබේ සැබෑ",
        title2: "විභවය සොයාගන්න",
        desc: "වසර 20 කට වැඩි පළපුරුද්දක් සමඟින්, වෛදික ජ්‍යොතිෂයේ පුරාණ ප්‍රඥාව භාවිතා කරමින් මම ඔබට ජීවිතයේ සංකීර්ණතා මඟ පෙන්වන්නෙමි.",
        cta: "වේලාවක් වෙන්කරගන්න"
      },
      about: {
        heading: "තාරකා වල ප්‍රඥාව",
        journeyTitle: "මගේ ගමන",
        journeyText: "මගේ නම සමිත සල්ගාදු. දශක දෙකක් තිස්සේ මම මගේ ජීවිතය කැප කළේ ආකාශ භාෂාව විකේතනය කිරීමටයි. ජ්යෝතිඃ ශාස්ත්රය හුදෙක් අනාවැකියක් නොවේ; එය ඔබගේ ආත්මයට මාර්ග සිතියමකි.",
        contactDetails: "සම්බන්ධතා විස්තර",
        location: "කොළඹ, ශ්‍රී ලංකාව",
        watchIntro: "හැඳින්වීම නරඹන්න",
        whyChoose: "ඇයි මාව තෝරාගන්නේ?",
        whyText: "ප්‍රායෝගික, ක්‍රියාවට නැංවිය හැකි සහ ගැඹුරින් සුව කරන පිළිතුරු ඔබට ලබා දීමට මම සාම්ප්‍රදායික ගණනය කිරීම් නවීන මනෝවිද්‍යාත්මක අවබෝධය සමඟ ඒකාබද්ධ කරමි."
      },
      zodiac: { heading: "විශ්ව ශක්තීන්" },
      stats: { exp: "වසරක පළපුරුද්ද", clients: "සතුටුදායක පාරිභෝගිකයින්", age: "වයස අවුරුදු" },
      booking: {
        heading: "සේවාවක් ඉල්ලුම් කරන්න",
        sub: "ඔබගේ වෙන්කිරීමේ ටිකට් පත ලබා ගැනීම සඳහා පහත ආකෘති පත්රය පුරවන්න."
      },
      form: {
        personal: "පෞද්ගලික විස්තර",
        fullname: "සම්පූර්ණ නම",
        whatsapp: "වට්ස්ඇප් අංකය",
        dob: "උපන් දිනය",
        tob: "උපන් වේලාව",
        pob: "උපන් ස්ථානය සහ ලිපිනය",
        serviceDetails: "සේවාව සහ ගැටළුව",
        selectService: "සේවාව තෝරන්න",
        question: "ඔබේ ගැටළුව",
        payment: "ගෙවීම් ක්රමය"
      },
      service: {
        full: "සම්පූර්ණ කේන්දර පරීක්ෂාව ($50)",
        specific: "එක් ගැටළුවක් විශ්ලේෂණය ($30)"
      },
      pay: {
        card: "කාඩ්පත් ගෙවීම්", soon: "ළඟදීම",
        bank: "බැංකු තැන්පතු", required: "ටිකට් පත සඳහා අවශ්‍යයි"
      },
      bank: {
        transferTo: "ගාස්තු තැන්පත් කරන්න:",
        uploadInst: "කරුණාකර ඔබේ රිසිට් පතේ ඡායාරූපයක් ගන්න. 'තහවුරු කරන්න' ක්ලික් කිරීමෙන් පසු ඔබ එය වට්ස්ඇප් වෙත යැවිය යුතුය."
      },
      btn: { confirm: "තහවුරු කර ටිකට් පත ලබාගන්න" }
    }
  }
};

// Initialize i18next (Only if loaded, i.e., on index.html)
if (typeof i18next !== 'undefined') {
    i18next.init({
      lng: 'en', // default language
      resources: resources
    }, function(err, t) {
      updateContent();
    });
}

// Update content based on translations
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if(typeof i18next !== 'undefined') {
        element.innerHTML = i18next.t(key);
    }
  });
}

// Toggle Language Button Logic
const langBtn = document.getElementById('langToggle');
const langSpan = document.getElementById('curLang');
let isSinhala = false;

if (langBtn) {
    langBtn.addEventListener('click', () => {
        isSinhala = !isSinhala;
        const lang = isSinhala ? 'si' : 'en';
        if(typeof i18next !== 'undefined') {
            i18next.changeLanguage(lang, () => {
                updateContent();
                langSpan.innerText = isSinhala ? 'EN' : 'SI';
            });
        }
    });
}


// ==========================================
// --- 2. COMMON UI LOGIC & ANIMATIONS ---
// ==========================================

// Cursor Animation (Desktop Only)
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if(window.matchMedia("(pointer: fine)").matches && cursorDot) {
    window.addEventListener('mousemove', (e) => {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
        
        cursorOutline.animate({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`
        }, { duration: 500, fill: "forwards" });
    });
}

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
    }
}
window.addEventListener('scroll', reveal);
reveal(); // Trigger once on load

// Star Background Generator
const starContainer = document.getElementById('star-container');
if(starContainer) {
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.opacity = Math.random();
        starContainer.appendChild(star);
    }
}


// ==========================================
// --- 3. ZODIAC CIRCLE INTERACTION ---
// ==========================================

const zodiacIcons = document.querySelectorAll('.zodiac-icon');
const zTitle = document.getElementById('zodiac-title');
const zDesc = document.getElementById('zodiac-desc');

if (zodiacIcons.length > 0) {
    zodiacIcons.forEach(icon => {
        // When mouse enters a sign
        icon.addEventListener('mouseenter', () => {
            zTitle.innerText = icon.getAttribute('data-title');
            zDesc.innerText = icon.getAttribute('data-desc');
        });
        
        // When mouse leaves a sign
        icon.addEventListener('mouseleave', () => {
            zTitle.innerText = "The Zodiac";
            zDesc.innerText = "Hover over a sign to reveal its cosmic energy and traits.";
        });
    });
}


// ==========================================
// --- 4. INDEX PAGE LOGIC (Form Handling) ---
// ==========================================

const astroForm = document.getElementById('astroForm');

if (astroForm) {
    // Stats Counter Animation
    const counters = document.querySelectorAll('.counter');
    let hasCounted = false;
    window.addEventListener('scroll', () => {
        const statsSection = document.querySelector('.stats-grid');
        if(!hasCounted && statsSection && statsSection.getBoundingClientRect().top < window.innerHeight / 1.3) {
            counters.forEach(counter => {
                counter.innerText = '0';
                const target = +counter.getAttribute('data-target');
                const increment = target / 50;
                const updateCounter = () => {
                    const c = +counter.innerText;
                    if (c < target) {
                        counter.innerText = Math.ceil(c + increment);
                        setTimeout(updateCounter, 30);
                    } else { counter.innerText = target; }
                };
                updateCounter();
            });
            hasCounted = true;
        }
    });

    // Form Submit Listener
    astroForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Show loading state
        const btn = document.getElementById('submitBtn');
        btn.innerText = "Processing...";
        btn.disabled = true;

        // Collect Data
        const bookingData = {
            id: 'BK-' + Math.floor(10000 + Math.random() * 90000),
            fullName: document.getElementById('fullName').value,
            whatsapp: document.getElementById('whatsapp').value,
            dob: document.getElementById('dob').value,
            tob: document.getElementById('tob').value,
            pob: document.getElementById('pob').value,
            service: document.getElementById('serviceType').value,
            question: document.getElementById('clientQuestion').value
        };

        // Pass data via URL (Fixes the "No Data Found" bug)
        const params = new URLSearchParams(bookingData).toString();
        
        setTimeout(() => {
            window.location.href = `ticket.html?${params}`;
        }, 1000);
    });
}


// ==========================================
// --- 5. TICKET PAGE LOGIC (PDF Gen) ---
// ==========================================

// Check if we are on the ticket page with data in the URL
if (window.location.pathname.includes('ticket.html') || window.location.search.includes('?id=')) {
    
    // Retrieve Data from URL
    const params = new URLSearchParams(window.location.search);
    const data = {
        id: params.get('id'),
        fullName: params.get('fullName'),
        whatsapp: params.get('whatsapp'),
        dob: params.get('dob'),
        tob: params.get('tob'),
        pob: params.get('pob'),
        service: params.get('service'),
        question: params.get('question')
    };

    // Check if jsPDF library is loaded
    if (typeof window.jspdf !== 'undefined') {
        const { jsPDF } = window.jspdf;

        if (data.fullName && jsPDF) {
            
            // --- A. GENERATE PREMIUM TICKET PDF ---
            
            // 1. Custom Ticket Size (100mm x 160mm)
            const doc = new jsPDF({
                orientation: "portrait",
                unit: "mm",
                format: [100, 160] 
            });

            // Colors
            const gold = [212, 175, 55];
            const dark = [10, 10, 10];
            const white = [255, 255, 255];
            const grey = [80, 80, 80];

            // 2. Background & Border
            doc.setFillColor(...white);
            doc.rect(0, 0, 100, 160, 'F'); 
            
            // Gold Borders
            doc.setDrawColor(...gold);
            doc.setLineWidth(1);
            doc.rect(5, 5, 90, 150); // Outer
            doc.setLineWidth(0.3);
            doc.rect(7, 7, 86, 146); // Inner

            // 3. Header Section (Black Block)
            doc.setFillColor(...dark);
            doc.rect(5, 5, 90, 35, 'F');
            
            // Title
            doc.setTextColor(...gold);
            doc.setFontSize(14);
            doc.setFont("helvetica", "bold");
            doc.text("SAMITHA SALGADO", 50, 18, null, null, "center");
            
            doc.setFontSize(8);
            doc.setTextColor(...white);
            doc.setFont("helvetica", "normal");
            doc.text("PROFESSIONAL VEDIC ASTROLOGY", 50, 26, null, null, "center");
            
            doc.setDrawColor(...gold);
            doc.line(25, 30, 75, 30); // Underline

            // 4. Ticket Details
            let y = 50;
            
            // Booking ID
            doc.setTextColor(...dark);
            doc.setFontSize(9);
            doc.setFont("helvetica", "bold");
            doc.text("BOOKING REFERENCE:", 50, y, null, null, "center");
            y += 6;
            doc.setFontSize(12);
            doc.setFont("courier", "bold"); 
            doc.text(`${data.id}`, 50, y, null, null, "center");
            y += 15;

            // Helper function for rows
            const addRow = (label, value) => {
                doc.setFont("helvetica", "bold");
                doc.setFontSize(8);
                doc.setTextColor(...gold);
                doc.text(label.toUpperCase(), 15, y);
                
                y += 5;
                
                doc.setFont("helvetica", "normal");
                doc.setFontSize(10);
                doc.setTextColor(0, 0, 0);
                
                // Handle long text (like Place of Birth)
                const splitValue = doc.splitTextToSize(value || "N/A", 70);
                doc.text(splitValue, 15, y);
                
                y += (splitValue.length * 5) + 4; // Adjust spacing based on text length
            };

            addRow("Client Name", data.fullName);
            addRow("Service Type", data.service);
            addRow("WhatsApp", data.whatsapp);
            
            // Birth Details (Side by Side)
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.setTextColor(...gold);
            doc.text("DOB", 15, y);
            doc.text("TIME", 65, y);
            y += 5;
            doc.setFont("helvetica", "normal");
            doc.setTextColor(0, 0, 0);
            doc.text(data.dob || "N/A", 15, y);
            doc.text(data.tob || "N/A", 65, y);
            y += 12;

            // 5. Tear-Off Line
            doc.setDrawColor(200, 200, 200);
            doc.setLineDash([2, 2], 0);
            doc.line(5, 135, 95, 135);
            doc.setLineDash([]); // Reset
            
            // 6. Bottom Note
            doc.setFontSize(7);
            doc.setTextColor(...grey);
            doc.text("Submit this ticket with your payment slip.", 50, 142, null, null, "center");
            
            doc.setFillColor(...gold);
            doc.rect(30, 146, 40, 6, 'F');
            doc.setTextColor(...dark);
            doc.setFontSize(6);
            doc.setFont("helvetica", "bold");
            doc.text("WAITING FOR VERIFICATION", 50, 150, null, null, "center");

            // Save PDF automatically
            doc.save(`Ticket_${data.fullName}.pdf`);

            // --- B. SETUP WHATSAPP BUTTON ---
            const myNumber = "94752582482";
            const msg = `Hello Samitha, here is my booking.%0a%0a` +
                        `*Ref:* ${data.id}%0a` +
                        `*Name:* ${data.fullName}%0a` +
                        `I have attached the *PDF Ticket* and my *Bank Slip* below. 👇`;
            
            const waBtn = document.getElementById('whatsappBtn');
            if(waBtn) waBtn.href = `https://wa.me/${myNumber}?text=${msg}`;

        } else {
            alert("No booking data found. Please fill the form first.");
            window.location.href = 'index.html';
        }
    }
}