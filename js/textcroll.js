  var binft = function (r) {
    function t() {
      return b[Math.floor(Math.random() * b.length)]
    }  
    function e() {
      return String.fromCharCode(94 * Math.random() + 33)
    }
    function n(r) {
      for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
        var l = document.createElement("span");
        l.textContent = e(), l.style.color = t(), n.appendChild(l)
      }
      return n
    }
    function i() {
      var t = o[c.skillI];
      c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))), setTimeout(i, d)
    }
    var l = "",
    o = ["懒惰是很奇怪的东西，它使你以为那是安逸，是休息，是福气；", "但实际上它所给你的是无聊，是倦怠，是消沉；","它剥夺你对前途的希望，割断你和别人之间的友情，使你心胸日渐狭窄，对人生也越来越怀疑。", "脚步的坚实，不在于穿多重的鞋，而是看是否经历过陡峭；","内心的强大，不在于心里想的多，而是看是否经历过波折；","梦想的实现，不在于有多少收获，而是看如何击败了重重困难，最终得到好的结果。","不要因为没有阳光，而走不进春天不要因为没有歌声，而放弃自己的追求不要因为没有掌声，而丢掉自己的理想。","其实每一条都通往阳光的大道，都充满坎坷每一条通向理想的途径，都充满了艰辛与汗水！"].map(function (r) {
    return r + ""
    }),
    a = 2,
    g = 1,
    s = 5,
    d = 75,
    b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"],
    c = {
      text: "",
      prefixP: -s,
      skillI: 0,
      skillP: 0,
      direction: "forward",
      delay: a,
      step: g
    };
    i()
    };
    binft(document.getElementById('binft'));