import colors from "./colors";

export const FONTS = {
  bold: "Inter-Bold",
  semiBold: "Inter-SemiBold",
  medium: "Inter-Medium",
  regular: "Inter-Regular",
  light: "Inter-Light",
};

export const SHADOWS = {
  light: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.8,
    shadowRadius: 9.11,

    elevation: 20,
  },
};