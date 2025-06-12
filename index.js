// Main documentation chapter order for prev/next navigation
const docChapterOrder = [
  "overview",
  "package-installation",
  "navigation",
  "adding-bugs-tasks",
  "using-shortcuts",
  "customisation",
  "exporting-data",
  "final",
  "legal"
];

// Documentation content object (sample content for demonstration)
const docsCards = [
  {
    id: 'buggie',
    title: 'Buggie',
    chapters: {
      "overview": {
        title: "Overview",
        content: `
          <img src="images/bug_icon_logo_newbanner-nobg.png" alt="Buggie Logo" class="header-img" style="max-width:640px; margin-bottom:20px;">
          <div style="font-weight:700; font-size:1.18rem; margin-bottom:8px;">BUG TRACKER   |   TASK MANAGER</div>
          <div style="font-weight:600; font-size:1.09rem; margin-bottom:12px;">User Manual</div>
          <p>Buggie is a customizable bug and task tracking tool built inside the Unity Editor. It is designed for developers to quickly record and manage tasks and issues directly within Unity, without interrupting workflow. This asset was developed utilising Odin Inspector therefore, it is a dependency in order for this tool to function.</p>
        `
      },
      "package-installation": {
        title: "Package Installation",
        content: `<p>Follow the standard Unity procedure and install the Buggie asset from the Package Manager/My Assets.</p>`
      },
      "navigation": {
        title: "Navigation",
        content: `
          <h3>Navigating to the Main Window</h3>
          <p>Once the package is installed, a Buggie tab will appear in the Unity Editor’s Taskbar menu. Select ‘Open Main Window’ from the dropdown.</p>
          <img class="doc-img" src="images/buggie_1.png" alt="Navigating to Main Window" />
          <img class="doc-img" src="images/buggie_2.png" alt="Navigating to Main Window 2" />
          <h3>Using the Tab Selection</h3>
          <p>Click the Bugs tab to display the current bug list. Click the Tasks tab to display your task list. Click the Settings tab to adjust formatting and colour options.</p>
          <img class="doc-img" src="images/buggie_3.png" alt="Using Tab Selection" />
        `
      },
      "adding-bugs-tasks": {
        title: "Adding New Bugs/Tasks",
        content: `
          <h3>Adding a New Bug</h3>
          <p>Create new Bugs from the Main Window. Interacting with the relevant add button will result in a modal popup. Here you can choose the category, priority and description of your bug.</p>
          <img class="doc-img" src="images/buggie_4.png" alt="Adding a New Bug 1" />
          <p>And add references to any related scripts, game objects or assets.</p>
          <img class="doc-img" src="images/buggie_5.png" alt="Adding a New Bug 2" />
          <img class="doc-img" src="images/buggie_6.png" alt="Adding a New Bug 3" />
          <h3>Adding a New Task</h3>
          <p>The same process applies to creating tasks as it does to bugs. You will be presented with a modal popup, this time, the Task Modal. A Task allows you to create an additional checklist to add more structure over your Task and what it will take to complete it.</p>
          <img class="doc-img" src="images/buggie_7.png" alt="Adding a New Task" />
          <h3>Filtering</h3>
          <p>Quickly locate relevant bugs and tasks by applying filters for Category, Priority, and Status. Active filters appear above the table and can be cleared individually or all at once with a single click.</p>
          <img class="doc-img" src="images/buggie_8.png" alt="Filtering" />
          <h3>Completion/Deletion</h3>
          <p>Use the checkmark icon to mark bugs or tasks as complete, automatically moving them to the bottom of the list and logging completion time. Use the X icon to safely remove entries—confirmation prompts prevent accidental deletion.</p>
          <img class="doc-img" src="images/buggie_9.png" alt="Completion/Deletion" />
          <h3>Detailed View</h3>
          <p>Open a full-screen, dock-able detail window for any bug or task. These windows let you edit fields like category, priority, description, and linked assets. You can also complete or delete entries directly from this view, with all changes syncing back to the main list.</p>
          <img class="doc-img" src="images/buggie_10.png" alt="Detailed View" />
          <h3>Click the eye icon to open a detailed view</h3>
          <img class="doc-img" src="images/buggie_11.png" alt="Detailed View Icon" />
          <img class="doc-img" src="images/buggie_12.png" alt="Detailed View Icon 2" />
        `
      },
      "using-shortcuts": {
        title: "Using Shortcuts",
        content: `
          <h3>Default Shortcuts</h3>
          <p>Speed up your workflow with keyboard shortcuts. All shortcuts work globally inside the Unity Editor—even if the main window is closed. Out of the box, Buggie ships with default shortcut input:</p>
          <ul>
            <li><b>Ctrl + Shift + Alt + B</b> = Add Bug</li>
            <li><b>Ctrl + Shift + Alt + T</b> = Add Task</li>
          </ul>
          <img class="doc-img" src="images/buggie_13.png" alt="Default Shortcuts" />
          <h3>Custom Shortcuts</h3>
          <p>Navigate to the settings tab to find quick access to choosing custom shortcuts. This is handled via Unity’s built in shortcut solution.</p>
          <img class="doc-img" src="images/buggie_14.png" alt="Custom Shortcuts 1" />
          <img class="doc-img" src="images/buggie_15.png" alt="Custom Shortcuts 2" />
        `
      },
      "customisation": {
        title: "Customisation",
        content: `
          <h3>Changing Colours</h3>
          <p>From the Settings tab, customize the accent colours used across bugs, tasks and completion status. All visual elements update live to reflect your chosen palette (Detailed View Modal Windows may require saving settings before updating). This includes button tints, text labels, and icon highlights.</p>
          <img class="doc-img" src="images/buggie_16.png" alt="Changing Colours" />
          <h3>Formatting Date</h3>
          <p>Choose how dates and times are displayed using standard C# datetime format strings. This lets you localize or personalize the timestamp layout across the app.</p>
          <img class="doc-img" src="images/buggie_17.png" alt="Formatting Date" />
          <h3>Saving/Resetting</h3>
          <p>Click Save Settings to persist your changes. You can also click Reset to revert to the original factory settings. Both options are clearly available at the bottom of the Settings tab.</p>
          <img class="doc-img" src="images/buggie_18.png" alt="Saving/Resetting" />
        `
      },
      "exporting-data": {
        title: "Exporting Data",
        content: `
          <h3>Adding a New Bug</h3>
          <p>From the Main Window, Export your entire bug or task list to a .csv file for use in external tools such as Excel, Sheets, or documentation pipelines.</p>
          <img class="doc-img" src="images/buggie_19.png" alt="Adding a New Bug Export" />
          <h3>Setting Destination</h3>
          <p>Choose your export destination using the standard Unity file save dialog. You can rename the file and place it anywhere within or outside your project directory. Note: Changing the date format in the settings tab will update the export filename accordingly.</p>
          <img class="doc-img" src="images/buggie_20.png" alt="Setting Destination" />
        `
      },
      "final": {
        title: "Final Notes & Support",
        content: `
          <p>Buggie is designed to be fast, transparent, and easy to integrate into your workflow. If you encounter any issues, need help, or want to suggest a feature, please reach out through the Unity Asset Store support link.</p>
          <ul>
            <li>Ensure Odin Inspector is installed and up to date.</li>
            <li>Use Unity version 2021.3 LTS or later (recommended).</li>
            <li>Enable editor domain reloads for full persistence.</li>
            <li>Rate & Review Buggie on the Asset Store—it helps support continued development and improvements.</li>
          </ul>
        `
      },
      "legal": {
        title: "Legal & Usage",
        content: `
          <div class="legal-section">
          <h3>Disclaimer:</h3>
          <p>While every effort has been made to ensure reliability, the developer is not liable for any data loss, damages, or project issues resulting from use or misuse of this tool.</p>
          <h3>Dependency Notice:</h3>
          <p>This package requires Odin Inspector by Sirenix. It is a separate paid asset available on the Unity Asset Store. Buggie does not include Odin Inspector and does not modify or redistribute it in any way.</p>
          <h3>License:</h3>
          <p>Buggie is licensed for use in Unity projects under the terms of the Unity Asset Store EULA. You may modify and use it in personal or commercial projects. Redistribution or resale of the asset (modified or unmodified) outside the Asset Store is prohibited.</p>
          </div>
        `
      }
    }
  }
];

