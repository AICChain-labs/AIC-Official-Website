

export type Language = 'en' | 'zh' | 'ar';

export const translations = {
  en: {
    nav: {
      vision: 'Vision',
      architecture: 'Architecture',
      narrative: 'Narrative',
      tokenomics: 'Tokenomics',
      ecosystem: 'Ecosystem',
      whitepaper: 'Docs',
      ecoLinks: {
        swap: 'AIC Swap',
        bridge: 'Cross-Chain Bridge',
        scan: 'BlockChain Scan',
        faucet: 'Testnet Faucet',
        devHub: 'Developer Hub',
        github: 'GitHub',
      },
    },
    hero: {
      tagline: 'Infrastructure Layer 1',
      title1: 'Energy RWA meets',
      title2: 'Sovereign AI Compute',
      subtitle: 'The world\'s first L1 public chain designed specifically for high-frequency RWA trading and AI compute trading.',
      cta_primary: 'Developer Hub',
      cta_secondary: 'Explore Ecosystem',
    },
    vision: {
      title: 'Global Vision',
      subtitle: "AIC is not just a blockchain; it is the fundamental highway connecting the physical world's 'Black Gold' to the digital economy.",
      cards: {
        capital: {
          title: 'Sovereign Capital Backing',
          desc: "Co-launched by Abu Dhabi's top sovereign funds and the world's largest hedge funds to build a financial-grade settlement layer.",
        },
        rwa: {
          title: 'High-Frequency RWA',
          desc: "Solving congestion, high fees, and privacy issues to enable real-time energy spot and futures delivery.",
        },
        ai: {
          title: 'AI Compute Trading',
          desc: "A dedicated ledger designed for the settlement of AI computing power and large-scale physical assets.",
        },
      },
    },
    arch: {
      title: 'Technical Architecture',
      subtitle: 'Independent high-performance Layer 1 with proprietary modular architecture.',
      consensus: {
        title: 'Core Consensus: AI-DPoS',
        desc: 'AI-driven node scoring and load balancing ensuring zero downtime under transaction floods.',
        feat1: 'Intelligent Node Scheduling',
        feat2: 'Instant Finality',
      },
      traffic: {
        title: 'Traffic & Compute Engine',
        desc: 'Designed for infinite scalability to support AI model training and massive RWA data streams.',
        feat1: 'Negligible Gas Fees',
        feat2: '100% EVM Compatible',
        compute_title: 'AI Compute Layer',
        feat3: 'GPU RWA Tokenization',
        feat3_desc: 'On-chain confirmation and fragmentation of H100 clusters.',
        feat4: 'Spot Compute Trading',
        feat4_desc: 'Decentralized matching market for AI inference.',
        feat5: 'AI Model Training',
        feat5_desc: 'Utilize compute clusters & RWA data for model training to maximize yields.',
      },
      rwa: {
        title: 'Native RWA Protocol Stack',
        feat1_title: 'Asset Confirmation Layer',
        feat1_desc: 'Built-in protocols for oil, gas, and carbon credit issuance.',
        feat2_title: 'Compliance Interface',
        feat2_desc: 'Built-in programmable KYC/AML interfaces.',
      },
    },
    narrative: {
      title: 'Dual-Engine Narrative',
      subtitle: 'Unbreakable value moat built on Real-World Assets (RWA) and AI Compute.',
      engine1: {
        title: 'Energy RWA Anchoring',
        desc: 'Every token is backed by Abu Dhabi\'s massive oil industry chain.',
        sub1: 'On-chain Digital Twin',
        sub1_desc: 'Real-time mapping of offline reserves, extraction, and logistics.',
        sub2: 'Asset Credit Endorsement',
        sub2_desc: 'Proof of Reserves provided by real energy trading profits.',
      },
      engine2: {
        title: 'AI Compute Trading Empowerment',
        desc: "Embedding the world's first AI compute asset RWA platform.",
        sub1: 'AI Alpha Quant Strategy',
        sub1_desc: 'Deep learning monitors crude oil futures arbitrage, optimizing logic to maximize profits.',
        sub2: 'Compute as Equity',
        sub2_desc: 'Excess AI returns distributed to node contributors.',
      },
    },
    token: {
      title: 'Dual-Tokenomics',
      subtitle: 'Internal economic loop: Governance Asset (AIC) + Algorithmic Stable Asset (USDI).',
      aic: {
        label: 'Native Token',
        desc: 'Value carrier and fuel. Ultimate deflationary model.',
        utility: 'Gas • Staking • DAO Governance',
        dist: '80% Mining Output',
      },
      usdi: {
        title: 'USDI Stablecoin',
        desc: 'Universal circulation medium connecting fiat and on-chain worlds.',
        peg: 'Peg 1:1 USDT',
        backing: 'Oil Pool + AI Compute Assets + Asset Merkle Tree',
        excess: 'Excess Reserves',
      },
      burn: {
        title: 'Burn-to-Earn',
        desc: 'Burn USDI to mine AIC.',
        detail: 'Eliminates inflation bubbles and provides strong buy support for AIC.',
      },
    },
    eco: {
      title: 'Open Ecosystem',
      subtitle: 'A borderless open energy financial ecosystem.',
      c1: { title: 'Energy DeFi', desc: 'Lending protocols & synthetic asset trading based on crude oil assets.' },
      c2: { title: 'RWA Spot Delivery', desc: 'Direct on-chain delivery and Bill of Lading transfer for energy commodities.' },
      c3: { title: 'Cross-Chain Interoperability', desc: 'Native bridges connecting to Web3 liquidity pools.' },
      c4: { title: 'AI Compute Leasing', desc: 'Rent high-performance GPU clusters via RWA for AI model training.' },
    },
    footer: {
      rights: 'All rights reserved.',
      docs: 'Docs',
      explorer: 'Explorer',
      github: 'GitHub',
      twitter: 'Twitter',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    legal: {
      privacy: {
        title: 'Privacy Policy',
        lastUpdated: 'Last Updated: February 2026',
        sections: [
          {
            heading: '1. The Public Ledger (No Privacy on Chain)',
            body: 'AIC is a public, decentralized Layer 1 blockchain. Please be aware that ALL transactions executed on the AIC network are permanently recorded on a public ledger. Information such as your wallet address, transaction amount, token holdings, and smart contract interactions are visible to anyone in the world. This data cannot be hidden, encrypted, or removed by the Foundation.'
          },
          {
            heading: '2. Immutability & Data Deletion',
            body: 'Due to the immutable nature of blockchain technology, once data is written to the AIC blockchain, it cannot be altered or deleted. We cannot comply with requests to delete data ("Right to be Forgotten") regarding on-chain transactions, as doing so is technically impossible without compromising the integrity of the entire global network.'
          },
          {
            heading: '3. Personal Data & KYC',
            body: 'The AIC Protocol itself does not collect personal names, addresses, or phone numbers. However, specific RWA (Real World Asset) issuers or dApps built on AIC may require Know Your Customer (KYC) compliance. In these cases, your personal data is collected by the third-party issuer or provider, not the AIC Foundation. We recommend reviewing the privacy policies of any third-party services you interact with.'
          },
          {
            heading: '4. Pseudonymity',
            body: 'Your usage of the blockchain is pseudonymous, linked only to your wallet address. However, if you voluntarily publish your wallet address in connection with your real identity on social media or other platforms, your transaction history can be linked to you. You are responsible for maintaining your own privacy.'
          },
          {
            heading: '5. Node Operators & Decentralization',
            body: 'The AIC network is composed of independent validator nodes distributed globally. When you broadcast a transaction, your IP address and transaction data may be visible to these nodes to process the request. The Foundation does not control these independent nodes.'
          }
        ]
      },
      terms: {
        title: 'Terms of Service',
        lastUpdated: 'Last Updated: February 2026',
        intro: 'IMPORTANT: AIC is a decentralized, permissionless public blockchain (Layer 1). The Foundation provides open-source software but does not control the network. Please read these terms carefully.',
        sections: [
          {
            heading: '1. Acceptance of Terms',
            body: 'By accessing or using the AIC network, nodes, or related services, you agree to be bound by these Terms. If you disagree with any part of the terms, you must not access the Service.'
          },
          {
            heading: '2. Decentralized Nature of the Service',
            body: 'AIC is a decentralized public blockchain. The "Service" primarily consists of open-source software that enables you to interact with the AIC network. The Foundation, developers, and contributors DO NOT control the network, DO NOT validate transactions (except as independent validators), and DO NOT have the power to reverse transactions or recover funds.'
          },
          {
            heading: '3. No Custody / Non-Custodial',
            body: 'AIC is a non-custodial protocol. We do not hold, store, or have access to your private keys or assets. You are solely responsible for the custody of your cryptographic keys. If you lose your keys, you lose access to your funds permanently. We cannot help you recover them.'
          },
          {
            heading: '4. Smart Contracts & RWA Risks',
            body: 'You acknowledge that smart contracts are experimental technology. While AIC facilitates RWA (Real World Assets) tokenization, the digital token is merely a representation. The Foundation is not responsible for the physical existence, condition, or custody of the underlying real-world assets managed by third-party issuers.'
          },
          {
            heading: '5. Limitation of Liability',
            body: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE FOUNDATION, DEVELOPERS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF THE DECENTRALIZED NETWORK; (B) ANY BUGS, VIRUSES, OR TROJAN HORSES; (C) ANY UNAUTHORIZED ACCESS TO YOUR WALLET.'
          },
          {
            heading: '6. No Financial Advice',
            body: 'Nothing on the AIC website or in the Docs constitutes financial, investment, or legal advice. You are responsible for your own investment decisions and compliance with local laws.'
          }
        ]
      }
    }
  },
  zh: {
    nav: {
      vision: '愿景',
      architecture: '技术架构',
      narrative: '核心叙事',
      tokenomics: '经济模型',
      ecosystem: '生态系统',
      whitepaper: 'Docs',
      ecoLinks: {
        swap: 'AIC Swap',
        bridge: '跨链桥',
        scan: '区块链浏览器',
        faucet: '测试网水龙头',
        devHub: '开发者中心',
        github: 'GitHub',
      },
    },
    hero: {
      tagline: '基础设施 Layer 1',
      title1: '能源 RWA 遇见',
      title2: '算力主权 AI',
      subtitle: '全球首个专为高频 RWA 交易与 AI 算力交易设计的L1 公有链。',
      cta_primary: '开发者中心',
      cta_secondary: '探索生态',
    },
    vision: {
      title: '宏观愿景',
      subtitle: 'AIC 不仅仅是一条区块链，它是物理世界“能源黑金”通往数字经济的底层高速公路。',
      cards: {
        capital: {
          title: '主权资本背书',
          desc: '由阿布扎比顶级主权资本联合发起，打造金融级结算层。',
        },
        rwa: {
          title: '高频 RWA',
          desc: '解决传统公链拥堵与高费率问题，实现能源现货即时交割。',
        },
        ai: {
          title: 'AI 算力交易',
          desc: '专为 AI 算力与大规模实物资产结算设计的专用账本。',
        },
      },
    },
    arch: {
      title: '技术架构',
      subtitle: '自主研发的模块化 Layer 1，具备金融级安全性。',
      consensus: {
        title: '核心共识：AI-DPoS',
        desc: 'AI 驱动的节点评分，确保交易洪峰下零宕机。',
        feat1: '智能节点调度',
        feat2: '秒级最终性',
      },
      traffic: {
        title: '流量与算力引擎',
        desc: '专为无限扩展性设计，支撑 AI 模型训练与 RWA 数据流。',
        feat1: '极低 Gas 费',
        feat2: '100% 兼容 EVM',
        compute_title: 'AI 算力层',
        feat3: 'GPU RWA 资产化',
        feat3_desc: 'H100/A100 计算集群的链上确权与碎片化。',
        feat4: '算力现货交易',
        feat4_desc: '去中心化的 AI 推理算力撮合市场。',
        feat5: 'AI 模型训练',
        feat5_desc: '使用 AI 算力集群与 RWA 交易数据进行模型训练，取得更大收益。',
      },
      rwa: {
        title: '原生 RWA 协议栈',
        feat1_title: '资产确权层',
        feat1_desc: '内置原油、碳信用额度发行协议。',
        feat2_title: '合规监管接口',
        feat2_desc: '内置 KYC/AML 可编程接口。',
      },
    },
    narrative: {
      title: '双引擎叙事',
      subtitle: '构建 RWA 实物资产与 AI 算力的价值护城河。',
      engine1: {
        title: '能源资产锚定',
        desc: '每一枚通证背后都有阿布扎比庞大的石油产业链支撑。',
        sub1: '链上数字孪生',
        sub1_desc: '线下储备实时映射至链上。',
        sub2: '资产信用背书',
        sub2_desc: '能源交易利润提供偿付证明。',
      },
      engine2: {
        title: 'AI 算力交易赋能',
        desc: '内嵌全球首个AI算力资产RWA平台',
        sub1: 'AI Alpha 量化策略',
        sub1_desc: '深度学习监控原油期货套利，优化套利逻辑，获取更大利润。',
        sub2: '算力即权益',
        sub2_desc: 'RWA 超额算力收益自动分配给节点贡献者。',
      },
    },
    token: {
      title: '双通证模型',
      subtitle: '内循环经济闭环：治理资产 (AIC) + 稳定资产 (USDI)。',
      aic: {
        label: '原生代币',
        desc: '公链价值载体与燃料。极致通缩模型。',
        utility: 'Gas • 节点质押 • DAO 治理',
        dist: '80% 节点挖矿产出',
      },
      usdi: {
        title: 'USDI 稳定币',
        desc: '生态通用流通介质。',
        peg: '1:1 锚定 USDT',
        backing: '原油池 + AI 算力资产 + 资产 Merkle Tree',
        excess: '超额储备金',
      },
      burn: {
        title: '销毁即挖掘',
        desc: '销毁 USDI 挖掘 AIC。',
        detail: '消除通胀泡沫，提供买盘支撑。',
      },
    },
    eco: {
      title: '开放生态',
      subtitle: '构建无边界的开放式能源金融生态。',
      c1: { title: '能源 DeFi', desc: '基于原油资产的借贷与合成资产交易。' },
      c2: { title: 'RWA 现货交割', desc: '小额原油、天然气的链上交割与提单流转。' },
      c3: { title: '跨链互操作性', desc: '原生跨链桥，连接 Web3 资金池。' },
      c4: { title: 'AI 算力租赁', desc: '通过 RWA 租赁高性能 GPU 集群用于 AI 模型训练。' },
    },
    footer: {
      rights: '版权所有。',
      docs: 'Docs',
      explorer: '区块浏览器',
      github: 'GitHub',
      twitter: 'Twitter',
      privacy: '隐私政策',
      terms: '服务条款'
    },
    legal: {
      privacy: {
        title: '隐私政策',
        lastUpdated: '最后更新：2026年2月',
        sections: [
          {
            heading: '1. 公共账本 (链上无隐私)',
            body: 'AIC 是一个公开、去中心化的 Layer 1 区块链。请注意，在 AIC 网络上执行的所有交易都将被永久记录在公共账本上。您的钱包地址、交易金额、代币持有量和智能合约交互等信息对全球任何人可见。这些数据无法被基金会隐藏、加密或移除。'
          },
          {
            heading: '2. 不可篡改性与数据删除',
            body: '由于区块链技术的不可篡改特性，一旦数据写入 AIC 区块链，就无法更改或删除。对于链上交易数据，我们无法遵守删除数据（“被遗忘权”）的请求，因为在技术上这样做会破坏整个全球网络的完整性。'
          },
          {
            heading: '3. 个人数据与 KYC',
            body: 'AIC 协议本身不收集个人姓名、地址或电话号码。但是，AIC 上特定的 RWA（现实世界资产）发行方或 dApp 可能需要 KYC（了解您的客户）合规。在这种情况下，您的个人数据由第三方发行方或提供商收集，而不是 AIC 基金会。我们建议您阅读您交互的任何第三方服务的隐私政策。'
          },
          {
            heading: '4. 假名性',
            body: '您对区块链的使用是假名的，仅与您的钱包地址相关联。但是，如果您在社交媒体或其他平台上自愿将您的钱包地址与您的真实身份相关联，您的交易历史可能会与您关联。您有责任维护自己的隐私。'
          },
          {
            heading: '5. 节点运营商与去中心化',
            body: 'AIC 网络由分布在全球的独立验证节点组成。当您广播交易时，您的 IP 地址和交易数据可能会对此类节点可见以处理请求。基金会不控制这些独立节点。'
          }
        ]
      },
      terms: {
        title: '服务条款',
        lastUpdated: '最后更新：2026年2月',
        intro: '重要提示：AIC 是一个去中心化、无许可的公有链（Layer 1）。基金会仅提供开源软件，并不控制网络。使用本服务即表示您已阅读并接受本公有链免责声明。',
        sections: [
          {
            heading: '1. 条款接受',
            body: '通过访问或使用 AIC 网络、节点或相关服务，您同意受这些条款的约束。如果您不同意条款的任何部分，则您不得访问本服务。'
          },
          {
            heading: '2. 服务的去中心化性质',
            body: 'AIC 是一个去中心化的公有链网络。“服务”主要指使您能够与 AIC 网络交互的开源软件。基金会、开发人员和贡献者不控制网络运行，不验证交易（除非作为独立的验证者），并且没有权力撤销交易或恢复资金。网络由全球独立的验证节点共同维护。'
          },
          {
            heading: '3. 非托管性质 (Non-Custodial)',
            body: 'AIC 是非托管协议。我们不持有、存储或访问您的私钥或资产。您对您的加密密钥的保管承担全部责任。如果您丢失了私钥，您将永久失去对资金的访问权限。我们无法帮助您找回它们。'
          },
          {
            heading: '4. 智能合约与 RWA 风险',
            body: '您承认智能合约属于实验性技术，可能存在漏洞。虽然 AIC 促进了 RWA（现实世界资产）的代币化，但链上代币仅代表数字权益。基金会不对由第三方发行商管理的底层实物资产的物理存在、状况或保管负责。'
          },
          {
            heading: '5. 责任限制与免责',
            body: '在法律允许的最大范围内，基金会、开发人员及其关联公司不对任何间接、偶然、特殊、后果性或惩罚性损害承担责任，包括但不限于因以下原因导致的利润、收入、数据或资金损失：(A) 您使用去中心化网络；(B) 协议代码中的任何错误、漏洞或黑客攻击；(C) 对您钱包的任何未经授权的访问。本服务按“原样”提供，不包含任何明示或暗示的保证。'
          },
          {
            heading: '6. 非金融建议',
            body: 'AIC 网站、Docs 或相关文档中的任何内容均不构成金融、投资或法律建议。您应自行负责您的投资决策，并遵守您所在司法管辖区的法律法规。'
          }
        ]
      }
    }
  },
  ar: {
    nav: {
      vision: 'الرؤية',
      architecture: 'البنية التقنية',
      narrative: 'القصة الأساسية',
      tokenomics: 'الاقتصاديات',
      ecosystem: 'النظام البيئي',
      whitepaper: 'Docs',
      ecoLinks: {
        swap: 'AIC Swap',
        bridge: 'جسر عبر السلاسل',
        scan: 'مستكشف البلوكشين',
        faucet: 'Testnet Faucet',
        devHub: 'مركز المطورين',
        github: 'GitHub',
      },
    },
    hero: {
      tagline: 'البنية التحتية الطبقة الأولى',
      title1: 'أصول الطاقة تلتقي',
      title2: 'بحوسبة الذكاء الاصطناعي السيادية',
      subtitle: 'أول سلسلة عامة من الطبقة الأولى في العالم مصممة خصيصاً لتداول الأصول الواقعية (RWA) عالي التردد وتداول حوسبة الذكاء الاصطناعي.',
      cta_primary: 'مركز المطورين',
      cta_secondary: 'استكشف النظام البيئي',
    },
    vision: {
      title: 'الرؤية العالمية',
      subtitle: 'AIC ليست مجرد بلوكشين؛ إنها الطريق السريع الأساسي الذي يربط "الذهب الأسود" في العالم المادي بالاقتصاد الرقمي.',
      cards: {
        capital: {
          title: 'دعم رأس المال السيادي',
          desc: 'تم إطلاقها بالاشتراك مع كبار صناديق الثروة السيادية في أبوظبي وأكبر صناديق التحوط العالمية لبناء طبقة تسوية مالية من الدرجة المؤسسية.',
        },
        rwa: {
          title: 'أصول واقعية عالية التردد',
          desc: 'حل مشاكل الازدحام، الرسوم المرتفعة، والخصوصية لتمكين التسليم الفوري للطاقة والعقود الآجلة.',
        },
        ai: {
          title: 'تداول حوسبة الذكاء الاصطناعي',
          desc: 'دفتر أستاذ مخصص مصمم لتسوية قوة حوسبة الذكاء الاصطناعي والأصول المادية واسعة النطاق.',
        },
      },
    },
    arch: {
      title: 'البنية التقنية',
      subtitle: 'سلسلة طبقة أولى مستقلة عالية الأداء مع بنية معيارية مملوكة.',
      consensus: {
        title: 'الإجماع الأساسي: AI-DPoS',
        desc: 'تسجيل العقد وتوزيع الأحمال المدعوم بالذكاء الاصطناعي لضمان عدم توقف العمل تحت طوفان المعاملات.',
        feat1: 'جدولة العقد الذكية',
        feat2: 'النهائية الفورية',
      },
      traffic: {
        title: 'محرك المرور والحوسبة',
        desc: 'مصمم لقابلية التوسع اللانهائية لدعم تدريب نماذج الذكاء الاصطناعي وتدفقات بيانات RWA الضخمة.',
        feat1: 'رسوم غاز لا تذكر',
        feat2: 'متوافق مع EVM بنسبة 100%',
        compute_title: 'طبقة حوسبة الذكاء الاصطناعي',
        feat3: 'ترميز GPU RWA',
        feat3_desc: 'التأكيد على السلسلة وتجزئة مجموعات H100.',
        feat4: 'تداول الحوسبة الفوري',
        feat4_desc: 'سوق مطابقة لامركزي لاستدلال الذكاء الاصطناعي.',
        feat5: 'تدريب نماذج الذكاء الاصطناعي',
        feat5_desc: 'استخدام مجموعات الحوسبة وبيانات RWA لتدريب النماذج لتعظيم العوائد.',
      },
      rwa: {
        title: 'مكدس بروتوكول RWA الأصلي',
        feat1_title: 'طبقة تأكيد الأصول',
        feat1_desc: 'بروتوكولات مدمجة لإصدار النفط والغاز وأرصدة الكربون.',
        feat2_title: 'واجهة الامتثال',
        feat2_desc: 'واجهات "اعرف عميلك" (KYC) ومكافحة غسيل الأموال (AML) القابلة للبرمجة.',
      },
    },
    narrative: {
      title: 'سرد المحرك المزدوج',
      subtitle: 'خندق قيمة غير قابل للكسر مبني على الأصول الواقعية (RWA) وحوسبة الذكاء الاصطناعي.',
      engine1: {
        title: 'تثبيت أصول الطاقة RWA',
        desc: 'كل رمز مدعوم بسلسلة صناعة النفط الضخمة في أبوظبي.',
        sub1: 'التوأم الرقمي على السلسلة',
        sub1_desc: 'رسم خرائط في الوقت الفعلي للاحتياطيات، الاستخراج، والخدمات اللوجستية دون اتصال بالإنترنت.',
        sub2: 'تأييد الائتمان للأصول',
        sub2_desc: 'إثبات الاحتياطيات المقدم عبر أرباح تداول الطاقة الحقيقية.',
      },
      engine2: {
        title: 'تمكين تداول حوسبة الذكاء الاصطناعي',
        desc: 'تضمين أول منصة RWA لأصول حوسبة الذكاء الاصطناعي في العالم.',
        sub1: 'استراتيجية AI Alpha الكمية',
        sub1_desc: 'مراقبة التعلم العميق لمراجحة العقود الآجلة للنفط الخام، وتحسين منطق المراجحة لتحقيق أرباح أكبر.',
        sub2: 'الحوسبة كحقوق ملكية',
        sub2_desc: 'توزيع عوائد الذكاء الاصطناعي الفائقة على المساهمين في العقد.',
      },
    },
    token: {
      title: 'اقتصاديات الرمز المزدوج',
      subtitle: 'حلقة اقتصادية داخلية: أصل الحوكمة (AIC) + الأصل المستقر الخوارزمي (USDI).',
      aic: {
        label: 'الرمز الأصلي',
        desc: 'حامل القيمة والوقود. نموذج انكماشي فائق.',
        utility: 'الغاز • التخزين • حوكمة DAO',
        dist: '80% ناتج التعدين',
      },
      usdi: {
        title: 'عملة USDI المستقرة',
        desc: 'وسيط التداول العالمي الذي يربط بين العالم النقدي والعالم الرقمي.',
        peg: 'ربط 1:1 مع USDT',
        backing: 'مجمع النفط + أصول حوسبة الذكاء الاصطناعي + شجرة ميركل للأصول',
        excess: 'احتياطيات فائضة',
      },
      burn: {
        title: 'الحرق من أجل الكسب',
        desc: 'حرق USDI لتعدين AIC.',
        detail: 'يزيل فقاعات التضخم ويوفر دعماً قوياً لشراء AIC.',
      },
    },
    eco: {
      title: 'النظام البيئي المفتوح',
      subtitle: 'نظام مالي للطاقة مفتوح بلا حدود.',
      c1: { title: 'تمويل الطاقة اللامركزي', desc: 'بروتوكولات الإقراض وتداول الأصول الاصطناعية القائمة على أصول النفط الخام.' },
      c2: { title: 'تسليم RWA الفوري', desc: 'التسليم المباشر على السلسلة ونقل بوليصة الشحن لسلع الطاقة.' },
      c3: { title: 'قابلية التشغيل البيني عبر السلاسل', desc: 'جسور أصلية تتصل بمجمعات السيولة في Web3.' },
      c4: { title: 'تأجير حوسبة الذكاء الاصطناعي', desc: 'استئجار مجموعات GPU عالية الأداء عبر RWA لتدريب نماذج الذكاء الاصطناعي.' },
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      docs: 'Docs',
      explorer: 'المستكشف',
      github: 'جيت هب',
      twitter: 'تويتر',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة'
    },
    legal: {
      privacy: {
        title: 'سياسة الخصوصية',
        lastUpdated: 'آخر تحديث: فبراير 2026',
        sections: [
          {
            heading: '1. دفتر الأستاذ العام (لا توجد خصوصية على السلسلة)',
            body: 'AIC هي بلوكشين عام ولامركزي من الطبقة 1. يرجى العلم أن جميع المعاملات المنفذة على شبكة AIC مسجلة بشكل دائم في دفتر أستاذ عام. معلومات مثل عنوان محفظتك ومبلغ المعاملة ومقتنيات الرمز المميز وتفاعلات العقد الذكي مرئية لأي شخص في العالم. لا يمكن للمؤسسة إخفاء هذه البيانات أو تشفيرها أو إزالتها.'
          },
          {
            heading: '2. الثبات وحذف البيانات',
            body: 'نظرًا للطبيعة غير القابلة للتغيير لتقنية blockchain ، بمجرد كتابة البيانات إلى AIC blockchain ، لا يمكن تغييرها أو حذفها. لا يمكننا الامتثال لطلبات حذف البيانات ("الحق في النسيان") فيما يتعلق بالبيانات الموجودة على السلسلة ، لأن القيام بذلك أمر مستحيل تقنيًا دون المساس بسلامة الشبكة العالمية بأكملها.'
          },
          {
            heading: '3. البيانات الشخصية و KYC',
            body: 'بروتوكول AIC نفسه لا يجمع الأسماء الشخصية أو العناوين أو أرقام الهواتف. ومع ذلك ، قد يتطلب مصدرو RWA (أصول العالم الحقيقي) أو التطبيقات اللامركزية (dApps) المبنية على AIC الامتثال لـ KYC (اعرف عميلك). في هذه الحالات ، يتم جمع بياناتك الشخصية من قبل المصدر أو المزود التابع لجهة خارجية ، وليس مؤسسة AIC. نوصي بمراجعة سياسات الخصوصية لأي خدمات تابعة لجهات خارجية تتفاعل معها.'
          },
          {
            heading: '4. الأسماء المستعارة',
            body: 'استخدامك لـ blockchain هو اسم مستعار ، ويرتبط فقط بعنوان محفظتك. ومع ذلك ، إذا قمت طواعية بنشر عنوان محفظتك فيما يتعلق بهويتك الحقيقية على وسائل التواصل الاجتماعي أو منصات أخرى ، فيمكن ربط سجل معاملاتك بك. أنت مسؤول عن الحفاظ على خصوصيتك.'
          },
          {
            heading: '5. مشغلي العقد واللامركزية',
            body: 'تتكون شبكة AIC من عقد تحقق مستقلة موزعة عالميًا. عند بث معاملة ، قد يكون عنوان IP الخاص بك وبيانات المعاملة مرئية لهذه العقد لمعالجة الطلب. لا تتحكم المؤسسة في هذه العقد المستقلة.'
          }
        ]
      },
      terms: {
        title: 'شروط الخدمة',
        lastUpdated: 'آخر تحديث: فبراير 2026',
        intro: 'هام: AIC هي سلسلة كتل عامة لامركزية وغير مصرح بها (الطبقة 1). توفر المؤسسة برامج مفتوحة المصدر ولكنها لا تتحكم في الشبكة. يرجى قراءة هذه الشروط بعناية.',
        sections: [
          {
            heading: '1. قبول الشروط',
            body: 'من خلال الوصول إلى شبكة AIC أو العقد أو الخدمات ذات الصلة أو استخدامها ، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على أي جزء من الشروط ، فلا يجوز لك الوصول إلى الخدمة.'
          },
          {
            heading: '2. الطبيعة اللامركزية للخدمة',
            body: 'AIC عبارة عن بلوكشين عام لامركزي. تتكون "الخدمة" بشكل أساسي من برمجيات مفتوحة المصدر تمكنك من التفاعل مع شبكة AIC. المؤسسة والمطورون والمساهمون لا يتحكمون في الشبكة ، و لا يقومون بالتحقق من المعاملات (إلا كمدققين مستقلين) ، و ليس لديهم القوة لعكس المعاملات أو استرداد الأموال.'
          },
          {
            heading: '3. عدم الاحتجاز / غير الحراسة',
            body: 'AIC هو بروتوكول غير احتجازي. نحن لا نحتفظ أو نخزن أو نمتلك إمكانية الوصول إلى مفاتيحك الخاصة أو أصولك. أنت وحدك المسؤول عن حفظ مفاتيح التشفير الخاصة بك. إذا فقدت مفاتيحك ، فستفقد الوصول إلى أموالك بشكل دائم. لا يمكننا مساعدتك في استعادتها.'
          },
          {
            heading: '4. العقود الذكية ومخاطر RWA',
            body: 'أنت تقر بأن العقود الذكية هي تقنية تجريبية. بينما تسهل AIC ترميز RWA (أصول العالم الحقيقي) ، فإن الرمز الرقمي هو مجرد تمثيل. المؤسسة ليست مسؤولة عن الوجود المادي أو الحالة أو الحراسة للأصول الواقعية الأساسية التي يديرها مصدرو الطرف الثالث.'
          },
          {
            heading: '5. حدود المسؤولية',
            body: 'إلى أقصى حد يسمح به القانون ، لا تتحمل المؤسسة والمطورون والشركات التابعة أي مسؤولية عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية ، أو أي خسارة في الأرباح أو الإيرادات ، سواء تكبدتها بشكل مباشر أو غير مباشر ، أو أي فقدان للبيانات أو الاستخدام أو الشهرة أو الخسائر غير الملموسة الأخرى ، الناتجة عن (أ) وصولك إلى الشبكة اللامركزية أو استخدامها ؛ (ب) أي أخطاء أو فيروسات أو برامج ضارة في كود البروتوكول ؛ (ج) أي وصول غير مصرح به إلى محفظتك.'
          },
          {
            heading: '6. لا توجد نصيحة مالية',
            body: 'لا يشكل أي شيء على موقع AIC الإلكتروني أو في Docs نصيحة مالية أو استثمارية أو قانونية. أنت مسؤول عن قراراتك الاستثمارية والامتثال للقوانين المحلية.'
          }
        ]
      }
    }
  },
};
