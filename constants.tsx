import React from "react";
import { RoadmapSectionType } from "./types";

// --- ICONS ---
const CloudIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.5 4.5 0 002.25 15z"
    />
  </svg>
);
const RocketIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.502 14.367l5.03-5.015a3.5 3.5 0 00.779-1.542C21.5 7.35 21.5 6.84 21.5 5.819v-.488c0-1.57 0-2.355-.49-2.843-.49-.488-1.277-.488-2.853-.488h-.49c-1.025 0-1.537 0-1.997.19a2.5 2.5 0 00-.79.635L9.595 8.478c-.846.844-1.37 1.367-1.573 1.873a2.5 2.5 0 00-.097.482c0 .69.557 1.245 1.67 2.355l.15.15 1.753-1.78a.5.5 0 01.708.708l-1.76 1.785.117.118c1.113 1.11 1.67 1.665 2.362 1.665.153 0 .3-.027.446-.081.519-.191 1.049-.719 1.917-1.584z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.865 8.479a1.5 1.5 0 000-2.356 1.5 1.5 0 00-2.363 0 1.5 1.5 0 002.363 2.356zM2.774 12.481a.5.5 0 01.707 0 .5.5 0 010 .707l-.155.155a.25.25 0 000 .354.25.25 0 00.354 0l1.712-1.71a.5.5 0 01.707 0 .5.5 0 010 .707L4.174 15.265a2 2 0 01-2.83-2.829l.156-.156a.5.5 0 01.707 0zM7.297 16.696a.5.5 0 010 .707l-1.73 1.692a.5.5 0 01-.707-.707l1.73-1.692a.5.5 0 01.707 0zM11.481 18.118a.5.5 0 010 .707l-1.712 1.71a.25.25 0 000 .354.25.25 0 00.354 0l.155-.155a.5.5 0 01.707.707l-.155.155a2 2 0 11-2.829-2.829l1.712-1.71a.5.5 0 01.708 0z"
    />
  </svg>
);

