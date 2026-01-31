import {
  // Audio / Video
  LuMic,
  LuMicOff,
  LuVideo,
  LuVideoOff,
  LuVolume2,
  LuVolumeX,
  LuScreenShare,
  LuScreenShareOff,

  // Call controls
  LuPhone,
  LuPhoneOff,
  LuPlay,
  LuPause,
  LuCircleStop,
  LuCircleDot,

  // Collaboration
  LuUsers,
  LuUser,
  LuUserPlus,
  LuHand,
  LuMessageSquare,
  LuMessagesSquare,

  // Chat
  LuSend,
  LuSmile,
  LuPaperclip,

  // Navigation
  LuChevronUp,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuMenu,
  LuArrowLeft,
  LuArrowRight,

  // Actions
  LuPlus,
  LuMinus,
  LuCheck,
  LuX,
  LuPencil,
  LuTrash,

  // System
  LuSettings,
  LuSearch,
  LuFilter,
  LuBell,
  LuLogOut,
  LuLogIn,
  LuRefreshCw,

  // Status / Feedback
  LuInfo,
  LuTriangleAlert,
  LuCircleCheck,
  LuCircleX,
  LuLoader,

  // UI helpers
  LuEye,
  LuEyeOff,
  LuCopy,
  LuLink,
  LuCalendar,
  LuClock,
} from "react-icons/lu";
import { AhLogo } from "../../utils/Svg";

export const iconMap = {
  mic: LuMic,
  "mic-off": LuMicOff,
  camera: LuVideo,
  "camera-off": LuVideoOff,
  volume: LuVolume2,
  "volume-off": LuVolumeX,
  "screen-share": LuScreenShare,
  "screen-share-off": LuScreenShareOff,

  call: LuPhone,
  "call-end": LuPhoneOff,
  play: LuPlay,
  pause: LuPause,
  stop: LuCircleStop,
  record: LuCircleDot,

  users: LuUsers,
  user: LuUser,
  "user-add": LuUserPlus,
  hand: LuHand,

  chat: LuMessageSquare,
  chats: LuMessagesSquare,
  send: LuSend,
  emoji: LuSmile,
  attach: LuPaperclip,

  "chevron-up": LuChevronUp,
  "chevron-down": LuChevronDown,
  "chevron-left": LuChevronLeft,
  "chevron-right": LuChevronRight,
  menu: LuMenu,
  "arrow-left": LuArrowLeft,
  "arrow-right": LuArrowRight,

  plus: LuPlus,
  minus: LuMinus,
  check: LuCheck,
  close: LuX,
  edit: LuPencil,
  delete: LuTrash,

  settings: LuSettings,
  search: LuSearch,
  filter: LuFilter,
  bell: LuBell,
  logout: LuLogOut,
  login: LuLogIn,
  refresh: LuRefreshCw,

  info: LuInfo,
  warning: LuTriangleAlert,
  success: LuCircleCheck,
  error: LuCircleX,
  loading: LuLoader,

  eye: LuEye,
  "eye-off": LuEyeOff,
  copy: LuCopy,
  link: LuLink,
  calendar: LuCalendar,
  clock: LuClock,
  "ah-logo": AhLogo,
} as const;

export type IconName = keyof typeof iconMap;
