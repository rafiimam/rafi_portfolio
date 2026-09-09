import bookStore from "./assets/bookStore.png";
import photoGallery from "./assets/photoGallery.png";
import wordPress from "./assets/wordPress.png";
import wordPress2 from "./assets/wordPress2.png";
import portfolio from "./assets/portfolio.png";
import panda from "./assets/panda.png";
import todo from "./assets/todo.png";
import neta from "./assets/neta.png";

import accountOpening from "./assets/banking/account-opening.png";
import nidVerification from "./assets/banking/nid-verification.png";
import livenessFace from "./assets/banking/liveness-face.png";
import signatureMatch from "./assets/banking/signature-match.png";
import banglaQr from "./assets/banking/banglaqr.png";
import serviceDesk from "./assets/banking/service-desk.png";
import selfService from "./assets/banking/self-service.png";
import customerAmend from "./assets/banking/customer-amend.png";
import ocrPaperless from "./assets/banking/ocr-paperless.png";
import coreConnect from "./assets/banking/core-connect.png";
import payments from "./assets/banking/payments.png";
import intraweb from "./assets/banking/intraweb.png";
import otpAuth from "./assets/banking/otp-auth.png";
import dedupCif from "./assets/banking/dedup-cif.png";
import bbReporting from "./assets/banking/bb-reporting.png";
import cctv from "./assets/banking/cctv.png";

export type ProjectCategory = "banking" | "earlier";

export interface Project {
  id: number;
  category: ProjectCategory;
  img: string;
  title: string;
  technology: string;
  summary: string;
  liveLink: string;
  githubRepo: string;
}

const repo = (name: string) => `https://github.com/rafiimam/${name}`;

