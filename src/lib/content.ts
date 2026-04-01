export interface ServiceContent {
  title: string;
  description: string;
  content: string[];
}

export interface Service {
  slug: string;
  icon: string;
  ar: ServiceContent;
  en: ServiceContent;
}

export const services: Service[] = [
  {
    slug: "trademarks",
    icon: "/images/icons/trademark-3d.png",
    ar: {
      title: "العلامات التجارية",
      description: "تسجيل وحماية العلامات التجارية لضمان هوية شركتك وتميزها في السوق.",
      content: [
        "تعد العلامة التجارية من أهم الأصول غير الملموسة التي تمتلكها الشركات، حيث تمثل هوية الشركة وتعبر عن جودة منتجاتها وخدماتها.",
        "حماية الهوية التجارية: يمنح تسجيل العلامة التجارية حماية قانونية، مما يمنع الآخرين من استخدام أو تقليد العلامة دون إذن.",
        "تعزيز الثقة: تساهم العلامة التجارية المسجلة في تعزيز ثقة العملاء والمستثمرين بالشركة، كونها رمزًا للجودة والمصداقية.",
      ],
    },
    en: {
      title: "Trademarks",
      description: "Registration and protection of trademarks to ensure your company's identity and distinction in the market.",
      content: [
        "A trademark is one of the most important intangible assets of a company, representing its identity and expressing the quality of its products and services.",
        "Brand Protection: Trademark registration provides legal protection, preventing others from using or imitating the mark without permission.",
        "Enhancing Trust: A registered trademark contributes to strengthening the confidence of customers and investors in the company.",
      ],
    },
  },
  {
    slug: "trademark-watch",
    icon: "/images/icons/search-3d.png",
    ar: {
      title: "مراقبة العلامات التجارية",
      description: "مراقبة مستمرة لعلاماتك التجارية لمنع أي تعدٍّ أو استخدام غير مشروع.",
      content: [
        "في عالم الأعمال الذي يشهد منافسة متزايدة، تصبح العلامات التجارية من أهم الأصول التي تحتاج إلى حماية مستمرة.",
        "تعد مراقبة العلامات التجارية خدمة أساسية لضمان عدم وجود أي تعدٍّ على حقوق علامتك.",
      ],
    },
    en: {
      title: "Trademark Watch",
      description: "Continuous monitoring of your trademarks to prevent any infringement or unauthorized use.",
      content: [
        "In a world of increasing competition, trademarks are key assets that require constant protection.",
        "Trademark monitoring is an essential service to ensure no infringement on your rights.",
      ],
    },
  },
  {
    slug: "patent-applications",
    icon: "/images/icons/patent-3d.png",
    ar: {
      title: "صياغة براءات الاختراع",
      description: "صياغة احترافية لطلبات براءات الاختراع لضمان حماية قانونية فعالة لابتكاراتك.",
      content: [
        "تعد براءات الاختراع من أهم وسائل حماية الابتكارات التقنية والأفكار الجديدة.",
        "نقدم صياغة دقيقة تضمن حقوقك الفنية والقانونية بالكامل.",
      ],
    },
    en: {
      title: "Patent Drafting",
      description: "Professional drafting of patent applications to ensure effective legal protection for your innovations.",
      content: [
        "Patents are vital for protecting technical innovations and new ideas.",
        "We provide precise drafting that fully guarantees your technical and legal rights.",
      ],
    },
  },
  {
    slug: "patent-registration",
    icon: "/images/icons/patent-3d.png",
    ar: {
      title: "تسجيل براءات الاختراع",
      description: "تسجيل براءات الاختراع لحماية ابتكاراتك التقنية وضمان حقوقك الحصرية.",
      content: [
        "تسجيل براءة الاختراع هو الخطوة النهائية لتأمين حقوقك الفكرية عالمياً.",
        "نساعدك في إجراءات التسجيل الرسمية لدى المكاتب الوطنية والدولية.",
      ],
    },
    en: {
      title: "Patent Registration",
      description: "Registration of patents to protect your technical innovations and ensure your exclusive rights.",
      content: [
        "Patent registration is the final step in securing your intellectual property rights globally.",
        "We assist in formal registration procedures with national and international offices.",
      ],
    },
  },
  {
    slug: "industrial-designs",
    icon: "/images/icons/patent-3d.png",
    ar: {
      title: "التصاميم الصناعية",
      description: "حماية تصاميمك الصناعية من التقليد وضمان حقوقك الإبداعية.",
      content: [
        "حماية المظهر الجمالي والشكلي للمنتجات تضعك في موقع الريادة.",
        "نسجل تصاميمك الصناعية لضمان تفردك في السوق.",
      ],
    },
    en: {
      title: "Industrial Designs",
      description: "Protecting your industrial designs from imitation and ensuring your creative rights.",
      content: [
        "Protecting the aesthetic and formal appearance of products places you in a leading position.",
        "We register your industrial designs to ensure your uniqueness in the market.",
      ],
    },
  },
  {
    slug: "copyright",
    icon: "/images/icons/copyright-3d.png",
    ar: {
      title: "المصنفات الفكرية",
      description: "حماية حقوق المؤلف للإبداعات الفكرية والأعمال الأدبية والفنية.",
      content: [
        "حماية الكتب، الأبحاث، والبرمجيات من القرصنة والاستخدام غير المصرح به.",
        "نوثق حقوقك الأدبية والفنية بفعالية.",
      ],
    },
    en: {
      title: "Copyright",
      description: "Protecting author rights for intellectual creations and literary and artistic works.",
      content: [
        "Protecting books, research, and software from piracy and unauthorized use.",
        "We effectively document your literary and artistic rights.",
      ],
    },
  },
  {
    slug: "company-formation",
    icon: "/images/icons/company-3d.png",
    ar: {
      title: "تأسيس الشركات",
      description: "خدمة متكاملة لتأسيس الشركات في الإمارات بسرعة واحترافية.",
      content: [
        "نساعدك في اختيار الكيان القانوني المناسب (محلي، منطقة حرة، أوفشور).",
        "نسهل كافة الإجراءات الحكومية والبنكية.",
      ],
    },
    en: {
      title: "Company Formation",
      description: "A comprehensive service for setting up companies in the UAE quickly and professionally.",
      content: [
        "We help you choose the right legal entity (local, free zone, offshore).",
        "We facilitate all government and banking procedures.",
      ],
    },
  },
];

export const socialLinks = [
  { platform: "Facebook", href: "https://facebook.com/aipmcae", icon: "fb" },
  { platform: "Twitter", href: "https://twitter.com/aipmcae", icon: "tw" },
  { platform: "LinkedIn", href: "https://linkedin.com/company/aipmcae", icon: "in" },
  { platform: "Instagram", href: "https://instagram.com/aipmcae", icon: "ig" },
];

export const contactInfo = {
  ar: {
    address: "دبي، الإمارات العربية المتحدة",
    phone: "+971 42865066",
    mobile: "+971 564633944",
    email: "info@aipmcae.com",
    workingHours: "الأحد - الخميس: 9:00 ص - 6:00 م",
  },
  en: {
    address: "Dubai, United Arab Emirates",
    phone: "+971 42865066",
    mobile: "+971 564633944",
    email: "info@aipmcae.com",
    workingHours: "Sun - Thu: 9:00 AM - 6:00 PM",
  },
};

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