// Home, Products, Contact content
const homeContent = `
  <section class="home-section">
    <div class="centered-content-inner">
      <img class="header-img home-logo" src="images/pmappslogo_nobg.png" alt="PM Applications Logo" />
      <p>
  <b>PM Applications</b> is all about creating practical, high-quality tools for Unity developers. As an <b>Indie Game Developer</b> and asset creator I enjoy creating solutions that help myself and others. Every asset released on the Unity Asset Store is designed to help make a smoother workflow, your projects more organized, and your development process more enjoyable, slightly...<br>
  I believe in clear documentation, responsive support, and continual improvement based on real feedback. <br>
  <br>Thanks for stopping by!
</p>

    </div>
  </section>
`;

const productsContent = `
  <section>
    <h2>Products</h2>
    <div class="centered-content-inner products">
      <table class="products-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
            <th>Store</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Buggie</td>
            <td>Customizable bug &amp; task tracker for Unity Editor.</td>
            <td>£29.99</td>
            <td>
              <a href="https://assetstore.unity.com/packages/slug/321158" target="_blank" class="assetstore-link" aria-label="Unity Asset Store">
                Unity Asset Store
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
`;

const contactContent = `
  <section>
    <h2>Contact</h2>
    <div class="centered-content-inner contact">
      <div class="contact-row">
        <div class="contact-col">
          <div class="contact-email-header">Email & General Enquiries</div>
          <div class="contact-email">contact.pmapps@gmail.com</div>
          <div class="contact-email-desc">
            For all general enquiries, feedback, or partnership requests, please email us directly.<br><br>
            We aim to respond to all queries within 1-2 business days.
          </div>
        </div>
        <div class="contact-col">
          <div class="contact-form-header">Report Issue</div>
          <form id="contactForm" autocomplete="off">
            <label for="contact-product">Product:</label>
            <select id="contact-product" required>
              <option value="BUGGIE">Buggie</option>
            </select>
            <label for="contact-subject">Ticket #:</label>
            <input id="contact-subject" type="text" readonly />
            <label for="contact-message">Description:</label>
            <textarea id="contact-message" rows="5" required placeholder="Please describe your issue..."></textarea>
            <button type="submit">Send Email</button>
          </form>
          <div id="contact-info"></div>
        </div>
      </div>
    </div>
  </section>
`;

