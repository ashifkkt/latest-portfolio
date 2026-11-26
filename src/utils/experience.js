const CAREER_START = new Date(2022, 8, 1); // Sep 2022 - Texol iCohort

export const getYearsOfExperience = (now = new Date()) =>
  Math.max(1, Math.floor((now - CAREER_START) / (365.25 * 24 * 60 * 60 * 1000)));
