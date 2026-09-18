FROM meteor/meteor-base
USER mt
WORKDIR /home/mt
ENV PATH="${PATH}:/home/dicecloud/.meteor"
COPY --chown=mt . DiceCloud
COPY dev.sh ./dev.sh
ENTRYPOINT ./dev.sh