const mainContent = document.getElementById('main-content');
const navLinks = document.querySelectorAll('.nav-link');
const docsToggle = document.getElementById('docsToggle');
const docsSubnav = document.querySelector('.docs-subnav');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const collapsibles = document.querySelectorAll('.collapsible');

function fadeInContent(html) {
  mainContent.style.opacity = 0;
  setTimeout(() => {
    mainContent.innerHTML = html;
    mainContent.style.opacity = 1;
    setupDynamicDocNav();
    if (document.getElementById('contactForm')) setupContactForm();
  }, 200);
}

function getPrevNextChapters(currentChapter) {
  const idx = docChapterOrder.indexOf(currentChapter);
  return {
    prev: idx > 0 ? docChapterOrder[idx - 1] : null,
    next: idx < docChapterOrder.length - 1 ? docChapterOrder[idx + 1] : null
  };
}

function leftArrowSVG() {
  return `<svg viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}
function rightArrowSVG() {
  return `<svg viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function loadDocContent(docId, chapterId) {
  const doc = docsCards.find(d => d.id === docId);
  if (!doc) return;
  const chapter = doc.chapters[chapterId];
  if (!chapter) return;
  const { prev, next } = getPrevNextChapters(chapterId);
  const html = `
    <section>
      <h2>${chapter.title}</h2>
      <div class="doc-nav-buttons">
        <button ${prev ? '' : 'disabled'} data-doc="${docId}" data-chapter="${prev || ''}" id="doc-prev-btn" aria-label="Previous">${leftArrowSVG()}</button>
        <button ${next ? '' : 'disabled'} data-doc="${docId}" data-chapter="${next || ''}" id="doc-next-btn" aria-label="Next">${rightArrowSVG()}</button>
      </div>
      <div class="doc-section-content">${chapter.content}</div>
    </section>
  `;
  setSidebarActive('docs', docId, chapterId);
  fadeInContent(html);
  closeSidebarOnMobile();
}

function setSidebarActive(section, docId = null, chapterId = null) {
  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.section === section);
  });
  if (section === 'docs') {
    docsToggle.classList.add('active');
    docsSubnav.classList.add('open');
    docsToggle.setAttribute('aria-expanded', 'true');
    document.querySelectorAll('.doc-link').forEach(btn => {
      btn.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
      btn.nextElementSibling.classList.add('open');
    });
  } else {
    docsToggle.classList.remove('active');
    docsSubnav.classList.remove('open');
    docsToggle.setAttribute('aria-expanded', 'false');
    document.querySelectorAll('.doc-link').forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
      btn.nextElementSibling.classList.remove('open');
    });
  }
  document.querySelectorAll('.doc-chapter-link').forEach(link => {
    link.classList.toggle('active', link.dataset.doc === docId && link.dataset.chapter === chapterId);
  });
}

