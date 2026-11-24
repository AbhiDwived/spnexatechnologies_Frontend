import type { SolutionDetail } from "@/types";
import { serviceStats, sixStepProcessDescription } from "@/data/serviceDetails";

// Every solution page (src/app/solutions/[slug]/page.tsx) shares the same
// 4 company-wide stats as the /services pages.
const solutionStats = serviceStats;

// Verbatim from every one of the 7 reference PDFs (Food_Delivery_App.pdf,
// Grocery_Delivery_App.pdf, Pickup_and_Delivery_App.pdf,
// Real_estate_App.pdf, Fitness_App.pdf, On_Demand_App.pdf, Salon_App.pdf —
// Figma's API was rate-limited on every attempt, same as every /services
// page, so these were built from the PDF renders).
//
// Four of the seven PDFs (Food Delivery, Grocery Delivery, Pickup &
// Delivery, Real Estate) render one clean, consistent template end to
// end: hero, a stats bar, an intro section (text + bullets + photo), the
// Awards badges, a "why us" block, a dark CTA banner, a 4-step "How Our
// ___ Works" strip, a light CTA banner, then the footer. The other three
// (Fitness, On-Demand, Salon) use a richer, bespoke layout in their own
// PDFs instead — extra feature-card grids, a 6-step process diagram, a
// blog section, an inline lead form, an admin/customer-app showcase —
// none of which has a reusable component yet. Rather than building three
// more one-off page layouts, all 7 solution pages here use the first,
// already-reusable template; for Fitness/On-Demand/Salon, their own real
// PDF copy is slotted into the closest matching part of that template
// (e.g. Fitness's 4-card "Yoga & Meditation / Fitness & Workout / Diet &
// Nutrition / Activity Tracking" feature grid becomes its 4 `whyPoints`,
// since those cards are already real title+description pairs) rather than
// reusing the generic, description-less benefit pills their own PDF
// otherwise shows for that slot. Fitness and On-Demand do additionally
// get the real 6-step "Process of Creating ___" diagram from their PDFs,
// reusing ServiceProcess exactly as the Android/iOS service pages do.
//
// The intro section's paragraph + bullet list (Cost Efficiency / Wider
// Audience Reach / 24/7 Accessibility / Centralized Data / Better Client
// Experience) is reused near-verbatim across Food Delivery, Grocery
// Delivery, Pickup & Delivery and Real Estate in the source PDFs
// themselves — including a copy-paste slip where the Food Delivery and
// Grocery Delivery PDFs both still read "Managing supremacy in the real
// estate industry..." and "As a real estate app development company...".
// Reworded per page below to name that page's own industry, the same way
// an obviously-misplaced line was corrected on the /services pages (e.g.
// the On-Demand PDF's own "why us" heading literally read "...for
// Healthcare Mobile App Development?", fixed the same way here).
const introBullets = [
  "Cost Efficiency",
  "Wider Audience Reach",
  "24/7 Accessibility",
  "Centralized Data",
  "Better Client Experience",
];

const finalCtaHeading = "Ready to take the first step\nYour ideas deserve the right attention.";
const finalCtaLabel = "Start Your Project";

