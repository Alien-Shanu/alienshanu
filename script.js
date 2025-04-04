window.onload = () => {
  document.addEventListener('contextmenu', event => event.preventDefault());
  const myInput = document.getElementById('dummyKeyboard');
  myInput.onpaste = e => e.preventDefault();
 }
const COMMANDS = {
  whoami:
    'Alien Shanu 👽 <img src="./whoami.webp" alt="WebP rules." width="180" height="180">',
  
  help: 'Supported commands: <span class="code">tools 🛠️</span>, <span class="code">files 📁</span>, <span class="code">showme 🖼️</span>, <span class="code">about</span>, <span class="code">experience</span>, <span   class="code">education</span>, <span class="code">skills</span>, <span class="code">acknowledges</span>, <span class="code">certificates</span>, <span class="code">contact</span>, <span class="code">resume</span> , <span class="code1">fun</span> ',

  
  tools: 'Supported commands: <span class="code">hackbar 👨🏻‍💻</span>, <span class="code">shell 🩲</span>, <span class="code">ransomeware 👾</span>, <span class="code">rat 🐁</span>, <span class="code">rainmeter 👨🏻‍💻</span>', 
     hackbar: 'Supported commands: <span class="code">download ⬇️</span>, <span class="code">installation ✅</span>',
     download: "<a href='./HBM Hackbar 2023-v.7.0.1.xpi' class='success link'><img src='./hkbar.png'></a> <a href='./Alien 2020 Red Button Theme.rar' class='success link'><img src='./theme.png'></a>",
     installation:  "<video width='300' height='240' controls><source src='./HBM.mp4' type='video/mp4'></a>",
  
     rainmeter: 'Supported commands: <span class="code">alien_skin ⬇️</span>, <span class="code">skin_install ✅</span>',
     alien_skin: "<a href='./Alien Rain Meter Skin_5.0.zip' class='success link'><img src='./rmtr.png'></a> ",
     skin_install: "<video width='300' height='240' controls><source src='./Rain.mp4' type='video/mp4'></a>",

  files: 'Supported commands: <span class="code">notes 🗒️</span>, <span class="code">hacking videos 🖥️</span>, <span class="code">pdf course 💾</span><span class="code">links 🔗</span>',
  showme: '<img src="./showme.png"> <embed src="./showme.mp3"autostart style="visibility:hidden" type="audio/mpeg"></embed>',
  about: "Hello 👋<br>I'm Alien Shanu 👽. Information Security enthusiast, I do bug bounty hunting, Capture The Flag as a hobby and passion, Highly skilled and certified Ethical Hacker with over 7 years of professional experience in cybersecurity. Adept at identifying system vulnerabilities, firewall evasion, and login bypass. Able to analyze complex information and facilitate understanding among non-technical team members.",
  experience: "No Experience😥",
  education: 'Unknown🤷🏻‍♂️ <img src="./education.webp" alt="WebP rules." width="180" height="180"><embed src="./education.mp3"autostart style="visibility:hidden" type="audio/mpeg"></embed>',
  skills: '<span class="code">Skill:</span>Ethical Hacking, Pentesting, Programming, Bughunting, Graphic Design, 2D Animation, ...<br>',
  acknowledges: "<a href='xxxx' class='success link'>Google Hall of Fame</a> , <a href='xxxx' class='success link'>Nokia HOF</a> , <a href='xxxx' class='success link'>dev.to HOF</a> , <a href='xxxx' class='success link'>Netflix HOF</a> , <a href='xxxx' class='success link'>Pinterest HOF</a> , <a href='xxxx' class='success link'>Philips HOF</a> , <a href='xxxx' class='success link'>Soundcloud HOF</a> , <a class='success link'>many more...</a>  ", 
  certificates: 'Supported commands: <span class="code">CEH</span>, <span class="code">eWPTX</span>,<span class="code">CRTP</span>,<span class="code">APT</span>,<span class="code">NULLCON</span>',
     ceh: "<a href='https://www.alienshanu.me/CEH CERTIFICATE.pdf' class='success link'>CEH</a>",
     ewptx: "<a href='https://www.alienshanu.me/eWPTX.jpg' class='success link'>eWPTX</a>",
     crtp: "<a href='https://www.alienshanu.me/CRTP.jpg' class='success link'>CRTP</a>",
     apt: "<a href='https://www.alienshanu.me/APT.jpg' class='success link'>APT</a>",
     nullcon: "<a href='https://www.alienshanu.me/NULCON.jpg' class='success link'>NULLCON</a>",
  contact: "You can contact me on any of following :<br><a href='https://t.me/Alien_Shanu/' class='success link'><i class='fab fa-telegram icon'></i>Telegram</a>,<a href='https://www.instagram.com/alien_shanu/' class='success link'><i class='fab fa-instagram icon'></i>Instagram</a>,  <a href='https://x.com/Alien_Shanu/' class='success link'><i class='fab fa-x-twitter icon'></i>X</a>,<a href='mailto:mail@blackalien@pm.me' class='success link'><i class='far fa-envelope-open icon'></i>Email</a>, <a href='https://api.whatsapp.com/send?phone=966547818575' class='success link'><i class='fab fa-whatsapp icon'></i>whatsapp</a>",
  resume: '<a href="./resume.pdf" class="success link"><img src="./resume.png"></a> <embed src="./resume.mp3"autostart style="visibility:hidden" type="audio/mpeg"></embed>',
  fun: '<span class="code1"> cry </span>, <span class="code1"> fuck </span>, <span class="code1"> hi </span>,<span class="code1"> whoareyou </span>,<span class="code1"> hello </span>,<span class="code1"> iloveyou </span>,<span class="code1"> willyoumarryme </span>,<span class="code1"> ping </span>, <span class="code1"> sqlmap </span>,<span class="code1"> ls </span>,<span class="code1"> wget </span>,<span class="code1"> md </span>,<span class="code1"> cd </span>,',
     cry: '<img src="./eye.webp" alt="WebP rules." width="180" height="180"><embed src="./scarylaugh.mp3"autostart style="visibility:hidden" type="audio/mpeg"></embed>',
     fuck: '<img src="./fkst.webp" alt="WebP rules." width="180" height="180"><embed src="./fk.mp3"autostart style="visibility:hidden" type="audio/mpeg"></embed>',
  
     hi: '<span class="code2"> Entha Monoose modeyaanoo </span>',
     whoareyou: '<span class="code2"> Ninte kunjammede mon, nthaa maire oru modayano </span> <img src="./whoareyou.webp" alt="WebP rules." width="180" height="180"><embed src="./whoareyou.mp3"autostart style="visibility:hidden" type="audio/mpeg"></embed>',
     hello: '<span class="code2"> Amme dhe oru pichakkaran </span>',
     iloveyou: '<span class="code2"> Ok, Can i kiss you ? </span>',
     willyoumarryme: '<span class="code2"> Why not , am ready to </span> <span class="code1"> fuck </span><img src="./willyoumarryme.webp" alt="WebP rules." width="180" height="180">',
     ping: '<span class="code2"> Hmmm, kurach irunnu plingum nee </span> <img src="./ping.webp" alt="WebP rules." width="180" height="180"> <embed src="./ping.mp3"autostart style="visibility:hidden" type="audio/mpeg"></embed>',
     sqlmap: '<span class="code2"> nthoot mairinaadoo, pornhub hekkanano? </span>',
     ls: '<span class="code2"> Sarithayude List veno  Swapnayude list veno ser </span>',
     wget: '<span class="code2"> Ee linkam kittola monoose, pornhubil onnu nokk chilappol kittum </span>',
     md: '<span class="code2"> oompi MD aanathre </span>',
     cd: '<span class="code2"> Thund CD onnum illadey... </span><img src="./cd.webp" alt="WebP rules." width="180" height="180">',
  
  

  

  
  
  
  
  
  
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
    output = `<div class="terminal-line"><span class="code1">➜</span> <span class="success">Alien</span><span class="directory">@Shanu:$~ </span> ${input}</div>`;
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