export const projects: Project[] = [
  {
    id: 0,
    category: "banking",
    img: accountOpening,
    title: "Digital Account Opening",
    technology: ".NET, eKYC, documents",
    summary:
      "Onboarding API and forms for new accounts: identity, nominee, and document capture with a review step.",
    liveLink: "",
    githubRepo: repo("jbl-account-opening"),
  },
  {
    id: 1,
    category: "banking",
    img: nidVerification,
    title: "NID Verification",
    technology: "Node.js, partner BFF",
    summary:
      "Backend-for-frontend that verifies identity, caches partner tokens, and keeps credentials off the client.",
    liveLink: "",
    githubRepo: repo("jbl-nid-verification"),
  },
  {
    id: 2,
    category: "banking",
    img: livenessFace,
    title: "Liveness and Face Match",
    technology: "Python, InsightFace, PAD",
    summary:
      "Guided capture, presentation-attack checks, and photo match used during digital onboarding.",
    liveLink: "",
    githubRepo: repo("jbl-liveness-verification"),
  },
  {
    id: 3,
    category: "banking",
    img: signatureMatch,
    title: "Signature Match",
    technology: "Python, Siamese model",
    summary:
      "Branch workstation that compares a presented signature with the stored specimen and records a decision.",
    liveLink: "",
    githubRepo: repo("jbl-signature-match"),
  },
  {
    id: 4,
    category: "banking",
    img: banglaQr,
    title: "BanglaQR",
    technology: ".NET, payments",
    summary:
      "QR generation, payment status, and settlement handling for Bangla QR without exposing gateway secrets.",
    liveLink: "",
    githubRepo: repo("jbl-banglaqr"),
  },
  {
    id: 5,
    category: "banking",
    img: serviceDesk,
    title: "ICT Service Desk",
    technology: ".NET, React",
    summary:
      "Internal ticketing for branches and head office: queues, priority, and SLA instead of email trails.",
    liveLink: "",
    githubRepo: repo("jbl-ict-service-desk"),
  },
  {
    id: 6,
    category: "banking",
    img: selfService,
    title: "Self-Service Portal",
    technology: "React, APIs",
    summary:
      "Customer portal for statements, card services, and requests, with masked account data after sign-in.",
    liveLink: "",
    githubRepo: repo("jbl-self-service-portal"),
  },
  {
    id: 7,
    category: "banking",
    img: customerAmend,
    title: "Customer Amendment",
    technology: "React, Node.js",
    summary:
      "Maker-checker flow to amend mobile, address, or email, with an audit trail of who changed what.",
    liveLink: "",
    githubRepo: "https://github.com/rafiimam/customer_amendment_project",
  },
  {
    id: 8,
    category: "banking",
    img: ocrPaperless,
    title: "OCR and Paperless",
    technology: ".NET, document AI",
    summary:
      "Document intake, field extraction with confidence, and archival through object-storage middleware.",
    liveLink: "",
    githubRepo: repo("jbl-ocr-middleware"),
  },
  {
    id: 9,
    category: "banking",
    img: coreConnect,
    title: "Core Connect",
    technology: ".NET, TCS, Kafka",
    summary:
      "Middleware for customer lookup, deposit booking, and notifications between channels and core banking.",
    liveLink: "",
    githubRepo: repo("jbl-jamunaconnect"),
  },
  {
    id: 10,
    category: "banking",
    img: payments,
    title: "Payment Middleware",
    technology: ".NET, IBFT, pay order",
    summary:
      "Payment routing with idempotency, timeouts, and a retry view for IBFT and pay-order style flows.",
    liveLink: "",
    githubRepo: repo("jbl-payment-middleware"),
  },
  {
    id: 11,
    category: "banking",
    img: intraweb,
    title: "Pulse",
    technology: ".NET, React",
    summary:
      "Staff intranet for circulars and branch services. Previously called IntraWeb; the product name is now Pulse.",
    liveLink: "",
    githubRepo: repo("jbl-pulse"),
  },
  {
    id: 24,
    category: "banking",
    img: serviceDesk,
    title: "Back Office Panel",
    technology: "Node.js",
    summary:
      "Operations console for queues, reviews, and approvals. Separate from the customer self-service portal.",
    liveLink: "",
    githubRepo: repo("jbl-back-office-panel"),
  },
  {
    id: 25,
    category: "banking",
    img: payments,
    title: "Bancassurance",
    technology: "Node.js, React",
    summary:
      "Life-insurance applications and status through the bank channel, including the Delta partnership.",
    liveLink: "",
    githubRepo: repo("jbl-bancassurance"),
  },
  {
    id: 12,
    category: "banking",
    img: otpAuth,
    title: "Authentication and OTP",
    technology: "NestJS, Node.js, JWT",
    summary:
      "Sign-in, one-time codes, and short-lived sessions shared across customer and staff applications.",
    liveLink: "",
    githubRepo: repo("jbl-authentication"),
  },
  {
    id: 13,
    category: "banking",
    img: dedupCif,
    title: "CIF Deduplication",
    technology: "Matching, data quality",
    summary:
      "Side-by-side review of possible duplicate customer records, with keep, merge, or dismiss.",
    liveLink: "",
    githubRepo: repo("jbl-cif-dedup"),
  },
  {
    id: 14,
    category: "banking",
    img: bbReporting,
    title: "Central Bank Reporting",
    technology: "Validation, extracts",
    summary:
      "Regulatory pack preparation with schema checks and a submission calendar before anything is sent.",
    liveLink: "",
    githubRepo: "https://github.com/rafiimam/bangladesh-bank-project",
  },
  {
    id: 15,
    category: "banking",
    img: cctv,
    title: "Branch Monitoring",
    technology: "Operations console",
    summary:
      "Camera-status console for branch monitoring. Public sample has no live feeds or site details.",
    liveLink: "",
    githubRepo: "https://github.com/rafiimam/cctv-monitoring-system",
  },
  {
    id: 16,
    category: "earlier",
    img: bookStore,
    title: "Online Book Store",
    technology: "MERN",
    summary: "Bookstore client with catalog and cart flows.",
    liveLink: "https://book-client-s60s.onrender.com",
    githubRepo: "https://github.com/rafiimam/Book-Client",
  },
  {
    id: 17,
    category: "earlier",
    img: portfolio,
    title: "Portfolio",
    technology: "TypeScript, React, Tailwind",
    summary: "This site: banking work, earlier builds, and public samples.",
    liveLink: "https://rafiimam.github.io/rafi_portfolio/",
    githubRepo: "https://github.com/rafiimam/rafi_portfolio",
  },
  {
    id: 18,
    category: "earlier",
    img: photoGallery,
    title: "Draggable Photo Gallery",
    technology: "React, Framer Motion",
    summary: "Reorderable gallery built as a React exercise.",
    liveLink: "https://rafiimam.github.io/react-js-task/",
    githubRepo: "https://github.com/rafiimam/react-js-task",
  },
  {
    id: 19,
    category: "earlier",
    img: todo,
    title: "To-do List",
    technology: "TypeScript, React",
    summary: "Typed task list with local state.",
    liveLink: "",
    githubRepo: "https://github.com/rafiimam/todo_list_react_typescript",
  },
  {
    id: 20,
    category: "earlier",
    img: panda,
    title: "Panda Commerce",
    technology: "HTML, CSS, Bootstrap",
    summary: "Static commerce landing page.",
    liveLink: "https://rafiimam.github.io/panda-commerce/",
    githubRepo: "https://github.com/rafiimam/panda-commerce",
  },
  {
    id: 21,
    category: "earlier",
    img: wordPress2,
    title: "Guardian Family Law",
    technology: "WordPress",
    summary: "Client site built on WordPress.",
    liveLink: "http://guardianfamilylaw.com/",
    githubRepo: "",
  },
  {
    id: 22,
    category: "earlier",
    img: wordPress,
    title: "BBS Cost Reduction",
    technology: "WordPress",
    summary: "Client site built on WordPress.",
    liveLink: "https://bbs-cost-reduction.com/",
    githubRepo: "",
  },
  {
    id: 23,
    category: "earlier",
    img: neta,
    title: "E-Commerce Site",
    technology: "WordPress",
    summary: "Client commerce site built on WordPress.",
    liveLink: "https://neta-care.com/",
    githubRepo: "",
  },
];
