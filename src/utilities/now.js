function now() {
  const hour = new Date().getHours();
  if (hour < 12) return "Morning";
  if (hour < 18) return "AfterNoon";
  return "evening";
}

export default now;