export const solutionDetails: SolutionDetail[] = [
  {
    slug: "fitness",
    navLabel: "Fitness App",
    metaDescription:
      "We are a leading fitness app development company in the USA, delivering innovative and result-driven fitness app development services that enhance user engagement, boost retention, and drive real health outcomes.",
    heroTitle: "Fitness App Development Company",
    heroDescription:
      "We are a leading fitness app development company in the USA, delivering innovative and result-driven fitness app development services that enhance user engagement, boost retention, and drive real health outcomes.",
    heroBullets: ["Seamless Delivery", "Customized Fitness Plans", "Flexible Hiring Models", "Cost-Effective"],
    introHeading: "Fitness App Development Necessary for Every Fitness Business",
    introParagraphs: [
      "Managing supremacy in the fitness industry requires the right technology. With the best team of app developers, we build an app that showcases your programs and keeps members engaged.",
      "As a fitness app development company, we build apps that enhance member engagement, simplify scheduling, and streamline coaching. Our customized apps improve retention and grow revenue.",
    ],
    introBullets,
    stats: solutionStats,
    whyHeading: "Why is Trickle Your Trusted Partner for Fitness Mobile App Development?",
    whySubheading:
      "Our mobile application development team is dedicated to providing scalable, intuitive, and reliable applications that improve member engagement and business performance.",
    whyPoints: [
      {
        id: "yoga-meditation",
        title: "Yoga & Meditation App",
        description:
          "Transform the way people practice mindfulness with apps that combine yoga and meditation expertise. As one of the top trusted fitness app development companies, we create intuitive solutions that make a stress-free lifestyle.",
      },
      {
        id: "fitness-workout",
        title: "Fitness & Workout App",
        description:
          "Our fitness and workout app development is designed to inspire healthier lifestyles. With precision-crafted applications, we ensure that your app stands out in a competitive market through our fitness apps development services.",
      },
      {
        id: "diet-nutrition",
        title: "Diet & Nutrition App",
        description:
          "With our fitness application development, we create diet and nutrition applications that make meal planning easy, monitor macros, and ensure healthier eating habits for users worldwide.",
      },
      {
        id: "activity-tracking",
        title: "Activity Tracking App",
        description:
          "We will track every movement accurately by giving the apps developed by our Canadian fitness app development company. Your app will offer seamless activity tracking and new features for any fitness enthusiast.",
      },
    ],
    ctaBannerHeading: "Level-Up Your Fitness Brand with Us!",
    ctaBannerParagraph:
      "To improve your exercise experience, get a safe, scalable app. Working together with Trickle, we will help you reach exercise fans and offer your services.",
    ctaBannerLabel: "Talk to our expert",
    finalCtaHeading,
    finalCtaLabel,
    process: {
      heading: "Process of Creating Fitness Application",
      description: sixStepProcessDescription,
      steps: [
        { id: "requirement-gathering", icon: "requirement-gathering", label: "Requirement Gathering" },
        { id: "ui-ux-designing", icon: "ui-ux-designing", label: "UI/UX Designing" },
        { id: "app-development", icon: "development", label: "App Development" },
        { id: "testing", icon: "testing", label: "Testing" },
        { id: "deployment", icon: "deployment", label: "Deployment" },
        { id: "support-maintenance", icon: "support-maintenance", label: "Support & Maintenance" },
      ],
    },
  },
  {
    slug: "on-demand",
    navLabel: "On-Demand App",
    metaDescription:
      "Do you also need an app that meets your customers' needs? Customers expect services with just a click in this modern, fast-moving world. As an on-demand app development company, we help businesses succeed in this changing landscape.",
    heroTitle: "On Demand App Development Company",
    heroDescription:
      "Do you also need an app that meets your customers' needs? Customers expect services with just a click in this modern, fast-moving world. As an on-demand app development company, we help businesses succeed in this changing landscape. Our apps boost your business's flexibility, engagement, and growth.",
    heroBullets: ["Customised Solutions", "Quick Launch Time", "Advanced Features", "Post-Launch Support"],
    introHeading: "Custom On-Demand App Development for Every Business",
    introParagraphs: [
      "Build a business-ready future with our app development solutions focusing on growth and customer needs.",
      "As an on-demand app development company, we build apps that enhance customer acquisition and retention, simplify operations, and streamline support — tailored to startups, mid-sized industries, large enterprises, and e-commerce alike.",
    ],
    introBullets,
    stats: solutionStats,
    whyHeading: "Why is Trickle Your Trusted Partner for On-Demand Mobile App Development?",
    whySubheading:
      "Our mobile application development team is dedicated to providing scalable, intuitive, and reliable applications that improve customer experience and business performance.",
    whyPoints: [
      {
        id: "startup",
        title: "Startup",
        description:
          "We offer on-demand app development services tailored for startups. Many service providers would require their start-up clients to be fully functional and launch-ready, but the apps are designed to enhance customer acquisition and attention from the very beginning.",
      },
      {
        id: "mid-sized",
        title: "Mid-Sized Industries",
        description:
          "We create on-demand solutions for mid-sized industries, with efficiency, boost customer retention, and support your team. Our solutions are built to scale, keeping you business competitive.",
      },
      {
        id: "large-enterprises",
        title: "Large Enterprises",
        description:
          "We develop custom on-demand applications for large businesses that reduce friction, enhance innovation, scalability, and trust. Our solutions integrate with your current systems to improve efficiency and support growth.",
      },
      {
        id: "e-commerce",
        title: "E-commerce",
        description:
          "We empower e-commerce with scalable, on-demand app development that streamlines order management, enhances customer satisfaction, and boosts conversions. Our products offer customized shopping experiences that promote return business.",
      },
    ],
    ctaBannerHeading: "Take A Lead On the Market with a Revolutionary On-Demand App",
    ctaBannerParagraph:
      "A smooth on-demand app platform for today's digital marketplace will help you increase your e-commerce business.",
    ctaBannerLabel: "Talk to our expert",
    finalCtaHeading,
    finalCtaLabel,
    process: {
      heading: "Process of Creating On Demand Application",
      description: sixStepProcessDescription,
      steps: [
        { id: "requirement-gathering", icon: "requirement-gathering", label: "Requirement Gathering" },
        { id: "ui-ux-designing", icon: "ui-ux-designing", label: "UI/UX Designing" },
        { id: "app-development", icon: "development", label: "App Development" },
        { id: "testing", icon: "testing", label: "Testing" },
        { id: "deployment", icon: "deployment", label: "Deployment" },
        { id: "support-maintenance", icon: "support-maintenance", label: "Support & Maintenance" },
      ],
    },
  },
  {
    slug: "salon",
    navLabel: "Salon App",
    metaDescription:
      "Is your salon ready for a digital upgrade? At Trickle Solutions, we're a professional salon app development company to ensure your business runs smoothly. Our primary focus is providing excellent salon scheduling app development.",
    heroTitle: "Salon App Development Company",
    heroDescription:
      "Is your salon ready for a digital upgrade? At Trickle Solutions, we're a professional salon app development company to ensure your business runs smoothly. Our primary focus is providing excellent salon scheduling app development that addresses the particular requirements of the modern beauty sector. Our team of experts offers salon software solutions to enhance business performance, boost client satisfaction, and streamline processes.",
    heroBullets: ["End-to-End Support", "24/7 Assistance", "Customized Solutions", "On-Time Delivery"],
    introHeading: "Why is Salon Scheduling App Development Beneficial for Your Business?",
    introParagraphs: [
      "Investing in salon scheduling app development will change your business in many ways. A well-designed application simplifies the service booking process for your clients and makes appointment scheduling a breeze. Since salon booking app development entails real-time appointment scheduling, appointments will be reduced, no-shows will be reduced, and daily schedules will be maximized.",
      "The application for salon owners helps operations, attracts more customers, and helps the business thrive. Features such as reminders, real-time scheduling, and personalized offers keep clients engaged and returning for more.",
    ],
    introBullets: [
      "24/7 Booking Convenience",
      "Real-Time Updates",
      "Enhanced Customer Satisfaction",
      "Personalized Services",
      "Increased Revenue",
      "Build Brand Image",
    ],
    stats: solutionStats,
    whyHeading: "Maximize Your Salon Business 10x with Our On Demand Salon App Development Services",
    whySubheading:
      "A feature-rich salon booking platform, built around your clients, your staff, and your service menu.",
    whyPoints: [
      {
        id: "salon-booking",
        title: "Salon Booking App Development",
        description:
          "The salon booking app lets you handle your bookings efficiently with just a click. This powerful application will enable you to deliver fantastic service, streamline your operations, and grow your business. A design with features like push notifications, easy payment options, and quick confirmation will keep your clients returning.",
      },
      {
        id: "home-service-spa",
        title: "Home Service Spa App Development",
        description:
          "With our mobile app development services, you can allow your spa to go beyond the next level and let your clients relax at their doorstep. Features like location tracking, easy payment options, and seamless appointment times can grow your client base and provide unparalleled convenience.",
      },
      {
        id: "hair-salon",
        title: "Hair Salon Application",
        description:
          "Support your salon clients with our user-friendly salon app. They can search for services and availability or book appointments within a few minutes. All facilities are provided in the app, and clients can pay for their services, with a history of bookings to keep your client's interest in running your salon.",
      },
      {
        id: "beauty-salon",
        title: "Beauty Salon Application",
        description:
          "Improve the functionality of your beauty salon with our salon booking app development company. This simple and convenient app helps regulate appointments and lets clients choose and pay for their preferred services, making it a great way to keep track of their previous visits and favorite services.",
      },
    ],
    ctaBannerHeading: "Unlock Effortless and Exceptional Digital Transformation.",
    ctaBannerParagraph:
      "With the help of a feature-rich admin panel, customer app, and professional app, you can empower your salon team and keep every booking, offer, and rating in one place.",
    ctaBannerLabel: "Talk to our expert",
    finalCtaHeading,
    finalCtaLabel,
  },
  {
    slug: "pickup-and-delivery",
    navLabel: "Pickup & Delivery App",
    metaDescription:
      "Frustrated with complicated delivery systems? We make the entire process easy with our excellent pickup and delivery app development services. As an established pickup and delivery app development company, we provide solutions that help businesses guarantee seamless and on-time delivery.",
    heroTitle: "Pickup and Delivery App Development Company",
    heroDescription:
      "Frustrated with complicated delivery systems? We make the entire process easy with our excellent pickup and delivery app development services. As an established pickup and delivery app development company, we provide solutions that help businesses guarantee seamless and on-time delivery.",
    heroBullets: ["End-to-End Support", "24/7 Assistance", "Customized Solutions", "On-Time Delivery"],
    introHeading: "Pickup and Delivery App Development Necessary for Pickup and Delivery App Company",
    introParagraphs: [
      "Managing supremacy in the pickup and delivery industry requires implementation technologies. With the best team of app developers, we develop an app that efficiently displays the offerings and enables client interactions. We ensure that the app fits your unique business requirements.",
      "As a pickup and delivery app development company, we make apps that enhance delivery operations, simplify dispatch, and streamline customer relations. Our customized apps improve your overall performance, save both money and time, and increase the productivity of your business.",
    ],
    introBullets,
    stats: solutionStats,
    whyHeading: "Seamless Pickup and Delivery App at Your Fingertips",
    whySubheading:
      "Our custom pickup and delivery app development services simplify and streamline your operations, from scheduling pickups to giving your customers a superb and reliable experience.",
    whyPoints: [
      {
        id: "simplified-operations",
        title: "Simplifies Delivery Operations",
        description:
          "With user-friendly applications handling everything from scheduling pickups to real-time tracking, your pickups and deliveries are designed to grow with your business and keep pace with consumer demand.",
      },
      {
        id: "efficiency-productivity",
        title: "Boosts Efficiency & Productivity",
        description:
          "Whether your deliveries are local or nationwide, our pickup and delivery apps streamline dispatch and routing so your team spends less time coordinating and more time delivering.",
      },
      {
        id: "customer-satisfaction",
        title: "Improves Customer Satisfaction",
        description:
          "Live tracking and clear updates keep your customers informed from pickup to drop-off, building the kind of reliable experience that keeps them coming back.",
      },
      {
        id: "cashless-payment",
        title: "Supports Cashless & Digital Payment",
        description:
          "Built-in cashless and digital payment support means every transaction is quick, secure, and convenient — for your drivers and your customers alike.",
      },
    ],
    ctaBannerHeading: "Tap Into Success with Your Own Pickup and Delivery App",
    ctaBannerParagraph:
      "We are a reliable pickup and delivery application developer specializing in developing highly-scalable on-demand pickup and delivery development services. Our knowledgeable mobile app development company services are globally renowned for providing avant-garde and reliable mobile app solutions. Our team of experts is capable of creating highly-customizable mobile solutions for business-specified pickup and delivery needs. If you are willing to lead your business globally and connect with your customers worldwide, rely on our dependable pickup and delivery development services.",
    ctaBannerLabel: "Schedule a Talk",
    finalCtaHeading,
    finalCtaLabel,
  },
  {
    slug: "food-delivery",
    navLabel: "Food Delivery App",
    metaDescription:
      "Do you want to know the easiest way to grow your restaurant business? You need a well-designed mobile application development from a well-trusted company focused on food delivery app development.",
    heroTitle: "Food Delivery App Development Company",
    heroDescription:
      "Do you want to know the easiest way to grow your restaurant business? You need a well-designed mobile application development from a well-trusted company focused on food delivery app development. We are focused on creating hassle-free customer experience through user engagement and live tracking, starting from scratch or improving your existing system, and customizing an app to take you over the top of this competitive food delivery industry.",
    heroBullets: ["End-to-End Support", "24/7 Assistance", "Customized Solutions", "On-Time Delivery"],
    introHeading: "Food Delivery App Development Necessary for Food App Company",
    introParagraphs: [
      "Managing supremacy in the food delivery industry requires implementation technologies. With the best team of app developers, we develop an app that efficiently displays the offerings and enables client interactions. We ensure that the app fits your unique business requirements.",
      "As a food delivery app development company, we make apps that enhance restaurant operations, simplify ordering, and streamline customer relations. Our customized apps improve your overall performance, save both money and time, and increase the productivity of your business.",
    ],
    introBullets,
    stats: solutionStats,
    whyHeading: "Why is Trickle Solutions Your Trusted Partner in Food Delivery App Development?",
    whySubheading:
      "A food delivery app is a wise choice to meet rising customer needs. Our food delivery app development services can help you create a smooth-running app for your users to order food.",
    whyPoints: [
      {
        id: "increased-revenue",
        title: "Increased Revenue",
        description:
          "A food delivery app helps grow your clientele and has an impact on sales by providing 24x7 services. Special offers and charges for delivery can also give your income a boost.",
      },
      {
        id: "brand-visibility",
        title: "Brand Visibility",
        description:
          "A food delivery app has an impact on brand awareness by placing your company on customers' phones and building customer loyalty through customized exchanges.",
      },
      {
        id: "contactless-operations",
        title: "Contactless Operations",
        description:
          "Food delivery apps provide a seamless experience, providing a safe and convenient experience for both customers and delivery staff.",
      },
      {
        id: "costs-saving",
        title: "Costs Saving",
        description:
          "Food delivery apps help save costs by reducing overhead costs and simplifying operations, thereby reducing the need for third-party services.",
      },
    ],
    ctaBannerHeading: "Tap Into Success with Your Own Food Delivery App",
    ctaBannerParagraph:
      "We are a reliable food delivery application developer specializing in developing highly-scalable on-demand food delivery development services. Our knowledgeable mobile app development company services are globally renowned for providing avant-garde and reliable mobile app solutions. Our team of experts is capable of creating highly-customizable mobile solutions for business-specified food delivery needs. If you are willing to lead your business globally and connect with your customers worldwide, rely on our dependable food delivery development services.",
    ctaBannerLabel: "Start Your Project",
    finalCtaHeading,
    finalCtaLabel,
  },
  {
    slug: "grocery-delivery",
    navLabel: "Grocery Delivery App",
    metaDescription:
      "Imagine how it would be if your grocery store could bring convenience straight to customers' doorsteps. Our grocery delivery app development can help you create a straightforward interface that makes ordering and subsequent delivery effortless.",
    heroTitle: "Grocery Delivery App Development Company",
    heroDescription:
      "Imagine how it would be if your grocery store could bring convenience straight to customers' doorsteps. Our grocery delivery app development can help you create a straightforward interface that makes ordering and subsequent delivery effortless. As a grocery delivery app development company, we aim to provide customers with innovative solutions mixed with practicality, meaning your app will become just their favorite pick for today's shoppers.",
    heroBullets: ["User-Friendly Interface", "Secure Payment Gateways", "Customized Solutions", "24/7 Support"],
    introHeading: "Grocery Delivery App Development Necessary for Grocery App Company",
    introParagraphs: [
      "Managing supremacy in the grocery delivery industry requires implementation technologies. With the best team of app developers, we develop an app that efficiently displays the offerings and enables client interactions. We ensure that the app fits your unique business requirements.",
      "As a grocery delivery app development company, we make apps that enhance store operations, simplify ordering, and streamline customer relations. Our customized apps improve your overall performance, save both money and time, and increase the productivity of your business.",
    ],
    introBullets,
    stats: solutionStats,
    whyHeading: "Why is Trickle Solutions Your Trusted Partner in Grocery Delivery App Development?",
    whySubheading:
      "We specialize in grocery delivery app development that helps businesses scale quickly while improving efficiency and taking the lead position.",
    whyPoints: [
      {
        id: "on-demand-experience",
        title: "10+ Years in the On-Demand Industry",
        description:
          "A decade of hands-on experience building on-demand delivery platforms, so your grocery app launches on technology that's already been proven at scale.",
      },
      {
        id: "in-house-experts",
        title: "40+ App Developers and Designers",
        description:
          "A dedicated in-house team of developers and designers works on your grocery app from first wireframe to final release, with no outsourced guesswork in between.",
      },
      {
        id: "satisfied-clients",
        title: "120+ Satisfied Clients",
        description:
          "Over a hundred businesses have trusted us to build their on-demand platforms — grocery delivery included — and come back for ongoing support and new features.",
      },
      {
        id: "hours-of-work",
        title: "600+ Hours of Work",
        description:
          "Hundreds of hours already invested in refining the on-demand delivery experience mean fewer surprises and a faster path from kickoff to launch for your grocery app.",
      },
    ],
    ctaBannerHeading: "Tap Into Success with Your Own Grocery App",
    ctaBannerParagraph:
      "We are a reliable grocery delivery application developer specializing in developing highly-scalable on-demand grocery delivery development services. Our knowledgeable mobile app development company services are globally renowned for providing avant-garde and reliable mobile app solutions. Our team of experts is capable of creating highly-customizable mobile solutions for business-specified grocery delivery needs. If you are willing to lead your business globally and connect with your customers worldwide, rely on our dependable grocery delivery development services.",
    ctaBannerLabel: "Start Your Project",
    finalCtaHeading,
    finalCtaLabel,
  },
  {
    // Transcribed from the Healthcare_App.pdf reference export (a
    // Figma full-page design, 1440x6760pt — rasterized at 150dpi and
    // read in vertical slices since it's a single very tall page).
    // Unlike the other solution pages, Healthcare's PDF has its own
    // dedicated 4-card "Winning Strategies for Success in the On-Demand
    // Healthcare Market" section (Exceptional User Experience / Ensure
    // Data Security / Comprehensive Support / Advanced Technologies),
    // each already a real title+description pair — used here as the
    // whyPoints instead of the shorter 10-item benefit-pill grid the
    // PDF also shows, for the same reason Fitness/On-Demand's richer
    // cards were preferred over their own generic pill lists. Two
    // small copy fixes from the source, matching the session's existing
    // practice of correcting obvious PDF slips: "HIPAA & GDPR Complaint
    // Solutions" -> "...Compliant Solutions", and "Secure & Complaint
    // Project" is not used here at all (superseded by the richer cards
    // above). The intro section's second paragraph is completed with
    // "...enhance patient-centric care." — the PDF's own bullet list
    // visually cuts the sentence off at "patient-centric".
    slug: "healthcare",
    navLabel: "Healthcare App",
    metaDescription:
      "What if your healthcare business could deliver care faster, smarter, and more efficiently? As a leading healthcare app development company, Trickle offers top-notch app development services that help patients achieve the best possible outcomes.",
    heroTitle: "Healthcare App Development Company",
    heroDescription:
      "What if your healthcare business could deliver care faster, smarter, and more efficiently? As a leading healthcare app development company, Trickle offers top-notch app development services that help patients achieve the best possible outcomes. We create solutions that enable healthcare providers to help patients overcome challenges in the future of healthcare. We need to ensure that your healthcare apps are user-friendly, secure, and fit for purpose.",
    heroBullets: ["HIPAA & GDPR Compliant Solutions", "24x7 Support", "Secure Applications", "Advanced Technologies"],
    introHeading: "Why Does Every Healthcare Provider Need a Custom Healthcare App Development Solution?",
    introParagraphs: [
      "Today, healthcare providers require innovative solutions to meet modern demands. Our healthcare application development enhances service delivery by streamlining processes and improving communication with patients and employees. These applications boost daily performance and enhance patient experience through direct access to medical information and remote care services.",
      "Secure data handling and seamless integration prepare your practice for modern healthcare demands. Custom applications give you an edge over traditional providers in the digital marketplace. They optimize workflows, lessen administrative burdens, and enhance patient-centric care.",
    ],
    introBullets: ["Effective Patient Management", "Time-Saving", "Cost Effective", "Secured Patient Record", "Remote Monitoring"],
    stats: solutionStats,
    whyHeading: "Why is Trickle Your Trusted Partner for Healthcare Mobile App Development?",
    whySubheading:
      "Our mobile application development team is dedicated to providing scalable, intuitive, and reliable applications that improve patient care and business performance.",
    whyPoints: [
      {
        id: "user-experience",
        title: "Exceptional User Experience",
        description:
          "Focus on creating intuitive, fast, and reliable apps that simplify healthcare access. A smooth onboarding process, easy navigation, and responsive support make users come back.",
      },
      {
        id: "data-security",
        title: "Ensure Data Security",
        description:
          "Protecting sensitive health information is critical. Implement strict security protocols and comply with regulations to build trust and credibility with users and healthcare providers.",
      },
      {
        id: "comprehensive-support",
        title: "Comprehensive Support",
        description:
          "Offer 24/7 customer and technical support to quickly address issues and maintain user satisfaction. Reliable support services help build loyalty and trust in your healthcare platform.",
      },
      {
        id: "advanced-technologies",
        title: "Advanced Technologies",
        description:
          "Incorporate AI, telemedicine, wearable integration, and real-time analytics to offer personalized, efficient, and innovative healthcare solutions that differentiate your platform from competitors.",
      },
    ],
    ctaBannerHeading: "Get Started Now — Build a Smarter, More Trusted Healthcare Solution!",
    ctaBannerParagraph:
      "Focus on user experience, data security, advanced tech, scalability, and partnerships to lead the market. Take the first step toward transforming your healthcare platform. Partner with us to build innovative, secure, and scalable solutions that truly stand out in the competitive on-demand health industry. Let's grow together!",
    ctaBannerLabel: "Get Started Now",
    finalCtaHeading,
    finalCtaLabel,
  },
  {
    // Transcribed from the E-commerce App reference screenshot (the user
    // uploaded a rendered page image, not a PDF, of this one). The hero
    // paragraph is partly obscured by the Solutions dropdown's own
    // screenshot overlay in the source image; the gaps are bridged with
    // the obviously-intended connective words ("Trickle is...", "Our
    // trained developers...", "We utilize...", "We will transform...").
    // This page's PDF/screenshot has no dedicated 4-card "why us" grid
    // (unlike the other 8 solution pages) — its whyPoints below are
    // written to fit the existing SolutionWhyUs template and this page's
    // own hero copy, not transcribed verbatim from a source section.
    slug: "ecommerce",
    navLabel: "Ecommerce App",
    metaDescription:
      "Do you also wish to improve your business's online visibility? Trickle is an experienced ecommerce mobile app development company that offers end-to-end solutions to build a strong online presence.",
    heroTitle: "E-commerce App",
    heroDescription:
      "Do you also wish to improve your business's online visibility? Trickle is an experienced ecommerce mobile app development company that offers end-to-end solutions to build a strong online presence. Our trained developers develop mobile apps that grab your customers' attention and are visually appealing. We utilize the latest technologies to offer an advanced shopping experience and improve conversions. We will transform your app into a masterpiece.",
    heroBullets: ["End-to-End Support", "24/7 Assistance", "Customized Solutions", "On-Time Delivery", "ROI Focused"],
    introHeading: "Our Top-Rated Ecommerce Development Solutions",
    introParagraphs: [
      "We create a mobile-friendly app with an ecommerce foundation to provide fantastic on-the-go access to any screen size.",
      "Our developers have top-class Ecommerce application development services to help you meet each unique business need and stand out in the competition with outstanding scalable Ecommerce mobile app development services.",
    ],
    introBullets: [],
    stats: solutionStats,
    whyHeading: "Why is Trickle Solutions Your Trusted Partner in Ecommerce App Development?",
    whySubheading:
      "Our ecommerce app development team is dedicated to providing scalable, intuitive, and reliable applications that improve shopping experience and business performance.",
    whyPoints: [
      {
        id: "product-catalog",
        title: "Seamless Product Catalog",
        description:
          "Showcase every product with rich images, variants, and real-time stock so shoppers always see what's actually available.",
      },
      {
        id: "secure-checkout",
        title: "Secure Checkout & Payments",
        description:
          "Built-in support for cards, digital wallets, and multiple payment gateways keeps every transaction fast and secure.",
      },
      {
        id: "personalized-shopping",
        title: "Personalized Shopping Experience",
        description:
          "Smart recommendations and saved preferences help turn first-time visitors into repeat customers.",
      },
      {
        id: "order-tracking",
        title: "Order & Delivery Tracking",
        description:
          "Real-time order status and delivery tracking keep customers informed from checkout to doorstep.",
      },
    ],
    ctaBannerHeading: "Tap Into Success with Your Own E-Commerce App",
    ctaBannerParagraph:
      "We are a reliable Ecommerce application developer specializing in developing highly-scalable on-demand ecommerce development services. Our knowledgeable Ecommerce mobile app development company services are globally renowned for providing avant-garde and reliable mobile app solutions. Our team of experts is capable of creating highly-customizable mobile solutions for business-specified Ecommerce needs. If you are willing to lead your business globally and connect with your customers worldwide, rely on our dependable Ecommerce development services.",
    ctaBannerLabel: "Start Your Project",
    finalCtaHeading,
    finalCtaLabel,
  },
  {
    slug: "real-estate",
    navLabel: "Real Estate App",
    metaDescription:
      "What is the key to success in the real estate business today? A mobile app could be just that turning point you need. As a trusted real estate app development company, we craft custom-tailored applications that simplify property management and speed up deals.",
    heroTitle: "Real Estate App Development Company",
    heroDescription:
      "What is the key to success in the real estate business today? A mobile app could be just that turning point you need. As a trusted real estate app development company, we craft custom-tailored applications that simplify property management and speed up deals, bringing clients closer to you. Our expert real estate app developers will deliver your dream app.",
    heroBullets: ["End-to-End Support", "24/7 Assistance", "Customized Solutions", "On-Time Delivery"],
    introHeading: "Real Estate App Development Necessary for Every Real Estate Company",
    introParagraphs: [
      "Managing supremacy in the real estate industry requires implementation technologies. With the best team of app developers, we develop an app that efficiently displays the offerings and enables client interactions. We ensure that the app fits your unique business requirements.",
      "As a real estate app development company, we make apps that enhance property operations, simplify operations, and streamline customer relations. Our customized apps improve your overall performance, save both money and time, and increase the productivity of your business.",
    ],
    introBullets,
    stats: solutionStats,
    whyHeading: "Why is Trickle Solutions Your Trusted Partner in Real Estate App Development?",
    whySubheading:
      "Our real estate app development team is dedicated to providing scalable, intuitive, and reliable applications that improve client experience and business performance.",
    whyPoints: [
      {
        id: "centralized-listings",
        title: "Centralized Property Listings",
        description:
          "Every listing, photo, and floor plan lives in one place, so clients and agents always see the same up-to-date inventory.",
      },
      {
        id: "virtual-tours",
        title: "Virtual Tours & Visualization",
        description:
          "Interactive property visuals help buyers shortlist homes remotely, cutting down on wasted site visits for your agents.",
      },
      {
        id: "secure-communication",
        title: "Secure Client Communication",
        description:
          "Built-in, secure messaging keeps every conversation, offer, and document tied to the right listing and the right client.",
      },
      {
        id: "faster-closures",
        title: "Faster Deal Closures",
        description:
          "Automated scheduling, reminders, and status tracking shorten the time between a client's first inquiry and a signed deal.",
      },
    ],
    ctaBannerHeading: "Tap Into Success with Your Own Real Estate App",
    ctaBannerParagraph:
      "We are a reliable real estate application developer specializing in developing highly-scalable on-demand real estate development services. Our knowledgeable mobile app development company services are globally renowned for providing avant-garde and reliable mobile app solutions. Our team of experts is capable of creating highly-customizable mobile solutions for business-specified real estate needs. If you are willing to lead your business globally and connect with your customers worldwide, rely on our dependable real estate development services.",
    ctaBannerLabel: "Start Your Project",
    finalCtaHeading,
    finalCtaLabel,
  },
];

export function getSolutionDetail(slug: string): SolutionDetail | undefined {
  return solutionDetails.find((solution) => solution.slug === slug);
}
