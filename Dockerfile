FROM ghcr.io/puppeteer/puppeteer:22.6.2

USER root

# Download the Apple Color Emoji font
RUN curl -L https://github.com/samuelngs/apple-emoji-linux/releases/download/v17.4/AppleColorEmoji.ttf > /usr/local/share/fonts/AppleColorEmoji.ttf

# Install Apple system fonts to make screenshots look like OSX
COPY assets/fonts/SF-Mono-Regular.otf /usr/local/share/fonts/SF-Mono-Regular.otf
COPY assets/fonts/SF-Pro-Display-Medium.otf /usr/local/share/fonts/SF-Pro-Display-Medium.otf
COPY assets/fonts/SF-Pro-Display-Regular.otf /usr/local/share/fonts/SF-Pro-Display-Regular.otf

# Alias fonts to match OSX + Buildkite
COPY assets/fonts/local.conf /etc/fonts/local.conf
