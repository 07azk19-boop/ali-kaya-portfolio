document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       LANGUAGE SYSTEM
    ========================================================= */

    const translations = {

        tr: {

            navAbout: "Hakkımda",
            navExperience: "Deneyim",
            navProjects: "Projeler",
            navAviation: "Havacılık",
            navContact: "İletişim",

            heroTitle: "Havacılık Elektrik ve Elektroniği Öğrencisi",

heroIntro:
    "Havacılık Elektrik ve Elektroniği alanında kendimi geliştiren bir öğrenciyim. " +
    "Uçak bakım operasyonları, hava aracı sistemleri ve havacılık teknolojilerine olan ilgimi " +
    "saha deneyimleri, teknik çizim ve tasarım çalışmalarıyla destekliyorum. " +
    "Bunun yanında web teknolojileri ve dijital projeler üzerine çalışmalar geliştirerek " +
    "teknik ve yaratıcı yönümü farklı alanlarda geliştirmeye devam ediyorum.",

            
            linkedinBtn: "LinkedIn",
            contactBtn: "İletişime Geç",

            aboutLabel: "HAKKIMDA",

            aboutTitle: `
                Merhaba,<br>
                ben <span>Ali.</span>
            `,

            aboutText1:
                "Merhaba, ben Ali. Antalya'da yaşıyorum. Lise eğitimimi Antalya'daki " +
                "Metin Nuran Çakallıklı Anadolu Lisesi'nin Almanca programında tamamladım. " +
                "Ardından Erciyes Üniversitesi'nde dört yıllık Havacılık Elektrik ve " +
                "Elektroniği lisans bölümünde eğitim aldım. Üniversite hayatım boyunca " +
                "bölümümün yanı sıra havacılık alanındaki çalışmaların içinde aktif olarak " +
                "yer aldım ve üniversitenin köklü öğrenci kulüplerinden Havacılık Kulübü'nde " +
                "iki dönem başkanlık yaptım.",

            aboutText2:
                "Havacılık benim için yalnızca eğitim aldığım bir alan değil; uçak bakım " +
                "operasyonları, hava aracı sistemleri ve teknik uygulamalar üzerinden " +
                "kendimi geliştirmeye devam ettiğim bir alan. Eğitim sürecimde edindiğim " +
                "teorik bilgileri saha deneyimleriyle birleştirmeye, farklı çalışma " +
                "ortamlarında sorumluluk almaya ve öğrendiklerimi gerçek uygulamalarla " +
                "pekiştirmeye önem verdim.",

            aboutText3:
                "Havacılığın yanında yazılım ve teknolojiyle de ilgileniyorum. Web tabanlı " +
                "projeler geliştiriyor, farklı teknolojiler öğreniyor ve teknik becerilerimi " +
                "havacılık alanındaki ilgimle bir araya getirmeye çalışıyorum. Bu portfolio " +
                "sitesi de bu iki ilgi alanımı bir araya getirdiğim çalışmalardan biri.",

            aboutText4:
                "Kendimi; teknik açıdan sürekli geliştiren, farklı deneyimlerden öğrenen " +
                "ve havacılık sektöründe edindiği bilgileri gerçek saha deneyimleriyle " +
                "güçlendirmeyi hedefleyen biri olarak görüyorum.",


            experienceLabel: "DENEYİM",
            experienceTitle: "Profesyonel Deneyim",

            exp1Title: "Barista / Barmen",
            exp1Company: "Crystal Tat Beach Golf Resort & Spa",
            exp1Location: "Turizm ve Konaklama · Antalya",
            exp1Period: "Haziran 2021 — Ekim 2021",
            exp1Text:
                "Turizm sektöründe, Crystal Tat Beach Golf Resort & Spa'da barmen ve " +
                "barista olarak görev aldım. Uluslararası ve farklı profillerden misafirlerle " +
                "doğrudan iletişim kurarak hizmet sektörünün dinamik çalışma ortamında deneyim " +
                "kazandım. Yoğun sezon ve vardiyalı çalışma düzeninde ekip çalışmasına uyum " +
                "sağlayarak servis süreçlerinin etkin ve düzenli şekilde yürütülmesine katkıda " +
                "bulundum. Bu deneyim, farklı insanlarla iletişim kurma, yoğun çalışma temposuna " +
                "uyum sağlama ve sorumluluk alma becerilerimi geliştirdi.",

            exp2Title: "Yolcu Hizmetleri Memuru",
            exp2Company: "Fugo Ground Handling Services",
            exp2Location: "Yer Hizmetleri · Antalya",
            exp2Period: "Nisan 2023 — Ekim 2023<br>Haziran 2024 — Ekim 2024",
            exp2Text:
                "Fugo Ground Handling Services bünyesinde, Yolcu Hizmetleri Memurluğu (YHM) " +
                "kapsamında görev aldım. Check-in, boarding, arrival ve transfer süreçlerinin " +
                "yanı sıra uçuş ekiplerinin karşılanması, ekip transferlerinin gerçekleştirilmesi " +
                "ve uçuş operasyonlarının sahadaki koordinasyonunda aktif rol üstlendim. Gece ve " +
                "gündüz vardiyalarında, yoğun uçuş trafiğinin bulunduğu dinamik bir operasyon " +
                "ortamında çalışarak operasyonel koordinasyon, zaman yönetimi ve ekip iletişimi " +
                "alanlarında deneyim kazandım.",

            exp3Title: "Spor Lideri",
            exp3Company: "Decathlon",
            exp3Location: "Spor Perakendeciliği ve Müşteri Deneyimi · Kayseri",
            exp3Period: "Ekim 2025 — Temmuz 2026",
            exp3Text:
                "Decathlon'da Spor Lideri olarak görev aldım. Profesyonel olarak ilgilendiğim " +
                "kayak, yüzme ve bisiklet branşlarındaki bilgi ve deneyimlerimi müşterilerle " +
                "paylaşarak ihtiyaçlarına ve kullanım amaçlarına uygun ekipman seçimlerinde " +
                "danışmanlık sağladım. Rolüm yalnızca reyon ve müşteri süreçleriyle sınırlı " +
                "kalmayarak, farklı ürün ve ekipman eğitimleri, uygulamalı workshoplar ve şirket " +
                "içi gelişim programlarına aktif katılımı da kapsadı. Düzenli eğitimlerle ürün " +
                "ve spor branşları hakkındaki bilgimi sürekli geliştirirken, mağaza içerisinde " +
                "gerçekleştirilen kolektif spor aktiviteleri ve ekip çalışmalarında da aktif rol " +
                "aldım. Bu süreçte müşteri iletişimi, ekip çalışması, organizasyon ve farklı " +
                "ihtiyaçlara hızlı şekilde çözüm üretme konularında deneyim kazandım.",

            exp4Title: "Uçak Bakım Teknisyeni - Stajyer",
            exp4Company: "Turkish Technic",
            exp4Location: "Uçak Bakımı · İstanbul Atatürk Havalimanı",
            exp4Period: "Eylül 2026 — Devam Ediyor",
            exp4Text:
                "Turkish Technic bünyesinde Hangarım Kampüs OJT programı kapsamında uçak bakım " +
                "operasyonlarını yakından tanıyor ve havacılık eğitimim boyunca edindiğim teorik " +
                "bilgileri gerçek bakım ortamında uygulama fırsatı buluyorum. Hangar operasyonları, " +
                "bakım süreçleri, teknik dokümantasyon ve hava aracı sistemleri üzerine gözlem ve " +
                "uygulama deneyimi kazanarak bakım organizasyonunun işleyişini sahada öğreniyorum. " +
                "Farklı bakım faaliyetlerini ve teknik çalışma süreçlerini yakından takip ederken, " +
                "mesleki bilgi ve becerilerimi geliştirmeye ve havacılık bakım sektöründeki kariyerime " +
                "yönelik güçlü bir temel oluşturmaya devam ediyorum.",


            projectsLabel: "PROJELER",
            projectsTitle: "Seçili Projeler",

            project1Title: "Uçak Hangarı Projesi",
            project1Company: "Erciyes Üniversitesi",
            project1Location: "Uçak Bakımları ve Hangar Planlama",
            project1Text:
                "Üniversite eğitimim kapsamında gerçekleştirdiğim bu projede, hava araçlarının " +
                "bakım ve muhafaza süreçlerine yönelik bir hangar konsepti üzerinde çalıştım. " +
                "Projenin tasarım ve yerleşim çalışmalarını SketchUp kullanarak hazırladım; hangar " +
                "içerisinde farklı hava araçları, bakım ekipmanları, motorlar ve çalışma alanlarının " +
                "yerleşimini planladım. Çalışma sürecinde teknik gereksinimleri, kullanım alanlarını " +
                "ve operasyonel düzeni birlikte değerlendirerek üç boyutlu bir hangar modeli oluşturdum.",

            project2Title: "Motivo - Takım Performans Platformu",
            project2Company: "Decathlon Kayseripark",
            project2Location: "React ve Firebase · Ekip Takdir Platformu",
            project2Text:
                "Decathlon Kayseripark için geliştirdiğim Motivo, ekip içi takdir ve performans " +
                "süreçlerini dijitalleştiren React ve Firebase tabanlı bir web uygulamasıdır. " +
                "Kullanıcıların takım, isim ve PIN bilgileriyle sisteme giriş yaparak ekip " +
                "arkadaşlarına teşekkür ve takdir mesajları göndermesine olanak sağlar. Gönderilen " +
                "takdirler sistem tarafından puanlanarak aylık lider tablosuna yansıtılır. Projede " +
                "günlük ve haftalık kullanım limitleri, aynı kişiye yönelik gönderim sınırları ve " +
                "yönetici paneli gibi özellikler geliştirilmiştir. Admin paneli üzerinden aylık " +
                "performans sonuçları görüntülenebilir ve rapor olarak dışa aktarılabilir.",

            project2Link: "Projeyi İncele →",

            project3Title: "SD Teknoloji — Kurumsal Website",
            project3Company: "Bosch Yetkili Satıcısı",
            project3Location: "Website Geliştirme ve Dijital Varlık",
            project3Text:
                "Antalya'da faaliyet gösteren Bosch yetkili satış noktası SD Teknoloji için " +
                "kurumsal web sitesini tasarladım ve geliştirdim. Proje kapsamında markanın dijital " +
                "kimliğini yansıtan modern ve kullanıcı odaklı bir arayüz oluşturarak ürün kategorileri, " +
                "marka içerikleri, mağaza bilgileri, kampanyalar, bilgi merkezi, iletişim ve konum " +
                "bilgilerini web ortamına taşıdım. HTML, CSS ve JavaScript kullanılarak responsive " +
                "bir yapı geliştirildi.",

            project3Link: "Web Sitesini İncele →"
        },


        /* =====================================================
           ENGLISH
        ===================================================== */

        en: {

            navAbout: "About",
            navExperience: "Experience",
            navProjects: "Projects",
            navAviation: "Aviation",
            navContact: "Contact",

            heroTitle: "Aviation Electrical & Electronics Student",

           heroIntro:

    "I am a student developing myself in the field of Aviation Electrical and Electronics. " +

    "I combine my interest in aircraft maintenance operations, aircraft systems and aviation technologies " +

    "with hands-on experience, technical drawing and design studies. " +

    "I also work on digital projects using web technologies, continuously developing my technical and creative skills.",

            cvBtn: "View CV",
            linkedinBtn: "LinkedIn",
            contactBtn: "Contact Me",

            aboutLabel: "ABOUT ME",

            aboutTitle: `
                Hello,<br>
                I'm <span>Ali.</span>
            `,

            aboutText1:
                "Hello, I'm Ali. I live in Antalya. I completed my high school education in the German " +
                "program at Metin Nuran Çakallıklı Anatolian High School in Antalya. I then studied Aviation " +
                "Electrical and Electronics at Erciyes University as a four-year undergraduate student. " +
                "Throughout my university education, I actively participated in aviation-related activities " +
                "and served as the president of the Aviation Club for two terms.",

            aboutText2:
                "For me, aviation is not only an academic field but also an area in which I continue to " +
                "develop myself through aircraft maintenance operations, aircraft systems and technical " +
                "applications. I have focused on combining the theoretical knowledge I gained during my " +
                "education with hands-on experience, taking responsibility in different working environments " +
                "and reinforcing what I learned through real-world applications.",

            aboutText3:
                "Alongside aviation, I am also interested in software and technology. I develop web-based " +
                "projects, learn different technologies and try to combine my technical skills with my interest " +
                "in aviation. This portfolio website is one of the projects where I bring these two interests together.",

            aboutText4:
                "I see myself as someone who continuously develops technically, learns from different experiences " +
                "and aims to strengthen the knowledge gained in the aviation industry through real-world field experience.",

            experienceLabel: "EXPERIENCE",
            experienceTitle: "Professional Experience",

            exp1Title: "Barista / Bartender",
            exp1Company: "Crystal Tat Beach Golf Resort & Spa",
            exp1Location: "Tourism & Hospitality · Antalya",
            exp1Period: "June 2021 — October 2021",
            exp1Text:
                "I worked as a bartender and barista at Crystal Tat Beach Golf Resort & Spa in the tourism industry. " +
                "I gained experience in a dynamic service environment by communicating directly with guests from " +
                "different international and personal backgrounds. I adapted to teamwork during the busy season " +
                "and shift-based working environment while contributing to efficient and organized service operations. " +
                "This experience improved my communication, ability to work under pressure and sense of responsibility.",

            exp2Title: "Passenger Services Agent",
            exp2Company: "Fugo Ground Handling Services",
            exp2Location: "Ground Handling · Antalya",
            exp2Period: "April 2023 — October 2023<br>June 2024 — October 2024",
            exp2Text:
                "I worked as a Passenger Services Agent at Fugo Ground Handling Services. My responsibilities " +
                "included check-in, boarding, arrival and transfer processes, as well as welcoming flight crews, " +
                "coordinating crew transfers and supporting the coordination of flight operations on the ground. " +
                "Working both night and day shifts in a dynamic environment with heavy flight traffic allowed me " +
                "to gain experience in operational coordination, time management and team communication.",

            exp3Title: "Sports Leader",
            exp3Company: "Decathlon",
            exp3Location: "Sports Retail & Customer Experience · Kayseri",
            exp3Period: "October 2025 — July 2026",
            exp3Text:
                "I worked as a Sports Leader at Decathlon. I shared my knowledge and experience in skiing, swimming " +
                "and cycling with customers and provided guidance in selecting equipment according to their needs " +
                "and intended use. My role also included product and equipment training, practical workshops and " +
                "internal development programs. I continuously improved my knowledge through regular training and " +
                "actively participated in collective sports activities and team projects within the store. This " +
                "experience strengthened my skills in customer communication, teamwork, organization and problem solving.",

            exp4Title: "Aircraft Maintenance Technician - Intern",
            exp4Company: "Turkish Technic",
            exp4Location: "Aircraft Maintenance · Istanbul Atatürk Airport",
            exp4Period: "September 2026 — Present",
            exp4Text:
                "As part of the Hangarım Kampüs OJT program at Turkish Technic, I am gaining first-hand exposure " +
                "to aircraft maintenance operations and applying the theoretical knowledge I acquired during my aviation " +
                "education in a real maintenance environment. I am gaining practical and observational experience in " +
                "hangar operations, maintenance processes, technical documentation and aircraft systems while learning " +
                "how a maintenance organization operates in the field. I continue to develop my professional knowledge " +
                "and skills while building a strong foundation for a career in aircraft maintenance.",

            projectsLabel: "PROJECTS",
            projectsTitle: "Selected Projects",

            project1Title: "Aircraft Hangar Project",
            project1Company: "Erciyes University",
            project1Location: "Aircraft Maintenance & Hangar Planning",
            project1Text:
                "As part of my university education, I worked on a hangar concept designed for aircraft maintenance " +
                "and storage operations. I prepared the design and layout studies using SketchUp and planned the " +
                "placement of different aircraft, maintenance equipment, engines and work areas within the hangar. " +
                "By considering technical requirements, usable areas and operational organization together, I created " +
                "a three-dimensional hangar model.",

            project2Title: "Motivo - Team Performance Platform",
            project2Company: "Decathlon Kayseripark",
            project2Location: "React & Firebase · Team Recognition Platform",
            project2Text:
                "Motivo is a React and Firebase-based web application I developed for Decathlon Kayseripark to " +
                "digitalize team recognition and performance processes. Users can log in with their team, name and " +
                "PIN information and send appreciation and recognition messages to their teammates. Recognition " +
                "messages are scored by the system and reflected in the monthly leaderboard. The project includes " +
                "daily and weekly usage limits, recipient-specific sending limits and an administrator panel. " +
                "Monthly performance results can be viewed and exported as reports through the admin panel.",

            project2Link: "View Project →",

            project3Title: "SD Teknoloji — Corporate Website",
            project3Company: "Authorized Bosch Dealer",
            project3Location: "Website Development & Digital Presence",
            project3Text:
                "I designed and developed the corporate website for SD Teknoloji, an authorized Bosch sales point " +
                "operating in Antalya. The project features a modern, user-focused interface reflecting the brand's " +
                "digital identity, including product categories, brand content, store information, campaigns, an " +
                "information center, contact details and location information. A responsive structure was developed " +
                "using HTML, CSS and JavaScript.",

            project3Link: "Visit Website →"
        },


        /* =====================================================
           GERMAN
        ===================================================== */

        de: {

            navAbout: "Über mich",
            navExperience: "Erfahrung",
            navProjects: "Projekte",
            navAviation: "Luftfahrt",
            navContact: "Kontakt",

            heroTitle: "Student der Luftfahrt-Elektrotechnik und Elektronik",

            heroIntro:
                "Ich studiere Luftfahrt-Elektrotechnik und Elektronik und entwickle meine technischen Fähigkeiten " +
                "kontinuierlich weiter. Mein Interesse an Flugzeuginstandhaltung, Luftfahrzeugsystemen und " +
                "Luftfahrttechnologien verbinde ich mit praktischer Erfahrung und technischen Projekten.",

            cvBtn: "Lebenslauf ansehen",
            linkedinBtn: "LinkedIn",
            contactBtn: "Kontakt aufnehmen",

            aboutLabel: "ÜBER MICH",

            aboutTitle: `
                Hallo,<br>
                ich bin <span>Ali.</span>
            `,

            aboutText1:
                "Hallo, ich bin Ali. Ich lebe in Antalya. Meine Schulbildung habe ich am Metin Nuran Çakallıklı " +
                "Anadolu-Gymnasium in Antalya im deutschsprachigen Programm abgeschlossen. Anschließend studierte " +
                "ich vier Jahre Luftfahrt-Elektrotechnik und Elektronik an der Erciyes-Universität. Während meines " +
                "Studiums engagierte ich mich aktiv in luftfahrtbezogenen Aktivitäten und war zwei Semester lang " +
                "Vorsitzender des Luftfahrtclubs.",

            aboutText2:
                "Luftfahrt ist für mich nicht nur ein Studienbereich, sondern auch ein Gebiet, in dem ich mich durch " +
                "Flugzeuginstandhaltung, Luftfahrzeugsysteme und technische Anwendungen kontinuierlich weiterentwickle. " +
                "Dabei lege ich Wert darauf, theoretisches Wissen mit praktischer Erfahrung zu verbinden, Verantwortung " +
                "in unterschiedlichen Arbeitsumgebungen zu übernehmen und das Gelernte durch reale Anwendungen zu vertiefen.",

            aboutText3:
                "Neben der Luftfahrt interessiere ich mich auch für Software und Technologie. Ich entwickle webbasierte " +
                "Projekte, lerne verschiedene Technologien und versuche, meine technischen Fähigkeiten mit meinem " +
                "Interesse an der Luftfahrt zu verbinden. Diese Portfolio-Website ist eines der Projekte, in denen ich " +
                "diese beiden Interessen zusammenführe.",

            aboutText4:
                "Ich sehe mich als jemanden, der sich technisch kontinuierlich weiterentwickelt, aus unterschiedlichen " +
                "Erfahrungen lernt und sein Wissen aus der Luftfahrtbranche durch praktische Erfahrungen weiter stärken möchte.",

            experienceLabel: "ERFAHRUNG",
            experienceTitle: "Berufliche Erfahrung",

            exp1Title: "Barista / Barkeeper",
            exp1Company: "Crystal Tat Beach Golf Resort & Spa",
            exp1Location: "Tourismus & Hotellerie · Antalya",
            exp1Period: "Juni 2021 — Oktober 2021",
            exp1Text:
                "Ich arbeitete im Tourismusbereich als Barkeeper und Barista im Crystal Tat Beach Golf Resort & Spa. " +
                "Durch den direkten Kontakt mit internationalen Gästen und Menschen mit unterschiedlichen Hintergründen " +
                "sammelte ich Erfahrung in einem dynamischen Dienstleistungsumfeld. Während der Hauptsaison arbeitete " +
                "ich im Schichtbetrieb und trug zu effizienten und organisierten Serviceabläufen bei. Dabei entwickelte " +
                "ich meine Kommunikationsfähigkeit, Belastbarkeit und Verantwortungsbewusstsein weiter.",

            exp2Title: "Mitarbeiter im Passagierservice",
            exp2Company: "Fugo Ground Handling Services",
            exp2Location: "Bodenabfertigung · Antalya",
            exp2Period: "April 2023 — Oktober 2023<br>Juni 2024 — Oktober 2024",
            exp2Text:
                "Bei Fugo Ground Handling Services arbeitete ich im Passagierservice. Zu meinen Aufgaben gehörten " +
                "Check-in, Boarding, Ankunfts- und Transferprozesse sowie die Betreuung von Flugbesatzungen, " +
                "Crew-Transfers und die Koordination von Flugoperationen am Boden. Durch die Arbeit in Tag- und " +
                "Nachtschichten in einem dynamischen Umfeld mit hohem Flugaufkommen sammelte ich Erfahrungen in " +
                "operativer Koordination, Zeitmanagement und Teamkommunikation.",

            exp3Title: "Sports Leader",
            exp3Company: "Decathlon",
            exp3Location: "Sporthandel & Kundenerlebnis · Kayseri",
            exp3Period: "Oktober 2025 — Juli 2026",
            exp3Text:
                "Bei Decathlon arbeitete ich als Sports Leader. Ich teilte mein Wissen und meine Erfahrung in den " +
                "Bereichen Skifahren, Schwimmen und Radfahren mit Kunden und unterstützte sie bei der Auswahl geeigneter " +
                "Ausrüstung. Zu meiner Tätigkeit gehörten außerdem Produkt- und Ausrüstungsschulungen, praktische " +
                "Workshops und interne Entwicklungsprogramme. Durch regelmäßige Schulungen erweiterte ich kontinuierlich " +
                "mein Fachwissen und nahm aktiv an gemeinsamen Sportaktivitäten und Teamprojekten teil.",

            exp4Title: "Flugzeuginstandhaltungstechniker - Praktikant",
            exp4Company: "Turkish Technic",
            exp4Location: "Flugzeuginstandhaltung · Flughafen Istanbul Atatürk",
            exp4Period: "September 2026 — Heute",
            exp4Text:
                "Im Rahmen des Hangarım Kampüs OJT-Programms bei Turkish Technic lerne ich die Abläufe der " +
                "Flugzeuginstandhaltung aus erster Hand kennen und wende mein während des Luftfahrtstudiums erworbenes " +
                "theoretisches Wissen in einer realen Wartungsumgebung an. Dabei sammle ich praktische Erfahrungen in " +
                "Hangarbetrieb, Instandhaltungsprozessen, technischer Dokumentation und Luftfahrzeugsystemen und lerne " +
                "die Abläufe einer Instandhaltungsorganisation direkt vor Ort kennen.",

            projectsLabel: "PROJEKTE",
            projectsTitle: "Ausgewählte Projekte",

            project1Title: "Flugzeughangar-Projekt",
            project1Company: "Erciyes-Universität",
            project1Location: "Flugzeuginstandhaltung & Hangarplanung",
            project1Text:
                "Im Rahmen meines Studiums entwickelte ich ein Hangarkonzept für die Wartung und Unterbringung von " +
                "Luftfahrzeugen. Die Entwurfs- und Layoutarbeiten erstellte ich mit SketchUp. Dabei plante ich die " +
                "Positionierung verschiedener Luftfahrzeuge, Wartungsausrüstung, Triebwerke und Arbeitsbereiche. " +
                "Unter Berücksichtigung technischer Anforderungen, verfügbarer Flächen und betrieblicher Abläufe " +
                "erstellte ich ein dreidimensionales Hangarmodell.",

            project2Title: "Motivo - Team-Performance-Plattform",
            project2Company: "Decathlon Kayseripark",
            project2Location: "React & Firebase · Plattform für Teamanerkennung",
            project2Text:
                "Motivo ist eine auf React und Firebase basierende Webanwendung, die ich für Decathlon Kayseripark " +
                "entwickelt habe, um Anerkennungs- und Leistungsprozesse innerhalb des Teams zu digitalisieren. " +
                "Benutzer können sich mit Team-, Namens- und PIN-Informationen anmelden und Anerkennungsnachrichten " +
                "an ihre Teamkollegen senden. Die Anerkennungen werden vom System bewertet und in der monatlichen " +
                "Rangliste berücksichtigt. Das Projekt umfasst tägliche und wöchentliche Nutzungslimits, Empfängerlimits " +
                "sowie ein Administrationspanel.",

            project2Link: "Projekt ansehen →",

            project3Title: "SD Teknoloji — Unternehmenswebsite",
            project3Company: "Autorisierter Bosch-Händler",
            project3Location: "Website-Entwicklung & Digitale Präsenz",
            project3Text:
                "Für SD Teknoloji, einen autorisierten Bosch-Vertriebspartner in Antalya, habe ich die Unternehmenswebsite " +
                "entworfen und entwickelt. Die Website verfügt über eine moderne und benutzerorientierte Oberfläche mit " +
                "Produktkategorien, Markeninhalten, Geschäfts- und Filialinformationen, Kampagnen, Informationszentrum, " +
                "Kontakt- und Standortinformationen. Die responsive Struktur wurde mit HTML, CSS und JavaScript entwickelt.",

            project3Link: "Website besuchen →"
        },


        /* =====================================================
           FRENCH
        ===================================================== */

        fr: {

            navAbout: "À propos",
            navExperience: "Expérience",
            navProjects: "Projets",
            navAviation: "Aéronautique",
            navContact: "Contact",

            heroTitle: "Étudiant en électricité et électronique aéronautiques",

            heroIntro:
                "Je suis étudiant dans le domaine de l'électricité et de l'électronique aéronautiques et je développe " +
                "continuellement mes compétences techniques. Je combine mon intérêt pour la maintenance des aéronefs, " +
                "les systèmes aéronautiques et les technologies de l'aviation avec mon expérience pratique et mes projets techniques.",

            cvBtn: "Voir le CV",
            linkedinBtn: "LinkedIn",
            contactBtn: "Me contacter",

            aboutLabel: "À PROPOS DE MOI",

            aboutTitle: `
                Bonjour,<br>
                je suis <span>Ali.</span>
            `,

            aboutText1:
                "Bonjour, je m'appelle Ali. Je vis à Antalya. J'ai terminé mes études secondaires au lycée " +
                "Metin Nuran Çakallıklı d'Antalya, dans le programme en allemand. J'ai ensuite étudié pendant quatre " +
                "ans l'électricité et l'électronique aéronautiques à l'Université d'Erciyes. Pendant mes études " +
                "universitaires, j'ai participé activement à des activités liées à l'aéronautique et j'ai été président " +
                "du club aéronautique pendant deux semestres.",

            aboutText2:
                "Pour moi, l'aéronautique n'est pas seulement un domaine d'études, mais également un domaine dans lequel " +
                "je continue à me développer à travers la maintenance des aéronefs, les systèmes aéronautiques et les " +
                "applications techniques. Je m'efforce de combiner les connaissances théoriques acquises pendant mes études " +
                "avec l'expérience pratique, d'assumer des responsabilités dans différents environnements de travail et " +
                "de renforcer mes connaissances par des applications réelles.",

            aboutText3:
                "En plus de l'aéronautique, je m'intéresse également aux logiciels et aux technologies. Je développe des " +
                "projets web, j'apprends différentes technologies et j'essaie de combiner mes compétences techniques avec " +
                "mon intérêt pour l'aéronautique. Ce portfolio est l'un des projets qui réunit ces deux domaines d'intérêt.",

            aboutText4:
                "Je me considère comme une personne qui cherche à se développer continuellement sur le plan technique, " +
                "à apprendre de différentes expériences et à renforcer ses connaissances dans le secteur aéronautique " +
                "grâce à une expérience pratique sur le terrain.",

            experienceLabel: "EXPÉRIENCE",
            experienceTitle: "Expérience professionnelle",

            exp1Title: "Barista / Barman",
            exp1Company: "Crystal Tat Beach Golf Resort & Spa",
            exp1Location: "Tourisme & Hôtellerie · Antalya",
            exp1Period: "Juin 2021 — Octobre 2021",
            exp1Text:
                "J'ai travaillé comme barman et barista au Crystal Tat Beach Golf Resort & Spa dans le secteur du tourisme. " +
                "J'ai acquis de l'expérience dans un environnement de service dynamique grâce au contact direct avec des " +
                "clients internationaux et aux profils variés. Pendant la haute saison, j'ai travaillé en équipe et en " +
                "horaires décalés, en contribuant à assurer des processus de service efficaces et organisés. Cette expérience " +
                "m'a permis d'améliorer ma communication, mon adaptation à un rythme de travail soutenu et mon sens des responsabilités.",

            exp2Title: "Agent de service aux passagers",
            exp2Company: "Fugo Ground Handling Services",
            exp2Location: "Assistance en escale · Antalya",
            exp2Period: "Avril 2023 — Octobre 2023<br>Juin 2024 — Octobre 2024",
            exp2Text:
                "J'ai travaillé comme agent de service aux passagers chez Fugo Ground Handling Services. Mes responsabilités " +
                "comprenaient les processus d'enregistrement, d'embarquement, d'arrivée et de transfert, ainsi que l'accueil " +
                "des équipages, les transferts des équipages et la coordination des opérations aériennes au sol. Le travail " +
                "en horaires de jour et de nuit dans un environnement dynamique à fort trafic aérien m'a permis d'acquérir " +
                "de l'expérience en coordination opérationnelle, gestion du temps et communication d'équipe.",

            exp3Title: "Sports Leader",
            exp3Company: "Decathlon",
            exp3Location: "Commerce sportif & Expérience client · Kayseri",
            exp3Period: "Octobre 2025 — Juillet 2026",
            exp3Text:
                "J'ai travaillé comme Sports Leader chez Decathlon. J'ai partagé avec les clients mes connaissances et mon " +
                "expérience dans les domaines du ski, de la natation et du cyclisme afin de les conseiller dans le choix " +
                "d'équipements adaptés à leurs besoins et à leur utilisation. Mon rôle comprenait également des formations " +
                "sur les produits et équipements, des ateliers pratiques et des programmes de développement internes. " +
                "J'ai également participé activement aux activités sportives collectives et aux travaux d'équipe en magasin.",

            exp4Title: "Technicien de maintenance aéronautique - Stagiaire",
            exp4Company: "Turkish Technic",
            exp4Location: "Maintenance aéronautique · Aéroport d'Istanbul Atatürk",
            exp4Period: "Septembre 2026 — Présent",
            exp4Text:
                "Dans le cadre du programme OJT Hangarım Kampüs chez Turkish Technic, je découvre directement les opérations " +
                "de maintenance aéronautique et j'ai l'occasion d'appliquer les connaissances théoriques acquises pendant " +
                "ma formation dans un environnement réel de maintenance. J'acquiers une expérience pratique et d'observation " +
                "dans les opérations de hangar, les processus de maintenance, la documentation technique et les systèmes " +
                "aéronautiques, tout en découvrant sur le terrain le fonctionnement d'une organisation de maintenance.",

            projectsLabel: "PROJETS",
            projectsTitle: "Projets sélectionnés",

            project1Title: "Projet de hangar aéronautique",
            project1Company: "Université d'Erciyes",
            project1Location: "Maintenance aéronautique & Planification de hangar",
            project1Text:
                "Dans le cadre de ma formation universitaire, j'ai travaillé sur un concept de hangar destiné aux opérations " +
                "de maintenance et de stockage des aéronefs. J'ai réalisé les études de conception et d'aménagement avec " +
                "SketchUp et planifié l'emplacement de différents aéronefs, équipements de maintenance, moteurs et zones de travail. " +
                "En prenant en compte les exigences techniques, les espaces disponibles et l'organisation opérationnelle, " +
                "j'ai créé un modèle de hangar en trois dimensions.",

            project2Title: "Motivo - Plateforme de performance d'équipe",
            project2Company: "Decathlon Kayseripark",
            project2Location: "React & Firebase · Plateforme de reconnaissance d'équipe",
            project2Text:
                "Motivo est une application web basée sur React et Firebase que j'ai développée pour Decathlon Kayseripark " +
                "afin de numériser les processus de reconnaissance et de performance au sein de l'équipe. Les utilisateurs " +
                "peuvent se connecter avec leur équipe, leur nom et leur code PIN et envoyer des messages de remerciement et " +
                "de reconnaissance à leurs collègues. Les reconnaissances sont évaluées par le système et apparaissent dans " +
                "le classement mensuel. Le projet comprend des limites d'utilisation quotidiennes et hebdomadaires, des limites " +
                "d'envoi par destinataire et un panneau d'administration.",

            project2Link: "Voir le projet →",

            project3Title: "SD Teknoloji — Site web d'entreprise",
            project3Company: "Revendeur Bosch agréé",
            project3Location: "Développement web & Présence numérique",
            project3Text:
                "J'ai conçu et développé le site web institutionnel de SD Teknoloji, un point de vente Bosch agréé situé à Antalya. " +
                "Le projet comprend une interface moderne et orientée utilisateur reflétant l'identité numérique de la marque, " +
                "avec les catégories de produits, les contenus de marque, les informations du magasin, les campagnes, le centre " +
                "d'information ainsi que les coordonnées et les informations de localisation. Une structure responsive a été développée " +
                "avec HTML, CSS et JavaScript.",

            project3Link: "Visiter le site →"
        }
    };


    /* =========================================================
       ELEMENT HELPERS
    ========================================================= */

    function setText(id, value) {
        const element = document.getElementById(id);

        if (element) {
            element.innerHTML = value;
        }
    }


    /* =========================================================
       LANGUAGE APPLY
    ========================================================= */

    function applyLanguage(language) {

        const t = translations[language];

        if (!t) return;


        /* NAVIGATION */

        setText("navAbout", t.navAbout);
        setText("navExperience", t.navExperience);
        setText("navProjects", t.navProjects);
        setText("navAviation", t.navAviation);
        setText("navContact", t.navContact);
        /* MOBILE NAVIGATION */

document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.getAttribute("data-i18n");

    if (t[key]) {
        element.innerHTML = t[key];
    }

});


        /* HERO */

        setText("heroTitle", t.heroTitle);
        setText("heroIntro", t.heroIntro);

        setText("cvBtn", t.cvBtn);
        setText("linkedinBtn", t.linkedinBtn);
        setText("contactBtn", t.contactBtn);


        /* ABOUT */

        setText("aboutLabel", t.aboutLabel);
        setText("aboutTitle", t.aboutTitle);

        setText("aboutText1", t.aboutText1);
        setText("aboutText2", t.aboutText2);
        setText("aboutText3", t.aboutText3);
        setText("aboutText4", t.aboutText4);


        /* EXPERIENCE */

        setText("experienceLabel", t.experienceLabel);
        setText("experienceTitle", t.experienceTitle);

        setText("exp1Title", t.exp1Title);
        setText("exp1Company", t.exp1Company);
        setText("exp1Location", t.exp1Location);
        setText("exp1Period", t.exp1Period);
        setText("exp1Text", t.exp1Text);

        setText("exp2Title", t.exp2Title);
        setText("exp2Company", t.exp2Company);
        setText("exp2Location", t.exp2Location);
        setText("exp2Period", t.exp2Period);
        setText("exp2Text", t.exp2Text);

        setText("exp3Title", t.exp3Title);
        setText("exp3Company", t.exp3Company);
        setText("exp3Location", t.exp3Location);
        setText("exp3Period", t.exp3Period);
        setText("exp3Text", t.exp3Text);

        setText("exp4Title", t.exp4Title);
        setText("exp4Company", t.exp4Company);
        setText("exp4Location", t.exp4Location);
        setText("exp4Period", t.exp4Period);
        setText("exp4Text", t.exp4Text);


        /* PROJECTS */

        setText("projectsLabel", t.projectsLabel);
        setText("projectsTitle", t.projectsTitle);

        setText("project1Title", t.project1Title);
        setText("project1Company", t.project1Company);
        setText("project1Location", t.project1Location);
        setText("project1Text", t.project1Text);


        /*
           MOTIVO
           HTML'de ID olmadığı için ikinci project-item üzerinden
           hedefleniyor.
        */

        const projectItems = document.querySelectorAll(".project-item");

        if (projectItems.length >= 2) {

            const motivo = projectItems[1];

            const title = motivo.querySelector("h3");
            const company = motivo.querySelector("h4");
            const location = motivo.querySelector(".project-location");
            const paragraph = motivo.querySelector("p");
            const link = motivo.querySelector(".project-link");

            if (title) title.innerHTML = t.project2Title;
            if (company) company.innerHTML = t.project2Company;
            if (location) location.innerHTML = t.project2Location;
            if (paragraph) paragraph.innerHTML = t.project2Text;
            if (link) link.innerHTML = t.project2Link;
        }


        /*
           SD TEKNOLOJİ
           HTML'de ID olmadığı için üçüncü project-item üzerinden
           hedefleniyor.
        */

        if (projectItems.length >= 3) {

            const sdTeknoloji = projectItems[2];

            const title = sdTeknoloji.querySelector("h3");
            const company = sdTeknoloji.querySelector("h4");
            const location = sdTeknoloji.querySelector(".project-location");
            const paragraph = sdTeknoloji.querySelector("p");
            const link = sdTeknoloji.querySelector(".project-link");

            if (title) title.innerHTML = t.project3Title;
            if (company) company.innerHTML = t.project3Company;
            if (location) location.innerHTML = t.project3Location;
            if (paragraph) paragraph.innerHTML = t.project3Text;
            if (link) link.innerHTML = t.project3Link;
        }


        /* HTML LANGUAGE ATTRIBUTE */

        document.documentElement.lang = language;


        /* ACTIVE LANGUAGE BUTTON */

        document.querySelectorAll(".language button").forEach(button => {
            button.classList.remove("active");
        });

        const activeButton = document.getElementById(
            language === "en"
                ? "enBtn"
                : language === "de"
                ? "deBtn"
                : language === "fr"
                ? "frBtn"
                : "trBtn"
        );

        if (activeButton) {
            activeButton.classList.add("active");
        }


        /* SAVE LANGUAGE */

        localStorage.setItem("selectedLanguage", language);
    }


    /* =========================================================
       LANGUAGE BUTTONS
    ========================================================= */

    const enBtn = document.getElementById("enBtn");
    const trBtn = document.getElementById("trBtn");
    const deBtn = document.getElementById("deBtn");
    const frBtn = document.getElementById("frBtn");


    if (enBtn) {
        enBtn.addEventListener("click", () => {
            applyLanguage("en");
        });
    }


    if (trBtn) {
        trBtn.addEventListener("click", () => {
            applyLanguage("tr");
        });
    }


    if (deBtn) {
        deBtn.addEventListener("click", () => {
            applyLanguage("de");
        });
    }


    if (frBtn) {
        frBtn.addEventListener("click", () => {
            applyLanguage("fr");
        });
    }


    /* =========================================================
       LOAD SAVED LANGUAGE
    ========================================================= */

    const savedLanguage = localStorage.getItem("selectedLanguage");

    if (
        savedLanguage &&
        translations[savedLanguage]
    ) {
        applyLanguage(savedLanguage);
    } else {
        applyLanguage("tr");
    }


    /* =========================================================
       CURSOR AIRCRAFT
    ========================================================= */

    const cursorPlane = document.getElementById("cursorPlane");
    const planeTrail = document.getElementById("planeTrail");

    if (cursorPlane) {

        let mouseX = 0;
        let mouseY = 0;

        let planeX = 0;
        let planeY = 0;

        let animationStarted = false;


        document.addEventListener("mousemove", (event) => {

            mouseX = event.clientX;
            mouseY = event.clientY;

            if (!animationStarted) {

                planeX = mouseX;
                planeY = mouseY;

                animationStarted = true;
            }

        });


        function animatePlane() {

            planeX += (mouseX - planeX) * 0.12;
            planeY += (mouseY - planeY) * 0.12;

            cursorPlane.style.transform =
                `translate3d(${planeX + 15}px, ${planeY + 15}px, 0)`;

            requestAnimationFrame(animatePlane);
        }


        animatePlane();
    }


    /* =========================================================
       PLANE TRAIL
    ========================================================= */

    if (planeTrail) {

        let lastTrailTime = 0;

        document.addEventListener("mousemove", (event) => {

            const now = Date.now();

            if (now - lastTrailTime < 45) {
                return;
            }

            lastTrailTime = now;


            const dot = document.createElement("span");

            dot.className = "plane-trail-dot";

            dot.style.left = `${event.clientX}px`;
            dot.style.top = `${event.clientY}px`;

            planeTrail.appendChild(dot);


            setTimeout(() => {

                dot.remove();

            }, 700);
        });
    }


    /* =========================================================
       SMOOTH SCROLL
    ========================================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }


            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


});
/* =========================================================
   AVIATION FLIGHT ANIMATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const aviationButton =
        document.getElementById("navAviation");

    const aviationOverlay =
        document.getElementById("aviationOverlay");

    const aviationClose =
        document.getElementById("aviationClose");

    const aircraft =
        document.getElementById("animatedAircraft");

    const altitudeValue =
        document.getElementById("altitudeValue");

    const speedValue =
        document.getElementById("speedValue");

    const verticalSpeedValue =
        document.getElementById("verticalSpeedValue");

    const headingValue =
        document.getElementById("headingValue");

    const flightPhase =
        document.getElementById("flightPhase");

    const flapStatus =
        document.getElementById("flapStatus");

    const gearStatus =
        document.getElementById("gearStatus");

    const autoStatus =
        document.getElementById("autoStatus");

    const locStatus =
        document.getElementById("locStatus");

    const gsStatus =
        document.getElementById("gsStatus");

    const apStatus =
        document.getElementById("apStatus");

    const navStatus =
        document.getElementById("navStatus");


    /* =====================================================
       ELEMENT CHECK
    ===================================================== */

    if (
        !aviationButton ||
        !aviationOverlay ||
        !aviationClose ||
        !aircraft
    ) {
        return;
    }


    let animationFrame = null;
    let animationStart = null;
    let flightFinished = false;


    /* =====================================================
       FLIGHT SETTINGS

       0 - 4 sec     CRUISE
       4 - 10 sec    DESCENT
       10 - 15 sec   APPROACH
       15 - 18 sec   LANDING
       18 - 20 sec   TOUCHDOWN
    ===================================================== */

    const flightDuration = 20000;


    /* =====================================================
       HELPERS
    ===================================================== */

    function clamp(value, min, max) {

        return Math.min(
            Math.max(value, min),
            max
        );

    }


    function lerp(start, end, amount) {

        return start + (end - start) * amount;

    }


    /* =====================================================
       RESET FLIGHT
    ===================================================== */

    function resetFlight() {

        flightFinished = false;

        altitudeValue.textContent = "35000";

        speedValue.textContent = "450";

        verticalSpeedValue.textContent = "+0";

        headingValue.textContent = "247";

        flightPhase.textContent = "CRUISE";

        flapStatus.textContent = "UP";

        gearStatus.textContent = "UP";

        autoStatus.textContent = "CRZ";

        locStatus.textContent = "ARM";

        gsStatus.textContent = "ARM";

        apStatus.textContent = "ARM";

        navStatus.textContent = "ACTIVE";


        aircraft.style.left = "10%";

        aircraft.style.top = "20%";

        aircraft.style.transform =
            "translate(-50%, -50%) rotate(0deg)";

    }


    /* =====================================================
       FINISH FLIGHT

       Uçak indikten sonra:
       1. Flight ekranı kapanır
       2. Kısa geçiş beklenir
       3. aviation.html açılır
    ===================================================== */

    function finishFlight() {

        if (flightFinished) {
            return;
        }

        flightFinished = true;


        cancelAnimationFrame(
            animationFrame
        );

        animationFrame = null;


        /*
           Önce uçuş ekranını hafifçe kapat.
        */

        aviationOverlay.classList.remove(
            "active"
        );


        /*
           Küçük bir geçiş süresi.
           Ekranın aniden değişmesini önlüyor.
        */

        setTimeout(() => {

            window.location.href =
                "aviation.html";

        }, 650);

    }


    /* =====================================================
       FLIGHT ANIMATION
    ===================================================== */

    function updateFlight(timestamp) {

        if (!animationStart) {

            animationStart =
                timestamp;

        }


        const elapsed =
    (timestamp - animationStart) * 3;


        /*
           Uçuş tamamlandı.
        */

        if (
            elapsed >= flightDuration
        ) {

            finishFlight();

            return;

        }


        let altitude;
        let speed;
        let verticalSpeed;
        let heading;

        let aircraftX;
        let aircraftY;
        let rotation;


        /* =================================================
           0 — 4 SEC
           CRUISE
        ================================================= */

        if (elapsed < 4000) {

            const p =
                elapsed / 4000;


            altitude = 35000;

            speed = 450;

            verticalSpeed = 0;

            heading = 247;


            aircraftX =
                lerp(
                    10,
                    26,
                    p
                );

            aircraftY =
                lerp(
                    20,
                    22,
                    p
                );

            rotation = 0;


            flightPhase.textContent =
                "CRUISE";

            flapStatus.textContent =
                "UP";

            gearStatus.textContent =
                "UP";

            autoStatus.textContent =
                "CRZ";

            locStatus.textContent =
                "ARM";

            gsStatus.textContent =
                "ARM";

            apStatus.textContent =
                "ARM";

        }


        /* =================================================
           4 — 10 SEC
           DESCENT
        ================================================= */

        else if (elapsed < 10000) {

            const p =
                (elapsed - 4000) / 6000;


            altitude =
                lerp(
                    35000,
                    12000,
                    p
                );


            speed =
                lerp(
                    450,
                    280,
                    p
                );


            verticalSpeed =
                lerp(
                    -500,
                    -1800,
                    p
                );


            heading =
                lerp(
                    247,
                    242,
                    p
                );


            aircraftX =
                lerp(
                    26,
                    48,
                    p
                );


            aircraftY =
                lerp(
                    22,
                    37,
                    p
                );


            rotation =
                lerp(
                    0,
                    5,
                    p
                );


            flightPhase.textContent =
                "DESCENT";

            flapStatus.textContent =
                "UP";

            gearStatus.textContent =
                "UP";

            autoStatus.textContent =
                "DES";

            locStatus.textContent =
                "ARM";

            gsStatus.textContent =
                "ARM";

            apStatus.textContent =
                "ON";

        }


        /* =================================================
           10 — 15 SEC
           APPROACH
        ================================================= */

        else if (elapsed < 15000) {

            const p =
                (elapsed - 10000) / 5000;


            altitude =
                lerp(
                    12000,
                    3000,
                    p
                );


            speed =
                lerp(
                    280,
                    165,
                    p
                );


            verticalSpeed =
                lerp(
                    -1800,
                    -700,
                    p
                );


            heading =
                lerp(
                    242,
                    238,
                    p
                );


            aircraftX =
                lerp(
                    48,
                    70,
                    p
                );


            aircraftY =
                lerp(
                    37,
                    60,
                    p
                );


            rotation =
                lerp(
                    5,
                    10,
                    p
                );


            flightPhase.textContent =
                "APPROACH";

            flapStatus.textContent =
                p > 0.25
                    ? "15°"
                    : "UP";

            gearStatus.textContent =
                p > 0.55
                    ? "DOWN"
                    : "UP";

            autoStatus.textContent =
                "APP";

            locStatus.textContent =
                "LOCK";

            gsStatus.textContent =
                "LOCK";

            apStatus.textContent =
                "ON";

        }


        /* =================================================
           15 — 18 SEC
           LANDING
        ================================================= */

        else if (elapsed < 18000) {

            const p =
                (elapsed - 15000) / 3000;


            altitude =
                lerp(
                    3000,
                    80,
                    p
                );


            speed =
                lerp(
                    165,
                    135,
                    p
                );


            verticalSpeed =
                lerp(
                    -700,
                    -250,
                    p
                );


            heading =
                lerp(
                    238,
                    236,
                    p
                );


            aircraftX =
                lerp(
                    70,
                    91,
                    p
                );


            aircraftY =
                lerp(
                    60,
                    76,
                    p
                );


            rotation =
                lerp(
                    10,
                    13,
                    p
                );


            flightPhase.textContent =
                "LANDING";

            flapStatus.textContent =
                "FULL";

            gearStatus.textContent =
                "DOWN";

            autoStatus.textContent =
                "LAND";

            locStatus.textContent =
                "LOCK";

            gsStatus.textContent =
                "LOCK";

            apStatus.textContent =
                "LAND";

        }


        /* =================================================
           18 — 20 SEC
           TOUCHDOWN
        ================================================= */

        else {

            const p =
                (elapsed - 18000) / 2000;


            altitude =
                lerp(
                    80,
                    0,
                    p
                );


            speed =
                lerp(
                    135,
                    25,
                    p
                );


            verticalSpeed = 0;

            heading = 236;


            aircraftX =
                lerp(
                    91,
                    96,
                    p
                );


            aircraftY =
                lerp(
                    76,
                    82,
                    p
                );


            rotation =
                lerp(
                    13,
                    0,
                    p
                );


            flightPhase.textContent =
                "TOUCHDOWN";

            flapStatus.textContent =
                "FULL";

            gearStatus.textContent =
                "DOWN";

            autoStatus.textContent =
                "TAXI";

            locStatus.textContent =
                "OFF";

            gsStatus.textContent =
                "OFF";

            apStatus.textContent =
                "OFF";

            navStatus.textContent =
                "GROUND";

        }


        /* =================================================
           DISPLAY UPDATE
        ================================================= */

        altitudeValue.textContent =
            Math.round(
                clamp(
                    altitude,
                    0,
                    35000
                )
            )
                .toString()
                .padStart(5, "0");


        speedValue.textContent =
            Math.round(
                clamp(
                    speed,
                    0,
                    450
                )
            )
                .toString()
                .padStart(3, "0");


        const roundedVS =
            Math.round(
                verticalSpeed
            );


        verticalSpeedValue.textContent =
            roundedVS > 0
                ? `+${roundedVS}`
                : roundedVS.toString();


        headingValue.textContent =
            Math.round(
                heading
            )
                .toString()
                .padStart(3, "0");


        /* =================================================
           AIRCRAFT POSITION
        ================================================= */

        aircraft.style.left =
            `${aircraftX}%`;

        aircraft.style.top =
            `${aircraftY}%`;

        aircraft.style.transform =
            `translate(-50%, -50%) rotate(${rotation}deg)`;


        /* =================================================
           NEXT FRAME
        ================================================= */

        animationFrame =
            requestAnimationFrame(
                updateFlight
            );

    }


    /* =====================================================
       OPEN AVIATION DISPLAY
    ===================================================== */

    aviationButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            cancelAnimationFrame(
                animationFrame
            );

            animationFrame = null;

            resetFlight();


            aviationOverlay.classList.add(
                "active"
            );


            /*
               Küçük gecikme ile animasyonu
               temiz şekilde başlat.
            */

            requestAnimationFrame(() => {

                animationStart =
                    performance.now();

                animationFrame =
                    requestAnimationFrame(
                        updateFlight
                    );

            });

        }
    );