function setupDynamicDocNav() {
  document.querySelectorAll('.doc-chapter-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const docId = link.dataset.doc;
      const chapterId = link.dataset.chapter;
      if (docId && chapterId) {
        loadDocContent(docId, chapterId);
        setSidebarActive('docs', docId, chapterId);
      }
    });
  });
  // Prev/Next buttons
  const prevBtn = document.getElementById('doc-prev-btn');
  const nextBtn = document.getElementById('doc-next-btn');
  if (prevBtn) prevBtn.addEventListener('click', function() {
    if (this.disabled) return;
    loadDocContent('buggie', this.dataset.chapter);
  });
  if (nextBtn) nextBtn.addEventListener('click', function() {
    if (this.disabled) return;
    loadDocContent('buggie', this.dataset.chapter);
  });
}

// Collapsible logic for sidebar
collapsibles.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    let content = btn.nextElementSibling;
    if (content && content.classList.contains('collapsible-content')) {
      let open = content.classList.contains('open');
      content.classList.toggle('open', !open);
      btn.classList.toggle('active', !open);
      btn.setAttribute('aria-expanded', !open);
      if (btn.querySelector('.arrow')) {
        btn.querySelector('.arrow').style.transform = !open ? 'rotate(90deg)' : '';
      }
    }
  });
});

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  sidebarToggle.classList.add('pressed');
  setTimeout(() => sidebarToggle.classList.remove('pressed'), 200);
});

function closeSidebarOnMobile() {
  if (window.innerWidth <= 900) {
    sidebar.classList.remove('open');
  }
}
window.addEventListener('resize', closeSidebarOnMobile);

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = link.dataset.section;
    if (section === 'home') {
      fadeInContent(homeContent);
      setSidebarActive('home');
    } else if (section === 'products') {
      fadeInContent(productsContent);
      setSidebarActive('products');
    } else if (section === 'contact') {
      fadeInContent(contactContent);
      setSidebarActive('contact');
    } else if (section === 'docs') {
      loadDocContent('buggie', 'overview');
      docsToggle.classList.add('active');
      docsSubnav.classList.add('open');
      docsToggle.setAttribute('aria-expanded', 'true');
    }
  });
});

function setupContactForm() {
  const form = document.getElementById('contactForm');
  const productSelect = document.getElementById('contact-product');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const info = document.getElementById('contact-info');

  function updateSubject() {
    const product = productSelect.value;
    const now = new Date();
    const pad = n => n.toString().padStart(2, '0');
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const london = new Date(utc + (3600000));
    const year = london.getFullYear();
    const month = pad(london.getMonth() + 1);
    const day = pad(london.getDate());
    const hour = pad(london.getHours());
    const min = pad(london.getMinutes());
    const sec = pad(london.getSeconds());
    const ticket = product[0].toUpperCase() + year + month + day + hour + min + sec + ';';
    subjectInput.value = `TN:${ticket}`;
    return ticket;
  }

  productSelect.addEventListener('change', updateSubject);
  updateSubject();

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const ticket = updateSubject();
    const subject = subjectInput.value;
    const mailto = `mailto:contact.pmapps@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageInput.value)}`;
    window.location.href = mailto;
    info.textContent = `Ticket number generated: ${subject}`;
  });
}

// Initial load
fadeInContent(homeContent);
setSidebarActive('home');
docsSubnav.classList.remove('open');
