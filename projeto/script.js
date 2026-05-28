
    const PHONE = '31987076324';

    const products = [
      { code: '100601', name: 'Anel solitario prata', price: 'R$ 175,00', cat: 'Anel', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/7060_1710532709_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/7060_1710532709.jpg' },
      { code: '100612', name: 'Anel bifurcado 3 pedras', price: 'R$ 91,50', cat: 'Anel', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/7199_1712069714_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/7199_1712069714.jpg' },
      { code: '100615', name: 'Anel 1 pedra retangular 8 pedras', price: 'R$ 105,00', cat: 'Anel', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/7202_1712069746_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/7202_1712069746.jpg' },
      { code: '100873', name: 'Anel coracao liso vazado banho de prata', price: 'R$ 118,00', cat: 'Anel', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10427_1759953091_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10427_1759953091.jpg' },
      { code: '100885', name: 'Anel solitario dna 1 pedra', price: 'R$ 79,90', cat: 'Anel', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10586_1762977490_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10586_1762977490.jpg' },
      { code: '100895', name: 'Anel gota vazada banho de prata', price: 'R$ 79,90', cat: 'Anel', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10594_1763123448_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10594_1763123448.jpg' },
      { code: '100966', name: 'Anel solitario de prata', price: 'R$ 156,90', cat: 'Anel', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10897_1763993679_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10897_1763993679.jpg' },
      { code: '100988', name: 'Anel solitario 1 pedra corrente', price: 'R$ 139,90', cat: 'Anel', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/11135_1765994953_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/11135_1765994953.jpeg' },
      { code: '11004201', name: 'Choker 25 pedras 2.5g', price: 'R$ 169,90', cat: 'Choker', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/11353_1773240667_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/11353_1773240667.jpeg' },
      { code: '110061', name: 'Chocker 15 circulos 2.8g', price: 'R$ 139,00', cat: 'Choker', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/2371_1764184157_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/2371_1764184157.jpg' },
      { code: '11007210', name: 'Choker fita 3.3g', price: 'R$ 169,00', cat: 'Choker', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/9616_1751124455_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/9616_1751124455.jpeg' },
      { code: '11011004', name: 'Choker dna 3.4g', price: 'R$ 129,90', cat: 'Choker', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/9730_1751398757_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/9730_1751398757.jpg' },
      { code: '110354', name: 'Choker 11 bolinhas banho de prata 2.3g', price: 'R$ 98,90', cat: 'Choker', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/9963_1752152028_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/9963_1752152028.jpg' },
      { code: '120793', name: 'Gargantilha 2 coracoes 2.6g', price: 'R$ 109,90', cat: 'Gargantilha', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/9753_1751463037_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/9753_1751463037.jpg' },
      { code: '120814', name: 'Gargantilha estrela lisa', price: 'R$ 98,90', cat: 'Gargantilha', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10138_1755350594_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10138_1755350594.jpg' },
      { code: '200622', name: 'Argola lisa', price: 'R$ 45,90', cat: 'Argola', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/4922_1679928373.jpg', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/4922_1679928373.jpg' },
      { code: '200653', name: 'Argola lisa', price: 'R$ 39,90', cat: 'Argola', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/5313_1773766054_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/5313_1773766054.jpeg' },
      { code: '201006', name: 'Argola cruzada chapada', price: 'R$ 72,00', cat: 'Argola', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/8032_1724855186_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/8032_1724855186.jpg' },
      { code: '201173', name: 'Argola trancada duas texturas', price: 'R$ 58,90', cat: 'Argola', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/9520_1751045593_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/9520_1751045593.jpeg' },
      { code: '201230', name: 'Argola 1 pedra losango gancho banho de prata', price: 'R$ 58,90', cat: 'Argola', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10102_1753896017_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10102_1753896017.jpg' },
      { code: '201248', name: 'Argola lisa banho de prata', price: 'R$ 49,90', cat: 'Argola', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10120_1754495677_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10120_1754495677.jpg' },
      { code: '201260', name: 'Argola lisa retangulo arredondado', price: 'R$ 95,90', cat: 'Argola', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10308_1756821945_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10308_1756821945.jpg' },
      { code: '201310', name: 'Argola gancho 1 pedra no meio', price: 'R$ 69,90', cat: 'Argola', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10794_1763738371_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10794_1763738371.jpg' },
      { code: '201369', name: 'Argola 3 carreiras 8 pedras', price: 'R$ 87,90', cat: 'Argola', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/11206_1769011326_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/11206_1769011326.jpeg' },
      { code: '201370', name: 'Argola U 1 carreira 4 pedras', price: 'R$ 75,90', cat: 'Argola', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/11207_1769011924_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/11207_1769011924.jpeg' },
      { code: '301608', name: 'Brinco flor pedraria', price: 'R$ 45,00', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/6971_1707401503_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/6971_1707401503.jpg' },
      { code: '301652', name: 'Brinco retangular com pedraria', price: 'R$ 44,90', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/7145_1769539578_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/7145_1769539578.jpeg' },
      { code: '301690', name: 'Brinco 2 quadrados', price: 'R$ 58,50', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/7309_1713814399_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/7309_1713814399.jpg' },
      { code: '301769', name: 'Brinco coracao mine', price: 'R$ 38,00', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/7751_1721767102_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/7751_1721767102.jpeg' },
      { code: '301860', name: 'Brinco folha cravejada', price: 'R$ 42,00', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/8066_1726491619_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/8066_1726491619.jpg' },
      { code: '30194602', name: 'Brinco prata pedra 4mm', price: 'R$ 38,00', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/8396_1730321084_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/8396_1730321084.jpg' },
      { code: '301966', name: 'Brinco flor 1 pedra', price: 'R$ 55,00', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/8483_1730919363_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/8483_1730919363.jpg' },
      { code: '302092', name: 'Brinco pedraria redonda', price: 'R$ 55,00', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/8758_1733320053_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/8758_1733320053.jpg' },
      { code: '302218', name: 'Brinco coracao arvore pedraria', price: 'R$ 48,90', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/9217_1743190164_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/9217_1743190164.jpg' },
      { code: '302257', name: 'Brinco trevo virginia 2 banhos removivel', price: 'R$ 55,00', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/9456_1750866068_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/9456_1750866068.jpg' },
      { code: '302314', name: 'Brinco borboleta grande borda fosca', price: 'R$ 67,90', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/9689_1751378573_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/9689_1751378573.jpg' },
      { code: '302327', name: 'Brinco coracao 2 faixa texturizado', price: 'R$ 29,90', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/9793_1751550839_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/9793_1751550838.jpg' },
      { code: '302432', name: 'Brinco bola fosca P vazada banho de prata', price: 'R$ 28,00', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10225_1756138143_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10225_1756138143.jpg' },
      { code: '302438', name: 'Brinco oval riscado banho de prata', price: 'R$ 38,90', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10231_1756216472_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10231_1756216472.jpg' },
      { code: '302461', name: 'Brinco haste 1 pedra banho de prata', price: 'R$ 55,90', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10255_1756226683_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10255_1756226683.jpg' },
      { code: '302476', name: 'Brinco coracao pedraria banho de prata', price: 'R$ 74,90', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10270_1756237348_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10270_1756237348.jpg' },
      { code: '302509', name: 'Brinco gota pedraria', price: 'R$ 47,90', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10514_1761746378_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10514_1761746378.jpg' },
      { code: '302556', name: 'Brinco folhas perola gota', price: 'R$ 57,90', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/11073_1765201392_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/11073_1765201392.jpg' },
      { code: '302638', name: 'Brinco ramo pedraria', price: 'R$ 42,50', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/11381_1774905008_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/11381_1774905008.jpeg' },
      { code: '302642', name: 'Brinco 2 elipses 1 trevo pendente', price: 'R$ 48,90', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/11385_1774964470_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/11385_1774964470.jpeg' },
      { code: '302644', name: 'Brinco EarCuff 9 pedras', price: 'R$ 55,00', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/11387_1774964491_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/11387_1774964491.jpeg' },
      { code: '302647', name: 'Brinco EarCuff 5 pedras', price: 'R$ 55,90', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/11398_1774973005_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/11398_1774973005.jpeg' },
      { code: '302649', name: 'Brinco 4 coracoes 6 pedras', price: 'R$ 38,90', cat: 'Brinco', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/11400_1774973387_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/11400_1774973387.jpeg' },
      { code: '400342', name: 'Conjunto prata cores diversas', price: 'R$ 298,00', cat: 'Conjunto', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/8457_1730815487_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/8457_1730815487.jpg' },
      { code: '400453', name: 'Conjunto gota pedraria', price: 'R$ 149,90', cat: 'Conjunto', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/11098_1765398460_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/11098_1765398460.jpeg' },
      { code: '50000107', name: 'Corrente veneziana 2.3g 50cm c/ extensor', price: 'R$ 79,90', cat: 'Corrente', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/2592_1688064544_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/2592_1688064544.jpg' },
      { code: '600555', name: 'Pingente gota madreperola 0.7g', price: 'R$ 32,00', cat: 'Pingente', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/7730_1721478682_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/7730_1721478682.jpeg' },
      { code: '600559', name: 'Pingente perola entrelacada 0.6g', price: 'R$ 38,00', cat: 'Pingente', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/7734_1721478746_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/7734_1721478746.jpeg' },
      { code: '600623', name: 'Pingente menino 8 pedras', price: 'R$ 58,00', cat: 'Pingente', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/9528_1751048605_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/9528_1751048605.jpg' },
      { code: '600624', name: 'Pingente menina 8 pedras', price: 'R$ 58,00', cat: 'Pingente', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/9529_1751048630_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/9529_1751048630.jpg' },
      { code: '600702', name: 'Pingente coracao vazado 5 pedras', price: 'R$ 63,90', cat: 'Pingente', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/11403_1774987899_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/11403_1774987899.jpeg' },
      { code: '70033604', name: 'Pulseira 5 bolas lisas 2.1g', price: 'R$ 98,90', cat: 'Pulseira', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/11390_1774966448_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/11390_1774966448.jpeg' },
      { code: '70077101', name: 'Pulseira circulos 1.7g', price: 'R$ 69,90', cat: 'Pulseira', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10969_1764174904_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10969_1764174904.jpg' },
      { code: '701051', name: 'Pulseira ping. borboleta e estrela 6 bolas 2g', price: 'R$ 110,90', cat: 'Pulseira', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/9690_1751378750_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/9690_1751378750.jpg' },
      { code: '701134', name: 'Pulseira 14 estrelas banho de prata 1.9g', price: 'R$ 97,90', cat: 'Pulseira', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10061_1753714613_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10061_1753714613.jpg' },
      { code: '701183', name: 'Pulseira 7 rosas 7 pedras pretas 1.8g', price: 'R$ 86,90', cat: 'Pulseira', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10663_1763152212_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10663_1763152212.jpg' },
      { code: '701200', name: 'Pulseira 15 coracoes chapados banho de prata', price: 'R$ 84,90', cat: 'Pulseira', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10731_1763562513_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10731_1763562513.jpg' },
      { code: '701225', name: 'Pulseira haste arredondada banho de prata 1.9g', price: 'R$ 89,90', cat: 'Pulseira', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/10831_1763748266_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/10831_1763748266.jpg' },
      { code: '701277', name: 'Pulseira 14 cilindros 2.1g', price: 'R$ 72,90', cat: 'Pulseira', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/11148_1766005207_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/11148_1766005207.jpeg' },
      { code: '800186', name: 'Tornozeleira 7 coracoes liso e com pedra 2.6g', price: 'R$ 76,90', cat: 'Tornozeleira', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/9147_1742841844_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/9147_1742841844.jpg' },
      { code: '800187', name: 'Tornozeleira elos 1 pedra 1.9g', price: 'R$ 62,90', cat: 'Tornozeleira', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/9192_1743169516_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/9192_1743169516.jpg' },
      { code: '900143', name: 'Trio argola lisa firme', price: 'R$ 148,90', cat: 'Trio', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/5864_1692632088_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/5864_1692632088.jpg' },
      { code: '900262', name: 'Trio ovais lisa e pedraria', price: 'R$ 84,90', cat: 'Trio', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/9457_1750866021_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/9457_1750866021.jpg' },
      { code: '900264', name: 'Trio coracao', price: 'R$ 62,90', cat: 'Trio', img: 'https://mks.fbfsolutions.com.br/fotosProdutos/9465_1750869022_thumb.png', full: 'https://mks.fbfsolutions.com.br/fotosProdutos/9465_1750869022.jpg' },
    ];

    let currentFilter = 'all';

    function buildWhatsAppLink(product) {
      const msg = encodeURIComponent(`Olá! Tudo Bem?  Gostei deste produto: Cód.: ${product.code} Ele esta disponível?`);
      return `https://api.whatsapp.com/send?phone=${PHONE}&text=${msg}`;
    }

    function renderGrid(filter) {
      const grid = document.getElementById('grid');
      const countLabel = document.getElementById('count-label');
      const filtered = filter === 'all' ? products : products.filter(p => p.cat === filter);

      countLabel.textContent = `${filtered.length} ${filtered.length === 1 ? 'peça' : 'peças'}`;

      if (filtered.length === 0) {
        grid.innerHTML = '<div class="no-results">Nenhuma peça encontrada nesta categoria.</div>';
        return;
      }

      grid.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="openModal('${p.code}')">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.parentElement.style.background='#EDE8E0'">
        <div class="product-overlay">
        </div>
        <div class="product-category-badge">${p.cat}</div>
      </div>
      <div class="product-info">
        <div class="product-code">Cód. ${p.code}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price">${p.price}</div>
      </div>
    </div>
  `).join('');
    }

    function filterBy(cat) {
      currentFilter = cat;
      document.querySelectorAll('.cat-pill').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === cat);
      });
      renderGrid(cat);
      document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
    }

    document.querySelectorAll('.cat-pill').forEach(btn => {
      btn.addEventListener('click', () => filterBy(btn.dataset.filter));
    });

    function openModal(code) {
      const p = products.find(x => x.code === code);
      if (!p) return;
      document.getElementById('modal-img').src = p.full;
      document.getElementById('modal-img').alt = p.name;
      document.getElementById('modal-cat').textContent = p.cat;
      document.getElementById('modal-name').textContent = p.name;
      document.getElementById('modal-code').textContent = 'Código: ' + p.code;
      document.getElementById('modal-price').textContent = p.price;
      document.getElementById('modal-buy').href = buildWhatsAppLink(p);
      document.getElementById('modal-bg').classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeModal(e) {
      if (e.target === document.getElementById('modal-bg')) closeModalDirect();
    }
    function closeModalDirect() {
      document.getElementById('modal-bg').classList.remove('open');
      document.body.style.overflow = '';
    }

    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalDirect(); });

    renderGrid('all');
 