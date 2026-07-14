import { ThemeDialogContent } from "../dialog/theme-dialog";
import type { Command, CommandContext } from "./types";

export const COMMANDS: Command[] = [
  {
    name: "new",
    description: "Start a new conversation",
    value: "/new",
    action: (context) => {
      context.toast.show({ message: "Start new conversation..." });
    },
  },
  {
    name: "agents",
    description: "Switch agents",
    value: "/agents",
    action: (context) => {
      context.dialog.open({
        title: "Select Mode",
        children: <text>Agent selection coming soon...</text>
      });
    },
  },
  {
    name: "models",
    description: "Select AI model for generation",
    value: "/models",
    action: (context) => {
      context.toast.show({ message: "Selecting model..." });
    },
  },
  {
    name: "sessions",
    description: "Browse past sessions",
    value: "/sessions",
    action: (context) => {
      context.toast.show({ message: "Loading sessions..." });
    },
  },
  {
    name: "theme",
    description: "Change color theme",
    value: "/theme",
    action: (context) => {
      context.dialog.open({
        title: "Select Theme",
        children: <ThemeDialogContent/>
      });
    },
  },
  {
    name: "login",
    description: "Sign in with your browser",
    value: "/login",
    action: (context) => {
      context.toast.show({ message: "Opening browser to sign in..." });
    },
  },
  {
    name: "logout",
    description: "Sign out of your account",
    value: "/logout",
    action: (context) => {
      context.toast.show({ variant: "success", message: "Signed out..." });
    },
  },
  {
    name: "upgrade",
    description: "Buy more credits",
    value: "/upgrade",
    action: (context) => {
      context.toast.show({ message: "Opening credits checkout..." });
    },
  },
  {
    name: "usage",
    description: "Open billing portal in your browser",
    value: "/usage",
    action: (context) => {
      context.toast.show({ message: "Opening billing portal..." });
    },
  },
  {
    name: "exit",
    description: "Quit the application",
    value: "/exit",
    action: (context: CommandContext) => {
      context.exit();
    },
  },
];
