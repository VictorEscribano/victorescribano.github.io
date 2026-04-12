/* ============================================
   Victor Escribano · Cinematic Travel Creator
   main.js — Scroll animations, i18n & interactions
   ============================================ */

/* --- Translations --- */
var translations = {
  es: {
    'nav.work': 'Trabajo',
    'nav.gear': 'Kit',
    'nav.collabs': 'Collabs',
    'nav.contact': 'Contacto',
    'hero.tagline': '"La cámara, la mochila y la voz."',
    'about.label': 'Quién soy',
    'about.h1': 'Viajero.',
    'about.h2': 'Narrador visual.',
    'about.h3': 'Ingeniero de día.',
    'about.body': 'Viajero, narrador visual y creador de contenido con foco en aventura auténtica. He producido material en el Sáhara (Erg Chegaga, 5 noches off-grid), Islandia y el Instituto de Astrofísica de Canarias. Trabajo con color grading adaptado al entorno y al flujo de cada historia. Disponible para colaboraciones con marcas que quieran mostrar sus productos en entornos reales y exigentes.',
    'about.feat1': 'Cinematic video & foto',
    'about.feat2': 'Viajes reales, stories reales',
    'about.feat3': 'Aventuras sin guion',
    'about.cta': 'Ver mi trabajo ↓',
    'cat.title': 'Lo que creo',
    'cat.subtitle': 'lo que llevo en la mochila y en la cabeza',
    'cat.1.name': 'Viaje solo',
    'cat.1.desc': 'Hostales, autoestop y conversaciones que cambian perspectivas',
    'cat.2.name': 'Fotografía cinemática',
    'cat.2.desc': 'Fujifilm XM-5 + lentes Sirui anamórficas. F-Log2. Color grading manual',
    'cat.3.name': 'Vídeo narrativo',
    'cat.3.desc': 'No monto un corte sin que cuente algo. Cada secuencia tiene una razón',
    'cat.4.name': 'Viaje con amigos',
    'cat.4.desc': 'El mismo espíritu aventurero, más risas, diferente energía',
    'cat.5.name': 'Cultura & Gente',
    'cat.5.desc': 'Los sitios importan, pero las personas que conoces por el camino importan más',
    'cat.6.name': 'Vlogging',
    'cat.6.desc': 'Cámara en la mano. Sin guion. Sin pretender',
    'gear.label': 'Mi Kit',
    'gear.heading': '"Todo lo que necesito para crear"',
    'gear.subtitle': 'Menos de 2kg. Sin excusas.',
    'gear.1.note': 'Cuerpo principal',
    'gear.1.blurb': 'Compacta, ligera y con F-Log2. La cámara que me acompaña a todas partes sin pesar más que un libro.',
    'gear.2.note': 'Versátil y ligera',
    'gear.2.blurb': 'El zoom kit que cubre desde paisajes épicos hasta retratos ambientales. Perfecta para viajar ligero.',
    'gear.3.note': 'Look de cine',
    'gear.3.blurb': 'Flares horizontales, relación de aspecto ancha. Calidad de cine en menos de 300 gramos.',
    'gear.4.note': 'Próximamente',
    'gear.4.blurb': 'Audio limpio sin cables. Para capturar conversaciones que cambian vidas en cualquier entorno.',
    'gear.5.note': 'Próximamente',
    'gear.5.blurb': 'Lo que la cámara principal no puede mostrar. Inmersión total en los paisajes más remotos del mundo.',
    'gear.collab': '✉ Abierto a colaboración',
    'gear.interested': 'Me interesa trabajar con',
    'work.title': 'Trabajo',
    'work.photo': 'Fotografía',
    'work.video': 'Vídeo',
    'work.also': 'Ver también en',
    'work.coming': 'Próximamente',
    'collabs.label': 'Colaboraciones',
    'collabs.heading': '"Marcas en las que creo"',
    'collabs.body': 'No hago publicidad. Cuento por qué uso estas herramientas en el mundo real, con contexto real, en los sitios más remotos del mundo.',
    'brand.1': 'La cámara que siempre va en mi riñonera',
    'brand.2': 'Calidad de cine en menos de 300g',
    'brand.3': 'Capturar conversaciones que cambian vidas',
    'brand.4': 'Lo que la cámara principal no puede mostrar',
    'brand.5': 'Conectado en el Sáhara',
    'brand.6.name': 'Seguros de viaje',
    'brand.6': 'Me lo juego todo. Por eso me aseguro',
    'brand.7': 'El rugido de los camellos que no pude grabar en directo',
    'collabs.cta.title': '¿Hablamos?',
    'collabs.cta.body': 'Si crees que tu marca encaja con aventuras reales, sitios reales y cero pose, escríbeme.',
    'collabs.cta.btn': 'Proponer colaboración',
    'form.name': 'Tu nombre',
    'form.message': 'Cuéntame sobre tu marca y cómo podríamos trabajar juntos...',
    'form.sending': 'Enviando...',
    'form.success': '¡Mensaje enviado! Te responderé pronto.',
    'form.error': 'Algo fue mal. Escríbeme a vesgarcia99@gmail.com',
    'footer': '© 2025 Victor Escribano Garcia · Hecho con Fujifilm y obsesión'
  },
  en: {
    'nav.work': 'Work',
    'nav.gear': 'Gear',
    'nav.collabs': 'Collabs',
    'nav.contact': 'Contact',
    'hero.tagline': '"The camera, the backpack, and the voice."',
    'about.label': 'Who I Am',
    'about.h1': 'Traveler.',
    'about.h2': 'Visual storyteller.',
    'about.h3': 'Engineer by day.',
    'about.body': 'Traveler, visual storyteller and content creator focused on authentic adventure. I have produced material in the Sahara (Erg Chegaga, 5 nights off-grid), Iceland and the Canary Islands Astrophysics Institute. I work with color grading adapted to the environment and the flow of each story. Available for collaborations with brands that want to showcase their products in real, demanding environments.',
    'about.feat1': 'Cinematic video & photo',
    'about.feat2': 'Real trips, real stories',
    'about.feat3': 'Unscripted adventures',
    'about.cta': 'See my work ↓',
    'cat.title': 'What I Create',
    'cat.subtitle': 'what I carry in my backpack and in my head',
    'cat.1.name': 'Solo Travel',
    'cat.1.desc': 'Hostels, hitchhiking, and conversations that shift perspectives',
    'cat.2.name': 'Cinematic Photography',
    'cat.2.desc': 'Fujifilm XM-5 + Sirui anamorphic lenses. F-Log2. Manual color grading',
    'cat.3.name': 'Narrative Video',
    'cat.3.desc': "I don't cut without a reason. Every sequence tells something",
    'cat.4.name': 'Travel with Friends',
    'cat.4.desc': 'Same adventurous spirit, more laughs, different energy',
    'cat.5.name': 'Culture & People',
    'cat.5.desc': 'Places matter, but the people you meet along the way matter more',
    'cat.6.name': 'Vlogging',
    'cat.6.desc': 'Camera in hand. No script. No pretense',
    'gear.label': 'My Gear',
    'gear.heading': '"Everything I need to create"',
    'gear.subtitle': 'Under 2kg. No excuses.',
    'gear.1.note': 'Main body',
    'gear.1.blurb': 'Compact, light, with F-Log2. The camera that always lives in my fanny pack, lighter than a book.',
    'gear.2.note': 'Versatile & light',
    'gear.2.blurb': 'The kit zoom that covers everything from epic landscapes to environmental portraits. Perfect for light travel.',
    'gear.3.note': 'Cinema look',
    'gear.3.blurb': 'Horizontal flares, wide aspect ratio. Cinema quality in less than 300 grams.',
    'gear.4.note': 'Coming soon',
    'gear.4.blurb': 'Clean wireless audio. To capture life-changing conversations in any environment.',
    'gear.5.note': 'Coming soon',
    'gear.5.blurb': "What the main camera can't show. Full immersion in the world's most remote landscapes.",
    'gear.collab': '✉ Open for collaboration',
    'gear.interested': 'Interested in working with',
    'work.title': 'Work',
    'work.photo': 'Photography',
    'work.video': 'Video',
    'work.also': 'Also on',
    'work.coming': 'Coming soon',
    'collabs.label': 'Collaborations',
    'collabs.heading': '"Brands I believe in"',
    'collabs.body': "I don't do ads. I share why I use these tools in the real world, with real context, in the most remote places on earth.",
    'brand.1': 'The camera that always lives in my fanny pack',
    'brand.2': 'Cinema quality under 300g',
    'brand.3': 'Capturing life-changing conversations',
    'brand.4': "What the main camera can't show",
    'brand.5': 'Connected in the Sahara',
    'brand.6.name': 'Travel Insurance',
    'brand.6': 'I risk everything. That\'s why I insure it',
    'brand.7': "The camel roars I couldn't record live",
    'collabs.cta.title': "Let's talk?",
    'collabs.cta.body': 'If you think your brand fits with real adventures, real places, and zero posing — write me.',
    'collabs.cta.btn': 'Propose a collaboration',
    'form.name': 'Your name',
    'form.message': 'Tell me about your brand and how we could work together...',
    'form.sending': 'Sending...',
    'form.success': 'Message sent! I\'ll get back to you soon.',
    'form.error': 'Something went wrong. Email me at vesgarcia99@gmail.com',
    'footer': '© 2025 Victor Escribano Garcia · Made with Fujifilm and obsession'
  },
  fr: {
    'nav.work': 'Travail',
    'nav.gear': 'Équipement',
    'nav.collabs': 'Collabs',
    'nav.contact': 'Contact',
    'hero.tagline': '"L\'appareil photo, le sac à dos et la voix."',
    'about.label': 'Qui je suis',
    'about.h1': 'Voyageur.',
    'about.h2': 'Narrateur visuel.',
    'about.h3': 'Ingénieur le jour.',
    'about.body': "Voyageur, narrateur visuel et créateur de contenu axé sur l'aventure authentique. J'ai produit du matériel au Sahara (Erg Chegaga, 5 nuits off-grid), en Islande et à l'Institut d'Astrophysique des Canaries. Je travaille avec un color grading adapté à l'environnement et au flux de chaque histoire. Disponible pour des collaborations avec des marques qui veulent montrer leurs produits dans des environnements réels et exigeants.",
    'about.feat1': 'Vidéo & photo cinématiques',
    'about.feat2': 'Vrais voyages, vraies histoires',
    'about.feat3': 'Aventures sans scénario',
    'about.cta': 'Voir mon travail ↓',
    'cat.title': 'Ce que je crée',
    'cat.subtitle': 'ce que je porte dans mon sac et dans ma tête',
    'cat.1.name': 'Voyage solo',
    'cat.1.desc': 'Auberges, auto-stop et conversations qui changent les perspectives',
    'cat.2.name': 'Photo cinématique',
    'cat.2.desc': 'Fujifilm XM-5 + objectifs Sirui anamorphiques. F-Log2. Étalonnage manuel',
    'cat.3.name': 'Vidéo narrative',
    'cat.3.desc': 'Je ne coupe jamais sans raison. Chaque séquence raconte quelque chose',
    'cat.4.name': 'Voyage entre amis',
    'cat.4.desc': "Le même esprit d'aventure, plus de rires, une énergie différente",
    'cat.5.name': 'Culture & Gens',
    'cat.5.desc': 'Les lieux comptent, mais les personnes rencontrées en chemin comptent davantage',
    'cat.6.name': 'Vlogging',
    'cat.6.desc': 'Caméra en main. Sans scénario. Sans prétention',
    'gear.label': 'Mon Équipement',
    'gear.heading': '"Tout ce dont j\'ai besoin pour créer"',
    'gear.subtitle': 'Moins de 2kg. Sans excuses.',
    'gear.1.note': 'Boîtier principal',
    'gear.1.blurb': 'Compact, léger, avec F-Log2. L\'appareil qui vit toujours dans ma banane, plus léger qu\'un livre.',
    'gear.2.note': 'Polyvalent et léger',
    'gear.2.blurb': 'Le zoom kit qui couvre des paysages épiques aux portraits. Parfait pour voyager léger.',
    'gear.3.note': 'Look cinéma',
    'gear.3.blurb': 'Flares horizontaux, ratio large. Qualité cinéma en moins de 300 grammes.',
    'gear.4.note': 'Bientôt',
    'gear.4.blurb': 'Audio sans fil propre. Pour capturer des conversations qui changent des vies.',
    'gear.5.note': 'Bientôt',
    'gear.5.blurb': 'Ce que la caméra principale ne peut pas montrer. Immersion totale dans les paysages les plus reculés.',
    'gear.collab': '✉ Ouvert à la collaboration',
    'gear.interested': 'Intéressé à travailler avec',
    'work.title': 'Travail',
    'work.photo': 'Photographie',
    'work.video': 'Vidéo',
    'work.also': 'Aussi sur',
    'work.coming': 'Bientôt',
    'collabs.label': 'Collaborations',
    'collabs.heading': '"Les marques auxquelles je crois"',
    'collabs.body': 'Je ne fais pas de pub. Je raconte pourquoi j\'utilise ces outils dans le monde réel, avec un contexte réel, dans les endroits les plus reculés.',
    'brand.1': 'L\'appareil qui vit toujours dans ma banane',
    'brand.2': 'Qualité cinéma en moins de 300g',
    'brand.3': 'Capturer des conversations qui changent des vies',
    'brand.4': 'Ce que la caméra principale ne peut pas montrer',
    'brand.5': 'Connecté dans le Sahara',
    'brand.6.name': 'Assurance voyage',
    'brand.6': 'Je risque tout. C\'est pour ça que je m\'assure',
    'brand.7': 'Le rugissement des chameaux que je n\'ai pas pu enregistrer en direct',
    'collabs.cta.title': 'On en parle ?',
    'collabs.cta.body': 'Si tu penses que ta marque colle avec de vraies aventures, de vrais endroits et zéro pose, écris-moi.',
    'collabs.cta.btn': 'Proposer une collaboration',
    'form.name': 'Votre prénom',
    'form.message': 'Parlez-moi de votre marque et de comment nous pourrions collaborer...',
    'form.sending': 'Envoi en cours...',
    'form.success': 'Message envoyé ! Je vous répondrai bientôt.',
    'form.error': 'Une erreur s\'est produite. Écrivez-moi à vesgarcia99@gmail.com',
    'footer': '© 2025 Victor Escribano Garcia · Fait avec Fujifilm et obsession'
  },
  zh: {
    'nav.work': '作品',
    'nav.gear': '装备',
    'nav.collabs': '合作',
    'nav.contact': '联系',
    'hero.tagline': '"相机、背包和声音。"',
    'about.label': '关于我',
    'about.h1': '旅行者。',
    'about.h2': '视觉叙事者。',
    'about.h3': '日间工程师。',
    'about.body': '旅行者、视觉叙事者和专注于真实冒险的内容创作者。我在撒哈拉沙漠（Erg Chegaga，5晚野外露营）、冰岛和加那利群岛天体物理研究所制作过内容。我的调色风格会根据环境和每个故事的节奏进行调整。欢迎与希望在真实且极端环境中展示产品的品牌合作。',
    'about.feat1': '电影级视频和摄影',
    'about.feat2': '真实旅行，真实故事',
    'about.feat3': '无剧本冒险',
    'about.cta': '查看我的作品 ↓',
    'cat.title': '我的创作',
    'cat.subtitle': '背包里和脑海里的东西',
    'cat.1.name': '独自旅行',
    'cat.1.desc': '青旅、搭便车和改变视角的对话',
    'cat.2.name': '电影摄影',
    'cat.2.desc': 'Fujifilm XM-5 + Sirui变形镜头。F-Log2。手动调色',
    'cat.3.name': '叙事视频',
    'cat.3.desc': '每一刀都有理由。每个镜头都在讲述什么',
    'cat.4.name': '和朋友旅行',
    'cat.4.desc': '同样的冒险精神，更多欢笑，不同的能量',
    'cat.5.name': '文化与人',
    'cat.5.desc': '地方很重要，但路上遇到的人更重要',
    'cat.6.name': 'Vlog',
    'cat.6.desc': '手持相机。没有剧本。不做作',
    'gear.label': '我的装备',
    'gear.heading': '"创作所需的一切"',
    'gear.subtitle': '不到2公斤。没有借口。',
    'gear.1.note': '主机身',
    'gear.1.blurb': '紧凑、轻便，支持F-Log2。永远在我腰包里的相机，比一本书还轻。',
    'gear.2.note': '多功能轻便',
    'gear.2.blurb': '从史诗级风景到环境肖像，一个变焦头全搞定。轻装旅行的完美选择。',
    'gear.3.note': '电影质感',
    'gear.3.blurb': '水平光晕，宽画幅。不到300克的电影级画质。',
    'gear.4.note': '即将推出',
    'gear.4.blurb': '干净的无线音频。在任何环境中捕捉改变人生的对话。',
    'gear.5.note': '即将推出',
    'gear.5.blurb': '主相机无法展示的画面。在世界最偏远的风景中完全沉浸。',
    'gear.collab': '✉ 开放合作',
    'gear.interested': '有兴趣合作的品牌',
    'work.title': '作品',
    'work.photo': '摄影',
    'work.video': '视频',
    'work.also': '也可在',
    'work.coming': '即将推出',
    'collabs.label': '合作',
    'collabs.heading': '"我信任的品牌"',
    'collabs.body': '我不做广告。我分享为什么在真实世界、真实场景、地球最偏远的地方使用这些工具。',
    'brand.1': '永远在我腰包里的相机',
    'brand.2': '不到300克的电影级画质',
    'brand.3': '捕捉改变人生的对话',
    'brand.4': '主相机无法展示的画面',
    'brand.5': '在撒哈拉保持连接',
    'brand.6.name': '旅行保险',
    'brand.6': '我冒一切风险。所以我买保险',
    'brand.7': '无法现场录制的骆驼吼声',
    'collabs.cta.title': '聊聊？',
    'collabs.cta.body': '如果你的品牌适合真正的冒险、真实的地方、零摆拍，请联系我。',
    'collabs.cta.btn': '提议合作',
    'form.name': '你的名字',
    'form.message': '告诉我关于你的品牌以及我们如何合作...',
    'form.sending': '发送中...',
    'form.success': '消息已发送！我会尽快回复你。',
    'form.error': '出了点问题。请直接发邮件至 vesgarcia99@gmail.com',
    'footer': '© 2025 Victor Escribano Garcia · 用Fujifilm和执着打造'
  }
};

