window.onload = () => {
  document.addEventListener('contextmenu', event => event.preventDefault());
  const myInput = document.getElementById('dummyKeyboard');
  myInput.onpaste = e => e.preventDefault();
 }
const COMMANDS = {
  whoami:
    'Black Alien 👽',
  8055:
    'Supported commands: <span class="code">tools 🛠️</span>, <span class="code">files 📁</span>, <span class="code">showme 🖼️</span>',
  tools:'Supported commands: <span class="code">hackbar 👨🏻‍💻</span>, <span class="code">shell 🩲</span>, <span class="code">ransomeware 👾</span>, <span class="code">rat 🐁</span>',
  files:'Supported commands: <span class="code">notes 🗒️</span>, <span class="code">hacking videos 🖥️</span>, <span class="code">pdf course 💾</span><span class="code">links 🔗</span>',
  showme:'<img src="./showme.png">',
  
  hackbar:'Supported commands: <span class="code">download ⬇️</span>, <span class="code">installation ✅</span>',
  download:"<a href='./HBM Hackbar 2020-v.07.1.xpi' class='success link'><img src='./hkbar.png'></a> <a href='./Alien 2020 Red Button Theme.rar' class='success link'><img src='./theme.png'></a>",
  installation:"<video width='150' height='120' controls><source src='./HBM.mp4' type='video/mp4'></a>",
  
  
  cry:'<embed src="./scarylaugh.mp3"autostart style="visibility:hidden" type="audio/mpeg"></embed>',
  fuck:'<img src="./fkst.webp" alt="WebP rules." width="320" height="240"><embed src="./fk.mp3"autostart style="visibility:hidden" type="audio/mpeg"></embed>',
  
  
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">acknowledges</span>, <span class="code">certificates</span>, <span class="code">contact</span>',
  about: "Hello 👋<br>I'm Alien Shanu 👽. Information Security enthusiast, I do bug bounty hunting, Capture The Flag as a hobby and passion",
  skills: '<span class="code">Skill:</span>Ethical Hacking, Pentesting, Programming, Bughunting, Graphic Design, 2D Animation, ...<br>',
  education: "unknown",
  
  certificates: 'Supported commands: <span class="code">CEH</span>, <span class="code">eWPTX</span>,<span class="code">CRTP</span>,<span class="code">APT</span>,<span class="code">NULLCON</span>',

  ceh: "<a href='https://www.alienshanu.me/CEH.jpg' class='success link'>CEH</a>",

  ewptx: "<a href='https://www.alienshanu.me/eWPTX.jpg' class='success link'>eWPTX</a>",

  crtp: "<a href='https://www.alienshanu.me/CRTP.jpg' class='success link'>CRTP</a>",

  apt: "<a href='https://www.alienshanu.me/APT.jpg' class='success link'>APT</a>",

  nullcon: "<a href='https://www.alienshanu.me/NULCON.jpg' class='success link'>NULLCON</a>",
  
  
  
  
  
  resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experience: "No Experience😥",
  acknowledges: "<a href='xxxx' class='success link'>Google Hall of Fame</a> , <a href='xxxx' class='success link'>Nokia HOF</a> , <a href='xxxx' class='success link'>dev.to HOF</a> , <a href='xxxx' class='success link'>Netflix HOF</a> , <a href='xxxx' class='success link'>Pinterest HOF</a> , <a href='xxxx' class='success link'>Philips HOF</a> , <a href='xxxx' class='success link'>Soundcloud HOF</a> , <a class='success link'>many more...</a>  ", 
  contact: "You can contact me on any of following :<br><a href='https://t.me/Alien_Shanu/' class='success link'><i class='fab fa-telegram icon'></i>Telegram</a>,<a href='https://www.instagram.com/alien_shanu/' class='success link'><i class='fab fa-instagram icon'></i>Instagram</a>,  <a href='https://www.twitter.com/Alien_Shanu/' class='success link'><i class='fab fa-twitter icon'></i>Twitter</a>, <a href='mailto:mail@blackalien@pm.me' class='success link'><i class='far fa-envelope-open icon'></i>Email</a>, <a href='https://api.whatsapp.com/send?phone=+966547818575' class='success link'><i class='fab fa-whatsapp icon'></i>whatsapp</a>",
 
};

const  userInput = document.getElementById("userInput");
const  terminalOutput = document.getElementById("terminalOutput");
const  inputfield = document.getElementById("dummyKeyboard");

inputfield.addEventListener('keypress', (e) =>{
  if (e.key === "Enter") {
    let input = e.target.value;
    input = input.toLowerCase();
    if (input.length === 0) {
      return;
    }
    let output;
    output = `<div class="terminal-line"><span class="code1">➜</span> <span class="success">Alien</span><span class="directory">@Shanu:~$</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
      output += `<div class="terminal-line">no such command: ${input}</div>`;
      console.log("Oops! no such command");
    } else {
      output += COMMANDS[input];
    };
    terminalOutput.innerHTML = `${
      terminalOutput.innerHTML
    }<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight; 
    e.target.value = ""
 
  };
});


