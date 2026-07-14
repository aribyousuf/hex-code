export type ThemeColors = {
  primary: string;
  planMode: string;
  selection: string;
  thinking: string;
  success: string;
  error: string;
  info: string;
  background: string;
  surface: string;
  dialogSurface: string;
  thinkingBorder: string;
  dimSeparator: string;
};

export type Theme = {
  name: string;
  colors: ThemeColors;
};

export const THEMES: Theme[] = [
  {
    name: "Nightfox",
    colors: {
      primary: "#56D6C2",
      planMode: "#CF8EF4",
      selection: "#89B4FA",
      thinking: "#CF8EF4",
      success: "#82E0AA",
      error: "#E74C5E",
      info: "#56D6C2",
      background: "#0D0D12",
      surface: "#1A1A24",
      dialogSurface: "#0A0A10",
      thinkingBorder: "#34344A",
      dimSeparator: "#4E4E66",
    },
  },
  {
    name: "Ember",
    colors: {
      primary: "#FF9E64",
      planMode: "#E0AF68",
      selection: "#F7768E",
      thinking: "#E0AF68",
      success: "#9ECE6A",
      error: "#F7768E",
      info: "#FFB86C",
      background: "#16120F",
      surface: "#241D18",
      dialogSurface: "#120E0B",
      thinkingBorder: "#4A3A2E",
      dimSeparator: "#6B5544",
    },
  },
  {
    name: "Ocean Deep",
    colors: {
      primary: "#7AA2F7",
      planMode: "#BB9AF7",
      selection: "#2AC3DE",
      thinking: "#BB9AF7",
      success: "#73DACA",
      error: "#F7768E",
      info: "#7DCFFF",
      background: "#0B1220",
      surface: "#16203A",
      dialogSurface: "#080E1A",
      thinkingBorder: "#2C3A5E",
      dimSeparator: "#465A85",
    },
  },
  {
    name: "Forest",
    colors: {
      primary: "#A7C080",
      planMode: "#D699B6",
      selection: "#83C092",
      thinking: "#D699B6",
      success: "#A7C080",
      error: "#E67E80",
      info: "#7FBBB3",
      background: "#10140F",
      surface: "#1E241C",
      dialogSurface: "#0C0F0B",
      thinkingBorder: "#3A4636",
      dimSeparator: "#556B4E",
    },
  },
  {
    name: "Rosewater",
    colors: {
      primary: "#F5C2E7",
      planMode: "#CBA6F7",
      selection: "#F38BA8",
      thinking: "#CBA6F7",
      success: "#A6E3A1",
      error: "#F38BA8",
      info: "#F5E0DC",
      background: "#141018",
      surface: "#221A28",
      dialogSurface: "#100C14",
      thinkingBorder: "#443350",
      dimSeparator: "#5F4A70",
    },
  },
  {
    name: "Monochrome",
    colors: {
      primary: "#E8E8E8",
      planMode: "#B0B0B0",
      selection: "#FFFFFF",
      thinking: "#B0B0B0",
      success: "#C8C8C8",
      error: "#FF6B6B",
      info: "#D4D4D4",
      background: "#0A0A0A",
      surface: "#181818",
      dialogSurface: "#060606",
      thinkingBorder: "#333333",
      dimSeparator: "#4D4D4D",
    },
  },
  {
    name: "Solar Light",
    colors: {
      primary: "#268BD2",
      planMode: "#6C71C4",
      selection: "#2AA198",
      thinking: "#6C71C4",
      success: "#859900",
      error: "#DC322F",
      info: "#268BD2",
      background: "#FDF6E3",
      surface: "#EEE8D5",
      dialogSurface: "#FFFCF0",
      thinkingBorder: "#D3CBB7",
      dimSeparator: "#B8AF9C",
    },
  },
  {
    name: "Paper Light",
    colors: {
      primary: "#0F766E",
      planMode: "#7C3AED",
      selection: "#2563EB",
      thinking: "#7C3AED",
      success: "#16A34A",
      error: "#DC2626",
      info: "#0891B2",
      background: "#FAFAF8",
      surface: "#F0F0EC",
      dialogSurface: "#FFFFFF",
      thinkingBorder: "#D6D6CE",
      dimSeparator: "#B8B8AE",
    },
  },
  {
    name: "Cyberpunk",
    colors: {
      primary: "#00FFD1",
      planMode: "#FF2ECC",
      selection: "#FCEE0A",
      thinking: "#FF2ECC",
      success: "#39FF14",
      error: "#FF3860",
      info: "#00E5FF",
      background: "#0A0A14",
      surface: "#161628",
      dialogSurface: "#06060E",
      thinkingBorder: "#3D2E5C",
      dimSeparator: "#5A4585",
    },
  },
];


export const DEFAULT_THEME = THEMES.find((theme) => theme.name === "Nightfox")!;