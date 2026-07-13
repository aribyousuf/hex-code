export type CommandContext = {
  exit: () => void;
};

export type Command = {
  name: String;
  description: String;
  value: String;
  action?: (context: CommandContext) => void | Promise<void>;
};
