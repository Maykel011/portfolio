<?php
// Data-driven setup so it's easy to expand later
$skills = [
    ["icon" => "icons/php.png", "name" => "PHP"],
    ["icon" => "icons/mysql.png", "name" => "MySQL"],
    ["icon" => "icons/html.png", "name" => "HTML"],
    ["icon" => "icons/css.png", "name" => "CSS"],
    ["icon" => "icons/js.png", "name" => "JavaScript"]
];

$certificates = [
    [
        "file" => "certificates/comptia-itf.pdf",
        "title" => "CompTIA IT Fundamentals (ITF+) Certification"
    ],
    [
        "file" => "certificates/capstone-leadership.pdf",
        "title" => "Certificate of Leadership – Capstone Project"
    ]
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>John Michael Montes</title>
  <link rel="stylesheet" href="aboutme.css">
</head>
<body>
  
  <!-- Sidebar Navigation -->
  <nav class="sidebar">
    <div class="profile-img">
      <img src="images/profile.jpg" alt="John Michael Montes">
    </div>
    <h2>John Michael<br>Montes</h2> 
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#certificates">Certificates</a></li>
      <li><a href="#experience">Experience & Achievements</a></li>
    </ul>
  </nav>

  <!-- Main Content -->
  <main class="main-content">
      
    <!-- About -->
    <section id="about">
      <h1>About Me</h1>
      <p>I’m <strong>John Michael Montes</strong>, a passionate web developer and fresh graduate of Bachelor of Science in Information Technology (BSIT) from Jose Rizal University. 
      My journey in IT has been driven by curiosity, creativity, and a commitment to using technology as a tool to solve problems and make learning more engaging.</p>
      <br>
      <p>During my academic years, I served as the <strong>leader of our capstone project</strong> Gamified Mathematics Learning through Web Development for Grade 1 Students. This project was designed to enhance the knowledge of early learners through interactive, game-based lessons that make education fun and accessible. This strengthened my technical expertise in PHP, MySQL, HTML, CSS, and JavaScript, as well as my leadership, collaboration, and project management skills.</p>
      <br>
      <p>Beyond the classroom, I explore how <strong>artificial intelligence</strong> can be integrated into web development to accelerate processes and unlock innovative solutions. AI is a supportive tool—it enhances creativity and efficiency, allowing me to focus on delivering unique, high-quality results.</p>
      <br>
      <p>I aspire to contribute my skills to forward-thinking teams and organizations where I can continue to grow as a developer, build impactful systems, and create digital solutions that deliver real-world value.</p>
    </section>

    <!-- Skills -->
    <section id="skills">
      <h1>Skills</h1>
      <div class="skills-container">
        <?php foreach ($skills as $skill): ?>
          <div class="skill-card">
            <img src="<?php echo $skill['icon']; ?>" alt="<?php echo $skill['name']; ?>">
            <p><?php echo $skill['name']; ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects">
      <h1>Projects</h1> 
      <p><strong>Capstone Project:</strong> Gamified Mathematics Learning through Web Development for Grade 1 Students at Jose Rizal University.</p>
    </section>

    <!-- Certificates -->
    <section id="certificates">
      <h1>Certificates</h1>
      <ul>
        <?php foreach ($certificates as $cert): ?>
          <li>
            <a href="<?php echo $cert['file']; ?>" target="_blank">
              <?php echo $cert['title']; ?>
            </a>
          </li>
        <?php endforeach; ?>
      </ul>
    </section>

    <!-- Experience -->
    <section id="experience">
      <h1>Experience & Achievements</h1>
      <ul>
        <li>Leader – Capstone Project (Gamified Math Learning Web App)</li>
      </ul>
    </section>
      
  </main>

</body>
</html>
