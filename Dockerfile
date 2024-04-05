FROM ghcr.io/puppeteer/puppeteer:22.6.2

# Install Emoji font
RUN mkdir -p ~/.fonts && \
  curl -L https://github.com/samuelngs/apple-emoji-linux/releases/download/v17.4/AppleColorEmoji.ttf > ~/.fonts/AppleColorEmoji.ttf
