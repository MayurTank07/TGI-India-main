// Central content store — all hardcoded website content lives here.
// This is the fallback when localStorage has no saved data.

const defaultContent = {
  navbar: {
    logoImage: "",
    logoText: "TG INDIA",
    logoSubtext: "Talent Group Of India",
    links: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Services", path: "/services" },
      { label: "Our Clients", path: "/our-clients" },
      { label: "Testimonials", path: "/testimonials" },
      { label: "Contact", path: "/contact" },
    ],
    ctaButton: "Find Talent",
  },

  footer: {
    logoImage: "",
    logoText: "TG INDIA",
    logoSubtext: "Talent Group Of India",
    description:
      "Talent Group of India is a leading HR and recruitment firm dedicated to building careers, powering businesses, and shaping India's workforce.",
    address: "Bangalore, Karnataka, India - 560001",
    email: "info@tgindia.com",
    phone: "+91 98765 43210",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
    sitemapLinks: ["About", "Services", "Our Clients", "Testimonials", "Contact Us"],
  },

  home: {
    hero: {
      badge: "India's #1 Recruitment Partner",
      title: "Building Careers\nPowering Businesses\nShaping India's Workforce",
      description:
        "Finding the right talent shouldn't feel like a gamble. At Talent Group Of India, we connect ambition with opportunity—helping companies hire with confidence and professionals grow with purpose.",
      primaryCTA: "Find Talent",
      secondaryCTA: "Explore Opportunities",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0",
      rating: "4.5",
      ratingLabel: "review rating",
    },
    services: {
      heading: "We don't just recruit,",
      headingAccent: "We align",
      items: [
        {
          title: "For Employers",
          description:
            "We learn your business first, then hire talent that truly fits—ready to deliver from day one.",
          image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
        },
        {
          title: "For Job Seekers",
          description:
            "Your career is more than a resume. We match you with roles that support real growth.",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
        },
        {
          title: "For Growing Teams",
          description:
            "From startups to enterprises, we support your hiring as an extended HR partner.",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
        },
      ],
    },
    approach: {
      heading: "Our approach is simple,\nhuman, and effective.",
      items: [
        {
          icon: "Ear",
          title: "We Listen",
          description:
            "We take time to understand your needs—business goals, team culture, and future plans.",
        },
        {
          icon: "CheckCircle",
          title: "We Match",
          description:
            "Using industry insight and a strong talent network, we connect the right people to the right roles.",
        },
        {
          icon: "Target",
          title: "We Support",
          description:
            "From screening to onboarding, we stay involved—because long-term success matters more than short-term placements.",
        },
        {
          icon: "TrendingUp",
          title: "We Grow",
          description:
            "Strong hires build strong companies. Strong careers build strong lives.",
        },
      ],
    },
    stats: {
      heading: "Every great organization starts with the right people.",
      quote: "When the right talent meets the right opportunity, everyone wins.",
      quotePrefix: "That's where Talent Group Of India began—with a simple belief:",
      items: [
        { number: "950+", label: "Clients" },
        { number: "200+", label: "Specialists" },
        { number: "10+", label: "Years of Recruitment Expertise" },
        { number: "60,000+", label: "Candidates Placed" },
      ],
    },
    whyTrust: {
      heading: "Why organizations trust Talent Group Of India?",
      points: [
        "Industry-focused recruitment expertise",
        "Personalized hiring solutions",
        "Transparent and ethical practices",
        "Faster turnaround without compromising",
        "People-first mindset",
      ],
      images: [
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        "https://images.unsplash.com/photo-1552664730-d307ca884978",
      ],
    },
    contactForm: {
      heading: "Let's write your\nsuccess story together",
      subheading:
        "Got something on your mind? Fill out the form and we will get back to you.",
      categoryOptions: ["Employee", "Employer"],
      cityOptions: ["Mumbai", "Pune", "Delhi", "Bangalore", "Chennai", "Hyderabad"],
    },
  },

  about: {
    hero: {
      badge: "About Us",
      heading: "Your Success Is Our Success",
      description:
        "We go beyond matching resumes — we align people with purpose and businesses with the talent they need to thrive.",
      primaryCTA: "Explore Our Services",
      secondaryCTA: "Contact Us",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    },
    whoWeAre: {
      heading: "Who We Are",
      paragraph1:
        "Talent Group Of India is a leading HR and recruitment firm dedicated to building careers, powering businesses, and shaping India's workforce. We go beyond matching resumes — we align people with purpose, understanding business needs, individual aspirations, and cultural fit to create employment relationships that truly last.",
      paragraph2:
        "Founded with a vision to transform recruitment in India, TGI has grown into a trusted partner for thousands of organizations and job seekers across the country. We are recognized for our integrity, expertise, and commitment to excellence — making us not just a recruitment firm, but a long-term partner in growth.",
      images: [
        "https://images.unsplash.com/photo-1556761175-4b46a572b786",
        "https://images.unsplash.com/photo-1552664730-d307ca884978",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        "https://images.unsplash.com/photo-1551434678-e076c223a692",
      ],
    },
    journey: {
      heading: "Our journey started with a Vision for India",
      paragraph1:
        "Founded in 2012 in Bangalore, Talent Group of India set out to bridge the gap between India's vast talent pool and the needs of growing businesses. What began as a small team has since grown into a national leader in recruitment and HR consulting, backed by over a decade of expertise and deep industry relationships.",
      paragraph2:
        "Today, TG INDIA stands as a trusted bridge for thousands of professionals and hundreds of enterprises across the country. We go beyond titles and job descriptions — we listen to the stories behind every resume and every role, driven by the belief that when the right person finds the right opportunity, the potential for impact is truly limitless.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      stats: [
        { number: "10+", label: "Years of Excellence" },
        { number: "500+", label: "Partnerships Built" },
      ],
    },
    values: {
      heading: "The values that Guide Us",
      subheading:
        "Our culture is defined by a commitment to excellence and a passion for people.",
      items: [
        {
          icon: "ShieldCheck",
          title: "Integrity First",
          text: "Transparency is the foundation of every relationship we build with clients and candidates",
        },
        {
          icon: "Zap",
          title: "Innovative Match",
          text: "We leverage AI and human insight to find the perfect cultural and technical fit.",
        },
        {
          icon: "Heart",
          title: "Empathy Driven",
          text: "We understand that behind every job is a person, and behind every hire is a business goal.",
        },
        {
          icon: "Target",
          title: "Results Focused",
          text: "We measure our success by the long-term impact and retention of the talent we place.",
        },
      ],
    },
    team: {
      heading: "Meet the Visionaries",
      subheading:
        "Our leadership team brings decades of combined experience in the Indian workforce landscape.",
      members: [
        {
          name: "Arjun Sharma",
          role: "CEO & Founder",
          img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
          linkedin: "#",
          twitter: "#",
        },
        {
          name: "Vikram Mehta",
          role: "Chief People Officer",
          img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
          linkedin: "#",
          twitter: "#",
        },
        {
          name: "Priya Iyer",
          role: "Head of Operations",
          img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
          linkedin: "#",
          twitter: "#",
        },
        {
          name: "Ananya Reddy",
          role: "Director of Partnerships",
          img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
          linkedin: "#",
          twitter: "#",
        },
      ],
    },
  },

  testimonials: {
    employers: {
      heading: "What our Employers and Hiring Managers are saying?",
      subheading:
        "Thousands of businesses across India trust Talent Group Of India for their most critical hiring decisions. Here's what they have to say about working with us.",
      items: [
        {
          text: "Talent Group Of India transformed our hiring process completely. They understood our culture and delivered candidates who were the perfect fit from day one.",
          name: "Asmit Mirkar",
          role: "Operations Manager, GONG",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          text: "Their recruitment team helped us scale quickly. The quality of candidates and speed of delivery exceeded our expectations.",
          name: "Priya Sharma",
          role: "HR Director, Dropbox",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          text: "We needed specialized finance talent and they delivered outstanding professionals who integrated perfectly with our team.",
          name: "Rahul Mehta",
          role: "Finance Head, Amplitude",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
        },
      ],
    },
    jobSeekers: {
      heading: "What our Job Seekers are saying?",
      subheading:
        "We've helped 60,000+ professionals find roles that match their skills, aspirations, and career goals. Here's what they have to say about their journey with us.",
      item: {
        text: "TG INDIA placed me in my dream job within two weeks. Their team was supportive, professional, and genuinely cared about my career growth.",
        name: "Vikram Nair",
        role: "Software Engineer, Bangalore",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
      },
    },
    growingTeams: {
      heading: "What our Growing Teams are saying?",
      subheading:
        "From early-stage startups to rapidly scaling businesses, we've helped hundreds of growing teams build the right foundation. Here's what they have to say about partnering with us.",
      items: [
        {
          text: "As a startup, we needed fast and reliable hiring support. TGI built our entire founding team in under 30 days. Absolutely incredible.",
          name: "Arjun Mehta",
          role: "Co-Founder, TechStart India",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          text: "Talent Group Of India helped us scale quickly by delivering exceptional candidates aligned with our company culture.",
          name: "Priya Sharma",
          role: "HR Director, GrowthLabs",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          text: "Their hiring expertise helped us build strong teams in record time. Truly a reliable recruitment partner.",
          name: "Rahul Verma",
          role: "Founder, ScaleEdge",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
        },
      ],
    },
  },

  contact: {
    heading: "Let's write your success story together",
    subheading:
      "Thousands of businesses across India trust Talent Group Of India for their most critical hiring decisions.",
    email: "info@tgindia.com",
    phone: "+91 98765 43210",
    address: "Bangalore, Karnataka, India - 560001",
    categoryOptions: ["Student", "Employer", "Job Seeker"],
    cityOptions: ["Mumbai", "Delhi", "Bangalore", "Pune", "Chennai", "Hyderabad"],
  },

  services: {
    it: {
      hero: {
        badge: "IT Services",
        heading: "Technology Talent That Powers Innovation",
        description:
          "Build exceptional technology teams with skilled professionals who drive technological excellence and business growth.",
        primaryCTA: "Get Started",
        secondaryCTA: "Learn How We Work",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      },
      offerings: {
        heading: "What we Offer?",
        description:
          "Our IT recruitment services cover every aspect of technology hiring, connecting you with expert professionals without the cost and complexity of building an in-house talent team.",
        items: [
          {
            title: "Software Development",
            desc: "Source skilled developers across full-stack, front-end, back-end, and mobile who build robust, scalable applications.",
            img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
          },
          {
            title: "Cloud & Infrastructure",
            desc: "Find cloud architects, DevOps engineers, and infrastructure specialists who design and maintain modern cloud-based systems.",
            img: "https://images.unsplash.com/photo-1667372335939-6f6f0b5e4c7c",
          },
          {
            title: "IT Support & Operations",
            desc: "Staff help desk technicians and system administrators who keep your technology running smoothly and efficiently.",
            img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
          },
        ],
      },
      process: {
        heading: "Our IT Hiring Process",
        items: [
          {
            icon: "Ear",
            title: "Requirements Analysis",
            text: "Understand your needs and identify relevant talent, including passive candidates.",
          },
          {
            icon: "CheckCircle",
            title: "Sourcing & Screening",
            text: "Multi-stage evaluation ensures technical skills, cultural fit, and leadership potential.",
          },
          {
            icon: "Target",
            title: "Technical Assessment",
            text: "Evaluate coding skills and technical knowledge through practical tests and reviews.",
          },
          {
            icon: "TrendingUp",
            title: "Offer & Onboarding",
            text: "Facilitate negotiations and support smooth onboarding for successful placements.",
          },
        ],
      },
      benefits: {
        heading: "Why Choose Our IT Service?",
        points: [
          "Technical Recruiters who understand technology, not just keywords",
          "Fast Turnaround with average time-to-hire of 15–20 days",
          "Skills-Based Assessment with real coding evaluations",
          "90-Day Replacement Guarantee for every placement",
          "4,000+ Companies served across industries",
          "60,000+ Candidates successfully placed",
        ],
      },
    },
    bpo: {
      hero: {
        badge: "BPO Hiring",
        heading: "Build Your BPO Team with India's Top Talent",
        description:
          "Scale your BPO operations quickly and efficiently with Talent Group Of India. We specialize in sourcing, screening, and onboarding large volumes of skilled professionals who deliver exceptional service and drive operational excellence.",
        primaryCTA: "Get Started",
        secondaryCTA: "Learn How We Work",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
      },
      offerings: {
        heading: "Specialized BPO Recruitment Solutions",
        description:
          "The BPO industry demands speed, quality, and scale. Our specialized recruitment process is designed to meet these unique challenges while maintaining the high standards your operations require.",
        items: [
          {
            title: "Customer Service Representatives",
            desc: "Find empathetic, articulate professionals who create positive customer experiences and strengthen brand loyalty.",
            img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
          },
          {
            title: "Technical Support Specialists",
            desc: "Build teams of technically proficient professionals who troubleshoot issues and ensure seamless technical support.",
            img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
          },
          {
            title: "Back-Office Operations Staff",
            desc: "Source detail-oriented professionals for data entry, documentation, and operational support functions.",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
          },
          {
            title: "Sales & Telemarketing Teams",
            desc: "Recruit persuasive communicators assessed for sales aptitude, resilience, and results orientation to drive revenue growth.",
            img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
          },
          {
            title: "Voice & Non-Voice Process Experts",
            desc: "Source specialists with the right skills and language proficiency for your phone-based or digital communication processes.",
            img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
          },
        ],
      },
      benefits: {
        heading: "Why Choose Our BPO Service?",
        points: [
          "Volume hiring specialists with proven large-scale recruitment experience",
          "Industry-specific assessments for BPO roles",
          "Multi-location hiring across all major Indian cities",
          "Rapid deployment with 7–10 day average time-to-hire",
          "90-Day replacement guarantee on every placement",
          "Dedicated account managers for ongoing support",
        ],
      },
    },
    nonit: {
      hero: {
        badge: "Non-IT Hiring",
        heading: "The Right Talent for Every Role Beyond Technology",
        description:
          "From sales and marketing to finance, HR, and operations, we connect businesses with skilled non-IT professionals who drive growth across every function.",
        primaryCTA: "Get Started",
        secondaryCTA: "Learn How We Work",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      },
      offerings: {
        heading: "Non-IT Hiring Solutions",
        description:
          "We cover the full spectrum of non-technical roles, helping you build teams that drive business performance across every department.",
        items: [
          {
            title: "Sales & Marketing",
            desc: "Recruit driven sales professionals and creative marketers who build pipelines, close deals, and grow brand presence.",
            img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
          },
          {
            title: "Finance & Accounting",
            desc: "Source skilled finance professionals for accounting, financial planning, analysis, and reporting roles.",
            img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
          },
          {
            title: "Human Resources",
            desc: "Find experienced HR professionals who build strong cultures, manage talent, and drive employee engagement.",
            img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
          },
          {
            title: "Leadership & Management",
            desc: "Place senior leaders and middle managers who align teams with business strategy and drive organizational performance.",
            img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
          },
          {
            title: "Administration & Support",
            desc: "Hire organized, detail-oriented administrative professionals who keep operations running efficiently.",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
          },
          {
            title: "Operations & Logistics",
            desc: "Source operations experts who optimize processes, manage supply chains, and ensure seamless delivery.",
            img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec",
          },
        ],
      },
      benefits: {
        heading: "Why Choose Our Non-IT Service?",
        points: [
          "Industry-specialized recruiters with deep domain knowledge",
          "Extensive candidate network across all non-IT functions",
          "Behavioral and competency-based screening",
          "Average time-to-hire of 10–15 days",
          "Pan-India hiring capabilities across all cities",
          "90-Day replacement guarantee on every placement",
        ],
      },
    },
    accounting: {
      hero: {
        badge: "Accounting & Finance",
        heading: "Accurate Numbers, Trusted Professionals",
        description:
          "Build your accounting and finance team with skilled professionals who bring precision, expertise, and integrity to every number.",
        primaryCTA: "Get Started",
        secondaryCTA: "Learn How We Work",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      },
      offerings: {
        heading: "Accounting Talent We Place",
        description:
          "We specialize in placing accounting and finance professionals across all levels, from entry-level bookkeepers to senior financial leaders.",
        items: [
          {
            title: "Accounts Payable & Receivable",
            desc: "Source detail-oriented professionals who manage vendor payments, customer billing, and cash flow effectively.",
            img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
          },
          {
            title: "Financial Reporting",
            desc: "Find skilled accountants who prepare accurate financial statements, MIS reports, and management dashboards.",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
          },
          {
            title: "Senior Finance Leadership",
            desc: "Place CFOs, Finance Directors, and Controllers who drive financial strategy and ensure organizational health.",
            img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
          },
          {
            title: "Audit & Compliance",
            desc: "Recruit internal and external auditors who ensure regulatory compliance, risk management, and process integrity.",
            img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
          },
          {
            title: "Tax & Statutory",
            desc: "Source tax professionals with expertise in GST, income tax, and statutory compliance for seamless regulatory adherence.",
            img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
          },
          {
            title: "Payroll Management",
            desc: "Find payroll specialists who ensure accurate, timely salary processing and statutory compliance across your workforce.",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
          },
        ],
      },
      benefits: {
        heading: "Why Choose Our Accounting Service?",
        points: [
          "Finance-specialized recruiters with deep domain expertise",
          "Rigorous technical and aptitude assessments",
          "Knowledge of CA, CMA, and CFA hiring requirements",
          "Average time-to-hire of 10–15 days",
          "Confidential executive search for senior roles",
          "90-Day replacement guarantee on every placement",
        ],
      },
    },
    healthcare: {
      hero: {
        badge: "Healthcare Billing",
        heading: "Accurate Healthcare Billing, Seamless Revenue Cycle",
        description:
          "Staff your healthcare revenue cycle operations with skilled billing professionals who ensure accurate claims, faster reimbursements, and regulatory compliance.",
        primaryCTA: "Get Started",
        secondaryCTA: "Learn How We Work",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      },
      offerings: {
        heading: "Healthcare Billing Services We Staff",
        description:
          "We specialize in placing healthcare billing professionals who understand medical coding, revenue cycle management, and healthcare compliance.",
        items: [
          {
            title: "Medical Coding",
            desc: "Source certified medical coders (CPC, CCS) proficient in ICD-10, CPT, and HCPCS coding for accurate claim submission.",
            img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
          },
          {
            title: "Payment Posting",
            desc: "Hire payment posting specialists who accurately record insurance and patient payments, adjustments, and denials.",
            img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf",
          },
          {
            title: "Insurance Verification",
            desc: "Find eligibility verification specialists who confirm patient coverage and reduce claim denials before treatment.",
            img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
          },
          {
            title: "AR Collections",
            desc: "Recruit AR follow-up specialists who manage outstanding claims, reduce aging AR, and maximize revenue recovery.",
            img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
          },
          {
            title: "Claims Processing",
            desc: "Source claims processors who review, correct, and submit clean claims to payers for timely reimbursement.",
            img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
          },
          {
            title: "Compliance & Auditing",
            desc: "Place healthcare compliance officers and billing auditors who ensure HIPAA compliance and revenue integrity.",
            img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
          },
        ],
      },
      benefits: {
        heading: "Why Choose Our Healthcare Service?",
        points: [
          "Healthcare-specialized recruiters with billing domain expertise",
          "Certified coder recruitment (CPC, CCS, CCA)",
          "Understanding of US and India healthcare billing standards",
          "Average time-to-hire of 10–15 days",
          "HIPAA-compliant recruitment processes",
          "90-Day replacement guarantee on every placement",
        ],
      },
    },
    corporate: {
      hero: {
        badge: "Corporate Hiring",
        heading: "Executive Search & Corporate Recruitment Excellence",
        description:
          "From C-suite executives to mid-level managers and specialized professionals, Talent Group Of India delivers corporate hiring solutions that bring exceptional talent to your organization. We understand the strategic importance of every hire and the impact it has on your business success.",
        primaryCTA: "Get Started",
        secondaryCTA: "Learn How We Work",
        image:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000",
      },
      offerings: {
        heading: "Corporate Hiring Solutions",
        description:
          "We offer end-to-end corporate recruitment services tailored to the unique demands of executive and professional hiring.",
        items: [
          {
            title: "Executive Research & Search",
            desc: "Identify and attract top-tier executives through targeted research, direct approach, and confidential outreach.",
            img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
          },
          {
            title: "Management Hiring",
            desc: "Place experienced managers who lead teams, drive strategy, and deliver measurable business results.",
            img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
          },
          {
            title: "Professional Staffing",
            desc: "Source skilled professionals across functions with the domain expertise your business requires.",
            img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
          },
          {
            title: "Niche & Specialist Roles",
            desc: "Fill hard-to-find positions requiring specialized knowledge, certifications, or industry-specific experience.",
            img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
          },
          {
            title: "Confidential Searches",
            desc: "Execute sensitive leadership searches with complete discretion and professionalism.",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
          },
        ],
      },
      process: {
        heading: "Our Corporate Hiring Process",
        items: [
          {
            icon: "Ear",
            title: "Discovery",
            text: "Deep-dive into your organizational needs, culture, and the strategic impact of the role.",
          },
          {
            icon: "CheckCircle",
            title: "Assessment",
            text: "Rigorous evaluation of candidates through behavioral, technical, and leadership assessments.",
          },
          {
            icon: "Target",
            title: "Presentation",
            text: "Shortlist presentation with detailed candidate profiles aligned to your requirements.",
          },
          {
            icon: "TrendingUp",
            title: "Offer Management",
            text: "Expert negotiation support and onboarding assistance to ensure smooth transitions.",
          },
        ],
      },
      benefits: {
        heading: "Why Choose Our Corporate Service?",
        points: [
          "95%+ placement success rate for corporate mandates",
          "Executive assessment tools and leadership profiling",
          "Confidential and discreet search processes",
          "Industry-specialized corporate recruiters",
          "Pan-India and global executive search capabilities",
          "90-Day replacement guarantee on every placement",
        ],
      },
    },
  },

  clients: {
    heading: "Trusted by India's Leading Organizations",
    subheading:
      "From fast-growing startups to established enterprises, we are proud to be the talent partner of choice for industry leaders.",
    primaryCTA: "Become a Client",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    organizations: [
      { name: "Monday.com", logo: "https://ui-avatars.com/api/?name=Monday&size=200&background=ff3d57&color=fff&bold=true" },
      { name: "Gong", logo: "https://ui-avatars.com/api/?name=Gong&size=200&background=6c5ce7&color=fff&bold=true" },
      { name: "Dropbox", logo: "https://ui-avatars.com/api/?name=Dropbox&size=200&background=0061ff&color=fff&bold=true" },
      { name: "Tinder", logo: "https://ui-avatars.com/api/?name=Tinder&size=200&background=fe3c72&color=fff&bold=true" },
      { name: "Booking.com", logo: "https://ui-avatars.com/api/?name=Booking&size=200&background=003580&color=fff&bold=true" },
      { name: "Evernote", logo: "https://ui-avatars.com/api/?name=Evernote&size=200&background=00a82d&color=fff&bold=true" },
      { name: "Amplitude", logo: "https://ui-avatars.com/api/?name=Amplitude&size=200&background=0080ff&color=fff&bold=true" },
      { name: "Intercom", logo: "https://ui-avatars.com/api/?name=Intercom&size=200&background=1f8ded&color=fff&bold=true" },
      { name: "Figma", logo: "https://ui-avatars.com/api/?name=Figma&size=200&background=f24e1e&color=fff&bold=true" },
      { name: "Notion", logo: "https://ui-avatars.com/api/?name=Notion&size=200&background=000000&color=fff&bold=true" },
      { name: "Slack", logo: "https://ui-avatars.com/api/?name=Slack&size=200&background=4a154b&color=fff&bold=true" },
      { name: "Zoom", logo: "https://ui-avatars.com/api/?name=Zoom&size=200&background=2d8cff&color=fff&bold=true" },
      { name: "HubSpot", logo: "https://ui-avatars.com/api/?name=HubSpot&size=200&background=ff7a59&color=fff&bold=true" },
      { name: "Freshworks", logo: "https://ui-avatars.com/api/?name=Freshworks&size=200&background=20c05c&color=fff&bold=true" },
      { name: "Zoho", logo: "https://ui-avatars.com/api/?name=Zoho&size=200&background=e42527&color=fff&bold=true" },
    ],
  },
};

export default defaultContent;