export const BrainIcon = () => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.7086 1.53214C10.9786 1.05676 10.078 0.917375 9.27255 1.04467C8.46803 1.17183 7.62325 1.5904 7.12591 2.39445C6.9332 2.70601 6.81024 3.04646 6.7559 3.40767C5.97312 3.35525 5.18086 3.59264 4.58547 4.08919C3.98255 4.59201 3.59741 5.34432 3.59741 6.25684C3.59741 6.55614 3.63851 6.86315 3.72008 7.17654C3.42298 7.23942 3.13697 7.34918 2.86932 7.50027C1.98542 7.99927 1.36438 8.90663 1.11913 9.88841C0.869371 10.8882 0.989124 12.0467 1.70052 13.0391C2.0609 13.5419 2.54903 13.9691 3.1623 14.305C3.01053 14.5081 2.88229 14.7271 2.77811 14.9565C2.35249 15.8935 2.32044 17.0038 2.64559 17.98C2.97535 18.9701 3.69756 19.8871 4.83624 20.3254C5.57833 20.6111 6.42615 20.6665 7.35551 20.4749C7.39798 20.9494 7.52745 21.3806 7.74983 21.7577C8.22598 22.5651 9.0236 22.9458 9.80541 22.9947C10.5523 23.0414 11.3758 22.778 12 22.2458C12.6242 22.778 13.4477 23.0414 14.1946 22.9947C14.9764 22.9458 15.774 22.5651 16.2502 21.7577C16.4725 21.3806 16.602 20.9494 16.6445 20.4749C17.5738 20.6665 18.4217 20.6111 19.1638 20.3254C20.3024 19.8871 21.0246 18.9701 21.3544 17.98C21.6796 17.0038 21.6475 15.8935 21.2219 14.9565C21.1177 14.7271 20.9895 14.5081 20.8377 14.305C21.451 13.9691 21.9391 13.5419 22.2995 13.0391C23.0109 12.0467 23.1306 10.8882 22.8809 9.88841C22.6356 8.90663 22.0146 7.99927 21.1307 7.50027C20.863 7.34918 20.577 7.23942 20.2799 7.17654C20.3615 6.86315 20.4026 6.55614 20.4026 6.25684C20.4026 5.34432 20.0175 4.59201 19.4145 4.08919C18.8191 3.59264 18.0269 3.35525 17.2441 3.40767C17.1898 3.04646 17.0668 2.70601 16.8741 2.39445C16.3767 1.5904 15.532 1.17183 14.7274 1.04467C13.922 0.917375 13.0214 1.05676 12.2914 1.53214C11.9861 1.73097 12.0139 1.73097 11.7086 1.53214ZM13.0033 20.0518L13.0033 17.5288C13.0045 17.0494 13.1133 16.3457 13.3939 15.7998C13.6573 15.2872 13.9946 15.0268 14.5082 15.0268C15.0623 15.0268 15.5115 14.5773 15.5115 14.0227C15.5115 13.4682 15.0623 13.0186 14.5082 13.0186C13.9202 13.0186 13.4216 13.16 13.0033 13.3894V12.5084C13.0045 12.029 13.1133 11.3254 13.3939 10.7794C13.6573 10.2668 13.9946 10.0064 14.5082 10.0064C15.0623 10.0064 15.5115 9.55688 15.5115 9.00234C15.5115 8.4478 15.0623 7.99826 14.5082 7.99826C13.9202 7.99826 13.4216 8.13957 13.0033 8.36902L13.0033 3.97532C13.005 3.57853 13.1671 3.35779 13.3859 3.21528C13.6436 3.04746 14.0284 2.96723 14.4144 3.02824C14.8013 3.08939 15.0539 3.26704 15.1679 3.45142C15.2603 3.60078 15.3726 3.9329 15.091 4.59054C14.9015 5.03294 15.0524 5.54766 15.4507 5.8175C15.849 6.08734 16.3825 6.03639 16.7226 5.69604C17.0903 5.32811 17.7563 5.32032 18.1299 5.63189C18.2795 5.75662 18.396 5.94564 18.396 6.25684C18.396 6.59422 18.2548 7.14633 17.705 7.91672C17.4235 8.31116 17.4637 8.85055 17.8006 9.19878C18.1375 9.54701 18.6749 9.60465 19.0779 9.33577C19.5101 9.04741 19.8566 9.08664 20.1448 9.24934C20.4837 9.44063 20.8032 9.85112 20.9342 10.3755C21.0607 10.8818 20.9923 11.4176 20.669 11.8686C20.3466 12.3184 19.6765 12.8121 18.3565 13.0323C17.8683 13.1137 17.5124 13.5392 17.5182 14.0344C17.5239 14.5296 17.8896 14.9467 18.3795 15.0167C18.8812 15.0884 19.207 15.3732 19.3952 15.7874C19.5966 16.231 19.6273 16.8151 19.4508 17.345C19.2789 17.861 18.9351 18.2619 18.4434 18.4511C17.9498 18.6411 17.1399 18.6809 15.9267 18.129C15.5761 17.9695 15.1653 18.025 14.8694 18.2716C14.5735 18.5183 14.4448 18.9127 14.5382 19.2866C14.6621 19.7827 14.8668 20.9406 14.0694 20.9905C13.5184 21.0249 13.0062 20.6055 13.0033 20.0518ZM10.9967 3.97532C10.995 3.57853 10.8329 3.35779 10.6141 3.21528C10.3564 3.04746 9.97157 2.96723 9.58558 3.02824C9.19869 3.08939 8.94611 3.26704 8.83207 3.45142C8.73968 3.60078 8.62739 3.9329 8.90901 4.59054C9.09846 5.03294 8.94757 5.54766 8.54931 5.8175C8.15105 6.08734 7.61747 6.03639 7.27739 5.69604C6.90975 5.32811 6.24365 5.32032 5.87006 5.63189C5.72051 5.75662 5.604 5.94564 5.604 6.25684C5.604 6.59422 5.74515 7.14633 6.29501 7.91672C6.57653 8.31116 6.53629 8.85055 6.19937 9.19878C5.86246 9.54701 5.32505 9.60465 4.92206 9.33577C4.48987 9.04741 4.1434 9.08664 3.8552 9.24934C3.51634 9.44063 3.19679 9.85112 3.06581 10.3755C2.93933 10.8818 3.0077 11.4176 3.33095 11.8686C3.65342 12.3184 4.32349 12.8121 5.64353 13.0323C6.13166 13.1137 6.48757 13.5392 6.48182 14.0344C6.47607 14.5296 6.11037 14.9467 5.62048 15.0167C5.1188 15.0884 4.793 15.3732 4.60484 15.7874C4.40339 16.231 4.37273 16.8151 4.54922 17.345C4.7211 17.861 5.06489 18.2619 5.55656 18.4511C6.05021 18.6411 6.86015 18.6809 8.0733 18.129C8.42388 17.9695 8.83474 18.025 9.13063 18.2716C9.42652 18.5183 9.5552 18.9127 9.4618 19.2866C9.33788 19.7827 9.13324 20.9406 9.93058 20.9905C10.4816 21.0249 10.9938 20.6055 10.9967 20.0518L10.9967 20.0472V17.5292C10.9955 17.0498 10.8868 16.3459 10.6061 15.7998C10.3427 15.2872 10.0054 15.0268 9.49176 15.0268C8.93765 15.0268 8.48846 14.5773 8.48846 14.0227C8.48846 13.4682 8.93765 13.0186 9.49176 13.0186C10.0798 13.0186 10.5784 13.16 10.9967 13.3894V12.5088C10.9955 12.0294 10.8868 11.3255 10.6061 10.7794C10.3427 10.2668 10.0054 10.0064 9.49176 10.0064C8.93765 10.0064 8.48846 9.55688 8.48846 9.00234C8.48846 8.4478 8.93765 7.99826 9.49176 7.99826C10.0798 7.99826 10.5784 8.13957 10.9967 8.36902L10.9967 3.97532Z"
    />
  </svg>
);

const ToolIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
    />
  </svg>
);
const TargetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);
const BriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 14.15v4.098a2.25 2.25 0 01-2.25 2.25h-13.5a2.25 2.25 0 01-2.25-2.25V14.15M18 18.5h-12A2.25 2.25 0 003.75 16.25v-6.098a2.25 2.25 0 012.25-2.25h12a2.25 2.25 0 012.25 2.25v6.098A2.25 2.25 0 0118 18.5z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 12.75h.008v.008H18v-.008zM12 15h.008v.008H12V15zm-6 0h.008v.008H6V15z"
    />
  </svg>
);
const CompassIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9 9 0 100-18 9 9 0 000 18z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3.75L14.25 6l-2.25 2.25-2.25-2.25L12 3.75zM12 12.75L14.25 15l-2.25 2.25-2.25-2.25L12 12.75zM6 14.25L3.75 12l2.25-2.25 2.25 2.25L6 14.25zM18 14.25L20.25 12l-2.25-2.25-2.25 2.25L18 14.25z"
    />
  </svg>
);
const ChartBarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
    />
  </svg>
);

export const LightbulbIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.375 3.375 0 0114 18.442V19.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1.058a3.375 3.375 0 01-.43-1.395l-.547-.547z"
    />
  </svg>
);
export const WrenchScrewdriverIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
);
export const LinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
    />
  </svg>
);
export const SparklesIcon = ({
  className = "h-5 w-5",
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 01-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 013.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 013.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 01-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.5 21.75l-.398-1.188a3.375 3.375 0 00-2.924-2.924l-1.188-.398 1.188-.398a3.375 3.375 0 002.924-2.924l.398-1.188.398 1.188a3.375 3.375 0 002.924 2.924l1.188.398-1.188.398a3.375 3.375 0 00-2.924 2.924z"
    />
  </svg>
);
export const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clipRule="evenodd"
    />
  </svg>
);
export const ResetIcon = () => (
  <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <title>reset</title>
    <g transform="translate(74.806872, 64.000000)" fill="currentColor">
      <path d="M351.859794,42.6666667 L351.859794,85.3333333 L283.193855,85.3303853 C319.271288,116.988529 341.381875,163.321355 341.339886,213.803851 C341.27474,291.98295 288.098183,360.121539 212.277591,379.179704 C136.456999,398.237869 57.3818117,363.341907 20.3580507,294.485411 C-16.6657103,225.628916 -2.17003698,140.420413 55.5397943,87.68 C63.6931909,100.652227 75.1888658,111.189929 88.8197943,118.186667 C59.4998648,141.873553 42.4797783,177.560832 42.5264609,215.253333 C43.5757012,285.194843 100.577082,341.341203 170.526461,341.333333 C234.598174,342.388718 289.235113,295.138227 297.4321,231.584253 C303.556287,184.101393 282.297007,138.84385 245.195596,112.637083 L245.193128,192 L202.526461,192 L202.526461,42.6666667 L351.859794,42.6666667 Z M127.859794,-1.42108547e-14 C151.423944,-1.42108547e-14 170.526461,19.1025173 170.526461,42.6666667 C170.526461,66.230816 151.423944,85.3333333 127.859794,85.3333333 C104.295645,85.3333333 85.1931276,66.230816 85.1931276,42.6666667 C85.1931276,19.1025173 104.295645,-1.42108547e-14 127.859794,-1.42108547e-14 Z" />
    </g>
  </svg>
);

