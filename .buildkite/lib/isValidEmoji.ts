interface Emoji {
  name: string;
  aliases: string[];
}

const buildkiteEmojis = await fetch(
  "https://raw.githubusercontent.com/buildkite/emojis/main/img-buildkite-64.json"
)
  .then((res) => res.json())
  .then((json) =>
    json.map((emoji: Emoji) => [emoji.name, ...emoji.aliases]).flat()
  );

const appleEmojis = await fetch(
  "https://raw.githubusercontent.com/buildkite/emojis/main/img-apple-64.json"
)
  .then((res) => res.json())
  .then((json) =>
    json.map((emoji: Emoji) => [emoji.name, ...emoji.aliases]).flat()
  );

const emojis = [...buildkiteEmojis, ...appleEmojis]
  .filter((e) => e && e.length > 1)
  .sort();

export default function isValidEmoji(emoji: string) {
  return emojis.includes(emoji);
}
