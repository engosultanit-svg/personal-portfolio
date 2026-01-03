// script.js
document.addEventListener('DOMContentLoaded', function() {
    // تعريف النصوص بلغتين
    const translations = {
        ar: {
            // زر تبديل اللغة
            langToggle: "EN",
            
            // الرأس
            name: "عمر سلطان",
            title: "مهندس دعم فني IT | خبير أنظمة وشبكات",
            stat1: "مستخدم مدعوم",
            stat2: "مشروع منجز",
            stat3: "دعم فني",
            status: "متاح للعمل",
            
            // التنقل
            navAbout: "نبذة عني",
            navSkills: "المهارات",
            navProjects: "المشاريع",
            navContact: "تواصل معي",
            
            // قسم عني
            aboutTitle: "نبذة عني",
            aboutIntro: "محترف في مجال تكنولوجيا المعلومات مع شغف لا ينتهي لحل المشكلات التقنية وبناء أنظمة فعالة",
            detail1Title: "إدارة الأنظمة",
            detail1Desc: "خبرة متقدمة في إدارة Active Directory ودعم Windows Server مع تحسين أداء الأنظمة",
            detail2Title: "حلول الشبكات",
            detail2Desc: "تصميم وتنفيذ حلول شبكية متكاملة مع FortiGate VPN وتبديل الفروع",
            detail3Title: "الأتمتة الذكية",
            detail3Desc: "تطوير أنظمة أتمتة تقلل التدخل البشري وتزيد الكفاءة التشغيلية",
            missionTitle: "رسالتي المهنية",
            missionText: "أؤمن بأن التكنولوجيا ليست مجرد أدوات، بل حلول استراتيجية تحول التحديات إلى فرص. أتخصص في بناء جسور بين الاحتياجات التقنية والأهداف العملية، مع التركيز على الأمان، الكفاءة، والتوسع المستقبلي.",
            
            // قسم المهارات
            skillsTitle: "المهارات التقنية",
            category1Title: "دعم الأنظمة",
            category2Title: "الشبكات والأمان",
            category3Title: "الأدوات والتقنيات",
            skill1: "Active Directory",
            skill2: "Windows Server",
            skill3: "Linux Basics",
            skill4: "FortiGate VPN",
            skill5: "TCP/IP Troubleshooting",
            skill6: "Network Switching",
            skill7: "CCTV Systems",
            skill8: "Network Documentation",
            skill9: "Process Automation",
            
            // قسم المشاريع
            projectsTitle: "أبرز المشاريع",
            project1Title: "تصميم شبكة مؤسسية ثلاثية الطبقات",
            project1Desc: "تصميم وتنفيذ بنية شبكية متكاملة لمؤسسة تضم 120 مستخدم مع فصل الطبقات (Core, Aggregation, Access) لضمان الأداء العالي والتوسع المستقبلي.",
            project2Title: "نظام أمني متكامل",
            project2Desc: "تكامل أنظمة CCTV مع الشبكة الرئيسية مع ضبط صلاحيات الوصول المركزي",
            project3Title: "نشر هواتف IP",
            project3Desc: "تطوير حل اتصال داخلي عبر نقاط الوصول على نفس الشبكة",
            project4Title: "أتمتة العمليات",
            project4Desc: "بناء نظام تحكم آلي للأنظمة الصوتية والإشعارات",
            
            // قسم التواصل
            contactTitle: "تواصل معي",
            contactEmail: "البريد الإلكتروني",
            contactPhone: "الهاتف",
            contactLocation: "الموقع",
            emailBtn: "إرسال بريد",
            callBtn: "اتصل الآن",
            mapBtn: "عرض على الخريطة",
            locationText: "الجيزة، مصر",
            formTitle: "أرسل رسالة مباشرة",
            formName: "الاسم الكامل",
            formEmail: "البريد الإلكتروني",
            formSubject: "موضوع الرسالة",
            formMessage: "محتوى الرسالة",
            formSubmit: "إرسال الرسالة",
            
            // الفوتر
            footerName: "عمر سلطان",
            footerTag: "محترف في بناء حلول تقنية ذكية",
            copyright: "© 2025 جميع الحقوق محفوظة"
        },
        en: {
            // زر تبديل اللغة
            langToggle: "AR",
            
            // الرأس
            name: "Omar Sultan",
            title: "IT Support Engineer | Systems & Network Expert",
            stat1: "Users Supported",
            stat2: "Projects Completed",
            stat3: "Technical Support",
            status: "Available for Work",
            
            // التنقل
            navAbout: "About Me",
            navSkills: "Skills",
            navProjects: "Projects",
            navContact: "Contact",
            
            // قسم عني
            aboutTitle: "About Me",
            aboutIntro: "IT professional with an endless passion for solving technical problems and building efficient systems",
            detail1Title: "Systems Management",
            detail1Desc: "Advanced experience in Active Directory administration and Windows Server support with system performance optimization",
            detail2Title: "Network Solutions",
            detail2Desc: "Design and implementation of integrated network solutions with FortiGate VPN and branch switching",
            detail3Title: "Smart Automation",
            detail3Desc: "Developing automation systems that reduce human intervention and increase operational efficiency",
            missionTitle: "My Professional Mission",
            missionText: "I believe that technology is not just tools, but strategic solutions that transform challenges into opportunities. I specialize in building bridges between technical needs and practical goals, with a focus on security, efficiency, and future scalability.",
            
            // قسم المهارات
            skillsTitle: "Technical Skills",
            category1Title: "System Support",
            category2Title: "Networking & Security",
            category3Title: "Tools & Technologies",
            skill1: "Active Directory",
            skill2: "Windows Server",
            skill3: "Linux Basics",
            skill4: "FortiGate VPN",
            skill5: "TCP/IP Troubleshooting",
            skill6: "Network Switching",
            skill7: "CCTV Systems",
            skill8: "Network Documentation",
            skill9: "Process Automation",
            
            // قسم المشاريع
            projectsTitle: "Featured Projects",
            project1Title: "Three-Tier Enterprise Network Design",
            project1Desc: "Design and implementation of an integrated network infrastructure for a 120-user organization with layer separation (Core, Aggregation, Access) to ensure high performance and future expansion.",
            project2Title: "Integrated Security System",
            project2Desc: "Integration of CCTV systems with the main network with centralized access control configuration",
            project3Title: "IP Phones Deployment",
            project3Desc: "Development of internal communication solution via access points on the same network",
            project4Title: "Process Automation",
            project4Desc: "Building automated control system for audio systems and notifications",
            
            // قسم التواصل
            contactTitle: "Contact Me",
            contactEmail: "Email",
            contactPhone: "Phone",
            contactLocation: "Location",
            emailBtn: "Send Email",
            callBtn: "Call Now",
            mapBtn: "View on Map",
            locationText: "Giza, Egypt",
            formTitle: "Send Direct Message",
            formName: "Full Name",
            formEmail: "Email Address",
            formSubject: "Message Subject",
            formMessage: "Message Content",
            formSubmit: "Send Message",
            
            // الفوتر
            footerName: "Omar Sultan",
            footerTag: "Professional in building smart technical solutions",
            copyright: "© 2025 All Rights Reserved"
        }
    };

    // الحالة الحالية للغة
    let currentLang = 'ar';
    
    // عناصر DOM
    const langToggleBtn = document.getElementById('langToggle');
    const langToggleText = langToggleBtn.querySelector('.lang-text');
    const htmlElement = document.documentElement;
    
    // تحديث النصوص في الصفحة
    function updatePageText(lang) {
        // تحديث جميع العناصر التي تحتوي على data-key
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // تحديث زر تبديل اللغة
        langToggleText.textContent = translations[lang].langToggle;
        
        // تحديث اتجاه الصفحة
        if (lang === 'ar') {
            htmlElement.setAttribute('dir', 'rtl');
            htmlElement.setAttribute('lang', 'ar');
            document.body.style.fontFamily = "'Cairo', sans-serif";
        } else {
            htmlElement.setAttribute('dir', 'ltr');
            htmlElement.setAttribute('lang', 'en');
            document.body.style.fontFamily = "'Poppins', sans-serif";
        }
        
        // تحديث عنوان الصفحة
        document.title = lang === 'ar' ? 'عمر سلطان - مهندس دعم فني' : 'Omar Sultan - IT Support Engineer';
        
        // حفظ اللغة في localStorage
        localStorage.setItem('preferredLang', lang);
    }
    
    // تبديل اللغة
    function toggleLanguage() {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        updatePageText(currentLang);
    }
    
    // تهيئة الصفحة مع اللغة المحفوظة
    function initLanguage() {
        const savedLang = localStorage.getItem('preferredLang');
        if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
            currentLang = savedLang;
        }
        updatePageText(currentLang);
    }
    
    // إضافة مستمع الحدث لزر تبديل اللغة
    langToggleBtn.addEventListener('click', toggleLanguage);
    
    // إضافة مستمع الحدث للنموذج
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const message = currentLang === 'ar' 
            ? 'شكراً لتواصلك! سأرد عليك في أقرب وقت ممكن.' 
            : 'Thank you for your message! I will get back to you as soon as possible.';
        
        // إنشاء نافذة تأكيد أنيقة
        const alertBox = document.createElement('div');
        alertBox.className = 'custom-alert';
        alertBox.innerHTML = `
            <div class="alert-content">
                <i class="fas fa-check-circle"></i>
                <h3>${currentLang === 'ar' ? 'تم الإرسال بنجاح' : 'Successfully Sent'}</h3>
                <p>${message}</p>
                <button class="alert-btn">${currentLang === 'ar' ? 'حسناً' : 'OK'}</button>
            </div>
        `;
        
        // إضافة الأنماط
        const style = document.createElement('style');
        style.textContent = `
            .custom-alert {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                backdrop-filter: blur(5px);
            }
            .alert-content {
                background: var(--dark-card);
                padding: 2rem;
                border-radius: 15px;
                text-align: center;
                border: 1px solid var(--tech-cyan);
                max-width: 400px;
                animation: fadeIn 0.3s ease;
            }
            .alert-content i {
                font-size: 4rem;
                color: #4ade80;
                margin-bottom: 1rem;
            }
            .alert-content h3 {
                color: var(--light-text);
                margin-bottom: 1rem;
            }
            .alert-content p {
                color: var(--gray-text);
                margin-bottom: 1.5rem;
                line-height: 1.6;
            }
            .alert-btn {
                background: var(--primary-gradient);
                color: white;
                border: none;
                padding: 10px 30px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: 600;
                transition: var(--transition-smooth);
            }
            .alert-btn:hover {
                transform: translateY(-3px);
                box-shadow: var(--shadow-medium);
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.9); }
                to { opacity: 1; transform: scale(1); }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(alertBox);
        
        // إغلاق النافذة عند النقر
        alertBox.querySelector('.alert-btn').addEventListener('click', function() {
            document.body.removeChild(alertBox);
            document.head.removeChild(style);
            this.reset();
        });
        
        this.reset();
    });
    
    // إضافة تأثيرات للشرائح
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // مراقبة العناصر لإضافة تأثيرات
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
    
    // تهيئة الصفحة
    initLanguage();
    
    // إضافة أنماط للرسوم المتحركة
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        .section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .section.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        .skill-level {
            animation: fillBar 1.5s ease-out forwards;
        }
        @keyframes fillBar {
            from { width: 0; }
            to { width: attr(style); }
        }
    `;
    document.head.appendChild(animationStyles);
});