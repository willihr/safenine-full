const timeConverter = new Intl.DateTimeFormat('pt-BR', {
  month: 'short',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  // second: '2-digit',
});

export const formatTimestamp = (timestamp: number): string => {
  return timeConverter.format(timestamp);
};