const mobileAviationButton =
    document.getElementById("mobileNavAviation");

if (mobileAviationButton) {

    mobileAviationButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            mobileNavPanel.classList.remove("active");

            mobileNavTrigger.setAttribute(
                "aria-expanded",
                "false"
            );

            aviationButton.click();

        }
    );

}
/* =========================================================
   AVIATION FLOAT BUTTON
========================================================= */

const aviationFloat =
    document.getElementById("aviationFloat");

if (aviationFloat) {

    aviationFloat.addEventListener(
        "click",
        function () {

            aviationButton.click();

        }
    );

}
    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    aviationClose.addEventListener(
        "click",
        function () {

            aviationOverlay.classList.remove(
                "active"
            );


            cancelAnimationFrame(
                animationFrame
            );

            animationFrame = null;

            animationStart = null;

            flightFinished = true;

        }
    );


    /* =====================================================
       ESC
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                aviationOverlay.classList.contains(
                    "active"
                )
            ) {

                aviationOverlay.classList.remove(
                    "active"
                );


                cancelAnimationFrame(
                    animationFrame
                );

                animationFrame = null;

                animationStart = null;

                flightFinished = true;

            }

        }
    );

});
/* =========================================================
   MOBILE INDEX NAVIGATION
========================================================= */

const mobileNavTrigger =
    document.getElementById("mobileNavTrigger");

const mobileNavPanel =
    document.getElementById("mobileNavPanel");


if (mobileNavTrigger && mobileNavPanel) {

    mobileNavTrigger.addEventListener("click", () => {

        const isOpen =
            mobileNavPanel.classList.toggle("active");

        mobileNavTrigger.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    document
        .querySelectorAll("[data-mobile-nav]")
        .forEach(link => {

            link.addEventListener("click", () => {

                mobileNavPanel.classList.remove("active");

                mobileNavTrigger.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


    document.addEventListener("click", event => {

        if (
            !mobileNavPanel.contains(event.target) &&
            !mobileNavTrigger.contains(event.target)
        ) {

            mobileNavPanel.classList.remove("active");

            mobileNavTrigger.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}