export const ROADMAP_DATA: RoadmapSectionType[] = [
  {
    id: "intro",
    title: "Understanding Cloud & Infrastructure",
    icon: <CloudIcon />,
    type: "info",
    items: [
      {
        title: "Infrastructure",
        description:
          "The backend of the backend: servers, networking, VMs, storage, firewalls, and load balancers that power apps.",
        isCheckable: false,
      },
      {
        title: "Cloud Computing",
        description:
          "Renting infrastructure from providers like AWS, GCP, or Azure instead of owning it. You write code to automate, scale, and secure these resources.",
        isCheckable: false,
      },
    ],
  },
  {
    id: "responsibilities",
    title: "Core Engineering Responsibilities",
    icon: <RocketIcon />,
    type: "info",
    items: [
      {
        title: "Day-to-Day Tasks",
        description:
          "A brief overview of the responsibilities of a cloud and infrastructure engineer.",
        isCheckable: false,
        subItems: [
          "Write backend services (APIs, auth)",
          "Build and deploy microservices",
          "Automate deployments (CI/CD)",
          "Use containers (Docker) & orchestrators (Kubernetes)",
          "Monitor performance and logs",
          "Handle large traffic, scale servers, optimize cost",
        ],
      },
    ],
  },
  {
    id: "go-roadmap",
    title: "The Go Learning Path",
    icon: <BrainIcon />,
    type: "roadmap",
    items: [
      {
        id: "go-basics",
        title: "1. Basics of Go",
        description:
          "Build a strong foundation in Go. Understand its syntax, data structures, and core principles.",
        resources: [
          { title: "Tour of Go", url: "https://go.dev/tour/" },
          { title: "Go by Example", url: "https://gobyexample.com/" },
        ],
        isCheckable: true,
        subTopics: [
          "Variables & Types",
          "Loops & Conditionals",
          "Functions & Error Handling",
          "Structs, Interfaces & Methods",
        ],
        whyItMatters:
          "Every complex system is built on simple rules. Mastering these is non-negotiable for writing clean, effective Go code that is easy to maintain and debug.",
        projectIdea:
          "Build a simple calculator command-line tool that accepts two numbers and an operator (+, -, *, /) as arguments.",
      },
      {
        id: "go-concurrency",
        title: "2. Concurrency with Goroutines",
        description:
          "Learn Go's powerful concurrency model, a key feature for building high-performance cloud services.",
        resources: [
          {
            title: "Go Docs: Concurrency",
            url: "https://go.dev/doc/effective_go#concurrency",
          },
          {
            title: "Concurrency is not Parallelism (Talk)",
            url: "https://www.youtube.com/watch?v=cN_DpYBzKso",
          },
        ],
        isCheckable: true,
        subTopics: [
          "Goroutines for parallelism",
          "Channels for communication",
          "Select for multiple channels",
          "Mutex and WaitGroups for sync",
        ],
        whyItMatters:
          "Go's concurrency is its superpower for cloud apps. It allows services to handle thousands of concurrent requests efficiently without getting bogged down.",
        projectIdea:
          "Write a program that concurrently fetches the titles from a list of website URLs.",
      },
      {
        id: "go-apis",
        title: "3. Build APIs in Go",
        description:
          "Create robust and fast APIs. Learn to handle requests, responses, and middleware.",
        resources: [
          {
            title: "Building a RESTful API with Go",
            url: "https://go.dev/doc/tutorial/web-service-gin",
          },
          { title: "Gin Web Framework", url: "https://gin-gonic.com/" },
        ],
        isCheckable: true,
        subTopics: [
          "REST vs gRPC",
          "net/http package",
          "Frameworks (Gin, Echo)",
          "JSON Handling & Validation",
        ],
        whyItMatters:
          "APIs are the backbone of microservices. This is how different parts of your cloud infrastructure will communicate with each other and with the outside world.",
        projectIdea:
          "Create a simple 'Todo' list REST API with Create, Read, Update, and Delete (CRUD) endpoints.",
      },
      {
        id: "go-cli",
        title: "4. Write CLI tools",
        description:
          "Build command-line interfaces, the primary way developers interact with cloud tools like Docker and kubectl.",
        resources: [
          { title: "Cobra CLI Framework", url: "https://cobra.dev/" },
          {
            title: "Writing a CLI in Go",
            url: "https://blog.devops.dev/writing-a-cli-in-go-is-fun-d53ed3a44485",
          },
        ],
        isCheckable: true,
        subTopics: [
          "Cobra or urfave/cli",
          "Flags and Arguments",
          "Subcommands",
          "User-friendly output",
        ],
        whyItMatters:
          "Nearly all major infrastructure tools (Docker, Kubernetes, Terraform) have a CLI. Building your own teaches you how to create powerful developer-focused tools.",
        projectIdea:
          "Build a CLI tool that tells you the weather for a given city by calling a public weather API.",
      },
      {
        id: "go-networking",
        title: "5. Learn Networking in Go",
        description:
          "Understand low-level networking concepts to build custom network services and proxies.",
        resources: [
          { title: "Go `net` package docs", url: "https://pkg.go.dev/net" },
          {
            title: "Lets Go: Building a TCP Server",
            url: "https://www.alexedwards.net/blog/a-recap-of-request-handling",
          },
        ],
        isCheckable: true,
        subTopics: [
          "TCP/UDP Servers",
          "HTTP/2",
          "WebSockets",
          "The `net` package",
        ],
        whyItMatters:
          "Understanding the network layer is crucial for debugging complex issues, optimizing performance, and building custom infrastructure components like load balancers.",
        projectIdea:
          "Build a simple TCP chat server that allows multiple clients to connect and broadcast messages to each other.",
      },
      {
        id: "go-docker-k8s",
        title: "6. Docker + Kubernetes with Go",
        description:
          "Package your Go apps and manage them at scale using the industry-standard container ecosystem.",
        resources: [
          {
            title: "Kubernetes Go Client",
            url: "https://github.com/kubernetes/client-go",
          },
          {
            title: "Writing a Kubernetes Operator",
            url: "https://www.youtube.com/watch?v=s_t2xcxiq3o",
          },
        ],
        isCheckable: true,
        subTopics: [
          "Writing Dockerfiles",
          "Kubernetes basics (Pods, Services)",
          "Interacting with K8s API",
          "Writing simple Operators",
        ],
        whyItMatters:
          "This is the standard for modern application deployment. Knowing how to containerize a Go app and deploy it on Kubernetes is a core cloud skill.",
        projectIdea:
          "Dockerize the Todo API you built earlier and write a Kubernetes manifest to deploy it locally using Minikube.",
      },
      {
        id: "go-sdks",
        title: "7. Cloud SDKs",
        description:
          "Programmatically control cloud resources from your Go applications using official provider SDKs.",
        resources: [
          {
            title: "AWS SDK for Go V2",
            url: "https://aws.github.io/aws-sdk-go-v2/docs/",
          },
          {
            title: "GCP Client Libraries for Go",
            url: "https://cloud.google.com/go/docs/reference",
          },
        ],
        isCheckable: true,
        subTopics: [
          "AWS SDK for Go",
          "GCP Client Libraries",
          "Authentication",
          "Resource Management (e.g., S3)",
        ],
        whyItMatters:
          "Automating your infrastructure is a key responsibility. Using SDKs, you can write Go code to create servers, manage storage, and configure networking without clicking in a UI.",
        projectIdea:
          "Write a Go program using the AWS SDK to list all S3 buckets in your account or upload a file to a specific bucket.",
      },
    ],
  },
  {
    id: "bonus-tools",
    title: "Essential DevOps Toolkit",
    icon: <ToolIcon />,
    type: "roadmap",
    items: [
      {
        id: "tool-docker",
        title: "Docker",
        description:
          "Package and ship applications easily in lightweight, portable containers.",
        resources: [
          {
            title: "Docker Get Started",
            url: "https://docs.docker.com/get-started/",
          },
        ],
        isCheckable: true,
        subTopics: ["Dockerfile", "Image Layers", "Volumes", "Docker Compose"],
        whyItMatters:
          'Docker solves the "it works on my machine" problem. It ensures consistency from development to production, which is vital in a distributed cloud environment.',
        projectIdea:
          "Use Docker Compose to run your Go API alongside a Postgres database in separate containers.",
      },
      {
        id: "tool-kubernetes",
        title: "Kubernetes",
        description:
          "Automate deployment, scaling, and management of containerized applications.",
        resources: [
          {
            title: "Kubernetes Documentation",
            url: "https://kubernetes.io/docs/home/",
          },
        ],
        isCheckable: true,
        subTopics: [
          "Pods & Deployments",
          "Services & Ingress",
          "ConfigMaps & Secrets",
          "kubectl CLI",
        ],
        whyItMatters:
          "Kubernetes is the de-facto operating system for the cloud. It manages your application's lifecycle, handles failures, and enables scaling.",
        projectIdea:
          "Deploy a multi-service application (e.g., a web frontend and a Go backend API) to a local Kubernetes cluster.",
      },
      {
        id: "tool-terraform",
        title: "Terraform",
        description:
          "Manage your infrastructure as code to build, change, and version it safely and efficiently.",
        resources: [
          {
            title: "Terraform Learn",
            url: "https://developer.hashicorp.com/terraform/tutorials",
          },
        ],
        isCheckable: true,
        subTopics: [
          "HCL Syntax",
          "Providers & Modules",
          "State Management",
          "Plan & Apply",
        ],
        whyItMatters:
          "Infrastructure as Code (IaC) is a core DevOps practice. Terraform allows you to define your entire cloud setup in version-controlled files, preventing manual errors.",
        projectIdea:
          "Write a Terraform script to create a virtual private cloud (VPC) and an S3 bucket in AWS or GCP.",
      },
      {
        id: "tool-linux",
        title: "Linux",
        description:
          "The de-facto operating system for cloud servers. Mastering the command line is essential.",
        resources: [
          { title: "Linux Journey", url: "https://linuxjourney.com/" },
        ],
        isCheckable: true,
        subTopics: [
          "Shell Scripting (Bash)",
          "File System & Permissions",
          "Process Management",
          "Networking commands",
        ],
        whyItMatters:
          "The vast majority of servers in the cloud run Linux. You will inevitably need to SSH into a machine to debug issues, so you must be comfortable on the command line.",
        projectIdea:
          "Write a bash script that checks the disk space on a server and sends an alert if it exceeds 80%.",
      },
      {
        id: "tool-git",
        title: "Git",
        description:
          "Essential version control for tracking changes, collaborating with others, and managing your codebase.",
        resources: [
          { title: "Pro Git Book", url: "https://git-scm.com/book/en/v2" },
        ],
        isCheckable: true,
        subTopics: [
          "Branching & Merging",
          "Commits & History",
          "Remotes (GitHub/GitLab)",
          "Pull Requests",
        ],
        whyItMatters:
          "All professional software development, including infrastructure code, relies on Git. It is a fundamental tool for collaboration and maintaining a project history.",
        projectIdea:
          "Create a new feature for one of your projects using a separate git branch, then merge it back into the main branch via a pull request.",
      },
      {
        id: "tool-cicd",
        title: "CI/CD (GitHub Actions)",
        description:
          "Automate your testing and deployment pipelines to ship code faster and more reliably.",
        resources: [
          {
            title: "GitHub Actions Docs",
            url: "https://docs.github.com/en/actions",
          },
        ],
        isCheckable: true,
        subTopics: [
          "Workflows & Actions",
          "Secrets Management",
          "Building Go apps",
          "Deploying to Cloud",
        ],
        whyItMatters:
          "Automation reduces manual error and increases deployment speed. CI/CD pipelines are how modern teams test, build, and release software safely and frequently.",
        projectIdea:
          "Set up a GitHub Actions workflow that automatically tests, builds, and pushes a new Docker image for your Go API on every commit to the main branch.",
      },
      {
        id: "tool-monitoring",
        title: "Monitoring (Prometheus)",
        description:
          "Collect and visualize metrics to understand application performance and ensure reliability.",
        resources: [
          {
            title: "Prometheus Documentation",
            url: "https://prometheus.io/docs/introduction/overview/",
          },
        ],
        isCheckable: true,
        subTopics: [
          "Metrics Types",
          "PromQL",
          "Exporters",
          "Alerting with Alertmanager",
        ],
        whyItMatters:
          "You can't fix what you can't see. Monitoring gives you the visibility needed to detect problems, understand performance bottlenecks, and ensure your services are reliable.",
        projectIdea:
          "Instrument your Go API with a Prometheus client library to expose custom metrics (e.g., HTTP request count) and visualize them in a Grafana dashboard.",
      },
    ],
  },
  {
    id: "skill-checklist",
    title: "Job-Ready Skill Checklist",
    icon: <TargetIcon />,
    type: "roadmap",
    items: [
      {
        id: "skill-go",
        title: "Go Programming",
        description:
          "Proficiency in Go, including its standard library and concurrency model.",
        isCheckable: true,
        subTopics: ["APIs", "CLIs", "Goroutines", "Testing"],
        whyItMatters:
          "This is your primary tool for building and automating. Strong Go skills are what make you a Go infrastructure engineer, not just a generic one.",
        projectIdea:
          "Contribute a small fix or documentation improvement to an open-source Go project.",
      },
      {
        id: "skill-cloud",
        title: "Cloud Basics (AWS or GCP)",
        description: "Hands-on experience with core IaaS and PaaS services.",
        isCheckable: true,
        subTopics: ["Compute (EC2)", "Storage (S3)", "IAM", "VPC"],
        whyItMatters:
          "You need to understand the building blocks of the cloud to know which services to use and how to configure them securely and cost-effectively.",
        projectIdea:
          "Manually set up a simple two-tier web application (load balancer, web server, database) in the AWS or GCP console.",
      },
      {
        id: "skill-docker",
        title: "Docker",
        description:
          "Ability to containerize applications for consistent environments.",
        isCheckable: true,
        subTopics: [
          "Build, Run, Push Images",
          "Dockerfile",
          "Volumes",
          "Networking",
        ],
        whyItMatters:
          "Containers are the unit of deployment in modern cloud architecture. Mastery of Docker is non-negotiable.",
        projectIdea:
          "Create a multi-stage Dockerfile for a Go application to produce a minimal final image.",
      },
      {
        id: "skill-k8s",
        title: "Kubernetes",
        description:
          "Basic understanding of how to deploy and manage applications on K8s.",
        isCheckable: true,
        subTopics: ["Pods", "Deployments", "Services", "kubectl"],
        whyItMatters:
          "If Docker is the shipping container, Kubernetes is the global shipping network. It's the standard for running containerized applications at scale.",
        projectIdea:
          "Use Helm to install a common application (like Redis or Postgres) onto your local Kubernetes cluster.",
      },
      {
        id: "skill-linux",
        title: "Linux Basics",
        description:
          "Comfortable in a shell environment and performing basic admin tasks.",
        isCheckable: true,
        subTopics: ["Shell commands", "Scripting", "Permissions", "Networking"],
        whyItMatters:
          "The cloud runs on Linux. Fluency in the command line is essential for debugging, automation, and day-to-day operations.",
        projectIdea:
          "Write a shell script to parse a log file for errors and output a summary.",
      },
      {
        id: "skill-git-github",
        title: "Git & GitHub",
        description: "Fluent in version control and collaborative workflows.",
        isCheckable: true,
        subTopics: ["Commit, Push, Pull", "Branching", "PRs", "GitHub Flow"],
        whyItMatters:
          "Your infrastructure code is as important as application code. It must be versioned, reviewed, and collaborated on using Git.",
        projectIdea:
          "Review a pull request on a public project, providing constructive feedback.",
      },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio Project Showcase",
    icon: <BriefcaseIcon />,
    type: "info",
    items: [
      {
        title: "Go-based REST API",
        description: "Shows backend and Go knowledge.",
        isCheckable: false,
      },
      {
        title: "Dockerized Microservice",
        description: "Shows cloud readiness.",
        isCheckable: false,
      },
      {
        title: "Deploy app to AWS/GCP",
        description: "Proves cloud skill.",
        isCheckable: false,
      },
      {
        title: "CI/CD Pipeline",
        description: "Demonstrates real-world automation skills.",
        isCheckable: false,
      },
      {
        title: "Linux System Monitor in Go",
        description: "A great infrastructure-related project.",
        isCheckable: false,
      },
      {
        title: "Build your own CLI tool",
        description: "Shows strong Go + DevOps skills.",
        isCheckable: false,
      },
    ],
  },
  {
    id: "salary",
    title: "Entry-Level Salary Insights (AU)",
    icon: <ChartBarIcon />,
    type: "info",
    items: [
      {
        title: "Entry-Level Roles",
        description:
          "Cloud/Infrastructure roles pay more at entry-level, especially with Go, Docker, and AWS skills.",
        isCheckable: false,
        details: [
          { key: "Cloud/Infrastructure (Go)", value: "$75k – $100k+" },
          { key: "Node.js Backend Dev", value: "$70k – $95k" },
          { key: "Python Developer", value: "$65k – $90k" },
          { key: "Frontend Developer (JS)", value: "$60k – $85k" },
          { key: "Help Desk / IT Support", value: "$55k – $70k" },
        ],
      },
    ],
  },
  {
    id: "final-advice",
    title: "Key Strategies for Success",
    icon: <CompassIcon />,
    type: "roadmap",
    items: [
      {
        id: "advice-master-go",
        title: "Master Go",
        description:
          "Focus on its strengths: APIs, CLI tools, and concurrency.",
        isCheckable: true,
        subTopics: ["Build projects", "Contribute to OSS", "Read source code"],
        whyItMatters:
          "Deep expertise in your primary language is what sets you apart and allows you to solve harder problems.",
        projectIdea:
          "Read the source code for a function in Go's standard `net/http` library to understand how it works.",
      },
      {
        id: "advice-learn-cloud",
        title: "Learn Cloud (AWS/GCP)",
        description:
          "Get hands-on experience. Use the free tier to build and break things.",
        isCheckable: true,
        subTopics: ["Deploy apps", "Configure networking", "Automate tasks"],
        whyItMatters:
          "Theoretical knowledge is not enough. Employers want to see that you can actually build and manage resources in a real cloud environment.",
        projectIdea:
          "Set up a budget alert in AWS or GCP to avoid unexpected costs. This is a crucial real-world skill.",
      },
      {
        id: "advice-build-portfolio",
        title: "Build & Share Projects",
        description:
          "Your GitHub is your resume. Make it a showcase of your skills.",
        isCheckable: true,
        subTopics: ["READMEs", "Clean code", "Meaningful projects"],
        whyItMatters:
          "Without job experience, your portfolio is the primary way to prove your skills to potential employers.",
        projectIdea:
          "Write a high-quality README.md for one of your projects, including a description, setup instructions, and a GIF of it in action.",
      },
      {
        id: "advice-learn-devops",
        title: "Learn DevOps Tools",
        description:
          "Docker, Kubernetes, and Linux are the foundational tools of modern infrastructure.",
        isCheckable: true,
        subTopics: [
          "Containerize everything",
          "Run a local K8s cluster",
          "Live in the terminal",
        ],
        whyItMatters:
          'The line between "developer" and "operations" is blurring. Knowing these tools makes you a more valuable and effective engineer.',
        projectIdea:
          "Try to run all your local development projects inside Docker containers instead of on your host machine.",
      },
      {
        id: "advice-get-certified",
        title: "Get Certified",
        description:
          "An AWS Certified Solutions Architect or similar cert is highly respected and proves your knowledge.",
        isCheckable: true,
        subTopics: ["AWS SAA-C03", "GCP ACE", "CKAD"],
        whyItMatters:
          "Certifications provide a structured learning path and are a standardized, industry-recognized signal of your knowledge level.",
        projectIdea:
          "Take a free practice exam for the AWS Cloud Practitioner certification to gauge your baseline knowledge.",
      },
    ],
  },
];

export const TOTAL_CHECKABLE_ITEMS = ROADMAP_DATA.flatMap(
  (section) => section.items
).filter((item) => item.isCheckable).length;
