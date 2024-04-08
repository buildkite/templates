FROM ghcr.io/puppeteer/puppeteer:22.6.2

USER root

# Install Emoji font
RUN curl -L https://github.com/samuelngs/apple-emoji-linux/releases/download/v17.4/AppleColorEmoji.ttf > /usr/local/share/fonts/AppleColorEmoji.ttf
