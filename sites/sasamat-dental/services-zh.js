/* Sasamat Dental — Chinese page data (same structure as services.js; main-zh.js renders it). Reviews stay in the patients' original English. */
window.SASAMAT = {
  phone: '(604) 224-3288',
  phoneHref: 'tel:+16042243288',
  emergency: '(778) 709-8886',
  emergencyHref: 'tel:+17787098886',
  email: 'thedentist@telus.net',
  address: '3780 W 10th Ave, Vancouver, BC V6R 2G4',
  mapsUrl: 'https://maps.google.com/?q=Sasamat+Dental,+3780+W+10th+Ave,+Vancouver,+BC+V6R+2G4',
  rating: '4.6',
  reviewCount: 194,

  groups: [
    {
      id: 'everyday',
      name: '日常护理',
      lead: '定期检查、洗牙和各类修复，帮您长久保持口腔健康。',
      items: [
        ['检查与洗牙', '由 Wendy 为您轻柔洗牙，并做口腔检查；发现任何问题，都会用通俗的话向您说明。'],
        ['牙色补牙', '使用与牙齿颜色相配的复合树脂，补过的牙看起来和旁边的牙一样。'],
        ['牙冠与牙桥', '适用于牙齿开裂、大面积补过或缺失的情况。开始前先说明方案和费用。'],
        ['全口与局部假牙', '在诊所内完成试戴和调整。'],
        ['根管治疗', '由谢医生在诊所内完成，开始前先向您说明各种方案。'],
      ],
    },
    {
      id: 'ortho',
      name: '牙齿矫正',
      lead: '为青少年和成人提供传统牙套和 Invisalign 隐形矫正，方案制定和复诊调整都在本诊所完成。',
      items: [
        ['传统牙套', '传统托槽矫正，由谢医生在本诊所调整，不必转诊到别处。'],
        ['Invisalign 隐形矫正', '透明、可摘戴的牙套，适合不希望被人看出在做矫正的患者。'],
        ['如实说明方案', '这是患者评价中提到最多的一点：先摆出两种方案，讲清各自的优缺点，再由您决定。'],
      ],
    },
    {
      id: 'surgery',
      name: '诊所内手术',
      lead: '拔牙和植骨由谢医生在 West 10th 的诊所完成，遇到难处理的情况也不必换地方。',
      items: [
        ['拔智齿', '由谢医生在诊所内评估并拔除，离开前向您说明术后护理。'],
        ['植骨', '在种植牙前或拔牙后重建骨量，在诊所内完成。'],
        ['拔牙', '牙齿确实无法保留时，会轻柔拔除，并和您一起规划下一步。'],
      ],
    },
    {
      id: 'cosmetic',
      name: '美容牙科',
      lead: '牙齿健康之外，还希望牙齿更亮白的患者可以考虑。',
      items: [
        ['Zoom 牙齿美白', 'Philips Zoom 诊室美白，就是我们前台架子上展示的那套系统。'],
        ['瓷贴面', '薄瓷贴面，适用于有缺损、磨耗或变色的门牙。'],
        ['肉毒素美容', '由谢医生在牙科治疗之外提供。'],
      ],
    },
  ],

  team: [
    {
      name: '谢斌医生 Dr. Bin (Sean) Xie',
      role: '牙医 · 牙套、手术、根管治疗',
      langs: '英语 · 普通话',
      photo: 'photos/dr-xie.jpg', w: 302, h: 438,
      bio: '1995 年毕业于哈尔滨医科大学，2014 年起在温哥华担任注册全科牙医。他持续学习新技术并引入诊所，包括根管治疗、拔智齿、植骨、牙套、肉毒素美容和 Zoom 美白。工作之余，他喜欢跑步、滑雪、游泳和骑车。',
    },
    {
      name: 'Dr. Shimae Soheilipour',
      role: '牙医',
      langs: '',
      photo: '', initials: 'SS',
      bio: '患者评价她细致、专业，会一边治疗一边说明正在做什么。',
    },
    {
      name: 'Dr. Shuwen',
      role: '牙医',
      langs: '英语 · 普通话',
      photo: '', initials: 'S',
      bio: '诊所团队的一员。有了这个团队，诊所才能每周七天开门，并用普通话和英语接待患者。',
    },
    {
      name: 'Wendy',
      role: '牙科洁牙师',
      langs: '英语 · 普通话',
      photo: '', initials: 'W',
      bio: '她洗牙轻柔，不少患者因此成了回头客。多条评价都提到了她的名字。',
    },
  ],

  reviews: [
    { name: 'Fereshteh', text: 'The office is incredibly clean and modern. Dr. Shimae Soheilipour is thorough, knowledgeable.' },
    { name: 'Doris', text: 'Dr. Xie offered two options for braces, thoroughly explaining the pros and cons.' },
    { name: 'Eric', text: 'I just had my bone grafting surgery done today. Dr. Xie is incredibly professional and skilled.' },
    { name: 'Stephy', text: "I've been a patient there for over seven years. Dr. Xie is particularly fantastic!" },
    { name: 'Demuremo', text: 'Sasamat Dental has very modern, updated equipment and a great setup.' },
    { name: 'Woody', text: 'Everything was explained clearly and I felt very well taken care of.' },
  ],

  faq: [
    ['周日真的开门吗？', '是的。我们每周七天营业：周一至周六上午 10 点到下午 6 点，周日上午 10 点到下午 5 点。很多患者正是因为周末也能看牙才选择我们。'],
    ['可以说中文吗？', '可以。谢医生和 Dr. Shuwen 都是会说普通话的牙医，洁牙师 Wendy 也会说普通话。预约、咨询和治疗都可以用普通话或英语。'],
    ['现在接受新患者吗？', '接受。请填写本页的预约表格，或致电 (604) 224-3288。第一次就诊请带上身份证件、牙科保险资料和正在服用的药物清单。'],
    ['牙套和 Invisalign 是诊所自己做吗？', '是的。谢医生在本诊所制定方案并调整传统牙套和 Invisalign。咨询时他会向您说明各种方案及其优缺点。'],
    ['拔智齿和手术可以在诊所内做吗？', '可以。拔智齿、拔牙和植骨都由谢医生在 West 10th 的诊所完成，您不用换医生。'],
    ['遇到牙科急症怎么办？', '营业时间内请致电诊所 (604) 224-3288。其他时间请拨打急诊电话 (778) 709-8886。'],
    ['接受牙科保险吗？', '就诊时请带上您的保险资料，前台会在治疗前和您确认保险的报销范围。如果想提前确认，也可以先打电话。'],
    ['诊所在哪里？', '温哥华 Point Grey，3780 West 10th Avenue，门就在 West 10th 街边。可以打开下方地图查看路线。'],
  ],

  hours: [
    ['星期一', '上午 10 点 – 下午 6 点'],
    ['星期二', '上午 10 点 – 下午 6 点'],
    ['星期三', '上午 10 点 – 下午 6 点'],
    ['星期四', '上午 10 点 – 下午 6 点'],
    ['星期五', '上午 10 点 – 下午 6 点'],
    ['星期六', '上午 10 点 – 下午 6 点'],
    ['星期日', '上午 10 点 – 下午 5 点'],
  ],
};
