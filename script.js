/* ==========================================
   ЦИФРУЛИ МОКАЛАКЕ - INTERACTIVE JAVASCRIPT
   Rustavi Public School #12 - Portfolio
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initStudentFilters();
  initSearch();
  initCopyCode();
  initMobileMenu();
});

/* ------------------------------------------
   1. Dark / Light Theme Toggle
   ------------------------------------------ */
function initThemeToggle() {
  const themeBtn = document.getElementById('themeToggle');
  if (!themeBtn) return;

  // Check saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    updateThemeBtnUI(true);
  }

  themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeBtnUI(isDark);
  });
}

function updateThemeBtnUI(isDark) {
  const themeBtn = document.getElementById('themeToggle');
  if (!themeBtn) return;
  const icon = themeBtn.querySelector('i');
  const span = themeBtn.querySelector('span');

  if (isDark) {
    icon.className = 'fa-solid fa-sun';
    span.textContent = 'ნათელი თემა';
  } else {
    icon.className = 'fa-solid fa-moon';
    span.textContent = 'მუქი თემა';
  }
}

/* ------------------------------------------
   2. Filter Student Showcase Cards by SOLO Level
   ------------------------------------------ */
function initStudentFilters() {
  const filterBtns = document.querySelectorAll('#filterBtns .filter-btn');
  const cards = document.querySelectorAll('.student-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const soloType = card.getAttribute('data-solo');
        if (filterValue === 'all' || filterValue === soloType) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ------------------------------------------
   3. Search Student Showcase Cards
   ------------------------------------------ */
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.student-card');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    cards.forEach(card => {
      const name = card.getAttribute('data-name').toLowerCase();
      const topic = card.getAttribute('data-topic').toLowerCase();
      const text = card.textContent.toLowerCase();

      if (name.includes(query) || topic.includes(query) || text.includes(query)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

/* ------------------------------------------
   4. Copy Scratch Code Algorithm to Clipboard
   ------------------------------------------ */
function initCopyCode() {
  const copyBtn = document.getElementById('copyCodeBtn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const codeText = `when green flag clicked
say [გამარჯობა! იყავი უსაფრთხო ციფრული მოქალაქე!] for (2) secs
ask [შეიყვანე შენი პაროლი შემოწმებისთვის:] and wait
if <length of (answer) > 8> then
    say [შესანიშნავია! ეს არის ძლიერი პაროლი!] for (2) secs
else
    say [ყურადღება! პაროლი სუსტია. დაამატე ციფრები!] for (2) secs
broadcast [cyber_safe_done]`;

    navigator.clipboard.writeText(codeText).then(() => {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fa-solid fa-check" style="color:#68D391;"></i> კოპირებულია!';
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2500);
    });
  });
}

/* ------------------------------------------
   5. Mobile Navigation Menu Toggle
   ------------------------------------------ */
function initMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');

  if (!mobileBtn || !navLinks) return;

  mobileBtn.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    if (isOpen) {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '76px';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = 'var(--bg-card)';
      navLinks.style.padding = '1.5rem';
      navLinks.style.boxShadow = 'var(--shadow-lg)';
    }
  });
}

/* ------------------------------------------
   6. Student Showcase Modal Handler Data
   ------------------------------------------ */
const studentData = {
  ani: {
    name: 'მოსწავლე',
    topic: 'ინტერნეტ-მაშველები',
    solo: 'აბსტრაქტული დონე',
    soloClass: 'solo-extended',
    desc: 'კომპლექსური ანიმაციური თამაში მრავალდონიანი ალგორითმით, სადაც მოთამაშე იცავს პერსონალურ მონაცემებს და სხვებს ეხმარება ონლაინ ბულინგის დროს.',
    code: `when green flag clicked
set [CyberPoints] to (0)
forever
    if <key [space] pressed?> then
        broadcast [ProtectData]
        change [CyberPoints] by (10)
    end
end`,
    feedback: 'მოსწავლეს შეუძლია მიღებული ცოდნის განზოგადება და ახალ კონტექსტში გამოყენება. მან შექმნა საკუთარი ფუნქციური ბლოკები და რთული ლოგიკა, რაც ადასტურებს აბსტრაქტულ დონეს.',
    rubricScore: '4/4 - აბსტრაქტული (Extended Abstract)'
  },
  giorgi: {
    name: 'მოსწავლე',
    topic: 'უსაფრთხო პაროლის გენერატორი',
    solo: 'მიმართებითი დონე',
    soloClass: 'solo-relational',
    desc: 'ინტერაქციული პროგრამა, რომელიც ამოწმებს პაროლის სიგრძეს და ცვლადების საშუალებით აფასებს უსაფრთხოების დონეს.',
    code: `when green flag clicked
ask [შეიყვანე შენი პაროლი:] and wait
if <(length of (answer)) > (8)> then
    say [პაროლი უსაფრთხოა!] for (2) secs
else
    say [სუსტი პაროლია!] for (2) secs
end`,
    feedback: 'მოსწავლე კარგად აკავშირებს მიზეზ-შედეგობრივ კავშირებს `if-then-else` ბლოკებში. მან სწორად გამოიყენა პირობითი ოპერატორი.',
    rubricScore: '3/4 - მიმართებითი (Relational)'
  },
  nino: {
    name: 'მოსწავლე',
    topic: 'კიბერ-ეტიკეტის წესები',
    solo: 'მულტიტრუქტურული დონე',
    soloClass: 'solo-multistructural',
    desc: 'ანიმაცია 3 სხვადასხვა სცენარით. სპრაიტები საუბრობენ ონლაინ ეტიკეტზე, თუმცა ბლოკებს შორის კავშირი ხაზოვანია.',
    code: `when green flag clicked
say [წესი 1: ნუ იტყვი ცუდ სიტყვებს] for (2) secs
wait (1) secs
say [წესი 2: დაიცავი პაროლი] for (2) secs`,
    feedback: 'მოსწავლე იყენებს რამდენიმე დამოუკიდებელ ბლოკს, თუმცა კოდი ხაზოვანია. რეკომენდაციაა პირობითი ოპერატორის დამატება.',
    rubricScore: '2/4 - მულტიტრუქტურული (Multistructural)'
  },
  davit: {
    name: 'მოსწავლე',
    topic: 'ჩემი პირველი სპრაიტი',
    solo: 'უნისტრუქტურული დონე',
    soloClass: 'solo-unistructural',
    desc: 'პროექტში სპრაიტი ამბობს 1 ფრაზას უსაფრთხოებაზე. გამოყენებულია მხოლოდ 1-2 მარტივი ბლოკი.',
    code: `when green flag clicked
say [დაიცავი შენი პაროლი!] for (2) secs`,
    feedback: 'მოსწავლე ასრულებს 1 მარტივ ოპერაციას. საჭიროებს დამხმარე მინიშნებებს მეორე სპრაიტისა და კითხვა-პასუხის ბლოკების დასამატებლად.',
    rubricScore: '1/4 - უნისტრუქტურული (Unistructural)'
  },
  mariam: {
    name: 'მოსწავლე',
    topic: 'ციფრული ნაკვალევი',
    solo: 'აბსტრაქტული დონე',
    soloClass: 'solo-extended',
    desc: 'ორიგინალური ანიმაციური ისტორია, სადაც პერსონაჟი განმარტავს ინტერნეტში ინფორმაციის წარუშლელობას და სოციალურ პასუხისმგებლობას.',
    code: `when green flag clicked
broadcast [ShowDigitalFootprint]
when I receive [ShowDigitalFootprint]
repeat (5)
    create clone of [myself]
end`,
    feedback: 'მოსწავლემ შეძლო სამოქალაქო პრობლემის ღრმა გააზრება და შემოქმედებითი გადაწყვეტა. მან გამოიყენა კლონირების ბლოკები ნაკვალევის საილუსტრაციოდ.',
    rubricScore: '4/4 - აბსტრაქტული (Extended Abstract)'
  },
  luka: {
    name: 'მოსწავლე',
    topic: 'ონლაინ მეგობრობა',
    solo: 'მიმართებითი დონე',
    soloClass: 'solo-relational',
    desc: 'ვიქტორინის ტიპის პროექტი, სადაც სწორი პასუხების შემთხვევაში ქულები იმატებს ცვლადში (Score).',
    code: `when green flag clicked
ask [როგორ მოიქცევი უცნობის შეტყობინებაზე?] and wait
if <(answer) = [არ ვუპასუხებ]> then
    change [Score] by (1)
    say [სწორია!] for (2) secs
end`,
    feedback: 'მოსწავლემ წარმატებით გამოიყენა ცვლადი და პირობითი ოპერატორი. პროექტი არის ინტერაქციული და პასუხობს დავალების პირობას.',
    rubricScore: '3/4 - მიმართებითი (Relational)'
  }
};

function openStudentModal(studentKey) {
  const data = studentData[studentKey];
  if (!data) return;

  const modal = document.getElementById('studentModal');
  const title = document.getElementById('modalStudentTitle');
  const body = document.getElementById('modalStudentBody');

  title.innerHTML = `<i class="fa-solid fa-code"></i> ${data.name} - „${data.topic}“`;
  
  body.innerHTML = `
    <div style="margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
      <div>
        <span style="font-weight: 700; color: var(--text-dark);">${data.name}</span> | 
        <span style="color: var(--text-muted);">${data.topic}</span>
      </div>
      <span class="solo-badge ${data.soloClass}">${data.solo}</span>
    </div>

    <div style="background: var(--bg-light); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; border: 1px solid var(--border-color);">
      <h4 style="font-weight: 800; font-size: 0.95rem; margin-bottom: 0.3rem; color: var(--text-dark);">პროექტის მოკლე აღწერა:</h4>
      <p style="font-size: 0.9rem; color: var(--text-main);">${data.desc}</p>
    </div>

    <h4 style="font-weight: 800; font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--text-dark);">Scratch კოდის სტრუქტურა:</h4>
    <pre style="background: #1E1E2E; color: #CDD6F4; padding: 1.25rem; border-radius: var(--radius-md); font-family: var(--font-code); font-size: 0.875rem; overflow-x: auto; margin-bottom: 1.5rem; border: 1px solid #313244;"><code>${escapeHTML(data.code)}</code></pre>

    <div style="background: var(--tech-cyan-light); border-left: 4px solid var(--tech-cyan); padding: 1.25rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 1.25rem;">
      <h4 style="font-weight: 800; font-size: 0.95rem; color: var(--tech-cyan); margin-bottom: 0.4rem;">
        <i class="fa-solid fa-comment-dots"></i> მასწავლებლის განმავითარებელი შეფასება (ელზა ბაგალიშვილი):
      </h4>
      <p style="font-size: 0.9rem; color: var(--text-main); font-style: italic; line-height: 1.6;">
        "${data.feedback}"
      </p>
      <div style="margin-top: 0.75rem; font-weight: 700; font-size: 0.85rem; color: var(--primary-navy);">
        <i class="fa-solid fa-star"></i> რუბრიკის ქულა/დონე: ${data.rubricScore}
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeStudentModal() {
  document.getElementById('studentModal').classList.remove('active');
}

function openReflectionModal() {
  document.getElementById('reflectionModal').classList.add('active');
}

function closeReflectionModal() {
  document.getElementById('reflectionModal').classList.remove('active');
}

// Close modals when clicking overlay background
window.addEventListener('click', (e) => {
  const studentModal = document.getElementById('studentModal');
  const reflectionModal = document.getElementById('reflectionModal');
  if (e.target === studentModal) closeStudentModal();
  if (e.target === reflectionModal) closeReflectionModal();
});

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