var langLabels = { es: 'ES', en: 'EN', fr: 'FR', zh: '中文' };

function setLang(lang) {
  var strings = translations[lang];
  if (!strings) return;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (strings[key]) {
      el.textContent = strings[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (strings[key]) {
      el.placeholder = strings[key];
    }
  });

  document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : lang);
  localStorage.setItem('lang', lang);

  // Update button label
  var btn = document.querySelector('.lang-btn');
  if (btn) btn.textContent = langLabels[lang];

  // Close dropdown
  var switcher = document.querySelector('.lang-switcher');
  if (switcher) switcher.classList.remove('open');
}

// Make setLang available globally (for onclick handlers)
window.setLang = setLang;

(function () {
  'use strict';

  // --- Load saved language ---
  var savedLang = localStorage.getItem('lang');
  if (savedLang && savedLang !== 'es') {
    setLang(savedLang);
  }

  // --- Close lang dropdown when clicking outside ---
  document.addEventListener('click', function (e) {
    var switcher = document.querySelector('.lang-switcher');
    if (switcher && !switcher.contains(e.target)) {
      switcher.classList.remove('open');
    }
  });

  // --- Mobile Menu Toggle ---
  var hamburger = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  var menuClose = document.querySelector('.mobile-menu-close');

  function closeMenu() {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    if (menuClose) {
      menuClose.addEventListener('click', closeMenu);
    }

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // --- Dark Mode Toggle ---
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }

  // --- Scroll Animations (Intersection Observer) ---
  var animatedElements = document.querySelectorAll('[data-animate]');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    animatedElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // --- Collab Form Submission ---
  var collabForm = document.getElementById('collab-form');
  if (collabForm) {
    collabForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = collabForm.querySelector('button[type="submit"]');
      var feedback = document.getElementById('form-feedback');
      var lang = localStorage.getItem('lang') || 'es';
      var t = translations[lang] || translations.es;

      if (collabForm.querySelector('[name="_honey"]').value) return;

      btn.disabled = true;
      btn.textContent = t['form.sending'];
      feedback.textContent = '';
      feedback.className = 'form-feedback';

      fetch('https://formsubmit.co/ajax/vesgarcia99@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: collabForm.querySelector('[name="name"]').value,
          email: collabForm.querySelector('[name="email"]').value,
          message: collabForm.querySelector('[name="message"]').value
        })
      })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.success === 'true' || data.success === true) {
          feedback.textContent = t['form.success'];
          feedback.className = 'form-feedback success';
          collabForm.reset();
        } else {
          throw new Error('failed');
        }
      })
      .catch(function () {
        feedback.textContent = t['form.error'];
        feedback.className = 'form-feedback error';
      })
      .finally(function () {
        btn.disabled = false;
        btn.textContent = t['collabs.cta.btn'];
      });
    });
  }

  // --- Hero Parallax (subtle) ---
  var heroBg = document.querySelector('.hero-bg');

  if (heroBg && window.innerWidth >= 768) {
    var ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var scrollY = window.scrollY;
          if (scrollY < window.innerHeight) {
            heroBg.style.transform = 'translateY(' + (scrollY * 0.3) + 'px)';
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }
})();
